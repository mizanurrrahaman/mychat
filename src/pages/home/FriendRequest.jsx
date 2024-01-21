import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import Images from '../../utillites/Images';



const FriendRequest = ({childern}) => {
  return (
    <div className="groupcard">
        <div className="group_heading">
             <div className="group_item">
            <div className='group_title'>
            <h4 className='cardtitle'>Friends Request</h4>
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
                <button className="addbutton">Accept</button>
              </div>
            </div>
             </div>
        </div>
        {childern}
     </div>
  )
}

export default FriendRequest