import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: LucideIcon;
  iconColor: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  change, 
  changeType, 
  icon: Icon,
  iconColor 
}) => {
  const changeColorClass = {
    positive: 'text-green-500',
    negative: 'text-red-500',
    neutral: 'text-slate-400'
  }[changeType];

  return (
    <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 hover:border-slate-700 transition-all duration-200 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-slate-500 text-sm font-medium mb-1">{title}</p>
          <p className="text-2xl font-bold text-white mb-2">{value}</p>
          <p className={`text-sm font-medium ${changeColorClass}`}>
            {change}
          </p>
        </div>
        <div className={`p-3 rounded-lg ${iconColor}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
};

export default MetricCard;