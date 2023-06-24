import React from 'react'
import styles from './RightSection.module.css'


const RightSection = () => {
  return (
    <div className={styles.container}>
        <div className={styles.right}>
          <img src="/banner.png" alt="banner" />

          <div className={styles.rightText}>
            <h2>The Leading B2B Liquidity & Payment Settlement Provider.</h2>
            <p>Operating the most efficient OTC Desks in Africa</p>
          </div>
        </div>
    </div>
  )
}

export default RightSection