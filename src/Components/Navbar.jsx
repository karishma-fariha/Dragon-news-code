import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userImg from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const {user,LogOut} =use(AuthContext)
    const handleLogOut=()=>{
      
      LogOut()
      .then(()=>{
       alert("You Logged Out")
      })
      .catch((error)=>{
      console.log(error) 
      })
    }
    return (
        <div className='flex items-center justify-between'>
           <div className="">{user && user.email}</div>
           <div className="nav flex gap-5 text-accent">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/career'>Career</NavLink>
           </div>
           <div className="login-btn flex gap-5">
            <img src={userImg} alt="" />
            {
                user?(<button onClick={handleLogOut} className='btn btn-primary px-10'>LogOut</button>):( <Link to="/auth/login" className='btn btn-primary px-10'>Login</Link>)
            }
           
           </div>
        </div>
    );
};

export default Navbar;