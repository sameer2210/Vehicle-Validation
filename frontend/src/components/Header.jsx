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
    <header className="bg-gray-900 shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between p-4">
          <div className="text-center flex-1">
            <h1 className="text-xl sm:text-2xl font-bold text-white">Vehicle Validator</h1>
            <p className="text-3xl sm:text-3xl font-bold text-yellow-600 mt-1">
              Ganpati Infinity Society
            </p>
          </div>
          {user && (
            <div className="flex items-center space-x-4">
              <span className="text-white text-sm">
                Welcome, {user.name}
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm transition-colors"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
