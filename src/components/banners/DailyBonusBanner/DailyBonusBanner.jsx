import React, { useState, useEffect } from 'react';
import { Gift, Clock, Flame, Check, Sparkles, AlertCircle, Info } from 'lucide-react';
import DailyBonusVisual from './DailyBonusVisual';
import { dailyBonusData } from '../../../data/rewardsData';
import styles from './DailyBonusBanner.module.css';

function DailyBonusBanner({ data = dailyBonusData, onAction }) {
  const [toastMessage, setToastMessage] = useState('');
  const [claimed, setClaimed] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: data.resetHours || 14,
    minutes: data.resetMinutes || 23,
    seconds: data.resetSeconds || 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        }
        if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        }
        if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDigits = (val) => String(val).padStart(2, '0');

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage('');
    }, 2800);
  };

  const handleClaim = () => {
    if (claimed) {
      showToast('Daily bonus already claimed for today! Resets tomorrow.');
      return;
    }
    setClaimed(true);
    showToast(`🎉 Claimed ${data.bonusAmount || '+25 GEMS'}! 6-Day Streak active.`);
    if (onAction) {
      onAction();
    }
  };

  const completedCount = data.completedDays || 6;
  const totalDays = data.totalDays || 7;
  const progressPercent = Math.min(100, Math.round((completedCount / totalDays) * 100));

  return (
    <article className={styles.bannerCard}>
      <div className={styles.bannerGrid}>
        <div className={styles.contentColumn}>
          <div className={styles.badgeHeader}>
            <span className={styles.cornerBadge}>{data.cornerBadge || '5'}</span>
            <div className={styles.stageBadge}>
              <span className={styles.stagePulseDot}></span>
              <span>{data.badge || 'DAILY BONUS'}</span>
            </div>
          </div>

          <h2 className={styles.heading}>
            {data.title || 'Your Daily Bonus Is Waiting'}
            <span className={styles.titleHighlight}>
              {data.titleHighlight || "Claim Today's Reward."}
            </span>
          </h2>

          <p className={styles.description}>
            {data.description}
          </p>

          <div className={styles.countdownWrap}>
            <span className={styles.countdownLabel}>
              <Clock size={13} color="#f59e0b" />
              <span>Resets In</span>
            </span>
            <span className={styles.countdownTimer}>
              {formatDigits(timeLeft.hours)}h {formatDigits(timeLeft.minutes)}m {formatDigits(timeLeft.seconds)}s
            </span>
          </div>

          <button
            type="button"
            className={styles.ctaButton}
            onClick={handleClaim}
            aria-label="Claim your daily bonus reward"
          >
            <span>{claimed ? 'Bonus Claimed ✓' : (data.ctaText || 'Claim Bonus')}</span>
            <Gift size={16} className={styles.ctaIcon} />
          </button>
        </div>

        <div className={styles.visualColumn}>
          <DailyBonusVisual
            bonusAmount={data.bonusAmount}
            status={claimed ? 'Claimed Today' : (data.bonusStatus || 'Available Now')}
            onBoxClick={handleClaim}
          />
        </div>

        <div className={styles.actionColumn}>
          <div className={styles.streakCard}>
            <div className={styles.streakHeader}>
              <div className={styles.streakTitleWrap}>
                <Flame size={16} color="#f59e0b" />
                <h3 className={styles.streakTitle}>7-Day Streak</h3>
              </div>
              <span className={styles.streakBadge}>{completedCount} Days Active</span>
            </div>

            <div className={styles.streakGrid}>
              {data.streakDays?.map((item) => {
                const isCompleted = item.completed;
                const isCurrent = item.isCurrent;
                const isMega = item.isMega;

                const itemClass = isMega
                  ? styles.streakDayMega
                  : isCurrent
                  ? styles.streakDayCurrent
                  : isCompleted
                  ? styles.streakDayCompleted
                  : '';

                return (
                  <div
                    key={item.day}
                    className={`${styles.streakDayItem} ${itemClass}`}
                    title={`Day ${item.day}: ${item.reward || '+25'} Gems`}
                  >
                    <span className={styles.dayNumber}>D{item.day}</span>
                    <div className={styles.dayStatusIcon}>
                      {isCompleted ? (
                        <Check size={12} strokeWidth={3} />
                      ) : isMega ? (
                        <Sparkles size={12} color="#c084fc" />
                      ) : (
                        <span style={{ fontSize: '0.6rem', color: '#94a3b8' }}>{item.day}</span>
                      )}
                    </div>
                    <span className={styles.dayRewardText}>{item.reward || '+25'}</span>
                  </div>
                );
              })}
            </div>

            <div className={styles.streakProgressWrap}>
              <div className={styles.progressLabelRow}>
                <span>Streak Progress</span>
                <span className={styles.progressLabelValue}>
                  {completedCount} of {totalDays} Days ({progressPercent}%)
                </span>
              </div>
              <div className={styles.progressBarTrack}>
                <div
                  className={styles.progressBarFill}
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
            </div>

            <p className={styles.streakSubline}>
              <AlertCircle size={13} color="#fbbf24" />
              <span>Day 7 unlocks the +100 Gems Weekly Mega Chest!</span>
            </p>
          </div>
        </div>
      </div>

      {toastMessage && (
        <div className={styles.toastNotice}>
          <Info size={15} color="#fbbf24" />
          <span>{toastMessage}</span>
        </div>
      )}
    </article>
  );
}

export default DailyBonusBanner;
