import React, { Children } from 'react'
import './groupcard.css'
import { BsThreeDotsVertical } from "react-icons/bs";
import Images from '../../utillites/Images';
import { FaPlus } from "react-icons/fa6";
import UserList from '../../pages/home/UserList';
import Friends from '../../pages/home/Friends';
import FriendRequest from '../../pages/home/FriendRequest';
import BlockList from '../../pages/home/BlockList';


const GroupCarde = ({childern, cardtitle}) => {
  return (
    <>
     <div className="group_wrapper">
      <UserList/>
      <Friends/>
      <FriendRequest/>
      <BlockList/>
       {/*
     <div className="groupcard">
        <div className="group_heading">
             <div className="group_item">
            <div className='group_title'>
                <h4>{cardtitle}</h4>
                 <div className="dots">
                   <BsThreeDotsVertical />
                </div>
            </div>
            <div className="usermainbox">
              <div className="userhead">
               <div className="useritem">
                <div className="userimgbox">
                  <Images source="" alt="img"/>
               </div>
                <div>
                    <h3>Murad</h3>
                    <p>React Native Developer</p>
                </div>
               </div>
                <button className="addbutton"><FaPlus /></button>
              </div>
              <div className="userhead">
               <div className="useritem">
                <div className="userimgbox">
                  <Images source="" alt="img"/>
               </div>
                <div>
                    <h3>Murad</h3>
                    <p>React Native Developer</p>
                </div>
               </div>
                <button className="addbutton"><FaPlus /></button>
              </div>
              <div className="userhead">
               <div className="useritem">
                <div className="userimgbox">
                  <Images source="" alt="img"/>
               </div>
                <div>
                    <h3>Murad</h3>
                    <p>React Native Developer</p>
                </div>
               </div>
                <button className="addbutton"><FaPlus /></button>
              </div>
              <div className="userhead">
               <div className="useritem">
                <div className="userimgbox">
                  <Images source="" alt="img"/>
               </div>
                <div>
                    <h3>Murad</h3>
                    <p>React Native Developer</p>
                </div>
               </div>
                <button className="addbutton"><FaPlus /></button>
              </div>
              <div className="userhead">
               <div className="useritem">
                <div className="userimgbox">
                  <Images source="" alt="img"/>
               </div>
                <div>
                    <h3>Murad</h3>
                    <p>React Native Developer</p>
                </div>
               </div>
                <button className="addbutton"><FaPlus /></button>
              </div>
              <div className="userhead">
               <div className="useritem">
                <div className="userimgbox">
                  <Images source="" alt="img"/>
               </div>
                <div>
                    <h3>Murad</h3>
                    <p>React Native Developer</p>
                </div>
               </div>
                <button className="addbutton"><FaPlus /></button>
              </div>
            </div>
             </div>
        </div>
        {childern}
     </div>
      */}
    
     </div>
    
    </>
     
  )
}

export default GroupCarde