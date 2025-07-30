import React, { useState } from 'react';
import { Bell, Mail, MessageSquare, AlertTriangle, CheckCircle, X, Settings } from 'lucide-react';

const Notifications: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const notifications = [
    {
      id: 1,
      type: 'success',
      icon: CheckCircle,
      title: 'Report Generated Successfully',
      message: 'Your monthly analytics report has been generated and is ready for download.',
      time: '2 minutes ago',
      read: false,
      category: 'system'
    },
    {
      id: 2,
      type: 'warning',
      icon: AlertTriangle,
      title: 'High Server Load Detected',
      message: 'Server CPU usage has exceeded 85% for the past 10 minutes.',
      time: '15 minutes ago',
      read: false,
      category: 'alert'
    },
    {
      id: 3,
      type: 'info',
      icon: Mail,
      title: 'New User Registration',
      message: 'Sarah Johnson has created a new account and is awaiting approval.',
      time: '1 hour ago',
      read: true,
      category: 'user'
    },
    {
      id: 4,
      type: 'info',
      icon: MessageSquare,
      title: 'New Comment on Dashboard',
      message: 'Michael Chen commented on the Q4 performance dashboard.',
      time: '2 hours ago',
      read: true,
      category: 'social'
    },
    {
      id: 5,
      type: 'success',
      icon: CheckCircle,
      title: 'Backup Completed',
      message: 'Daily database backup has been completed successfully.',
      time: '3 hours ago',
      read: true,
      category: 'system'
    },
    {
      id: 6,
      type: 'warning',
      icon: AlertTriangle,
      title: 'Payment Method Expiring',
      message: 'Your credit card ending in 4567 will expire in 7 days.',
      time: '1 day ago',
      read: false,
      category: 'billing'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'success': return 'text-green-500';
      case 'warning': return 'text-yellow-500';
      case 'error': return 'text-red-500';
      case 'info': return 'text-blue-500';
      default: return 'text-slate-400';
    }
  };

  const getTypeBg = (type: string) => {
    switch (type) {
      case 'success': return 'bg-green-500';
      case 'warning': return 'bg-yellow-500';
      case 'error': return 'bg-red-500';
      case 'info': return 'bg-blue-500';
      default: return 'bg-slate-500';
    }
  };

  const filteredNotifications = notifications.filter(notification => {
    if (filter === 'all') return true;
    if (filter === 'unread') return !notification.read;
    return notification.category === filter;
  });

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Notifications</h1>
          <p className="text-slate-400">Stay updated with important alerts and messages</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors">
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
            Mark All Read
          </button>
        </div>
      </div>

      {/* Notification Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm font-medium mb-1">Total</p>
              <p className="text-2xl font-bold text-white">{notifications.length}</p>
            </div>
            <Bell className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm font-medium mb-1">Unread</p>
              <p className="text-2xl font-bold text-white">{unreadCount}</p>
            </div>
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">{unreadCount}</span>
            </div>
          </div>
        </div>
        <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm font-medium mb-1">Alerts</p>
              <p className="text-2xl font-bold text-white">
                {notifications.filter(n => n.type === 'warning' || n.type === 'error').length}
              </p>
            </div>
            <AlertTriangle className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
        <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm font-medium mb-1">Today</p>
              <p className="text-2xl font-bold text-white">
                {notifications.filter(n => n.time.includes('minutes') || n.time.includes('hour')).length}
              </p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 mb-6">
        <div className="flex flex-wrap gap-2">
          {[
            { key: 'all', label: 'All Notifications' },
            { key: 'unread', label: 'Unread' },
            { key: 'system', label: 'System' },
            { key: 'user', label: 'Users' },
            { key: 'alert', label: 'Alerts' },
            { key: 'billing', label: 'Billing' },
            { key: 'social', label: 'Social' }
          ].map((filterOption) => (
            <button
              key={filterOption.key}
              onClick={() => setFilter(filterOption.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === filterOption.key
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {filterOption.label}
            </button>
          ))}
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {filteredNotifications.map((notification) => (
          <div
            key={notification.id}
            className={`bg-slate-800 rounded-xl p-6 border transition-all duration-200 hover:border-slate-600 ${
              notification.read ? 'border-slate-800' : 'border-blue-500/50 bg-slate-900/80'
            }`}
          >
            <div className="flex items-start space-x-4">
              <div className={`p-2 rounded-lg ${getTypeBg(notification.type)}`}>
                <notification.icon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className={`font-semibold ${notification.read ? 'text-slate-300' : 'text-white'}`}>
                      {notification.title}
                    </h3>
                    <p className={`text-sm mt-1 ${notification.read ? 'text-slate-400' : 'text-slate-300'}`}>
                      {notification.message}
                    </p>
                    <p className="text-xs text-slate-600 mt-2">{notification.time}</p>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    {!notification.read && (
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    )}
                    <button className="text-slate-500 hover:text-white transition-colors">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredNotifications.length === 0 && (
        <div className="text-center py-12">
          <Bell className="w-16 h-16 text-slate-700 mx-auto mb-4" />
          <p className="text-slate-500 text-lg">No notifications found</p>
          <p className="text-slate-600 text-sm">You're all caught up!</p>
        </div>
      )}
    </div>
  );
};

export default Notifications;