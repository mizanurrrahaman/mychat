import React, { useEffect, useState } from 'react'
import GroupCard from '../../components/home/GroupCard'
//import Image from '../../utilities/Image'
import { TiPlus } from 'react-icons/ti'
import { getDatabase, ref, onValue, set,push,remove } from "firebase/database";
import { useSelector } from 'react-redux';

const Friends = () => {
  const [friendList, setFriendList] = useState()
  const db = getDatabase();
  const data = useSelector((state) => state.loginuserdata.value)
  
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
  
  let handleBlock=(blockinfo)=>{
    console.log(blockinfo);
    set(push(ref(db, "block")),{
      whoblockid: data.uid,
      whoblockname: data.displayName,
      whoblockemail: data.email,
      whoblockimg: data.photoURL,
      blockid: blockinfo.whoreceiveid,
      blockemail: blockinfo.whoreceiveemail,
      blockname: blockinfo.whoreceivename,
      blockimg: blockinfo.whoreceivephoto,
    }).then(()=>{
      remove(ref(db, "friends/"+blockinfo.id))
    })
  }


  return (
    <GroupCard cardtitle="Friend">
    <div className='usermainbox'>
      {friendList && friendList.map((item,index)=>(
          <div key={index} className='useritem'>
              <div className='userimgbox'>
               <img source={data.uid == item.whosendid ? item.whoreceivephoto : item.whosendphoto}  alt="img"/>
              </div>
              <div className='userinfobox'>
              <div>
                  {
                    data.uid == item.whosendid 
                     ?
                     <h3>{item.whoreceivename}</h3>
                     :
                     <h3>{item.whosendname} </h3>
                   }
                  <p>MERN Developer</p>
              </div>
              <button onClick={()=>handleBlock(item)} className='addbutton'>
                  Block
              </button>
              </div>
          </div>
      ))
      } 
    </div>
</GroupCard>
  )
}

export default Friends