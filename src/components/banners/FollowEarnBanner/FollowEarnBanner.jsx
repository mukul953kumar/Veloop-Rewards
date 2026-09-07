import React, { useState } from 'react';
import { 
  Gift, 
  ArrowRight, 
  ShieldCheck, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles,
  Info
} from 'lucide-react';
import { 
  FaInstagram, 
  FaYoutube, 
  FaXTwitter, 
  FaTelegram, 
  FaLinkedin 
} from 'react-icons/fa6';
import FollowEarnVisual from './FollowEarnVisual';
import { followEarnData } from '../../../data/rewardsData';
import styles from './FollowEarnBanner.module.css';

const channelIconMap = {
  instagram: FaInstagram,
  youtube: FaYoutube,
  x: FaXTwitter,
  telegram: FaTelegram,
  linkedin: FaLinkedin
};

function FollowEarnBanner({ data = followEarnData, onAction }) {
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage('');
    }, 2500);
  };

  const handleChannelClick = (e, channel) => {
    e.preventDefault();
    showToast(`Exploring official ${channel.name} channel: ${channel.handle}`);
    if (onAction) {
      onAction(channel.id);
    }
  };

  const handleCtaClick = () => {
    if (onAction) {
      onAction('explore');
    } else {
      showToast('Opening official VELOOP social campaigns hub...');
    }
  };

  const handleFollowToggle = (isFollowing) => {
    showToast(isFollowing ? 'Subscribed to VELOOP Rewards official updates!' : 'Notifications muted.');
  };

  return (
    <article className={styles.bannerCard}>
      <div className={styles.bannerGrid}>
        {/* Left Column: Content */}
        <div className={styles.contentColumn}>
          <div className={styles.badgeHeader}>
            <span className={styles.cornerBadge}>{data.cornerBadge || '4'}</span>
            <div className={styles.stageBadge}>
              <span className={styles.stagePulseDot}></span>
              <span>{data.badge || 'FOLLOW & EARN'}</span>
            </div>
          </div>

          <h2 className={styles.heading}>
            {data.title || 'Follow & Earn'}{' '}
            <span className={styles.titleHighlight}>{data.titleHighlight || 'Stay Connected.'}</span>
          </h2>

          <p className={styles.description}>
            {data.description}
          </p>

          <button
            type="button"
            className={styles.ctaButton}
            onClick={handleCtaClick}
          >
            <span>{data.ctaText || 'Explore Our Channels'}</span>
            <ArrowRight size={17} className={styles.ctaIcon} />
          </button>

          <div className={styles.trustNote}>
            <ShieldCheck size={14} />
            <span>Verified Official Community Channels</span>
          </div>
        </div>

        {/* Middle Column: Visual Mockup */}
        <div className={styles.visualColumn}>
          <FollowEarnVisual onFollowToggle={handleFollowToggle} />
        </div>

        {/* Right Column: Reward Teaser & Social Channels */}
        <div className={styles.actionColumn}>
          {/* Reward Teaser Card */}
          <div className={styles.rewardTeaserCard}>
            <div className={styles.rewardIconWrap}>
              <Gift size={20} />
            </div>
            <div className={styles.rewardInfo}>
              <p className={styles.rewardDisclaimer}>
                {data.disclaimer || 'Participate in eligible social campaigns and unlock rewards.'}
              </p>
              <div className={styles.rewardValueRow}>
                <span className={styles.rewardAmount}>{data.rewardAmount || '+500 SVEs'}</span>
                <span className={styles.rewardBadge}>{data.rewardSubtitle || 'Demo Campaign'}</span>
              </div>
            </div>
          </div>

          {/* Official Social Channels Card */}
          <div className={styles.channelsContainer}>
            <div className={styles.channelsHeader}>
              <span className={styles.channelsTitle}>
                <Sparkles size={13} color="#c084fc" />
                Official Channels ({data.channels?.length || 5})
              </span>
              <div className={styles.channelStatusPill}>
                <span className={styles.statusLiveDot}></span>
                <span>Active</span>
              </div>
            </div>

            <div className={styles.channelsList}>
              {data.channels?.map((channel) => {
                const IconComponent = channelIconMap[channel.id] || FaInstagram;
                return (
                  <div
                    key={channel.id}
                    className={styles.channelItem}
                    onClick={(e) => handleChannelClick(e, channel)}
                    role="button"
                    tabIndex={0}
                  >
                    <div className={styles.channelLeft}>
                      <span className={styles.channelIcon} style={{ color: channel.color }}>
                        <IconComponent />
                      </span>
                      <div className={styles.channelInfo}>
                        <span className={styles.channelName}>{channel.name}</span>
                        <span className={styles.channelHandle}>{channel.handle}</span>
                      </div>
                    </div>

                    <div className={styles.channelRight}>
                      <span className={styles.channelCount}>{channel.members}</span>
                      <span className={styles.channelFollowAction} title={`Visit ${channel.name}`}>
                        <ExternalLink size={11} />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {toastMessage && (
        <div className={styles.toastNotice}>
          <Info size={15} color="#c084fc" />
          <span>{toastMessage}</span>
        </div>
      )}
    </article>
  );
}

export default FollowEarnBanner;
