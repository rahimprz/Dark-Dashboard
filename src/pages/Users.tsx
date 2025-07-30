import React, { useState } from 'react';
import { Search, Plus, MoreVertical, Mail, Phone, MapPin, Calendar } from 'lucide-react';

const Users: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const users = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@example.com',
      role: 'Admin',
      status: 'Active',
      avatar: 'SJ',
      joinDate: '2024-01-15',
      location: 'New York, USA',
      phone: '+1 (555) 123-4567'
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'michael.chen@example.com',
      role: 'Editor',
      status: 'Active',
      avatar: 'MC',
      joinDate: '2024-02-20',
      location: 'San Francisco, USA',
      phone: '+1 (555) 987-6543'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      email: 'emily.rodriguez@example.com',
      role: 'User',
      status: 'Inactive',
      avatar: 'ER',
      joinDate: '2024-03-10',
      location: 'Los Angeles, USA',
      phone: '+1 (555) 456-7890'
    },
    {
      id: 4,
      name: 'David Kim',
      email: 'david.kim@example.com',
      role: 'Editor',
      status: 'Active',
      avatar: 'DK',
      joinDate: '2024-01-28',
      location: 'Seattle, USA',
      phone: '+1 (555) 321-0987'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      email: 'lisa.thompson@example.com',
      role: 'User',
      status: 'Active',
      avatar: 'LT',
      joinDate: '2024-03-05',
      location: 'Chicago, USA',
      phone: '+1 (555) 654-3210'
    }
  ];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Admin': return 'bg-red-500';
      case 'Editor': return 'bg-blue-500';
      case 'User': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'Active' ? 'text-green-500' : 'text-red-500';
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">User Management</h1>
          <p className="text-slate-400">Manage and monitor user accounts</p>
        </div>
        <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
          <Plus className="w-4 h-4" />
          <span>Add User</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex space-x-3">
            <select className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Roles</option>
              <option>Admin</option>
              <option>Editor</option>
              <option>User</option>
            </select>
            <select className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>
      </div>

      {/* Users Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.map((user) => (
          <div key={user.id} className="bg-slate-900 rounded-xl p-6 border border-slate-800 hover:border-slate-700 transition-all duration-200">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">{user.avatar}</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">{user.name}</h3>
                  <p className={`text-sm font-medium ${getStatusColor(user.status)}`}>
                    {user.status}
                  </p>
                </div>
              </div>
              <button className="text-slate-500 hover:text-white transition-colors">
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-slate-500" />
                <span className="text-slate-400 text-sm">{user.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-slate-500" />
                <span className="text-slate-400 text-sm">{user.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-slate-500" />
                <span className="text-slate-400 text-sm">{user.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-slate-500" />
                <span className="text-slate-400 text-sm">Joined {user.joinDate}</span>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-800">
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${getRoleColor(user.role)}`} />
                <span className="text-slate-400 text-sm font-medium">{user.role}</span>
              </div>
              <div className="flex space-x-2">
                <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                  Edit
                </button>
                <button className="text-red-400 hover:text-red-300 text-sm font-medium transition-colors">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredUsers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-500 text-lg">No users found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default Users;