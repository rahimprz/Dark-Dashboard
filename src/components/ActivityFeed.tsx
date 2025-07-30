import React from 'react';
import { User, FileText, Settings, Bell } from 'lucide-react';

const ActivityFeed: React.FC = () => {
  const activities = [
    {
      icon: User,
      iconColor: 'bg-blue-500',
      title: 'New user registered',
      description: 'Sarah Johnson joined the platform',
      time: '2 minutes ago'
    },
    {
      icon: FileText,
      iconColor: 'bg-green-500',
      title: 'Report generated',
      description: 'Monthly analytics report is ready',
      time: '15 minutes ago'
    },
    {
      icon: Settings,
      iconColor: 'bg-yellow-500',
      title: 'System update',
      description: 'Database optimization completed',
      time: '1 hour ago'
    },
    {
      icon: Bell,
      iconColor: 'bg-purple-500',
      title: 'Notification sent',
      description: 'Weekly digest sent to 1,234 users',
      time: '3 hours ago'
    }
  ];

  return (
    <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
      <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
      
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-800 transition-colors">
            <div className={`p-2 rounded-lg ${activity.iconColor}`}>
              <activity.icon className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-medium text-sm">{activity.title}</p>
              <p className="text-slate-500 text-sm">{activity.description}</p>
              <p className="text-slate-600 text-xs mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 py-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
        View all activity
      </button>
    </div>
  );
};

export default ActivityFeed;