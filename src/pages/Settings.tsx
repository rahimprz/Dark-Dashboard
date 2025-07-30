import React, { useState } from 'react';
import { 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Globe, 
  Database, 
  Key,
  Save,
  Eye,
  EyeOff
} from 'lucide-react';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: true,
    marketing: false
  });

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'integrations', label: 'Integrations', icon: Globe },
    { id: 'data', label: 'Data & Privacy', icon: Database }
  ];

  const handleNotificationChange = (key: string) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-2xl">JD</span>
              </div>
              <div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors mr-3">
                  Change Photo
                </button>
                <button className="text-red-400 hover:text-red-300 transition-colors">
                  Remove
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">First Name</label>
                <input
                  type="text"
                  defaultValue="John"
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">Last Name</label>
                <input
                  type="text"
                  defaultValue="Doe"
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  defaultValue="john@example.com"
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  defaultValue="+1 (555) 123-4567"
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-slate-300 text-sm font-medium mb-2">Bio</label>
              <textarea
                rows={4}
                defaultValue="Product manager with 5+ years of experience in building scalable web applications."
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Notification Preferences</h3>
              <div className="space-y-4">
                {[
                  { key: 'email', label: 'Email Notifications', description: 'Receive notifications via email' },
                  { key: 'push', label: 'Push Notifications', description: 'Receive push notifications in browser' },
                  { key: 'sms', label: 'SMS Notifications', description: 'Receive important alerts via SMS' },
                  { key: 'marketing', label: 'Marketing Communications', description: 'Receive product updates and offers' }
                ].map((item) => (
                  <div key={item.key} className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
                    <div>
                      <p className="text-white font-medium">{item.label}</p>
                      <p className="text-slate-400 text-sm">{item.description}</p>
                    </div>
                    <button
                      onClick={() => handleNotificationChange(item.key)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        notifications[item.key as keyof typeof notifications] ? 'bg-blue-600' : 'bg-slate-600'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          notifications[item.key as keyof typeof notifications] ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Password & Security</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">Current Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">New Password</label>
                  <input
                    type="password"
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">Confirm New Password</label>
                  <input
                    type="password"
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Two-Factor Authentication</h3>
              <div className="p-4 bg-slate-700 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Enable 2FA</p>
                    <p className="text-slate-400 text-sm">Add an extra layer of security to your account</p>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                    Enable
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">API Keys</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Key className="w-5 h-5 text-slate-400" />
                    <div>
                      <p className="text-white font-medium">Production API Key</p>
                      <p className="text-slate-400 text-sm">sk_prod_••••••••••••••••</p>
                    </div>
                  </div>
                  <button className="text-red-400 hover:text-red-300 transition-colors">
                    Revoke
                  </button>
                </div>
                <button className="w-full p-4 border-2 border-dashed border-slate-600 rounded-lg text-slate-400 hover:border-slate-500 hover:text-slate-300 transition-colors">
                  + Generate New API Key
                </button>
              </div>
            </div>
          </div>
        );

      case 'appearance':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Theme</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['Dark', 'Light', 'Auto'].map((theme) => (
                  <div
                    key={theme}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                      theme === 'Dark' ? 'border-blue-500 bg-slate-700' : 'border-slate-600 bg-slate-700 hover:border-slate-500'
                    }`}
                  >
                    <div className="text-center">
                      <div className={`w-12 h-8 mx-auto mb-2 rounded ${
                        theme === 'Dark' ? 'bg-slate-900' : theme === 'Light' ? 'bg-white' : 'bg-gradient-to-r from-slate-900 to-white'
                      }`} />
                      <p className="text-white font-medium">{theme}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Accent Color</h3>
              <div className="flex space-x-3">
                {['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-red-500', 'bg-yellow-500'].map((color) => (
                  <button
                    key={color}
                    className={`w-8 h-8 rounded-full ${color} ${
                      color === 'bg-blue-500' ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-800' : ''
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        );

      case 'integrations':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Connected Services</h3>
              <div className="space-y-4">
                {[
                  { name: 'Google Analytics', status: 'Connected', color: 'text-green-500' },
                  { name: 'Slack', status: 'Connected', color: 'text-green-500' },
                  { name: 'GitHub', status: 'Disconnected', color: 'text-red-500' },
                  { name: 'Stripe', status: 'Connected', color: 'text-green-500' }
                ].map((service) => (
                  <div key={service.name} className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
                    <div>
                      <p className="text-white font-medium">{service.name}</p>
                      <p className={`text-sm ${service.color}`}>{service.status}</p>
                    </div>
                    <button className={`px-4 py-2 rounded-lg transition-colors ${
                      service.status === 'Connected' 
                        ? 'bg-red-600 hover:bg-red-700 text-white' 
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}>
                      {service.status === 'Connected' ? 'Disconnect' : 'Connect'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'data':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Data Management</h3>
              <div className="space-y-4">
                <div className="p-4 bg-slate-700 rounded-lg">
                  <h4 className="text-white font-medium mb-2">Export Data</h4>
                  <p className="text-slate-400 text-sm mb-3">Download a copy of your data</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                    Request Export
                  </button>
                </div>
                <div className="p-4 bg-slate-700 rounded-lg">
                  <h4 className="text-white font-medium mb-2">Delete Account</h4>
                  <p className="text-slate-400 text-sm mb-3">Permanently delete your account and all data</p>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors">
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
        <p className="text-slate-400">Manage your account settings and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-slate-900 rounded-xl border border-slate-800">
            <nav className="p-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
            {renderTabContent()}
            
            <div className="flex justify-end mt-8 pt-6 border-t border-slate-800">
              <div className="flex space-x-3">
                <button className="px-4 py-2 text-slate-400 hover:text-white transition-colors">
                  Cancel
                </button>
                <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                  <Save className="w-4 h-4" />
                  <span>Save Changes</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;