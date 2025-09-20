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
    <footer className="w-full bg-gray-900 text-gray-200 px-4 py-6">
      {/* Navigation */}
      <nav className="flex justify-center space-x-4 sm:space-x-8 mb-6 flex-wrap gap-y-4">
        {navigation.map(item => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.href}
              className="flex flex-col items-center p-2 text-gray-200 hover:text-blue-400 transition-colors group"
            >
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 mb-1 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm font-medium">{item.name}</span>
            </a>
          );
        })}
      </nav>

      {/* Address */}
      <p className="flex items-center justify-center text-sm text-center max-w-md mx-auto">
        <FaLocationDot className="mr-2 text-red-400 shrink-0" />
        8948+FP, Abbas Nagar, Gandhi Nagar, Bhopal, Madhya Pradesh 462036
      </p>
    </footer>
  );
};

export default Footer;
