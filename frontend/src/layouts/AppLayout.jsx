import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProtectedRoute from '../components/ProtectedRoute';
// import RoleBasedNav from '../components/RoleBasedNav';

const AppLayout = () => {
  return (
    <ProtectedRoute>
      <div className="min-h-screen flex flex-col">
        <Header />
        {/* <RoleBasedNav /> */}
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ProtectedRoute>
  );
};

export default AppLayout;
