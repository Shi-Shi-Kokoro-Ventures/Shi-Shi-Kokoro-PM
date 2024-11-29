// src/pages/Dashboard.js
import React, { useState, useMemo, useCallback, useEffect } from 'react';
import {
  Home,
  Users,
  AlertCircle,
  DollarSign,
  Calendar,
  Bell,
  ChevronUp,
  ChevronDown,
  Search,
  RefreshCw,
  Settings,
  Download,
  Printer,
  Clock,
  MapPin
} from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

// Custom Components
import StatCard from '../components/StatCard';
import NotificationCard from '../components/NotificationCard';
import TaskItem from '../components/TaskItem';
import SearchBar from '../components/SearchBar';
import CustomTooltip from '../components/CustomTooltip';

// Mock Data
import MOCK_REVENUE_DATA from '../data/revenueData';
import MOCK_NOTIFICATIONS from '../data/notificationsData';
import MOCK_TASKS from '../data/tasksData';

function Dashboard() {
  const [revenueData] = useState(MOCK_REVENUE_DATA);
  const [notifications] = useState(MOCK_NOTIFICATIONS);
  const [tasks] = useState(MOCK_TASKS);
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [timeRange, setTimeRange] = useState('6m');
  const [showAllTasks, setShowAllTasks] = useState(false);
  const [chartView, setChartView] = useState('revenue');

  useEffect(() => {
    const interval = setInterval(refreshData, 5 * 60 * 1000); // Refresh every 5 minutes
    return () => clearInterval(interval);
  }, []);

  const refreshData = useCallback(async () => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setLastUpdate(new Date());
    } catch (error) {
      console.error('Error refreshing data:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const filteredNotifications = useMemo(() => {
    return notifications
      .filter(notification =>
        selectedFilter === 'all' ? true : notification.priority === selectedFilter
      )
      .sort((a, b) => {
        if (a.priority === 'high' && b.priority !== 'high') return -1;
        if (a.priority !== 'high' && b.priority === 'high') return 1;
        return 0;
      });
  }, [notifications, selectedFilter]);

  const visibleTasks = useMemo(() => {
    const filtered = tasks
      .filter(task => task.task.toLowerCase().includes(searchTerm.toLowerCase()))
      .sort((a, b) => new Date(a.date) - new Date(b.date));
    return showAllTasks ? filtered : filtered.slice(0, 2);
  }, [tasks, searchTerm, showAllTasks]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header Section */}
      <header className="mb-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Shi Shi Kokoro Property Management
            </h1>
            <p className="mt-1 text-gray-500">
              Dashboard Overview
              <span className="ml-2 text-xs">
                Last updated: {lastUpdate.toLocaleTimeString()}
              </span>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <SearchBar value={searchTerm} onChange={setSearchTerm} />
            <button
              onClick={refreshData}
              disabled={isLoading}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Refresh data"
            >
              <RefreshCw className={`h-5 w-5 text-gray-500 ${isLoading ? 'animate-spin' : ''}`} />
            </button>
            <button
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Settings"
            >
              <Settings className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="Total Properties" 
          value="45" 
          icon={Home} 
          trend={5}
          subtitle="Across 3 locations"
        />
        <StatCard 
          title="Active Tenants" 
          value="120" 
          icon={Users} 
          trend={2.5}
          subtitle="95% occupancy rate"
        />
        <StatCard 
          title="Pending Requests" 
          value="5" 
          icon={AlertCircle} 
          trend={-10}
          subtitle="2 high priority"
        />
        <StatCard 
          title="Monthly Revenue" 
          value="$59,000" 
          icon={DollarSign} 
          trend={8}
          subtitle="8% increase from last month"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Revenue Chart */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-4">
              <CardTitle>Financial Overview</CardTitle>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setChartView('revenue')}
                  className={`px-3 py-1 rounded-lg text-sm ${
                    chartView === 'revenue' ? 'bg-blue-500 text-white' : 'bg-gray-100'
                  }`}
                >
                  Revenue
                </button>
                <button
                  onClick={() => setChartView('profit')}
                  className={`px-3 py-1 rounded-lg text-sm ${
                    chartView === 'profit' ? 'bg-blue-500 text-white' : 'bg-gray-100'
                  }`}
                >
                  Profit
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <select
                className="rounded-lg border border-gray-300 px-3 py-1 text-sm"
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
              >
                <option value="1m">Last Month</option>
                <option value="3m">Last 3 Months</option>
                <option value="6m">Last 6 Months</option>
                <option value="1y">Last Year</option>
              </select>
              <button
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Download report"
              >
                <Download className="h-4 w-4 text-gray-500" />
              </button>
              <button
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Print report"
              >
                <Printer className="h-4 w-4 text-gray-500" />
              </button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="revenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="profit" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  {chartView === 'revenue' ? (
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="#3b82f6"
                      fillOpacity={1}
                      fill="url(#revenue)"
                      name="Revenue"
                    />
                  ) : (
                    <Area
                      type="monotone"
                      dataKey="profit"
                      stroke="#10b981"
                      fillOpacity={1}
                      fill="url(#profit)"
                      name="Profit"
                    />
                  )}
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Notifications</CardTitle>
            <div className="flex items-center gap-2">
              <select
                className="rounded-lg border border-gray-300 px-3 py-1 text-sm"
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
              >
                <option value="all">All Priorities</option>
                <option value="high">High Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="normal">Normal Priority</option>
              </select>
              <Bell className="h-4 w-4 text-gray-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredNotifications.map((notification) => (
                <NotificationCard key={notification.id} {...notification} />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tasks */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Upcoming Tasks</CardTitle>
            <Calendar className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {visibleTasks.map((task) => (
                <TaskItem key={task.id} {...task} />
              ))}
              {tasks.length > 2 && (
                <button
                  className="text-sm text-blue-500 hover:text-blue-600 font-medium"
                  onClick={() => setShowAllTasks(!showAllTasks)}
                >
                  {showAllTasks ? 'Show Less' : 'Show More'}
                </button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;