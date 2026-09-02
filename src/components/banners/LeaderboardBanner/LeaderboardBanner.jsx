import React from 'react';
import { ArrowRight, Trophy } from 'lucide-react';
import LeaderboardVisual from './LeaderboardVisual';
import { leaderboardData } from '../../../data/rewardsData';
import styles from './LeaderboardBanner.module.css';

function LeaderboardBanner({ data = leaderboardData, onAction }) {
  return (
    <article className={styles.bannerCard}>
      <div className={styles.cornerBadge}>01</div>

      <div className={styles.bannerGrid}>
        <div className={styles.contentColumn}>
          <div className={styles.stageBadge}>
            <Trophy size={14} className={styles.stageIcon} />
            <span>{data.stageBadge || 'COMPETITION STAGE ACTIVE'}</span>
          </div>

          <h2 className={styles.heading}>
            {data.title || 'Rank Higher.'}{' '}
            <span className={styles.titleHighlight}>{data.titleHighlight || 'Earn More.'}</span>
          </h2>

          <p className={styles.description}>
            {data.description}
          </p>

          <div className={styles.prizePill}>
            <Trophy size={15} className={styles.prizeIcon} />
            <span>
              Current pool: <span className={styles.prizeHighlight}>{data.prizePool}</span>
            </span>
          </div>

          <button
            type="button"
            className={styles.ctaButton}
            onClick={onAction}
          >
            <span>{data.ctaText || 'Check Rankings'}</span>
            <ArrowRight size={16} className={styles.ctaIcon} />
          </button>
        </div>

        <div className={styles.visualColumn}>
          <LeaderboardVisual podium={data.podium} />
        </div>
      </div>
    </article>
  );
}

export default LeaderboardBanner;
