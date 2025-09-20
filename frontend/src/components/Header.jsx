// import { IoAddCircleOutline } from 'react-icons/io5';
// import { MdOutlineSmartDisplay } from 'react-icons/md';
// import { FaHome } from 'react-icons/fa';
// import { BiEdit } from 'react-icons/bi';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <header className="w-full bg-gray-800 text-center py-6 shadow-md">
//       {/* Navigation icons */}
//       <div className="flex justify-center gap-8 text-2xl">
//         <Link to="/home" className="hover:text-white transition-colors" title="Home">
//           <FaHome />
//         </Link>
//         <Link to="/addvehicle" className="hover:text-white transition-colors" title="Add Vehicle">
//           <IoAddCircleOutline />
//         </Link>
//         <Link to="/display" className="hover:text-white transition-colors" title="Display">
//           <MdOutlineSmartDisplay />
//         </Link>
//         <Link to="/update" className="hover:text-white transition-colors" title="Update">
//           <BiEdit />
//         </Link>
//       </div>
//       <h1 className="text-2xl md:text-3xl font-bold text-amber-200 tracking-wide">
//         Vehicle Validator
//       </h1>
//       <h2 className="text-lg md:text-xl text-orange-400 mt-1">Ganpati Infinity Society</h2>
//     </header>
//   );
// };

// export default Header;




// import React, { useState } from 'react';
// import { Home, Plus, List, Edit, Menu, X } from 'lucide-react';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navigation = [
//     { name: 'Home', href: '/home', icon: Home },
//     { name: 'Add Vehicle', href: '/addvehicle', icon: Plus },
//     { name: 'Display', href: '/display', icon: List },
//     { name: 'Update', href: '/update', icon: Edit },
//   ];

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="bg-white shadow-md border-b border-gray-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Desktop Header */}
//         <div className="flex items-center justify-between h-16 sm:h-20">
//           {/* Logo/Title */}
//           <div className="flex-shrink-0 text-center sm:text-left">
//             <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
//               Vehicle Validator
//             </h1>
//             <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
//               Ganpati Infinity Society
//             </p>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex space-x-8">
//             {navigation.map((item) => {
//               const Icon = item.icon;
//               return (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   className="flex flex-col items-center p-2 text-gray-600 hover:text-blue-600 transition-colors group"
//                 >
//                   <Icon className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform" />
//                   <span className="text-xs font-medium">{item.name}</span>
//                 </a>
//               );
//             })}
//           </nav>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
//             >
//               {isMenuOpen ? (
//                 <X className="w-6 h-6" />
//               ) : (
//                 <Menu className="w-6 h-6" />
//               )}
//             </button>
//           </div>





// import React, { useState } from 'react';
// import { Home, Plus, List, Edit, Menu, X } from 'lucide-react';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navigation = [
//     { name: 'Home', href: '/home', icon: Home },
//     { name: 'Add Vehicle', href: '/addvehicle', icon: Plus },
//     { name: 'Display', href: '/display', icon: List },
//     { name: 'Update', href: '/update', icon: Edit },
//   ];

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="bg-white shadow-md border-b border-gray-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16 sm:h-20">
//           {/* Logo/Title */}
//           <div className="flex-shrink-0 text-center sm:text-left">
//             <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Vehicle Validator</h1>
//             <p className="text-xs sm:text-sm text-gray-800 mt-0.5">Ganpati Infinity Society</p>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex space-x-8">
//             {navigation.map(item => {
//               const Icon = item.icon;
//               return (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   className="flex flex-col items-center p-2 text-gray-600 hover:text-blue-600 transition-colors group"
//                 >
//                   <Icon className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform" />
//                   <span className="text-xs font-medium">{item.name}</span>
//                 </a>
//               );
//             })}
//           </nav>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
//             >
//               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden">
//             <nav className="flex flex-col space-y-4 py-4">
//               {navigation.map(item => {
//                 const Icon = item.icon;
//                 return (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     className="flex items-center p-2 text-gray-600 hover:text-blue-600 transition-colors"
//                     onClick={toggleMenu} // Close menu on click
//                   >
//                     <Icon className="w-5 h-5 mr-2" />
//                     <span className="text-sm font-medium">{item.name}</span>
//                   </a>
//                 );
//               })}
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;






// Updated Header.jsx to include new navigation items if desired
// Note: I've added 'Add Admins' to the navigation. Login is public, so not added here.
// If you want conditional nav based on auth, that would require auth implementation.
import React, { useState } from 'react';
import { Home, Plus, List, Edit, Users, Menu, X } from 'lucide-react'; // Added Users icon for Add Admins

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/home', icon: Home },
    { name: 'Add Vehicle', href: '/addvehicle', icon: Plus },
    { name: 'Display', href: '/display', icon: List },
    { name: 'Update', href: '/update', icon: Edit },
    { name: 'login', href: '/login', icon: Users }, 
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo/Title */}
          <div className="flex-shrink-0 text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Vehicle Validator</h1>
            <p className="text-xs sm:text-sm text-gray-800 mt-0.5">Ganpati Infinity Society</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map(item => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex flex-col items-center p-2 text-gray-600 hover:text-blue-600 transition-colors group"
                >
                  <Icon className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-medium">{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col space-y-4 py-4">
              {navigation.map(item => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center p-2 text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={toggleMenu} // Close menu on click
                  >
                    <Icon className="w-5 h-5 mr-2" />
                    <span className="text-sm font-medium">{item.name}</span>
                  </a>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;