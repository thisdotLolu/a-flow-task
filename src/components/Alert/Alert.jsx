import React from 'react'
import styles from './Alert.module.css';



const Alert = ({icon,text, bgColor, color}) => {
  return (
    <div 
    style={{backgroundColor:bgColor}}
    className={styles.container}>
      <div
      style={{marginTop:'2px'}} 
      className={styles.left}>
      {icon}
      </div>
      <div className={styles.right}
      style={{color, marginLeft:'4px'}}
      >
        {text}
      </div>
    </div>
  )
}

export default Alert;