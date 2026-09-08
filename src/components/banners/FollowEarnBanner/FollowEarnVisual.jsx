import React, { useState } from 'react';
import { 
  Check, 
  Bell, 
  Wifi, 
  Battery, 
  Users, 
  Star, 
  Megaphone, 
  Heart, 
  Sparkles, 
  Gift,
  Award,
  Flame
} from 'lucide-react';
import styles from './FollowEarnVisual.module.css';

function FollowEarnVisual({ onFollowToggle }) {
  const [isFollowing, setIsFollowing] = useState(true);
  const [bellActive, setBellActive] = useState(true);
  const [isRinging, setIsRinging] = useState(false);
  const [showBurst, setShowBurst] = useState(false);
  const [showNotif, setShowNotif] = useState(true);

  const handleFollowClick = () => {
    const newState = !isFollowing;
    setIsFollowing(newState);
    if (newState) {
      setShowBurst(true);
      setTimeout(() => setShowBurst(false), 1200);
    }
    if (onFollowToggle) {
      onFollowToggle(newState);
    }
  };

  const handleBellClick = (e) => {
    e.stopPropagation();
    const nextBell = !bellActive;
    setBellActive(nextBell);
    if (nextBell) {
      setIsRinging(true);
      setTimeout(() => setIsRinging(false), 1200);
    }
  };

  return (
    <div className={styles.visualWrapper}>
      <div className={styles.glowBackdrop}></div>

      <div className={styles.visualContent}>
        <div className={`${styles.floatingBadge} ${styles.badgeTopLeft}`}>
          <Users size={13} className={styles.badgeIcon} color="#c084fc" />
          <span className={styles.badgeText}>24.5K Users</span>
        </div>

        <div className={`${styles.floatingBadge} ${styles.badgeTopRight}`}>
          <Star size={13} className={styles.badgeIcon} color="#fbbf24" />
          <span className={styles.badgeText}>Verified Brand</span>
        </div>

        <div className={`${styles.floatingBadge} ${styles.badgeBottomLeft}`}>
          <Megaphone size={13} className={styles.badgeIcon} color="#38bdf8" />
          <span className={styles.badgeText}>Active Drops</span>
        </div>

        <div className={`${styles.floatingBadge} ${styles.badgeBottomRight}`}>
          <Heart size={13} className={styles.badgeIcon} color="#f43f5e" />
          <span className={styles.badgeText}>+500 SVEs</span>
        </div>

        <div className={styles.phoneFrame}>
          <div className={styles.dynamicIsland}></div>

          <div className={styles.phoneScreen}>
            <div className={styles.statusBar}>
              <span>09:41</span>
              <div className={styles.statusIcons}>
                <Wifi size={10} />
                <Battery size={11} />
              </div>
            </div>

            {showNotif && (
              <div className={styles.notifBubble}>
                <div className={styles.notifIconWrap}>
                  <Sparkles size={10} color="#fcd34d" />
                </div>
                <div className={styles.notifContent}>
                  <span className={styles.notifTitle}>Genesis Campaign</span>
                  <span className={styles.notifBody}>+500 SVEs available now</span>
                </div>
              </div>
            )}

            {showBurst && (
              <div className={styles.reactionBurst} style={{ top: '35%', left: '42%' }}>
                <Heart size={20} fill="#ec4899" color="#f472b6" />
              </div>
            )}

            <div className={styles.profileCard}>
              <div className={styles.avatarRing}>
                <div className={styles.avatarInner}>V</div>
                <div className={styles.verifiedBadge}>
                  <Check size={9} strokeWidth={3} />
                </div>
              </div>

              <div className={styles.profileInfoWrap}>
                <div className={styles.profileNameRow}>
                  <span className={styles.profileName}>VELOOP Rewards</span>
                </div>
                <span className={styles.profileHandle}>@velooprewards</span>
              </div>

              <div className={styles.statsRow}>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>128</span>
                  <span className={styles.statLabel}>Posts</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>{isFollowing ? '24.5K' : '24.4K'}</span>
                  <span className={styles.statLabel}>Followers</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>8</span>
                  <span className={styles.statLabel}>Following</span>
                </div>
              </div>

              <button
                type="button"
                className={`${styles.followButton} ${isFollowing ? styles.followActive : ''}`}
                onClick={handleFollowClick}
                aria-label={isFollowing ? 'Following profile' : 'Follow profile'}
              >
                {isFollowing ? (
                  <>
                    <Check size={12} strokeWidth={2.5} />
                    <span>Following</span>
                    <Bell
                      size={11}
                      fill={bellActive ? '#c084fc' : 'none'}
                      onClick={handleBellClick}
                      className={isRinging ? styles.bellRinging : ''}
                      style={{ marginLeft: 3, cursor: 'pointer' }}
                    />
                  </>
                ) : (
                  <>
                    <Sparkles size={12} />
                    <span>Follow</span>
                  </>
                )}
              </button>

              <div className={styles.miniHighlights}>
                <div className={styles.highlightCircle}>
                  <div className={styles.highlightIcon}>
                    <Gift size={12} />
                  </div>
                  <span className={styles.highlightLabel}>Airdrops</span>
                </div>
                <div className={styles.highlightCircle}>
                  <div className={styles.highlightIcon}>
                    <Award size={12} />
                  </div>
                  <span className={styles.highlightLabel}>Campaigns</span>
                </div>
                <div className={styles.highlightCircle}>
                  <div className={styles.highlightIcon}>
                    <Flame size={12} />
                  </div>
                  <span className={styles.highlightLabel}>Perks</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.flowPill}>
          <span>Follow</span>
          <span className={styles.flowArrow}>→</span>
          <span>Engage</span>
          <span className={styles.flowArrow}>→</span>
          <span>Reward</span>
        </div>
      </div>
    </div>
  );
}

export default FollowEarnVisual;
