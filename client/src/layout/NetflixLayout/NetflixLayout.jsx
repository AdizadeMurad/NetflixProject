import React from 'react'
import NetflixNavbar from '../../components/NetflixNavbar/NetflixNavbar'
import NetflixFooter from '../../components/NetflixNavbar/NetflixFooter'
import { Outlet } from 'react-router-dom'
function NetflixLayout() {
  return (
<>
<NetflixNavbar></NetflixNavbar>
<Outlet></Outlet>
<NetflixFooter></NetflixFooter>
</>
  )
}

export default NetflixLayout
