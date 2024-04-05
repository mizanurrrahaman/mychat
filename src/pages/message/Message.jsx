import React, { useState, useEffect,useRef  } from 'react'
import './message.css'
import { getDatabase, ref, onValue, set,push,remove } from "firebase/database";
import { useSelector, useDispatch } from 'react-redux';
import { activeuser } from '../../slices/activeUserSlices';
import EmojiPicker from 'emoji-picker-react';
import ScrollToBottom from 'react-scroll-to-bottom';

const Message = () => {
  const [allmessage, setAllMessage] = useState([])
  const [msgtext, setMsgText] = useState("")
  const [showemoji, setShowEmoji] = useState(false)
  const [friendList, setFriendList] = useState()
  const db = getDatabase();
  const data = useSelector((state) => state.loginuserdata.value)
  const activechat = useSelector((state) => state?.activeuserdata?.value)
  //const activechat = useSelector((state) => state?.activeuserdata?.value)
  const dispatch = useDispatch()
  const emojiRef = useRef()
  //console.log(activechat)

    console.log(activechat);
   useEffect(()=>{
     const friendRef = ref(db, 'friends');
     onValue(friendRef, (snapshot) =>{
       let arr = []
       snapshot.forEach((item) =>{
         if(data.uid == item.val().whoreceiveid || data.uid == item.val().whosendid){
          arr.push({...item.val(),id:item.key})
         }
       })
       setFriendList(arr)
     });
   },[])

   let handleUser =(i)=>{
     console.log(i)
     dispatch(activeuser(i))
   }

  let handleSubmit =()=>{
    //console.log(msgtext);
    set(push(ref(db, 'message')),{
      senderid: data.uid,
      senderemail: data.email,
      sendername: data.displayName,
      message: msgtext,
      receiverid: data.uid == activechat.whoreceiveid ? activechat.whosendid : activechat.whoreceiveid,
      receivername: data.uid == activechat.whoreceiveid ? activechat.whoreceivename : activechat.whoreceivename,
      receiveremail: data.uid == activechat.whoreceiveid ? activechat.whosendemail : activechat.whoreceiveemail,
    }).then(()=>{
      //console.log("msg send hoice");
      setMsgText(" ")
    })
  } 

  useEffect(()=>{
     const messageRef = ref(db, 'message');
     onValue(messageRef, (snapshot)=>{
       let arr = []
       let activeuserid = activechat.whosendid == data.uid ? activechat.whoreceiveid : activechat.whosendid
       snapshot.forEach((item) =>{
          if((item.val().senderid == data.uid && item.val().receiverid == activeuserid) ||(item.val().receiverid == data.uid && item.val().senderid == activeuserid)){
            arr.push({...item.val(), id:item.key})
          }
       })
       setAllMessage(arr)
     });
  },[activechat])

  let handlekeyPress =(e)=>{
    // console.log(e.key);
     if(e.key == "Enter"){
      set(push(ref(db, 'message')),{
        senderid: data.uid,
        senderemail: data.email,
        sendername: data.displayName,
        message: msgtext,
        receiverid: data.uid == activechat.whoreceiveid ? activechat.whosendid : activechat.whoreceiveid,
        receivername: data.uid == activechat.whoreceiveid ? activechat.whoreceivename : activechat.whoreceivename,
        receiveremail: data.uid == activechat.whoreceiveid ? activechat.whosendemail : activechat.whoreceiveemail,
      }).then(()=>{
        //console.log("msg send hoice");
        setMsgText(" ")
      })
     }
  }

  let handleEmojiPick =(e)=>{
    setMsgText(msgtext +e.emoji+msgtext)
    
  }

  useEffect(()=>{
    document.body.addEventListener("click",(e)=>{
      //console.log(e.target)
      //console.log(emojiRef.current.contains(e.target));
     
      if(emojiRef.current.contains(e.target)){
       setShowEmoji(true)
      }
      else{
       setShowEmoji(false)
      }
    })
  },[])




  return (
    <div className='msg_wrapper'>
      <div className='msg_user_body'>
        <h3 className='list_heading'> Friend List</h3>
         <div className='msg_user_wrapper'>
           {
             friendList && friendList.length>0 ?
             friendList.map((item, index) =>(
              // <div key={index} className='msg_user_item'> </div>
              <div onClick={()=>handleUser(item)} key={index} className='msg_user_item'>
                <div className='userimgbox'>
                   <img src={data.uid == item.whosendid ? item.whoreceivephoto : item.whoreceivephoto} alt="img"/>
                </div>
                 <div className='userinfobox'>
                  <div>
                    {
                      data.uid == item.whosendid
                       ?
                       <h3>{item.whoreceivename} </h3>
                       :
                       <h3>{item.whoreceivename} </h3>
                     } 
                     <p> App Developer</p>
                  </div>
                  <button className='addbutton'>
                     Message
                  </button>
                 </div>
              </div>
             ))
             :
             <h3>i have no friends </h3> 
           }
           <div className='msg_user_item'> </div>
         </div>
      </div>
      {
        activechat != null ?
       <div className='msg_box_body'>
         <div className='msg_box_heading'>
        <h2>
          {
              activechat !==null && activechat.whosendid == data.uid
              ?
              activechat.whoreceivename
              :
              activechat.whosendname
            }  
            </h2> 
           
           <p> Active Now</p>
         </div>
         <ScrollToBottom className='scrollBox'>
            <div className='msg_main'>
            {
              allmessage.map((item, index)=>(
                <div key={index} className={`${item.receiverid == data.uid ? "receivemsg" : "sendmsg"}`} >
                   <p>{item.message} </p>
                </div>
              ))
            }
            </div>
         </ScrollToBottom>
             <div className='msg_footer'>
                {/* <input onKeyUp={handlekeyPress} onChange={(e)=>setMsgText(e.target.value)} className='msg_input' value={msgtext}  placeholder='Please Enter Your message'/> */}
                <input onKeyUp={handlekeyPress} onChange={(e)=>setMsgText(e.target.value)} value={msgtext} placeholder='Please Enter your msg' className='msg_input'/>
                {
                  msgtext.length > 0 && 
                 <button onClick={handleSubmit} className='msg_send_btn'>Send</button>
                }

            <div ref={emojiRef}>
               {
                showemoji ?
                <button onClick={()=>setShowEmoji(false)} className='msg_send_btn'>Un Emoji</button>
                :
                <button onClick={()=>setShowEmoji(!showemoji)} className='msg_send_btn'> Emoji</button>
               }
               {
                showemoji && 
                <div className='emoji_wrapper'>
                    <EmojiPicker onEmojiClick={handleEmojiPick} />
                </div>
               }
              </div>
             
          </div>
       </div>
         :
         <div>
           <h1> Please select a user</h1>
         </div>
      }
    </div>
  )
}

export default Message