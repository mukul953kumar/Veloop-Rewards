import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`banner-container ${styles.navContainer}`}>
        <div className={styles.brandLogo}>
          <span className={styles.logoVeloop}>VELOP</span>
          <span className={styles.logoRewards}>REWARDS</span>
        </div>
        <div className={styles.navBadge}>
          <span className={styles.pulseDot}></span>
          <span>Live Hub</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
