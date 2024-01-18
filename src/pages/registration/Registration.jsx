import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import SectionHeading from '../../components/SectionHeading'
import CustomButton from '../../components/CustomButton'
import AuthNavigate from '../../components/AuthNavigate'
import Input from '../../components/input'
import Alert from '@mui/material/Alert';



const Registration = () => {
  let [error, setError] = useState({
    email: "",
    fullname: "",
    password: " "
  })
  let [signupData, setSignupData] = useState({
    email: "",
    fullname: "",
    password: " "
  })
 
 let handleFrom =(e)=>{
  let {name, value} = e.target
    setSignupData({
      ...signupData,[name]:value
    })
 }
 
 let emailregex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/
 let regName = /^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/;

 let handleSubmit =()=>{
  if(!signupData.email){
    setError({email: "Email is not here"})
  }
  else if(!signupData.email.match(emailregex)){
    setError({email:" Email is not valide"})
  }
  else if(!signupData.fullname){
    setError({email:" "});
    setError({fullname: "Enter your name "});
     if(!signupData.fullname.match(regName)){
      console.log("Please enter your full name (first & last name).")
      //setError({fullname:"Please enter your full name (first & last name)."})
     }
     else{
       //console.log("Valid name given")
       setError({fullname: " tha character is limetation" })
     }
  }
  else if(!signupData.password){
    setError({fullname: ""});
    setError({password: " PssWord is not here"})
    return true;
  }
  else{
    setError({
      email: " ",
      fullname: " ",
      password: " "
    })
    console.log(signupData);

  }
 }

  return (
    <Box>
    <Grid container spacing={0}>
      <Grid item xs={6}>
         <div className="loginbox"> 
            <div  className="loginbox-inner">
              <SectionHeading style="auth_heading" text="Get started with easily register"/> 
               <div className="form-main">
                 <div>
                  <Input onChange={handleFrom} name="email" type="email" variant="standard" labeltext="Email Address" style="login-input-field" />
                  <p>{error.email} </p>
                 </div>
                <div>
                 <Input onChange={handleFrom} name="fullname" type="text" variant="outlined" labeltext="Full Name" style="login-input-field"/>
                 <p> {error.fullname} </p>
                </div>
                <div>
                 <Input onChange={handleFrom} name="password" type="password" variant="outlined" labeltext="Password" style="login-input-field"/>
                  <p>{error.password} </p>
                </div>
                 <CustomButton onClick={handleSubmit} styleing="loginbtn" variant="contained" text="Sign up"/>
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