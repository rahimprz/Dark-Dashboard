import React from 'react';

const ChartCard: React.FC = () => {
  // Mock data for the chart visualization
  const data = [
    { day: 'Mon', value: 65 },
    { day: 'Tue', value: 78 },
    { day: 'Wed', value: 52 },
    { day: 'Thu', value: 84 },
    { day: 'Fri', value: 72 },
    { day: 'Sat', value: 91 },
    { day: 'Sun', value: 68 },
  ];

  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-white">Weekly Analytics</h3>
          <p className="text-slate-500 text-sm">User engagement over the past week</p>
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-xs font-medium bg-blue-600 text-white rounded-lg">7D</button>
          <button className="px-3 py-1 text-xs font-medium text-slate-500 hover:text-white transition-colors">30D</button>
        </div>
      </div>

      <div className="flex items-end justify-between h-40 space-x-2">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            <div 
              className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg transition-all duration-300 hover:from-blue-500 hover:to-blue-300"
              style={{ height: `${(item.value / maxValue) * 100}%` }}
            />
            <span className="text-slate-500 text-xs mt-2 font-medium">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartCard;