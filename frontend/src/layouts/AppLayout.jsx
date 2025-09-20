import { Outlet, NavLink } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Main Content */}
      <main className="flex-1 p-4">
        <Outlet />
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white flex justify-around py-2">
        <NavLink to="/home" className="px-2">
          Home
        </NavLink>
        <NavLink to="/addvehicle" className="px-2">
          Add Vehicle
        </NavLink>
        <NavLink to="/display" className="px-2">
          Display
        </NavLink>
        <NavLink to="/update" className="px-2">
          Update
        </NavLink>
      </nav>
    </div>
  );
};

export default AppLayout;
