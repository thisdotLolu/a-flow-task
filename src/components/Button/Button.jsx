import React from 'react'
import styles from './Button.module.css'


const Button = ({text,borderRadius,backgroundColor,color, width,onClick}) => {
  return (
    <div 
    onClick={onClick}
    style={{borderRadius, backgroundColor, color, width}}
    className={styles.container}>
        {text}
    </div>
  )
}

export default Button