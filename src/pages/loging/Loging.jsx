import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "./loging.css"
import SectionHeading from '../../components/SectionHeading';
import GoogleSvg from '../../../public/google.svg';
import Button from '@mui/material/Button';
import Input from '../../components/input';
import CustomButton from '../../components/CustomButton';
import AuthNavigate from '../../components/AuthNavigate';
import LoginImg from '../../assets/images/card.png'
import Images from '../../utillites/Images';
import { Modal, Typography } from '@mui/material';
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';





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

const Loging = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  let emailregex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/
  let [passShow, setPassShow] = useState(false)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleModalClose =()=>{
    setOpen(false)
  }
 {/*
  let handlePassShow = ()=>{
    if(passShow){
      setPassShow(false)
    }
    else{
      setPassShow(true)
    }
  }
*/}
  {/*
  let handleFrom =(e)=>{
    let {name, value} = e.target
    setSignupData({
      ...signupData,[name]: value
    })
  }
*/}
let [error, setError] = useState({
   email : " ",
   password : " "
})

let [fromData, setFromData] = useState({
  email: " ",
  password: " "
})

let handleFrom =(e)=>{
 let {name, value} = e.target
 setFromData({
  ...fromData,[name]: value
 })

}
 let handleSubmit =()=>{
    if(!fromData.email){
      setError({email: "email is not here" })
    }
    else if(!fromData.email.match(emailregex)){
      setError({email: " Email is not valide" })
    }
    else if(!fromData.password){
      setError({email: " "});
      setError({password: " Password id not here"})
      return true;
    }
    else{
      signInWithEmailAndPassword(auth, fromData.email, fromData.password).then((userCredential)=>{
       console.log(userCredential)
   
      if(userCredential.user.emailVerified){
        navigate("/home")
       console.log(userCredential.user)
     }
      else{
       signOut(auth).then(()=>{
        toast.error('🦄 Please Verify Your Email', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
         //console.log("Please verify your email")
         //console.log("logout done")
       })
      }

      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if(errorCode == "auth/invalide-credential"){
          setError({email: " Email or password error"})
        }
        else{
          setError({email : " "})
        }
          console.log(errorCode)
          console.log(errorMessage)
      });
      setError({
        email: " ",
        password: " "
      })
      //console.log(signupData);
    }
 }

 



  let handleForgot =(e)=>{
    setFromData(e.target.value)
  }

  let handleForgotSubmit =()=>{
    if(!fromData){
      console.log(" give me your email")
    }
    else if(!fromData.email.match(emailregex)){
      console.log(" Your email is not write")
    }
    else{
      console.log(fromData);
    }
  }


  
  return (
    <>

     {/* <ToastContainer
     position="top-right"
     autoClose={5000}
     hideProgressBar={false}
     newestOnTop={false}
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover
     theme="dark"
     /> */}

 

     <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
       >
        <Box sx={style}>
          <button onClick={handleModalClose}> Close</button>
           <div className="forgot-box">
              <h2> Forgot Password</h2>
             <Input onClick={handleForgot} type=" email" labeltext="Email Address" variant="standard"/>
             <CustomButton onClick={handleForgotSubmit} text="Send Link" variant="contained"/>
           </div>
        </Box> 
        {/*
         <h1> Modal is here</h1>
        */ }
    </Modal>
     <Box>
      <Grid container spacing={0}>
        <Grid item xs={6}>
           <div className="loginbox"> 
              <div  className="loginbox-inner">
                <SectionHeading style="auth_heading" text="Login to your account!"/> 
                 <div className="provider-login">
                     <img src={GoogleSvg} alt="" />
                     <span> Login with Google</span>
                 </div>
                 <div className="form-main">
                   <div>
                      <Input onChange={handleFrom} name="email" type="email" variant="standard" labeltext="Email Address" style="login-input-field"/>
                      <p>{error.email}</p>
                   </div>
                    <div>
                       {/*
                        <Input name="password" type={passShow ? "text" : "Password" } variant="standard" labeltext="Password" style="login-input-field"/>
                      */}
                       <div>
                       <Input onChange={handleFrom} name="password" type={passShow ? "text" : "Password" } variant="standard" labeltext="Password" style="login-input-field"/>
                         <p>{error.password}</p>
                       </div>
                       <button onClick={()=>setPassShow(!passShow)}> Show</button>
                    </div>
                   <CustomButton onClick={handleSubmit}  styleing="loginbtn" variant="contained" text="login to continue"/>
                 </div>
                 <AuthNavigate style="loginauth" link="/registation" linktext="sing up" text="Don’t have an account ?"/>
              
                  <p className='loginauth'>
                  Please write a new password
                  <span onClick={handleOpen}>Forgrt Password </span>
                  </p>
                 <button >forget password </button>
              </div>
           </div>
        </Grid>
        <Grid item xs={6}>
           <div className="loginimg"> 
              <Images source={LoginImg} alt="img"/>
           </div>
        </Grid>
      </Grid>
    </Box>
    

    </>
  )
}

export default Loging