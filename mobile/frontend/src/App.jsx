import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import AddVehicle from "./pages/AddVehicle";
import Display from "./pages/Display";
import Update from "./pages/Update";

const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="home" element={<Home/>}/>
    <Route path="addvehicle" element={<AddVehicle/>}/>
    <Route path="display" element={<Display/>}/>
    <Route path="update" element={<Update/>}/>

    </Route>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}
export default App;