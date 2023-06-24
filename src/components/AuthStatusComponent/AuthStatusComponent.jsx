import React from 'react'
import styles from './AuthStatusComponent.module.css'


const AuthStatusComponent = ({id,authStatus}) => {
  return (
    <div className={styles.container}>
        <div className={styles.inner}>
            <div className={styles.icon}>
                {authStatus?.icon}
            </div>
            <div className={styles.message}>
                {authStatus?.message}
            </div>

            <div className={styles.subMessage}>
                {authStatus?.subMessage}
            </div>
        </div>
    </div>
  )
}

export default AuthStatusComponent