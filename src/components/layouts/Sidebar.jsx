import React, { createRef, useEffect, useState } from 'react'
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
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IoIosCloudUpload } from "react-icons/io";



const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 400,
   bgcolor: 'background.paper',
   border: '2px solid #000',
   boxShadow: 24,
   p: 4,
 };

const Sidebar = () => {
    const data = useSelector((state) => state.loginuserdata.value)
    const navigate = useNavigate();
    const auth = getAuth();
    const dispatch = useDispatch()

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const defaultSrc = "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg";
    const [image, setImage] = useState(defaultSrc);
    const [cropData, setCropData] = useState("#");
    const cropperRef = createRef;
    
    const onChange =(e)=>{
      e.preventDefault();
      let files;
      if(e.dataTransfar){
         files = e.dataTransfar.files;
      } 
      else if(e.target){
         files = e.target.files;
      }
      const reader = new FileReader();
      reader.onload =()=>{
         setImage(reader.result);
      };
      reader.readAsDataURL(files[0]);
    }
  
    const getCropData =()=>{
      if(typeof cropperRef.current?.cropper !== "undefined"){
         setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
      }
    }

    
    let handleImage =(e)=>{
      console.log(e)
   }

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

<Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
         {/*
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
       */}
        <Box sx={style}>
           <h2> Upload Profile Photo</h2>
            <div className='img_holder'> 
               <img source={data && data.photoURL} alt="img"/>
            </div>
             <input type="file" onChange={handleImage} />
        </Box>
      </Modal>

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
             <div className="overlay"> 
                <IoIosCloudUpload />
             </div>
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




{/*
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
*/}