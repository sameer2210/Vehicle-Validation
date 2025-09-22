import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const RoleBasedNav = () => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) return null;

  const isActive = path => location.pathname === path;

  const getNavItems = () => {
    switch (user.role) {
      case 'superadmin':
        return [
          { path: '/display', label: 'View Vehicles' },
          { path: '/addvehicle', label: 'Add Vehicle' },
          { path: '/update', label: 'Manage Vehicles' },
          { path: '/add-admins', label: 'Manage Users' },
        ];
      case 'admin':
        return [
          { path: '/display', label: 'View Vehicles' },
          { path: '/addvehicle', label: 'Add Vehicle' },
          { path: '/update', label: 'Manage Vehicles' },
        ];
      case 'guard':
        return [{ path: '/display', label: 'View Vehicles' }];
      default:
        return [];
    }
  };

  const navItems = getNavItems();

  return (
    <nav className="bg-gray-800 text-white">
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-300">
              {user.name} ({user.role})
            </span>
          </div>
        </div>
      </div> */}
    </nav>
  );
};

export default RoleBasedNav;
