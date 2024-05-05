import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout/MainLayout";
import Home from "./pages/MainPages/Home";
import NoPage from "./pages/NoPage/NoPage";
import "./components/Container/Container.css";
import "./components/Reset/Reset.css";

import LoginRegister from "./layout/SignIn/LoginRegister";
import Login from "./pages/SignInRegister/Login";
import Register from "./pages/SignInRegister/Register";

import NetflixLayout from "./layout/NetflixLayout/NetflixLayout";
import NetflixHome from "./pages/PagesNetflix/NetflixHome";
import "./components/NetflixNavbar/ContainerNetflix/ContainerNetflix.css"
import TvShowsPage from "./pages/PagesNetflix/TvShowsPage/TvShowsPage";
import MoviesPage from "./pages/PagesNetflix/MoviesPage/MoviesPage";
import NewPopular from "./pages/PagesNetflix/NewPopular/NewPopular";
import Mylist from "./pages/PagesNetflix/MyList/Mylist";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NoPage />} />
          </Route>
          <Route path="/Login" element={<LoginRegister />}>
            <Route index element={<Login />} />
            <Route path="*" element={<NoPage />} />
          </Route>
          <Route path="/Register" element={<LoginRegister />}>
            <Route index element={<Register />} />
            <Route path="*" element={<NoPage />} />
          </Route>

          <Route path="/NetflixHome" element={<NetflixLayout />}>
            <Route index element={<NetflixHome />} />
            <Route path="/NetflixHome/TvShowsPage" element={<TvShowsPage />} />
            <Route  path="/NetflixHome/MoviesPage" element={<MoviesPage />} />
            <Route  path="/NetflixHome/NewPopular" element={<NewPopular />} />
            <Route  path="/NetflixHome/Mylist" element={<Mylist />} />
            <Route path="*" element={<NoPage />} />
          </Route>
          
          
        </Routes>



      </BrowserRouter>
    </>
  );
}

export default App;
