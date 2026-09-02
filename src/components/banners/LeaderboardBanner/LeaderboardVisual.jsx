import React from 'react';
import { Trophy, Crown } from 'lucide-react';
import styles from './LeaderboardVisual.module.css';

function LeaderboardVisual({ podium }) {
  const userA = podium.find(p => p.rank === 1) || { rank: 1, badge: '01', username: 'User A', points: '12,450 VEs' };
  const userB = podium.find(p => p.rank === 2) || { rank: 2, badge: '02', username: 'User B', points: '11,820 VEs' };
  const userC = podium.find(p => p.rank === 3) || { rank: 3, badge: '03', username: 'User C', points: '10,970 VEs' };

  return (
    <div className={styles.visualWrapper}>
      <svg className={styles.chartBackground} viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 150 L80 120 L140 135 L200 80 L260 95 L310 30" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 4" />
        <circle cx="20" cy="150" r="3" fill="#f59e0b" />
        <circle cx="80" cy="120" r="3" fill="#f59e0b" />
        <circle cx="140" cy="135" r="3" fill="#f59e0b" />
        <circle cx="200" cy="80" r="4" fill="#f59e0b" />
        <circle cx="260" cy="95" r="3" fill="#f59e0b" />
        <circle cx="310" cy="30" r="5" fill="#f59e0b" filter="drop-shadow(0 0 6px #f59e0b)" />
        <rect x="235" y="100" width="12" height="70" fill="rgba(245, 158, 11, 0.15)" rx="2" />
        <rect x="255" y="75" width="12" height="95" fill="rgba(245, 158, 11, 0.2)" rx="2" />
        <rect x="275" y="55" width="12" height="115" fill="rgba(245, 158, 11, 0.25)" rx="2" />
        <rect x="295" y="30" width="12" height="140" fill="rgba(245, 158, 11, 0.35)" rx="2" />
      </svg>

      <div className={styles.glowFloor}></div>

      <div className={styles.podiumContainer}>
        <div className={styles.podiumColumn}>
          <div className={`${styles.rankCard} ${styles.stepLeft}`}>
            <span className={`${styles.rankPill} ${styles.rankPillLeft}`}>{userB.badge}</span>
            <span className={styles.userName}>{userB.username}</span>
            <span className={styles.userPoints}>{userB.points}</span>
          </div>
        </div>

        <div className={styles.podiumColumn}>
          <div className={styles.trophyAnchor}>
            <Crown size={22} className={styles.crownIcon} />
            <Trophy size={46} className={styles.trophyIcon} />
          </div>
          <div className={`${styles.rankCard} ${styles.stepCenter}`}>
            <span className={`${styles.rankPill} ${styles.rankPillCenter}`}>{userA.badge}</span>
            <span className={styles.userName}>{userA.username}</span>
            <span className={styles.userPoints}>{userA.points}</span>
          </div>
        </div>

        <div className={styles.podiumColumn}>
          <div className={`${styles.rankCard} ${styles.stepRight}`}>
            <span className={`${styles.rankPill} ${styles.rankPillRight}`}>{userC.badge}</span>
            <span className={styles.userName}>{userC.username}</span>
            <span className={styles.userPoints}>{userC.points}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaderboardVisual;
