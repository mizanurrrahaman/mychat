import { Box, Grid } from '@mui/material'
import React from 'react'
import SectionHeading from '../../components/SectionHeading'
import CustomButton from '../../components/CustomButton'
import AuthNavigate from '../../components/AuthNavigate'
import Input from '../../components/input'

const Registration = () => {
  return (
    <Box>
    <Grid container spacing={0}>
      <Grid item xs={6}>
         <div className="loginbox"> 
            <div  className="loginbox-inner">
              <SectionHeading style="auth_heading" text="Get started with easily register"/> 
               <div className="form-main">
                 <Input name="email" type="email" variant="outlined" labeltext="Email Address" style="login-input-field"/>
                 <Input name="fullname" type="text" variant="outlined" labeltext="Full Name" style="login-input-field"/>
                 <Input name="password" type="password" variant="outlined" labeltext="Password" style="login-input-field"/>
                 <CustomButton styleing="loginbtn" variant="contained" text="Sign up"/>
               </div>
               <AuthNavigate style="loginauth" link="/" linktext="sing in" text="Allready have an account ?"/>
            </div>
         </div>
      </Grid>
      <Grid item xs={6}>
        {/*
        <div className="loginimg"> 
            <Images source={LoginImg} alt="img"/>
         </div>
       */}
        
      </Grid>
    </Grid>
    </Box>
  )
}

export default Registration