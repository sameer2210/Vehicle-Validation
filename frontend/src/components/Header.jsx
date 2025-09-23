import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-gray-900 p-4 shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Title Section */}
          <div className="flex-1 text-center">
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white leading-tight">
              Vehicle Validator
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-yellow-600 mt-0.5 sm:mt-1 leading-tight">
              Ganpati Infinity Society
            </p>
          </div>

          {/* User Section - Always in right corner */}
          {user && (
            <div className="flex items-center space-x-2 sm:space-x-3 ml-2 sm:ml-4">
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white p-1.5 sm:p-2 rounded transition-colors group"
                title="Logout"
              >
                <LogOut className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
