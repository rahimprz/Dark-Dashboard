import React, { useState, useEffect } from 'react';
import { Github, Star, X } from 'lucide-react';

const GitHubPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after a short delay when component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/rahimprz', '_blank');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl max-w-md w-full mx-4 transform animate-in fade-in zoom-in duration-300">
        {/* Header */}
        <div className="relative p-6 pb-4">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
              <Github className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-white text-center mb-2">
            Love this project? 
          </h2>
          <p className="text-slate-300 text-center text-sm">
            Help us grow by starring our repository and following us on GitHub!
          </p>
        </div>

        {/* Content */}
        <div className="px-6 pb-6">
          <div className="space-y-3 mb-6">
            <div className="flex items-center space-x-3 p-3 bg-slate-800 rounded-lg">
              <Star className="w-5 h-5 text-yellow-400" />
              <div>
                <p className="text-white font-medium text-sm">Star our repository</p>
                <p className="text-slate-400 text-xs">Show your support and help others discover us</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-slate-800 rounded-lg">
              <Github className="w-5 h-5 text-slate-300" />
              <div>
                <p className="text-white font-medium text-sm">Follow for updates</p>
                <p className="text-slate-400 text-xs">Stay updated with our latest projects</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <button
              onClick={handleClose}
              className="flex-1 px-4 py-3 text-slate-400 hover:text-white border border-slate-700 rounded-lg transition-colors hover:border-slate-600"
            >
              Maybe Later
            </button>
            <button
              onClick={handleGitHubClick}
              className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg transition-all duration-200 font-medium flex items-center justify-center space-x-2"
            >
              <Github className="w-4 h-4" />
              <span>Visit GitHub</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubPopup;