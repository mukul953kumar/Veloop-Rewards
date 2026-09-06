import React, { useState } from 'react';
import { ArrowRight, PlayCircle, Shield, Zap } from 'lucide-react';
import WatchAdsVisual from './WatchAdsVisual';
import { watchAdsData } from '../../../data/rewardsData';
import styles from './WatchAdsBanner.module.css';

function WatchAdsBanner({ data = watchAdsData, onAction }) {
  const [showRewardToast, setShowRewardToast] = useState(false);

  const handleClaim = () => {
    setShowRewardToast(true);
    setTimeout(() => {
      setShowRewardToast(false);
    }, 2200);
  };

  const handleCtaClick = () => {
    if (onAction) {
      onAction();
    } else {
      handleClaim();
    }
  };

  return (
    <article className={styles.bannerCard}>
      <div className={styles.bannerGrid}>
        <div className={styles.contentColumn}>
          <div className={styles.badgeHeader}>
            <span className={styles.cornerBadge}>02</span>
            <div className={styles.stageBadge}>
              <PlayCircle size={14} className={styles.stageIcon} />
              <span>{data.badge || 'ON-DEMAND REWARDS'}</span>
            </div>
          </div>

          <h2 className={styles.heading}>
            {data.title || 'Watch Ads.'}{' '}
            <span className={styles.titleHighlight}>{data.titleHighlight || 'Earn VEs.'}</span>
          </h2>

          <p className={styles.description}>
            {data.description}
          </p>

          <div className={styles.featuresRow}>
            <div className={styles.featureBadge}>
              <Shield size={14} className={styles.featureIcon} />
              <span>No Daily Cap</span>
            </div>
            <div className={styles.featureBadge}>
              <Zap size={14} className={styles.featureIcon} />
              <span>Instant Credits</span>
            </div>
          </div>

          <button
            type="button"
            className={styles.ctaButton}
            onClick={handleCtaClick}
          >
            <span>{data.ctaText || 'Watch & Earn'}</span>
            <ArrowRight size={16} className={styles.ctaIcon} />
          </button>
        </div>

        <div className={styles.visualColumn}>
          <WatchAdsVisual
            onClaimReward={handleClaim}
            showRewardToast={showRewardToast}
          />
        </div>
      </div>
    </article>
  );
}

export default WatchAdsBanner;
