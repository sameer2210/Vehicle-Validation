// import { Outlet } from 'react-router-dom';

// const PublicLayout = () => {
//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">

//       {/* You can add a simple header if needed */}
//       <main className="flex-1 p-4">
//         <Outlet />
//       </main>

//     </div>
//   );
// };

// export default PublicLayout;

import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 p-4">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default PublicLayout;
