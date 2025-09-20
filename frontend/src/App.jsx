import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import PublicLayout from './layouts/PublicLayout';

import AddVehicle from './pages/AddVehicle';
import Display from './pages/Display';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Update from './pages/Update';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* If you still need public pages, keep PublicLayout here */}
        <Route element={<PublicLayout />}> ... </Route>

        {/* Private/App routes */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} /> {/* default page */}
          <Route path="addvehicle" element={<AddVehicle />} />
          <Route path="display" element={<Display />} />
          <Route path="update" element={<Update />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
