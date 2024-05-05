import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout/MainLayout";
import Home from "./pages/MainPages/Home";
import NoPage from "./pages/NoPage/NoPage";
import "./components/Container/Container.scss";
import "./components/Reset/Reset.scss";

import LoginRegister from "./layout/SignIn/LoginRegister";
import Login from "./pages/SignInRegister/Login";
import Register from "./pages/SignInRegister/Register";

import NetflixLayout from "./layout/NetflixLayout/NetflixLayout";
import NetflixHome from "./pages/PagesNetflix/NetflixHome";
import "./components/NetflixNavbar/ContainerNetflix/ContainerNetflix.scss"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            
          </Route>
          <Route path="/Login" element={<LoginRegister />}>
            <Route index element={<Login />} />
          </Route>
          <Route path="/Register" element={<LoginRegister />}>
            <Route index element={<Register />} />
          </Route>

          <Route path="/NetflixHome" element={<NetflixLayout />}>
            <Route index element={<NetflixHome />} />
          </Route>
          
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
