import React, { useContext, useEffect } from 'react'
import styles from './AuthStatus.module.css'
import AuthStatusComponent from '../../components/AuthStatusComponent/AuthStatusComponent'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../../contexts/AppContext'
import Button from '../../components/Button/Button'
import Logo from '../../components/Logo'





const AuthStatus = () => {
    const{authStates}=useContext(AppContext);
    const {id} = useParams();
    const navigate = useNavigate()
    let authStatus;

    if( id === 'locked'){
        authStatus = authStates.locked
    }
    if(id === 'success'){
        authStatus = authStates.success
    }

    useEffect(()=>{
        if(id !== 'locked' && id !== 'success'){
            navigate('/')
        }
    },[id])
    
    

  return (
    <div className={styles.container}>
        <div className={styles.inner}>
            <AuthStatusComponent
            id={id}
            authStatus={authStatus}
            />

        {
            id === 'locked' && 
            <Button
               text='Contact Support'
               backgroundColor='#169DD7'
               borderRadius='20px'
               width='70%'
               color='white'           
            />
        }
        {
            id === 'success' && 
            <div className='spinner'>
                <img
            src='/spinner.png'
            alt='spinner'
            />
            </div>
            
        }

        <div
        style={{marginTop:'10vh'}}
        >
        <Logo
        
        />
        </div>
        
    </div>
    </div>
  )
}

export default AuthStatus