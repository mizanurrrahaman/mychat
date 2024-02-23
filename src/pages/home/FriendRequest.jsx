import React, { useEffect, useState } from 'react'
import GroupCard from '../../components/home/GroupCard'
import Images from '../../utillites/Images'
import { useSelector, useDispatch } from 'react-redux'
import { getDatabase, ref, onValue, set,push,remove } from "firebase/database";
import { ToastContainer, toast } from 'react-toastify';

const FriendRequest = () => {
 
  const db = getDatabase();
  const data = useSelector((state) => state.loginuserdata.value)
  const [fRequest, setfRequest] = useState()

  useEffect(()=>{
    const fRequestRef = ref(db, 'friendrequest');
    onValue(fRequestRef, (snapshot) =>{
      let arr = []
       snapshot.forEach((item) =>{
        //console.log(item.val());
         if(data.uid == item.val().receiverid){
           arr.push({...item.val(),id:item.key})
         }
       })
       setfRequest(arr)
    });
   },[])

  const handleCancelFRequest =(cancleInfo)=>{
    console.log(cancleInfo)
    remove(ref(db, "friendrequest/"+ cancleInfo.id)).then(()=>{
      toast("Request Cancel.....")
    })
  }

  let handleAcceptFRequest =(acceptInfo)=>{
    console.log(acceptInfo)
    set(push(ref(db, "friends")),{
     whosendname: acceptInfo.sendername,
     whosendid: acceptInfo.senderid,
     whosendemail: acceptInfo.senderemail,
     whosendphoto: acceptInfo.senderimg,
     whoreceivename: data.displayName,
     whoreceiveid: data.uid,
     whoreceiveemail: data.email,
     whoreceivephoto: data.photoURL
   }).then(()=>{
    remove(ref(db, "friendrequest/"+acceptInfo.id))
    toast("Request accepted Successfully.....")
   })
  }


  return (
    <>
       <ToastContainer/>
        <GroupCard cardtitle="Friend Request">
          <div className='usermainbox'>
            { fRequest && fRequest.length > 0 ?
              fRequest.map((item,index) =>(
                <div key={index} className='useritem'>
                  <div className='userimgbox'>
                    <Images source={item.senderimg} alt="img"/>
                  </div>
                    <div className='userinfobox'>
                      <div>
                        <h3>{item.sendername} </h3> 
                        <p>React native developer</p>
                      </div>
                       <div className='buttongroup'>
                         <div>
                            <button onClick={()=> handleAcceptFRequest(item)} className='addbutton'> accept </button>
                         </div>
                         <div>
                            <button onClick={()=>handleCancelFRequest(item)} className='addbutton'> cancel </button>
                         </div>
                       </div>
                    </div>
                </div>
              ))
              :
              <h2>No Request Found ....</h2>
            }
          </div>
       </GroupCard>
    </>
  )
}

export default FriendRequest