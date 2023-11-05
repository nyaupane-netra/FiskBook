import { useLocation, Link, useState } from 'react-router-dom'
import FiskBook from '../Pictures/FiskBookFinal.png'
import '../NavBar.css'





const NavBar = () => {
  const location = useLocation()
  let activeHome = false
  let activeMain = false
  let activeAbout = false
  let activeFiskies = false
  let activeFaq = false
  let activeCont = false
  let activeLog = false
  let activeProf = false

  if (location.pathname === '/') {
    activeHome = true
  }
  if (location.pathname === '/main') {
    activeMain = true
  }
  if (location.pathname === '/about') {
    activeAbout = true
  }
  if (location.pathname === '/fiskies') {
    activeFiskies = true
  }
  if (location.pathname === '/Faq') {
    activeFaq = true
  }
  if (location.pathname === '/contactUs') {
    activeCont = true
  }
  if (location.pathname === '/profile') {
    activeProf = true
  }
    return (
        <>
            <nav style={{backgroundColor: "#4A46AC", color: "#ffffff", padding: "10px"}}>
                <div className="img-container">
                    <img className="img" src={FiskBook} height="95" width="250" alt="" />
                    <h1 className="gradient shimmer"><a href="">FiskBook</a></h1>
                    <p className="gradient shimmer">...The Book To Your Success</p>
                </div>

                {/* <div style={{ position: "absolute", top: "0", right: "0px", backgroundColor: "yellow", width: "50px", height: "50px", color: "black", transform: "translateY(-50%)", marginTop:"215px", marginRight:"30px", borderRadius:"50%", display:"flex", justifyContent:"center", alignItems:"center" }}>
                  <img src="https://media.licdn.com/dms/image/D5635AQF89GjXzgDDFw/profile-framedphoto-shrink_800_800/0/1697122734788?e=1699758000&v=beta&t=3XcX5DpjJwh1zKGvuXS-larMEaBIrZai3A45GP8s4iA" style={{width: "50px", height: "50px", color: "black", transform: "translateY(-50%)", borderRadius:"50%", marginTop:"50px"}}>
                  </img>
                </div> */}

                <div className="nav-list">
                    <Link to="/" className={activeHome ? 'active item' : 'item'} >HOME</Link>
                    <Link to="/about" className={activeAbout ? 'active item' : 'item'}>ABOUT US</Link>
                    <Link to="/main" className={activeMain ? 'active item' : 'item'}>OPPORTUNITIES</Link>
                    <Link to="/connect" className={activeLog ? 'active item' : 'item'}>ALUMNI CONNECT</Link>
                    <Link to="/chat" className={activeLog ? 'active item' : 'item'}>CHATS</Link>
                    <Link to="/fiskies" className={activeFiskies ? 'active item' : 'item'} >FISKITES WRITE</Link>
                    <Link to="/Faq" className={activeFaq ? 'active item' : 'item'}>FAQs</Link>
                    <Link to="/contactUs" className={activeCont ? 'active item' : 'item'}>CONTACT US</Link>
                    <Link to="/profile">
                    {/* <div style={{ position: "absolute", top: "0", right: "0px", backgroundColor: "yellow", width: "50px", height: "50px", color: "black", transform: "translateY(-50%)", marginTop:"215px", marginRight:"30px", borderRadius:"50%", display:"flex", justifyContent:"center", alignItems:"center" }}> */}
                      <img src="https://media.licdn.com/dms/image/D5635AQF89GjXzgDDFw/profile-framedphoto-shrink_800_800/0/1697122734788?e=1699758000&v=beta&t=3XcX5DpjJwh1zKGvuXS-larMEaBIrZai3A45GP8s4iA" style={{width: "50px", height: "50px", color: "black", transform: "translateY(-50%)", borderRadius:"50%", marginTop:"50px"}}>
                      </img>
                    {/* </div> */}
                    </Link>
                    
                </div>

            </nav>
        </>
    )
}

export default NavBar
