import React, { Children } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import Images from '../../utillites/Images';
import { FaPlus } from "react-icons/fa6";

const UserList = ({childern}) => {
  return (
    <>
     <div className="groupcard">
        <div className="group_heading">
             <div className="group_item">
            <div className='group_title'>
                 <h4 className='cardtitle'>User List </h4>
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
    </>
  )
}

export default UserList