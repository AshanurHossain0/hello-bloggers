import React from 'react';
import "../style.scss"
import logo from "../images/logo2.png"
import { Link } from 'react-router-dom';
import { UserState } from '../context/authContext';
import { toast } from "react-toastify";

const Navbar = () => {

  const { currentUser, logout } = UserState();

  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt='logo' />
          </Link>
        </div>
        <div className="links">
          <Link to="/?cat=art" className='link'><h6>ART</h6></Link>
          <Link to="/?cat=science" className='link'><h6>SCIENCE</h6></Link>
          <Link to="/?cat=tech" className='link'><h6>TECHNOLOGY</h6></Link>
          <Link to="/?cat=cinema" className='link'><h6>CINEMA</h6></Link>
          <Link to="/?cat=design" className='link'><h6>DESIGN</h6></Link>
          <Link to="/?cat=food" className='link'><h6>FOOD</h6></Link>
          <span>{currentUser?.username.split(" ")[0]}</span>
          {(currentUser && currentUser.email) ? <span onClick={logout}>Logout</span> : <Link className='link' to="/login">Login</Link>}
          <span className='write'>
            <Link className='link' to={(currentUser && currentUser.email) ? `/write` : `/`}>Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar