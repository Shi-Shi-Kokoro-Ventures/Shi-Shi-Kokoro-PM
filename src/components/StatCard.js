import React, { memo } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const StatCard = memo(function StatCard({ title, value, icon: Icon, trend, subtitle }) {
  return (
    <Card className="relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
        <Icon className="h-4 w-4 text-gray-500" />
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <div className="flex items-baseline justify-between">
            <div className="text-2xl font-bold">{value}</div>
            {trend && (
              <div className={`flex items-center ${trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {trend > 0 ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                <span className="text-sm">{Math.abs(trend)}%</span>
              </div>
            )}
          </div>
          {subtitle && <div className="text-xs text-gray-500">{subtitle}</div>}
        </div>
      </CardContent>
    </Card>
  );
});

export default StatCard;
