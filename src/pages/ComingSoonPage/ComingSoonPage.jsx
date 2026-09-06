import React from 'react';
import { ArrowLeft, Trophy, PlayCircle, Clock, ShieldCheck, Coins, BarChart3, Info } from 'lucide-react';
import styles from './ComingSoonPage.module.css';

const featureDetails = {
  rankings: {
    badgeText: 'Leaderboard Engine',
    badgeClass: styles.badgeRankings,
    icon: Trophy,
    title: 'Climb the Leaderboard & Compete',
    statusClass: styles.statusPill,
    stageText: 'Active Development: Phase 2 Rollout',
    cards: [
      {
        icon: Coins,
        iconClass: styles.cardIconGold,
        title: '50,000 VEs Prize Pool',
        text: 'Top 100 participants per competition cycle qualify for direct token distribution shares and ranking multipliers.'
      },
      {
        icon: BarChart3,
        iconClass: styles.cardIconGold,
        title: 'Dynamic Tier Ladders',
        text: 'Compete in Bronze, Silver, Gold, Platinum, and Diamond divisions driven by XP gained from verified platform activities.'
      },
      {
        icon: ShieldCheck,
        iconClass: styles.cardIconGold,
        title: 'Fair Play Verification',
        text: 'Automated telemetry monitors ranking integrity, ensuring transparent and exploit-free standings for all users.'
      }
    ]
  },
  'watch-ads': {
    badgeText: 'Ad Rewards Network',
    badgeClass: styles.badgeWatchAds,
    icon: PlayCircle,
    title: 'Watch Ads & Earn Instant VEs',
    statusClass: styles.statusPillBlue,
    stageText: 'Active Development: Sponsor API Integration',
    cards: [
      {
        icon: Coins,
        iconClass: styles.cardIconBlue,
        title: '+38 VEs Per Verified View',
        text: 'Instant credits disbursed straight to your digital wallet upon verified sponsor video completion.'
      },
      {
        icon: PlayCircle,
        iconClass: styles.cardIconBlue,
        title: 'No Daily Engagement Cap',
        text: 'Watch and earn across active partner inventory throughout the day without arbitrary earning ceilings.'
      },
      {
        icon: ShieldCheck,
        iconClass: styles.cardIconBlue,
        title: 'Clean Streaming Experience',
        text: 'Zero deceptive popups or intrusive overlays. Only user-initiated, high-definition rewarded sponsor videos.'
      }
    ]
  }
};

function ComingSoonPage({ feature = 'rankings', onBack }) {
  const details = featureDetails[feature] || featureDetails.rankings;
  const BadgeIcon = details.icon;

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.cardContainer}>
        <button type="button" className={styles.backBtn} onClick={onBack}>
          <ArrowLeft size={16} />
          <span>Back to Dashboard</span>
        </button>

        <div className={styles.headerRow}>
          <div className={styles.titleArea}>
            <div className={`${styles.featureBadge} ${details.badgeClass}`}>
              <BadgeIcon size={14} />
              <span>{details.badgeText}</span>
            </div>
            <h1 className={styles.pageTitle}>{details.title}</h1>
          </div>

          <div className={details.statusClass}>
            <span className={styles.pulseDot}></span>
            <span>Coming Soon</span>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.infoGrid}>
          {details.cards.map((card, idx) => {
            const CardIcon = card.icon;
            return (
              <div key={idx} className={styles.infoCard}>
                <div className={styles.infoCardHeader}>
                  <CardIcon size={18} className={card.iconClass} />
                  <span>{card.title}</span>
                </div>
                <p className={styles.infoCardText}>{card.text}</p>
              </div>
            );
          })}
        </div>

        <div className={styles.stageNotice}>
          <div className={styles.noticeTextGroup}>
            <Info size={16} className={styles.noticeIcon} />
            <span>{details.stageText}</span>
          </div>

          <button type="button" className={styles.primaryBackBtn} onClick={onBack}>
            <ArrowLeft size={16} />
            <span>Return to Banners</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ComingSoonPage;
