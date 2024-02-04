import React, { useEffect } from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { Link, NavLink } from 'react-router-dom';
import Images from '../../utillites/Images';
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
//import { toast } from 'react-toastify';
import { ToastContainer, toast } from 'react-toastify';
//import { getAuth } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import { loginuser } from '../../slices/userSlices';

const Sidebar = () => {
    const data = useSelector((state) => state.loginuserdata.value)
    const navigate = useNavigate();
    const auth = getAuth();
    const dispatch = useDispatch()

    useEffect(()=>{
       if(!data){
         navigate("/")
       }
       else {
         navigate("/home")
       }
    },[])

   let handleLogout =()=>{
      signOut(auth).then(()=>{
         //toast("logout done")
         localStorage.removeItem("user")
         dispatch(loginuser(null))
         navigate("/")
         toast.success('Logout Done', {
            position: " top-right",
            autoClose: 3000,
            hideProgressBar:false,
            closeOnClick: true,
            pauseOnHover:true,
            draggable:true,
            progress:undefined,
            theme: "dark",
         })
      })
   }
      const userinfo = auth.currentUser;
      //console.log(userinfo.displayName)
      // let a = localStorage.getItem("user")
      // console.log(a);
  return (
   <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover
         theme="dark"
      />

    <div className="sidebarbox">
       <div>
          <div className="img_box">
             <Images source={data && data.photoURL} alt="img"/> 
               
          </div>
         <h3 className="username">{data && data.displayName} </h3> 
         <p> {data && data.email} </p>
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
          <button onClick={handleLogout} className="logout">Logout</button>
       </div>
    </div>
   </>
  )
}

export default Sidebar