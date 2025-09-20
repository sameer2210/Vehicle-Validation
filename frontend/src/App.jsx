import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import PublicLayout from './layouts/PublicLayout';

import AddAdmins from './pages/AddAdmins';
import AddVehicle from './pages/AddVehicle';
import Display from './pages/Display';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Update from './pages/Update';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="addvehicle" element={<AddVehicle />} />
          <Route path="display" element={<Display />} />
          <Route path="update" element={<Update />} />
          <Route path="login" element={<Login />} />
        </Route>

        {/* Private/App routes */}
        <Route element={<AppLayout />}>
          <Route path="add-admins" element={<AddAdmins />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
