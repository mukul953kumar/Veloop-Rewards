import React, { useState } from 'react';
import { Play, Pause, SkipForward, Volume2, VolumeX } from 'lucide-react';
import styles from './WatchAdsVisual.module.css';

function WatchAdsVisual({ onClaimReward, showRewardToast }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    setIsPlaying(prev => !prev);
  };

  const toggleMute = () => {
    setIsMuted(prev => !prev);
  };

  return (
    <div className={styles.visualWrapper}>
      <div className={styles.glowRingsOuter}></div>
      <div className={styles.glowRingsInner}></div>

      {showRewardToast && (
        <div className={styles.rewardToast}>
          ⚡ +38 VEs Credited!
        </div>
      )}

      <div className={styles.visualComposition}>
        <div className={styles.playerTablet}>
          <div className={styles.screenContent}>
            <div className={styles.playButtonCircle} onClick={togglePlay}>
              {isPlaying ? (
                <Pause size={24} className={styles.pauseIcon} />
              ) : (
                <Play size={26} fill="currentColor" className={styles.playIcon} />
              )}
            </div>
          </div>

          <div className={styles.playerControls}>
            <div className={styles.progressBarTrack}>
              <div
                className={styles.progressBarFill}
                style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}
              ></div>
            </div>
            <div className={styles.controlBar}>
              <div className={styles.controlIconsLeft}>
                <button
                  type="button"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                  className={styles.controlBtn}
                  onClick={togglePlay}
                >
                  {isPlaying ? (
                    <Pause size={15} />
                  ) : (
                    <Play size={15} fill="currentColor" />
                  )}
                </button>
                <button
                  type="button"
                  aria-label="Skip / Claim"
                  className={styles.controlBtn}
                  onClick={onClaimReward}
                >
                  <SkipForward size={15} />
                </button>
                <button
                  type="button"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                  className={styles.controlBtn}
                  onClick={toggleMute}
                >
                  {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                </button>
              </div>
              <span className={styles.timerStatus}>
                {isPlaying ? '0:18 / 0:30' : 'PAUSED'}
              </span>
            </div>
          </div>
        </div>

        <div className={styles.walletContainer} onClick={onClaimReward}>
          <div className={styles.coinGroup}>
            <span className={`${styles.veCoin} ${styles.coin3}`}>VE</span>
            <span className={`${styles.veCoin} ${styles.coin1}`}>VE</span>
            <span className={`${styles.veCoin} ${styles.coin2}`}>VE</span>
          </div>

          <div className={styles.walletBody}>
            <span className={styles.walletLogo}>VE</span>
            <div className={styles.walletClasp}></div>
          </div>

          <span className={`${styles.veCoin} ${styles.coinSide}`}>VE</span>
        </div>
      </div>
    </div>
  );
}

export default WatchAdsVisual;
