import { Edit, Home, List, Plus, Shield, Users } from 'lucide-react';
import { FaLocationDot } from 'react-icons/fa6';

const Footer = () => {
  const navigation = [
    { name: 'Home', href: '/home', icon: Home },
    { name: 'Add Vehicle', href: '/addvehicle', icon: Plus },
    { name: 'Display', href: '/display', icon: List },
    { name: 'Update', href: '/update', icon: Edit },
    { name: 'Login', href: '/login', icon: Users },
    { name: 'Add Admin', href: '/add-admins', icon: Shield },
  ];

  return (
    <footer className="w-full bg-gray-900 text-gray-200 px-2 sm:px-4 py-3 sm:py-4">
      {/* Address Section */}
      <div className="mb-3 sm:mb-4">
        <p className="flex justify-center items-start text-xs sm:text-sm text-center max-w-4xl mx-auto">
          <FaLocationDot className="text-red-400 mt-0.5 mr-1 sm:mr-2 shrink-0 text-sm sm:text-base" />
          <span className="leading-relaxed">
            8948+FP, Abbas Nagar, Gandhi Nagar, Bhopal, Madhya Pradesh 462036
          </span>
        </p>
      </div>

      <nav className="overflow-x-auto scrollbar-hide">
        <div className="flex justify-between items-center min-w-max px-1 sm:px-4 space-x-1 sm:space-x-2 md:space-x-4 lg:space-x-6">
          {navigation.map(item => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                className="flex flex-col items-center p-1 sm:p-2 text-gray-200 hover:text-blue-400 transition-colors group min-w-0 flex-shrink-0"
              >
                <Icon className="w-4 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 mb-0.5 sm:mb-1 group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm font-medium text-center whitespace-nowrap">
                  {item.name === 'Add Vehicle' ? (
                    <>
                      <span className="sm:hidden">Add</span>
                      <span className="hidden sm:inline">Add Vehicle</span>
                    </>
                  ) : item.name === 'Add Admin' ? (
                    <>
                      <span className="sm:hidden">Admin</span>
                      <span className="hidden sm:inline">Add Admin</span>
                    </>
                  ) : (
                    item.name
                  )}
                </span>
              </a>
            );
          })}
        </div>
      </nav>

      {/* Custom scrollbar styles */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
