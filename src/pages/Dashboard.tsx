import React from 'react';
import MetricCard from '../components/MetricCard';
import ChartCard from '../components/ChartCard';
import ActivityFeed from '../components/ActivityFeed';
import { 
  Users, 
  DollarSign, 
  ShoppingCart, 
  TrendingUp 
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const metrics = [
    {
      title: 'Total Users',
      value: '12,543',
      change: '+12% from last month',
      changeType: 'positive' as const,
      icon: Users,
      iconColor: 'bg-blue-500'
    },
    {
      title: 'Revenue',
      value: '$45,230',
      change: '+8% from last month',
      changeType: 'positive' as const,
      icon: DollarSign,
      iconColor: 'bg-green-500'
    },
    {
      title: 'Orders',
      value: '1,234',
      change: '-2% from last month',
      changeType: 'negative' as const,
      icon: ShoppingCart,
      iconColor: 'bg-yellow-500'
    },
    {
      title: 'Growth Rate',
      value: '23.1%',
      change: '+5% from last month',
      changeType: 'positive' as const,
      icon: TrendingUp,
      iconColor: 'bg-purple-500'
    }
  ];

  return (
    <div className="p-6">
      {/* Metrics grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <MetricCard
            key={index}
            title={metric.title}
            value={metric.value}
            change={metric.change}
            changeType={metric.changeType}
            icon={metric.icon}
            iconColor={metric.iconColor}
          />
        ))}
      </div>

      {/* Charts and activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <ChartCard />
        </div>
        <div>
          <ActivityFeed />
        </div>
      </div>

      {/* Additional content area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors">
              Add User
            </button>
            <button className="p-4 bg-green-600 hover:bg-green-700 rounded-lg text-white font-medium transition-colors">
              Generate Report
            </button>
            <button className="p-4 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-medium transition-colors">
              Send Notification
            </button>
            <button className="p-4 bg-yellow-600 hover:bg-yellow-700 rounded-lg text-white font-medium transition-colors">
              View Analytics
            </button>
          </div>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
          <h3 className="text-lg font-semibold text-white mb-4">System Status</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Server Status</span>
              <span className="flex items-center text-green-500">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Online
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Database</span>
              <span className="flex items-center text-green-500">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Connected
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">API Status</span>
              <span className="flex items-center text-yellow-500">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                Monitoring
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Last Backup</span>
              <span className="text-slate-500">2 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;