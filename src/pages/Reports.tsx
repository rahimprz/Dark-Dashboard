import React, { useState } from 'react';
import { Download, FileText, Calendar, Filter, TrendingUp, Users, DollarSign, ShoppingCart } from 'lucide-react';

const Reports: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('30d');

  const reportTypes = [
    {
      title: 'User Activity Report',
      description: 'Detailed analysis of user engagement and behavior patterns',
      icon: Users,
      color: 'bg-blue-500',
      lastGenerated: '2 hours ago',
      size: '2.4 MB'
    },
    {
      title: 'Revenue Report',
      description: 'Financial performance and revenue analytics',
      icon: DollarSign,
      color: 'bg-green-500',
      lastGenerated: '1 day ago',
      size: '1.8 MB'
    },
    {
      title: 'Sales Report',
      description: 'Product sales performance and conversion metrics',
      icon: ShoppingCart,
      color: 'bg-purple-500',
      lastGenerated: '3 hours ago',
      size: '3.2 MB'
    },
    {
      title: 'Performance Report',
      description: 'System performance and optimization insights',
      icon: TrendingUp,
      color: 'bg-yellow-500',
      lastGenerated: '6 hours ago',
      size: '1.5 MB'
    }
  ];

  const recentReports = [
    {
      name: 'Monthly_User_Activity_Dec_2024.pdf',
      type: 'User Activity',
      date: '2024-12-15',
      size: '2.4 MB',
      status: 'Completed'
    },
    {
      name: 'Revenue_Analysis_Q4_2024.xlsx',
      type: 'Revenue',
      date: '2024-12-14',
      size: '1.8 MB',
      status: 'Completed'
    },
    {
      name: 'Sales_Performance_Weekly.pdf',
      type: 'Sales',
      date: '2024-12-13',
      size: '3.2 MB',
      status: 'Processing'
    },
    {
      name: 'System_Performance_Nov_2024.pdf',
      type: 'Performance',
      date: '2024-12-12',
      size: '1.5 MB',
      status: 'Completed'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'text-green-500';
      case 'Processing': return 'text-yellow-500';
      case 'Failed': return 'text-red-500';
      default: return 'text-slate-400';
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Reports & Analytics</h1>
          <p className="text-slate-400">Generate and download comprehensive business reports</p>
        </div>
        <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
          <FileText className="w-4 h-4" />
          <span>Custom Report</span>
        </button>
      </div>

      {/* Report Generation */}
      <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 mb-8">
        <h3 className="text-lg font-semibold text-white mb-4">Generate New Report</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <select className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Select Report Type</option>
            <option>User Activity</option>
            <option>Revenue Analysis</option>
            <option>Sales Performance</option>
            <option>System Performance</option>
          </select>
          <select 
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
          <select className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>PDF Format</option>
            <option>Excel Format</option>
            <option>CSV Format</option>
          </select>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors font-medium">
            Generate Report
          </button>
        </div>
      </div>

      {/* Report Types */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {reportTypes.map((report, index) => (
          <div key={index} className="bg-slate-900 rounded-xl p-6 border border-slate-800 hover:border-slate-700 transition-all duration-200">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${report.color}`}>
                <report.icon className="w-6 h-6 text-white" />
              </div>
              <button className="text-slate-500 hover:text-white transition-colors">
                <Download className="w-4 h-4" />
              </button>
            </div>
            <h3 className="text-white font-semibold mb-2">{report.title}</h3>
            <p className="text-slate-500 text-sm mb-4">{report.description}</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Last Generated:</span>
                <span className="text-slate-400">{report.lastGenerated}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Size:</span>
                <span className="text-slate-400">{report.size}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Reports */}
      <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-white">Recent Reports</h3>
          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-2 text-slate-500 hover:text-white transition-colors">
              <Filter className="w-4 h-4" />
              <span className="text-sm">Filter</span>
            </button>
            <button className="flex items-center space-x-2 text-slate-500 hover:text-white transition-colors">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">Date Range</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="text-left text-slate-500 font-medium py-3">Report Name</th>
                <th className="text-left text-slate-500 font-medium py-3">Type</th>
                <th className="text-left text-slate-500 font-medium py-3">Date</th>
                <th className="text-left text-slate-500 font-medium py-3">Size</th>
                <th className="text-left text-slate-500 font-medium py-3">Status</th>
                <th className="text-left text-slate-500 font-medium py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentReports.map((report, index) => (
                <tr key={index} className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors">
                  <td className="py-4">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-4 h-4 text-slate-500" />
                      <span className="text-white font-medium">{report.name}</span>
                    </div>
                  </td>
                  <td className="py-4 text-slate-400">{report.type}</td>
                  <td className="py-4 text-slate-400">{report.date}</td>
                  <td className="py-4 text-slate-400">{report.size}</td>
                  <td className="py-4">
                    <span className={`font-medium ${getStatusColor(report.status)}`}>
                      {report.status}
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex space-x-2">
                      <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                        Download
                      </button>
                      <button className="text-slate-500 hover:text-white text-sm font-medium transition-colors">
                        View
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reports;