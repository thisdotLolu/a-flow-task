import React, { useContext, useEffect, useState } from "react";
import styles from "./SignIn.module.css";
import Logo from "../../components/Logo";
import Input from "../../components/Input/Input";
import MailIcon from "../../components/MailIcon";
import { LockIcon } from "../../components/LockIcon";
import Button from "../../components/Button/Button";
import { AppContext } from "../../contexts/AppContext";
import Alert from "../../components/Alert/Alert";
import AlertIcon from "../../components/AlertIcon";
import { Link, useNavigate, useParams } from "react-router-dom";

const SignIn = React.memo(() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const{id}=useParams();
  const navigate = useNavigate();
  const { error, setError, showModal, setShowModal, success, setSuccess,showPassword,handleToggleVisibility} = useContext(AppContext);
  console.log(error);


  if (error) {
    setShowModal(true);
  }
  else{
    setShowModal(false)
  }

  // useEffect(()=>{
  //   if(success){

  //   }
  // },[])

  const checkForAttempts = () => {
    let attemptHeader = new Headers();
    let token = localStorage.getItem("registerToken");
    console.log(token);
    attemptHeader.append("Authorization", `Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbIlJPTEVfVVNFUiJdLCJzdWIiOiJ0ZXN0NDQ0QGdtYWlsLmNvbSIsImlhdCI6MTY4NzUzMTAyNiwiZXhwIjoxNjg3NjE3NDI2fQ.UybbuogGDLOjtNk8OLEUjT41VjJIcynjCBB8FckvcYE`);

    let attemptRequestOptions = {
      method: "GET",
      headers: attemptHeader,
      redirect: "follow",
    };

    fetch(
      `https://uat-api.aserver.a-flow.io/api/v1/auth/attempt/save/${email}`,
      attemptRequestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.message === "account locked") {
          console.log('account locked');
          navigate('/sign-in/locked')
        }
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  };



  const signIn = async () => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        username: email,
        password: password,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };



      await fetch(
        "https://uat-api.aserver.a-flow.io/api/v1/auth/authenticate",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          //check for error in credential input
            if(result?.errorMessage === 'Bad credentials'){
            setError(true);
            console.log("errored");
            checkForAttempts();
            console.log(error)
            }
          

          if(result?.errorMessage ===`account locked for ${email}`){
            navigate('/sign-in/locked')
          }
          
          //continues running if no error
            

            if(!result.errorMessage){
              setSuccess(true)
              localStorage.setItem('loginToken', result?.token);
              navigate('/sign-in/success')
              setError(false)
            }
            
          // checkForAttempts();
        })
        .catch((error) => console.log("error", error));
    } catch (error) {
      setError(true);
    }
  };

  // https://uat-api.aserver.a-flow.io/api/v1/auth/attempt/save/jonnydoe@gmail.com

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.left}>
          {showModal && (
            <Alert
              icon={<AlertIcon />}
              text="Incorrect credentials, try again"
              bgColor="#FFD3D6"
              color="#282828"
            />
          )}

          <div className={styles.logo}>
            <Logo />
          </div>

          <div className={styles.heading}>
            <h1>Welcome back</h1>
            <p>Enter credentials to sign in.</p>
          </div>

          <div className={styles.form}>
            <Input
              leftIcon={<MailIcon />}
              label="Email Address"
              placeholder="Enter your email"
              type="email"
              value={email}
              changeHandler={setEmail}
              error={error}
            />

            <Input
              leftIcon={<LockIcon />}
              label="Password"
              placeholder="Enter your password"
              // type="text"
              value={password}
              changeHandler={setPassword}
              error={error}
              type={showPassword ? 'text' : 'password'}
              rightIcon='/eye.png'
              handleToggleVisibility={handleToggleVisibility}
            />

            <div className={styles.forgotPw}>
              <div style={{ display: "flex" }}>
                <input type="checkbox" />
                <p>Remember Me</p>
              </div>

              <p style={{ fontWeight: "900", color: "#169DD7" }}>
                Forgot Password?
              </p>
            </div>

            <div>
              <Button
                text="Sign In"
                backgroundColor="#169DD7"
                color="white"
                borderRadius="25px"
                onClick={signIn}
              />
            </div>

            <div className={styles.googleBtn}>
              <img
                src="/GoogleLogo.png"
                alt="google"
                style={{ objectFit: "contain", marginRight: "15px" }}
              />
              <span>Continue with Google</span>
            </div>

            <div className={styles.createAcc}>
              <p
              style={{color:'#8D8D8D'}}
              >
                Don't have an account? <Link 
                style={{textDecoration:'none', color:'black'}}
                to='/sign-up'>Create Account.</Link>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <img src="/banner.png" alt="banner" />

          <div className={styles.rightText}>
            <h2>The Leading B2B Liquidity & Payment Settlement Provider.</h2>
            <p>Operating the most efficient OTC Desks in Africa</p>
          </div>
        </div>
        {/* <RightSection/> */}
      </div>
    </div>
  );
});

export default SignIn;
