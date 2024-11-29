import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Lazy load icons for better performance
const IconComponents = {
  Home: lazy(() => import('lucide-react').then((mod) => ({ default: mod.Home }))),
  LayoutDashboard: lazy(() => import('lucide-react').then((mod) => ({ default: mod.LayoutDashboard }))),
  Info: lazy(() => import('lucide-react').then((mod) => ({ default: mod.Info }))),
  MessageSquare: lazy(() => import('lucide-react').then((mod) => ({ default: mod.MessageSquare }))),
  User: lazy(() => import('lucide-react').then((mod) => ({ default: mod.User }))),
  Bell: lazy(() => import('lucide-react').then((mod) => ({ default: mod.Bell }))),
  Menu: lazy(() => import('lucide-react').then((mod) => ({ default: mod.Menu }))),
  X: lazy(() => import('lucide-react').then((mod) => ({ default: mod.X }))),
  ChevronDown: lazy(() => import('lucide-react').then((mod) => ({ default: mod.ChevronDown }))),
  Settings: lazy(() => import('lucide-react').then((mod) => ({ default: mod.Settings }))),
  LogOut: lazy(() => import('lucide-react').then((mod) => ({ default: mod.LogOut }))),
  Moon: lazy(() => import('lucide-react').then((mod) => ({ default: mod.Moon }))),
  Sun: lazy(() => import('lucide-react').then((mod) => ({ default: mod.Sun }))),
  Search: lazy(() => import('lucide-react').then((mod) => ({ default: mod.Search }))),
};

// Suspense fallback for lazy-loaded icons
const IconFallback = () => <div className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />;
const Icon = ({ name, ...props }) => {
  const IconComponent = IconComponents[name];
  return (
    <Suspense fallback={<IconFallback />}>
      <IconComponent {...props} />
    </Suspense>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => JSON.parse(localStorage.getItem('darkMode')) || false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [unreadNotifications, setUnreadNotifications] = useState(3);

  const location = useLocation();
  const userMenuRef = useRef(null);
  const notificationsRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on outside clicks
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) setShowUserMenu(false);
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) setShowNotifications(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdowns on Esc key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setShowUserMenu(false);
        setShowNotifications(false);
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setIsOpen(false);
    setShowUserMenu(false);
    setShowNotifications(false);
  }, [location]);

  // Toggle dark mode
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  const navLinks = [
    { path: '/', label: 'Home', icon: 'Home' },
    { path: '/dashboard', label: 'Dashboard', icon: 'LayoutDashboard' },
    { path: '/about', label: 'About', icon: 'Info' },
    { path: '/contact', label: 'Contact', icon: 'MessageSquare' },
  ];

  const NavLink = ({ path, label, icon }) => {
    const isActive = location.pathname === path;
    return (
      <Link
        to={path}
        className={`flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${
          isActive ? 'bg-blue-700 text-white' : 'hover:bg-blue-700/10 hover:text-blue-600 text-gray-700 dark:text-gray-200'
        } ${isScrolled ? 'dark:hover:bg-white/10' : ''}`}
      >
        <Icon name={icon} className="w-5 h-5 mr-2" />
        <span>{label}</span>
      </Link>
    );
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md dark:bg-gray-900/80 shadow-lg' : 'bg-white dark:bg-gray-900'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">SK</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">Shi Shi Kokoro PM</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-64 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:text-gray-200 transition-all duration-200"
              />
              <Icon name="Search" className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            {/* Navigation Links */}
            <div className="flex items-center space-x-2">
              {navLinks.map((link) => (
                <NavLink key={link.path} {...link} />
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            <Icon name={isOpen ? 'X' : 'Menu'} className="w-6 h-6 text-gray-700 dark:text-gray-200" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;