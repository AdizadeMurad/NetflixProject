import React from "react";
import MainNavbar from "../../components/MainComponents/MainNavbar";
import { Outlet } from "react-router-dom";
import MainFooter from "../../components/MainComponents/MainFooter";


function MainLayout() {
  return (
    <>
      <MainNavbar></MainNavbar>
      <Outlet></Outlet>
      <MainFooter></MainFooter>
    </>
  );
}

export default MainLayout;
