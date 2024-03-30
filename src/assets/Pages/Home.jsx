import React from 'react'
import DesktobNav from '../Components/DesktobNav'
import MobileNav from './../Components/MobileNav';
import HomeBody from './../Components/HomeBody';
import HomeBodymb from "../Components/HomeBodymb"
const width = screen.availWidth;
function Home() {
  return (
    <>
      {
        width >= 840 ?  <DesktobNav/> :<MobileNav/>
      }
      
      {
        width >= 840 ?  <HomeBody/> :<HomeBodymb/>
      }
      
    </>
  )
}

export default Home