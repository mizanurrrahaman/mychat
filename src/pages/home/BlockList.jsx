import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import Images from '../../utillites/Images';
import GroupCarde from '../../components/home/GroupCarde';
 
const BlockList = ({childern}) => {
  return (
     <>
        <div className="groupcard">
        <div className="group_heading">
             <div className="group_item">
            <div className='group_title'>
                <h4> Block List</h4>
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
                <button className="addbutton">UnBlock</button>
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
                <button className="addbutton">UnBlock</button>
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
                <button className="addbutton">UnBlock</button>
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
                <button className="addbutton">UnBlock</button>
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
                <button className="addbutton">UnBlock</button>
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
                <button className="addbutton">UnBlock</button>
              </div>
            </div>
             </div>
        </div>
        {childern}
     </div>
     </>
  )
}

export default BlockList

 {/*
<GroupCard cardtitle="Friend">
        <div className="usermainbox">
           {[0,1,2,3,4,5,6].map((item, index)=>(
          <div key={index} className="useritem">
            <div className="userimgbox">
              <Images source="" alt="img"/>
            </div>
             <div className="userinfobox">
                <div>
                   <h3>Murad</h3>
                    <p> React Native Developer</p>
                </div>
                <button className="addbutton"> 
                     Block
                </button>
             </div>
          </div>
           ))
           }
        </div>
     </GroupCard>
*/}

 {/*
    <div className="groupcard">
        <div className="group_heading">
             <div className="group_item">
            <div className='group_title'>
                <h4> Block List</h4>
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
                <button className="addbutton">UnBlock</button>
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
                <button className="addbutton">UnBlock</button>
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
                <button className="addbutton">UnBlock</button>
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
                <button className="addbutton">UnBlock</button>
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
                <button className="addbutton">UnBlock</button>
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
                <button className="addbutton">UnBlock</button>
              </div>
            </div>
             </div>
        </div>
        {childern}
     </div>
  */}