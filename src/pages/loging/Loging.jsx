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
  
  return (
    <>
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
             <Input type=" email" labeltext="Email Address" variant="standard"/>
             <CustomButton text="Send Link" variant="contained"/>
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
                      <Input name="email" type="email" variant="standard" labeltext="Email Address" style="login-input-field"/>
                   </div>
                    <div>
                       {/*
                        <Input name="password" type={passShow ? "text" : "Password" } variant="standard" labeltext="Password" style="login-input-field"/>
                      */}
                       <Input name="password" type={passShow ? "text" : "Password" } variant="standard" labeltext="Password" style="login-input-field"/>
                       <button onClick={()=>setPassShow(!passShow)}> Show</button>
                    </div>
                   <CustomButton styleing="loginbtn" variant="contained" text="login to continue"/>
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