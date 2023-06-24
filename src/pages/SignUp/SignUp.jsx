import React, { useContext, useEffect, useState } from 'react'
import styles from './SignUp.module.css'
import Logo from '../../components/Logo'
import Input from '../../components/Input/Input'
import MailIcon from '../../components/MailIcon'
import { LockIcon } from '../../components/LockIcon'
import Button from '../../components/Button/Button'
import CellPhone from '../../components/CellPhone'
import { AppContext } from '../../contexts/AppContext'
import {Link, useNavigate} from 'react-router-dom'




const countryCode = [
  {
    code:'+234',
    flag:'/nigeria.png',
  },
  {
    code:'+254',
    flag:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPV2HcWXIqA0exThZ5wl4L4vumfE7GxhoppNBt8e-Mlg&s'
  }
]



const SignUp = () => {

 
const[email, setEmail]= useState('');
const[password, setPassword]= useState('');
const[confirmPassword, setConfirmPassword]= useState('');
const[phoneNumber, setPhoneNumber]= useState('');
const[showcodes,setShowCodes] = useState(false);
const[selectedCode, setSelectedCode]=useState(countryCode[0]);
const{showPassword,handleToggleVisibility}=useContext(AppContext);


const navigate= useNavigate()

const signUp=async()=>{  
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "emailAddress": email,
    "password": password,
    "mobileNumber01": `0${phoneNumber}`,
    "countryCode": selectedCode.code
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("https://uat-api.aserver.a-flow.io/api/v1/auth/register", requestOptions)
    .then(response => response.json())
    .then(result => {
      
      console.log(result)
      localStorage.setItem('registerToken', result?.token);
      console.log(result?.token);
      navigate('/sign-up/authorize');
    })
    .catch(error => console.log('error', error));
}

const handleSelectCode=(currentSelected)=>{
  setSelectedCode(currentSelected);
  setShowCodes(false);
}


  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <Logo />
          </div>

          <div className={styles.heading}>
            <h1>Get Started</h1>
            <p>Welcome, please enter your details to create your account.</p>
          </div>

          <div className={styles.form}>

            <Input
              leftIcon={<MailIcon />}
              label="Email Address"
              placeholder="Enter your email"
              type="email"
              value={email}
              changeHandler={setEmail}
              phoneNumber={false}
              rightIcon={email.includes('@')?'/checkFilled.png':''}
            />

            <Input
              leftIcon={<CellPhone/>}
              label="Phone No."
              placeholder=" "
              type="number"
              value={phoneNumber}
              changeHandler={setPhoneNumber}
              phoneNumber={true}
              countryCode={countryCode}
              selectedCode={selectedCode}
              showcodes={showcodes}
              setShowCodes={setShowCodes}
              setSelectedCode={setSelectedCode}
              handleSelectCode={handleSelectCode}
              rightIcon={phoneNumber.length===10?'/checkFilled.png':''}
            />

            <Input
              leftIcon={<LockIcon />}
              label="Password"
              placeholder="Enter your password"
              type={showPassword ? 'text' : 'password'}
              rightIcon='/eye.png'
              value={password}
              changeHandler={setPassword}
              phoneNumber={false}
              handleToggleVisibility={handleToggleVisibility}
              
            />
            <Input
              leftIcon={<LockIcon />}
              label="Password again"
              placeholder="Enter your password"
              type="text"
              value={confirmPassword}
              changeHandler={setConfirmPassword}
              phoneNumber={false}
              countryCode={countryCode}
              rightIcon={password === confirmPassword && password.length !== 0 ?'/checkFilled.png':''}
            />

            <div className={styles.forgotPw}>
              <div style={{display:'flex'}}>
                <input type="checkbox" />
                <p>Remember Me</p>
              </div>

              <p
              style={{fontWeight:'900', color:'#169DD7'}}
              >Forgot Password?</p>
            </div>

            <div 
            >
              <Button
                text="Create Account"
                backgroundColor="#169DD7"
                color="white"
                borderRadius="25px"
                onClick={signUp}
              />
            </div>

            <div className={styles.createAcc}>
              <p
              style={{color:'#8D8D8D'}}
              >
                Already have an account? <Link
                to='/sign-in'
                style={{color:"#333333", textDecoration:'none'}}>Sign In Instead.</Link>
              </p>
            </div>

            <div className={styles.bottomText}
             style={{color:'#8D8D8D'}}
            > 
              By clicking “create account”, I acknowledge that I have read and do hereby accept the terms and conditions in the a-flow's <span
              style={{color:'#1F6989'}}
              >Terms of Use, Merchant Agreement and Privacy Policy.</span>
          
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <img src="/banner.png" alt="banner" 
          />

          <div className={styles.rightText}>
            <h2>The Leading B2B Liquidity & Payment Settlement Provider.</h2>
            <p>Operating the most efficient OTC Desks in Africa</p>
          </div>
        </div>
        {/* <RightSection/> */}
      </div>
    </div>
  );
}


export default SignUp;