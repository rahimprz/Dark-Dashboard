import React, { useState, useRef, useEffect } from 'react';
import { Menu, Search, Bell, User, Settings, LogOut, Mail, AlertTriangle, CheckCircle } from 'lucide-react';

interface DashboardHeaderProps {
  toggleSidebar: () => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ toggleSidebar }) => {
  const [notificationDropdown, setNotificationDropdown] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setNotificationDropdown(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setProfileDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const notifications = [
    {
      id: 1,
      icon: CheckCircle,
      title: 'Report Generated',
      message: 'Monthly analytics ready',
      time: '2m ago',
      type: 'success'
    },
    {
      id: 2,
      icon: AlertTriangle,
      title: 'High Server Load',
      message: 'CPU usage at 85%',
      time: '15m ago',
      type: 'warning'
    },
    {
      id: 3,
      icon: Mail,
      title: 'New User Registration',
      message: 'Sarah Johnson joined',
      time: '1h ago',
      type: 'info'
    }
  ];

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'success': return 'text-green-400';
      case 'warning': return 'text-yellow-400';
      case 'info': return 'text-blue-400';
      default: return 'text-slate-400';
    }
  };

  return (
    <header className="bg-slate-950 border-b border-slate-800 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Mobile menu button */}
          <button
            onClick={toggleSidebar}
            className="lg:hidden text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-800"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          {/* Logo/Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">D</span>
            </div>
            <h1 className="text-xl font-bold text-white hidden sm:block">Dashboard</h1>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          {/* Search */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-slate-900 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
            />
          </div>

          {/* Notifications Dropdown */}
          <div className="relative" ref={notificationRef}>
            <button 
              onClick={() => setNotificationDropdown(!notificationDropdown)}
              className="relative p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-slate-800"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
            </button>

            {notificationDropdown && (
              <div className="absolute right-0 mt-2 w-80 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl z-50 animate-in fade-in zoom-in duration-200">
                <div className="p-4 border-b border-slate-700">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold">Notifications</h3>
                    <span className="text-xs text-slate-400 bg-slate-800 px-2 py-1 rounded-full">3 new</span>
                  </div>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="p-4 hover:bg-slate-800 transition-colors border-b border-slate-800 last:border-b-0">
                      <div className="flex items-start space-x-3">
                        <notification.icon className={`w-5 h-5 mt-0.5 ${getNotificationColor(notification.type)}`} />
                        <div className="flex-1 min-w-0">
                          <p className="text-white font-medium text-sm">{notification.title}</p>
                          <p className="text-slate-400 text-sm">{notification.message}</p>
                          <p className="text-slate-500 text-xs mt-1">{notification.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-3 border-t border-slate-700">
                  <button className="w-full text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Profile Dropdown */}
          <div className="relative" ref={profileRef}>
            <button 
              onClick={() => setProfileDropdown(!profileDropdown)}
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-xs">JD</span>
              </div>
              <div className="hidden sm:block text-left">
                <p className="text-white text-sm font-medium">John Doe</p>
                <p className="text-slate-400 text-xs">Admin</p>
              </div>
            </button>

            {profileDropdown && (
              <div className="absolute right-0 mt-2 w-64 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl z-50 animate-in fade-in zoom-in duration-200">
                <div className="p-4 border-b border-slate-700">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">JD</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">John Doe</p>
                      <p className="text-slate-400 text-sm">john@example.com</p>
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  <button className="w-full flex items-center space-x-3 px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                    <User className="w-4 h-4" />
                    <span className="text-sm">Profile</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                    <Settings className="w-4 h-4" />
                    <span className="text-sm">Settings</span>
                  </button>
                  <hr className="my-2 border-slate-700" />
                  <button className="w-full flex items-center space-x-3 px-3 py-2 text-red-400 hover:text-red-300 hover:bg-slate-800 rounded-lg transition-colors">
                    <LogOut className="w-4 h-4" />
                    <span className="text-sm">Sign out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;