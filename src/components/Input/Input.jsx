import React, { useContext, useEffect, useRef, useState } from 'react'
import styles from './Input.module.css'
import { AppContext } from '../../contexts/AppContext';



const Input = ({leftIcon,label,placeholder,rightIcon,type,value,changeHandler,phoneNumber,countryCode,showcodes,setShowCodes,selectedCode,handleSelectCode,handleToggleVisibility}) => {


  const inputRef = useRef(null);
  const {error} = useContext(AppContext)

  const handleInputFocus=()=>{
    if(inputRef){
      inputRef.current.style.borderColor = '#0C93CD';
    inputRef.current.style.borderWidth = '2px';
    }
  }

    if(error){
      if(inputRef){
        inputRef.current.style.borderColor = '#E27D7D';
      }
    }
  

  const handleInputBlur=()=>{
    inputRef.current.style.borderColor='';
  }

  
  return (
    <div className={styles.container} ref={inputRef} onBlur={handleInputBlur}>
      <div className={styles.inner}>
        {leftIcon && <div className={styles.left}>{leftIcon}</div>}

        <div className={styles.inputSection}>
          <p>{label}</p>

          <div className={styles.inputMain}>
            {phoneNumber && (
              <div className={styles.phoneNumber}>
                <div
                  style={{
                    fontSize: ".9rem",
                    height: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    
                  }}
                  onClick={() => setShowCodes(!showcodes)}
                >
                  <img
                  style={{width:'15px', height:'15px'}}
                  src={selectedCode?.flag}
                  alt=''
                  />
                  {selectedCode?.code}
                  <span>
                    <img
                      style={{
                        marginLeft: "2px",
                        marginBottom: "2px",
                        objectFit: "contain",
                      }}
                      src="/arrowdown.png"
                      alt="arrow"
                    />
                  </span>
                </div>
                {
                showcodes && (
                  <div
                    onBlur={() => setShowCodes(false)}
                    className={styles.codeList}
                  >
                    {countryCode.map((code) => (
                      <div onClick={() => handleSelectCode(code)}>
                        {code.code}
                      </div>
                    ))}
                  </div>
                )
                }
              </div>
            )}
            <input
              value={value}
              type={type}
              placeholder={placeholder}
              onFocus={handleInputFocus}
              onChange={(e) => changeHandler(e.target.value)}
            />
          </div>
        </div>

        {rightIcon && <img
        className={styles.rightIcon}
        onClick={handleToggleVisibility}
        src={rightIcon}
        alt='eye'
        />}
      </div>
    </div>
  );
}

export default Input;