import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { Link, NavLink } from 'react-router-dom';
import Images from '../../utillites/Images';



const Sidebar = () => {
  return (
    <div className="sidebarbox">
       <div>
          <div className="img_box">
             <Images source="" alt="img"/>
          </div>
          <h3 className="username"> Murad</h3>
       </div>
       <div>
           <ul className="navigation">
              <li>
                 <NavLink to="/home">
                      <IoHomeOutline />
                 </NavLink>
              </li>
              <li>
                 <NavLink to="/message">
                       <AiOutlineMessage />
                 </NavLink>
              </li>
              <li>
                 <NavLink to="/notification">
                     <IoMdNotificationsOutline />
                 </NavLink>
              </li>
              <li>
                 <NavLink to="/setting">
                      <IoSettingsOutline />
                 </NavLink>
              </li>
           </ul>
       </div>
       <div>
          <button className="logout">Logout</button>
       </div>
    </div>
  )
}

export default Sidebar