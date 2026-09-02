import React from 'react';
import { Info } from 'lucide-react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`banner-container ${styles.footerContainer}`}>
        <div className={styles.noticeText}>
          <Info size={16} className={styles.infoIcon} />
          <span>
            <strong>Demo / Placeholder Notice:</strong> Ranking, reward, and streak values are development
            placeholders for presentation purposes only and may change in the final product.
          </span>
        </div>
        <div className={styles.brandSign}>
          <span className={styles.veloopGrad}>VELOP</span>
          <span className={styles.rewardsSign}>REWARDS</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
