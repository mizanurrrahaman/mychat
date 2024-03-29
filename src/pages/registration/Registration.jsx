import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import SectionHeading from '../../components/SectionHeading'
import CustomButton from '../../components/CustomButton'
import AuthNavigate from '../../components/AuthNavigate'
import Input from '../../components/input'
import Alert from '@mui/material/Alert';
import { Audio, RotatingLines } from 'react-loader-spinner'
import { createUserWithEmailAndPassword, getAuth,sendEmailVerification,updateProfile} from "firebase/auth"
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database";




const Registration = () => {
  const db = getDatabase();
  const auth = getAuth();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false)
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
 

let handleSubmit = () => {
  if(!signupData.email){
    setError({email: "email ny"});
  }
  else if(!signupData.email.match(emailregex)){
    setError({email: "email format thik ny"});
  }
  else if(!signupData.fullname){
    setError({email: ""});
    setError({fullname: "name ny"});
  }else if(!signupData.password){
    setError({fullname: ""});
    setError({password: "pass ny"});
  }else{
    setLoader(true)
    setError({
      email: "",
      fullname: "",
      password: ""
    })
   createUserWithEmailAndPassword
   (auth, signupData.email, signupData.password).then((userCredential)=>{ 
     sendEmailVerification(auth.currentUser).then(()=>{
        //navigate("/")
       updateProfile(auth.currentUser,{
        displayName:signupData.fullname,
        photoURL: "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
       }).then(()=>{
        set(ref(db, 'users/' + userCredential.user.uid), {
          username: userCredential.user.displayName,
          email: userCredential.user.email,
          profileimg : userCredential.user.photoURL
        }).then(()=>{
          navigate("/")
          console.log(userCredential)
        })
       }) 
      })
     //console.log(userCredential.user.emailVerified);
   }).catch((error)=>{
    const errorCode = error.code
    const errorMessage =error.message;
    if (errorCode == "auth/email-already-in-use"){
      setError({email: " Email allready existe"});
    }
    else{
      setError({email: " "});
    }
    console.log(errorMessage);
   })
   setSignupData({
    email: "",
    fullname: "",
    password: " "
   })
     setTimeout(()=>{
        setLoader(false)
     },4000)
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
                  <Input onChange={handleFrom} name="email" value={signupData.email} type="email" variant="standard" labeltext="Email Address" style="login-input-field" />
                  <p>{error.email} </p>
                 </div>
                <div>
                 <Input onChange={handleFrom} name="fullname" value={signupData.fullname} type="text" variant="outlined" labeltext="Full Name" style="login-input-field"/>
                 <p> {error.fullname} </p>
                </div>
                <div>
                 <Input onChange={handleFrom} name="password" value={signupData.password} type="password" variant="outlined" labeltext="Password" style="login-input-field"/>
                  <p>{error.password} </p>
                </div>
                  { loader ?
                  <>
                  {/*
                  <Audio
                  height="80"
                  width="80"
                  radius="9"
                  color="green"
                  ariaLabel="loading"
                  wrapperStyle
                  wrapperClass
                />
                  */}
                 <RotatingLines
                   visible={true}
                   height="96"
                   width="96"
                   color="grey"
                   strokeWidth="5"
                   animationDuration="0.75"
                   ariaLabel="rotating-lines-loading"
                   wrapperStyle={{}}
                   wrapperClass=""
                   />
                  
                  </>
                   :
                   <CustomButton onClick={handleSubmit} styleing="loginbtn" variant="contained" text="Sign up"/>
                  }
                
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