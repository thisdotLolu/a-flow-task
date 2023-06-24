import React from 'react'
import styles from './Authorization.module.css'


const Authorization = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.padlock}>
          <svg
            width="35"
            height="44"
            viewBox="0 0 45 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M39.375 29.8421C39.375 29.0573 38.7454 28.4211 37.9688 28.4211H7.03125C6.2546 28.4211 5.625 29.0573 5.625 29.8421V46.8947C5.625 47.6796 6.2546 48.3158 7.03125 48.3158H37.9688C38.7454 48.3158 39.375 47.6796 39.375 46.8947V29.8421ZM2.8125 22.7368C1.2592 22.7368 0 24.0093 0 25.5789V51.1579C0 52.7275 1.2592 54 2.8125 54H42.1875C43.7408 54 45 52.7275 45 51.1579V25.5789C45 24.0093 43.7408 22.7368 42.1875 22.7368H2.8125Z"
              fill="#66BEE3"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.6875 5.68421H25.3125C29.9724 5.68421 33.75 9.50157 33.75 14.2105V25.579H39.375V14.2105C39.375 6.36227 33.079 0 25.3125 0H19.6875C11.921 0 5.625 6.36227 5.625 14.2105V25.579H11.25V14.2105C11.25 9.50157 15.0276 5.68421 19.6875 5.68421Z"
              fill="#66BEE3"
            />
          </svg>
        </div>

        <div className={styles.text}>
          <h2>Verify it's you</h2>
          <p>Enter the 6-digit code we sent to your email</p>
        </div>

        <div className={styles.inputs}>
          <input type="number" />

          <input type="number" />

          <input type="number" />

          <input type="number" />

          <input type="number" />

          <input type="number" />
        </div>

        <div className={styles.digitsLeft}>digits left</div>
      </div>

      <button>Verify with phone number</button>
    </div>
  );
}

export default Authorization