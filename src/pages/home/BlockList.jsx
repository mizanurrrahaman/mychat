import { getDatabase, ref, onValue, set,push,remove } from "firebase/database";
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import GroupCard from "../../components/home/GroupCard";

const BlockList = () => {
  const [blockList, setBlockList] = useState()
  const db = getDatabase();
  const data = useSelector((state) => state.loginuserdata.value)
  
  useEffect(()=> {
    const blockRef = ref(db, 'block');
    onValue(blockRef, (snapshot) =>{
      let arr = []
      snapshot.forEach((item) =>{
       if(item.val().whoblockid == data.uid){
          arr.push({...item.val(),id:item.key})
        }
      })
      setBlockList(arr)
    });
  },[])

  console.log(blockList)
  return (
    <>
     <GroupCard cardtitle="Block List">
        <div className="usermainbox">
          {
           blockList && blockList.map((item, index)=>(
              <div key={index} className="useritem">
                <div className="userimgbox">
                   <img src="" alt="" />
                </div>
                 <div className="userinfobox">
                    <div>
                        <h1>{item.blockname} </h1>
                        <p> React Native Developer</p>
                    </div>
                 </div>
              </div>
            ))
          }
        </div>
      </GroupCard>
    </>
  )
}

export default BlockList