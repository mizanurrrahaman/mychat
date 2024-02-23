import React, { Children, useEffect, useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import Images from '../../utillites/Images';
import { FiPlus } from "react-icons/fi";
import GroupCard from '../../components/home/GroupCard'
import { TiPlus } from 'react-icons/ti'
import { getDatabase, ref, onValue, set,push, remove } from "firebase/database";
import { useSelector, useDispatch } from 'react-redux'
//import { ToastContainer, toast } from 'react-toastify';
import { ToastContainer, toast } from 'react-toastify';


const UserList = () => {
  const [userList, setUserList] = useState( )
  const db = getDatabase();
  const data = useSelector((state) => state.loginuserdata.value)
  const [fRequest, setfRequest] = useState([])
  const [friendList, setFriendList] = useState([])
  useEffect(()=>{
    const userRef = ref(db, 'users');
    onValue(userRef, (snapshot) =>{
      let arr = []
       snapshot.forEach((item) =>{
         if(data.uid != item.key){
           arr.push({...item.val(),id:item.key})
         }
       })
       setUserList(arr)
    });
   },[])

   console.log(userList)
 
  let handleFRequst = (frequestinfo)=>{
     set(ref(db, "friendrequest/"+ frequestinfo.id),{
        senderid: data.uid,
        sendername: data.displayName, 
        senderimg: data.photoURL,
        senderemail: data.email,
        receiverid: frequestinfo.id,
        receivername: frequestinfo.username,
        receiveremail: frequestinfo.email,
        receiverimg: frequestinfo.profileimg
     }).then(() =>{
      toast("Friend Request Send Successfully...")
     })
  }

  //friend request data

    useEffect(()=>{
     const fRequestRef = ref(db, 'friendrequest');
     onValue(fRequestRef, (snapshot) =>{
       let arr = []
      snapshot.forEach((item) =>{
         //console.log(item.val());
          if(data.uid == item.val().senderid){
            arr.push(item.val().senderid + item.val().receiverid)
          }
        })
        setfRequest(arr)
     });
    },[])

   console.log(fRequest)
    

   useEffect(()=> {
    const useRef = ref(db, 'friends');
    onValue(useRef, (snapshot) =>{
      let arr = []
      snapshot.forEach((item) =>{
       if(data.uid == item.val().whoreceiveid){
          arr.push({...item.val(),id:item.key})
        }
      })
      setFriendList(arr)
    });
  },[]) 

  console.log(friendList)

   
  let handleCancal =(i)=>{
   console.log(i.id);
   remove(ref(db, "friendrequest/"+i.id)).then(()=>{
    toast("...Request Cancel....")
   })
  }

  return (
    <>
    <ToastContainer />
      <GroupCard cardtitle="User List">
        <div className='usermainbox'>
          { userList && userList.length > 0
            ?
            userList.map((item, index) =>(
              <div key={index} className='useritem'>
            <div className='userimgbox'>
               <Images source={item.profileimg} alt="img"/>
            </div>
              <div className='userinfobox'>
                 <div>
                     <h3>{item.username} </h3>
                     <p> React Native Developer</p>
                 </div>
                 {console.log(fRequest)}
              {

                fRequest.length > 0 && fRequest.includes(item.id + data.uid) || fRequest.includes(data.uid + item.id)
                 ?
                 <>
                 <button className='addbutton'>Pending </button>
                 <button onClick={()=> handleCancal(item)} className='addbutton'> cancal</button>
                 </>
                 :
                 friendList.includes(item.id + data.uid) || friendList.includes(data.uid + item.id)
                 ?
                 <button className='addbutton'>friend </button>
                  :
                 <button onClick={()=> handleFRequst(item)} className='addbutton'> 
                  add
                 </button>
                 } 
              </div>
          </div> 
            ))
           :
           <h2>Not Found </h2>
          }
               
        </div>
      </GroupCard>
    </>
  )
}

export default UserList












{/*
import React, { useEffect } from 'react'
import Images from '../../utillites/Images'
import { TiPlus } from 'react-icons/ti'
import GroupCard from '../../components/home/GroupCard'
import { getDatabase, ref, onValue, set,push } from "firebase/database";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

const UserList = () => {
  const [userList, setUsderList] = useState()
  const db= getDatabase();
  const data = useSelector((state) => state.loginuserdata.value)
  console.log(data.uid);

  useEffect(()=>{
    const userRef  = ref(db, 'users');
    onValue(userRef, (snapshot) =>{
      let arr = []
      snapshot.forEach((item)=>{
        if(data.uid != item.key){
            arr.push({...item.val(),id:item.key})
        }
      }) 
      setUsderList(arr)
    });
  },[])
  console.log(userList)

  let handleFRequst =(frequestinfo)=>{
    console.log(frequestinfo);
    set(push(ref(bd, "friendrequest")),{
      senderid: data.uid,
      sendername: data.displayName,
      senderimg: data.photoURL,
      senderemail: data.email,
      receiverid: frequestinfo.id,
      receivername: frequestinfo.username,
      receiveremail: frequestinfo.email,
      receiverimg: frequestinfo.profileimg
    })
    
  }


  return (
  <GroupCard cardtitle="User List">
    <div className="usermainbox">
        {userList && length > 0
           ?
         userList.map((item, index)=>(
            <div key={index} className="useritem">
            <div className="userimgbox">
              <Images source="" alt="img"/> 
            </div>
             <div className="userinfobox">
                <div>
                    <h3>Murad </h3>
                    <p>React Native Developer</p>
                </div>
                <button onClick={()=> handleFRequst(item)} className="addbutton">
                    <TiPlus/>
                </button>
           </div>
            </div>
         ))  
         :
         <h2> Not Found</h2>
        }
      
    </div>
 </GroupCard>
  )
}

export default UserList







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




     <div className='useritem'>
            <div className='userimgbox'>
               <Images source="" alt="img"/>
            </div>
              <div className='userinfobox'>
                 <div>
                     <h3> Murad</h3>
                     <p> React Native Developer</p>
                 </div>
                 <button className='addbutton'> 
                  <FiPlus />
                 </button>
              </div>
          </div>
          <div className='useritem'>
            <div className='userimgbox'>
               <Images source="" alt="img"/>
            </div>
              <div className='userinfobox'>
                 <div>
                     <h3> Murad</h3>
                     <p> React Native Developer</p>
                 </div>
                 <button className='addbutton'> 
                    <FiPlus />
                 </button>
              </div>
          </div>
          <div className='useritem'>
            <div className='userimgbox'>
               <Images source="" alt="img"/>
            </div>
              <div className='userinfobox'>
                 <div>
                     <h3> Murad</h3>
                     <p> React Native Developer</p>
                 </div>
                 <button className='addbutton'> 
                     <FiPlus />
                 </button>
              </div>
          </div>
          <div className='useritem'>
            <div className='userimgbox'>
               <Images source="" alt="img"/>
            </div>
              <div className='userinfobox'>
                 <div>
                     <h3> Murad</h3>
                     <p> React Native Developer</p>
                 </div>
                 <button className='addbutton'> 
                    <FiPlus />
                 </button>
              </div>
          </div>
          <div className='useritem'>
            <div className='userimgbox'>
               <Images source="" alt="img"/>
            </div>
              <div className='userinfobox'>
                 <div>
                     <h3> Murad</h3>
                     <p> React Native Developer</p>
                 </div>
                 <button className='addbutton'> 
                    <FiPlus />
                 </button>
              </div>
          </div>
           <div className='useritem'>
            <div className='userimgbox'>
               <Images source="" alt="img"/>
            </div>
              <div className='userinfobox'>
                 <div>
                     <h3> Murad</h3>
                     <p> React Native Developer</p>
                 </div>
                 <button className='addbutton'> 
                  <FiPlus />
                 </button>
              </div>
          </div>
          <div className='useritem'>
            <div className='userimgbox'>
               <Images source="" alt="img"/>
            </div>
              <div className='userinfobox'>
                 <div>
                     <h3> Murad</h3>
                     <p> React Native Developer</p>
                 </div>
                 <button className='addbutton'> 
                    <FiPlus />
                 </button>
              </div>
          </div>
          <div className='useritem'>
            <div className='userimgbox'>
               <Images source="" alt="img"/>
            </div>
              <div className='userinfobox'>
                 <div>
                     <h3> Murad</h3>
                     <p> React Native Developer</p>
                 </div>
                 <button className='addbutton'> 
                     <FiPlus />
                 </button>
              </div>
          </div>
          <div className='useritem'>
            <div className='userimgbox'>
               <Images source="" alt="img"/>
            </div>
              <div className='userinfobox'>
                 <div>
                     <h3> Murad</h3>
                     <p> React Native Developer</p>
                 </div>
                 <button className='addbutton'> 
                    <FiPlus />
                 </button>
              </div>
          </div>
          <div className='useritem'>
            <div className='userimgbox'>
               <Images source="" alt="img"/>
            </div>
              <div className='userinfobox'>
                 <div>
                     <h3> Murad</h3>
                     <p> React Native Developer</p>
                 </div>
                 <button className='addbutton'> 
                    <FiPlus />
                 </button>
              </div>
          </div>


*/}