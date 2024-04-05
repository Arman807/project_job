import { useState } from "react";
import { NavLink } from "react-router-dom";

import { IoMenuOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
// import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";

const Navbar = () => {
  // const [cart]=useCart();
  // console.log(cart)
  const [drop,setDrop]=useState(false);
  const [,data]=useCart();
  console.log(data)
  const { user, logout } =useAuth();
  const handledrop=()=>{
    if(drop){
      setDrop(!drop)
    }
  }
  const handleLogout = () => {
    logout();
  };
  const navLink = (
    <>
      <li className="text-white pr-5">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="text-white pr-5">
        <NavLink
          to="/contact us"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Contact Us
        </NavLink>
      </li>
     
      <li className="text-white pr-5">
        <NavLink
          to="/menu"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Our Menu
        </NavLink>
      </li>
      <li className="text-white pr-5">
        <NavLink
          to="/order"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Our Shop
        </NavLink>
      </li>
      <li className="pr-5">
       <NavLink to="dashboard"> <div className="flex">
        <h3 className="text-white">
        <FaShoppingCart />
        </h3>
        {data ? <sup className="text-white">{data.length}</sup> :""}
        </div></NavLink>
      </li>
      <li className="text-white pr-5">
        {user ? (
          <NavLink to="/">
           <div className="flex">
           <img
              src={user.photoURL}
              className="w-[30px] rounded-full"
              alt="Profile"
            />
            <span onClick={handleLogout} className="ml-2">
              Logout
            </span>
           </div>
          </NavLink>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </li>
    </>
  );
  return (
    <div className="">
      <div className="bg-black w-full max-w-screen-xl fixed opacity-80 z-10 md:flex justify-between items-center py-5">
      <div className="flex">
        <h3 className="text-4xl md:hidden text-white">
          <IoMenuOutline onClick={handledrop} />
        </h3>
        <h3 className="text-5xl text-white">Bistro Boss</h3>
      </div>
      {
        drop ? <div>
        <ul className="md:flex justify-between">{navLink}</ul>
      </div> :<div>
        <ul className="md:flex justify-between hidden sm:hidden">{navLink}</ul>
      </div>
      }
    </div>
    <div>
         {
          drop ? <ul className="md:hidden fixed z-20 mt-20 pl-5 bg-black w-[120px]">
          {navLink}
         </ul> : ""
         }
    </div>
    </div>
  );
};

export default Navbar;
