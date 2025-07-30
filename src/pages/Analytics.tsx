import React from 'react';
import { BarChart3, TrendingUp, Users, Eye, Clock, Globe } from 'lucide-react';

const Analytics: React.FC = () => {
  const analyticsData = [
    { metric: 'Page Views', value: '2.4M', change: '+15%', icon: Eye, color: 'bg-blue-500' },
    { metric: 'Unique Visitors', value: '180K', change: '+8%', icon: Users, color: 'bg-green-500' },
    { metric: 'Avg. Session', value: '4m 32s', change: '+12%', icon: Clock, color: 'bg-purple-500' },
    { metric: 'Bounce Rate', value: '32%', change: '-5%', icon: TrendingUp, color: 'bg-yellow-500' },
  ];

  const topPages = [
    { page: '/dashboard', views: '45,230', percentage: 85 },
    { page: '/analytics', views: '32,180', percentage: 65 },
    { page: '/users', views: '28,940', percentage: 55 },
    { page: '/reports', views: '19,650', percentage: 40 },
    { page: '/settings', views: '12,340', percentage: 25 },
  ];

  const trafficSources = [
    { source: 'Direct', visitors: '45%', color: 'bg-blue-500' },
    { source: 'Search Engines', visitors: '32%', color: 'bg-green-500' },
    { source: 'Social Media', visitors: '15%', color: 'bg-purple-500' },
    { source: 'Referrals', visitors: '8%', color: 'bg-yellow-500' },
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Analytics Overview</h1>
        <p className="text-slate-400">Track your website performance and user engagement</p>
      </div>

      {/* Analytics Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {analyticsData.map((item, index) => (
          <div key={index} className="bg-slate-900 rounded-xl p-6 border border-slate-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-500 text-sm font-medium mb-1">{item.metric}</p>
                <p className="text-2xl font-bold text-white mb-2">{item.value}</p>
                <p className="text-green-500 text-sm font-medium">{item.change}</p>
              </div>
              <div className={`p-3 rounded-lg ${item.color}`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Top Pages */}
        <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
          <h3 className="text-lg font-semibold text-white mb-6">Top Pages</h3>
          <div className="space-y-4">
            {topPages.map((page, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-white font-medium">{page.page}</p>
                  <p className="text-slate-500 text-sm">{page.views} views</p>
                </div>
                <div className="w-24 bg-slate-800 rounded-full h-2 ml-4">
                  <div 
                    className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${page.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
          <h3 className="text-lg font-semibold text-white mb-6">Traffic Sources</h3>
          <div className="space-y-4">
            {trafficSources.map((source, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${source.color}`} />
                  <span className="text-white font-medium">{source.source}</span>
                </div>
                <span className="text-slate-500">{source.visitors}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Real-time Analytics */}
      <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-white">Real-time Activity</h3>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-500 text-sm font-medium">Live</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <p className="text-3xl font-bold text-white mb-2">127</p>
            <p className="text-slate-500">Active Users</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white mb-2">8</p>
            <p className="text-slate-500">Pages/Session</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white mb-2">2m 45s</p>
            <p className="text-slate-500">Avg. Duration</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;