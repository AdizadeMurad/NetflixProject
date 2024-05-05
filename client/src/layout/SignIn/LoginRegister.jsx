import React from 'react'
import LoginNavbar from '../../components/LoginRegisterComponents/LoginNavbar'
import { Outlet } from 'react-router-dom'


function LoginRegister() {
  return (
<>
<LoginNavbar></LoginNavbar>
<Outlet></Outlet>

</>
  )
}

export default LoginRegister
