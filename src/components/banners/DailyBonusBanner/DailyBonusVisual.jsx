import React, { useState } from 'react';
import { Sparkles, Gift, Flame, Gem, Star, Coins } from 'lucide-react';
import styles from './DailyBonusVisual.module.css';

function DailyBonusVisual({ bonusAmount = '+25 GEMS', status = 'Available Now', onBoxClick }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 800);
    if (onBoxClick) {
      onBoxClick();
    }
  };

  return (
    <div className={styles.visualWrapper}>
      <div className={styles.glowBackdrop}></div>

      <div className={styles.visualContent}>
        <div className={`${styles.floatingBadge} ${styles.badgeTopLeft}`}>
          <Flame size={13} className={styles.badgeIcon} color="#f59e0b" />
          <span className={styles.badgeText}>6-Day Streak</span>
        </div>

        <div className={`${styles.floatingBadge} ${styles.badgeTopRight}`}>
          <Star size={13} className={styles.badgeIcon} color="#fbbf24" />
          <span className={styles.badgeText}>Day 7: Mega Chest</span>
        </div>

        <div className={styles.giftComposition}>
          <div className={styles.lightRays}></div>

          <div
            className={styles.giftBox3D}
            onClick={handleClick}
            style={{ transform: clicked ? 'scale(1.08) translateY(-8px)' : undefined }}
          >
            <div className={styles.bowContainer}>
              <div className={styles.bowLeft}></div>
              <div className={styles.bowRight}></div>
              <div className={styles.bowCenter}></div>
            </div>

            <div className={styles.lidWrap}>
              <div className={styles.lidTop}>
                <div className={styles.lidRibbonVertical}></div>
              </div>
            </div>

            <div className={styles.boxBody}>
              <div className={styles.boxRibbonVertical}></div>
              <div className={styles.boxRibbonHorizontal}></div>
              <div className={styles.boxEmblem}>V</div>
            </div>

            <div className={`${styles.burstParticle} ${styles.particle1}`}>
              <Coins size={18} color="#fbbf24" />
            </div>
            <div className={`${styles.burstParticle} ${styles.particle2}`}>
              <Gem size={17} color="#38bdf8" />
            </div>
            <div className={`${styles.burstParticle} ${styles.particle3}`}>
              <Sparkles size={15} color="#fcd34d" />
            </div>
            <div className={`${styles.burstParticle} ${styles.particle4}`}>
              <Gift size={16} color="#f472b6" />
            </div>
          </div>
        </div>

        <div className={styles.todayBonusCard}>
          <div className={styles.todayBonusLeft}>
            <span className={styles.todayBonusLabel}>Today's Bonus</span>
            <span className={styles.todayBonusValue}>
              <Gem size={15} color="#fbbf24" />
              {bonusAmount}
            </span>
          </div>

          <div className={styles.statusIndicator}>
            <span className={styles.statusDot}></span>
            <span>{status}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DailyBonusVisual;
