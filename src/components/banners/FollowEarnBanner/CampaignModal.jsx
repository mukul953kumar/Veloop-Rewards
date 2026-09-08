import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  Users, 
  Gift, 
  Check, 
  Copy, 
  ExternalLink, 
  ShieldCheck, 
  CheckCircle2, 
  Loader2
} from 'lucide-react';
import { 
  FaInstagram, 
  FaYoutube, 
  FaXTwitter, 
  FaTelegram, 
  FaLinkedin 
} from 'react-icons/fa6';
import styles from './CampaignModal.module.css';

const channelIconMap = {
  instagram: FaInstagram,
  youtube: FaYoutube,
  x: FaXTwitter,
  telegram: FaTelegram,
  linkedin: FaLinkedin
};

const initialCampaigns = [
  {
    id: 'launch-drop',
    title: 'Community Launch Drop',
    reward: '+500 SVEs',
    description: 'Follow all 5 official VELOOP channels and maintain active notification status to claim the genesis community reward drop.',
    totalSteps: 5,
    claimed: false
  },
  {
    id: 'weekly-squad',
    title: 'Weekly Retweet & Repost Squad',
    reward: '+150 VEs',
    description: 'Engage with official platform announcements on X/Twitter and Telegram to earn weekly engagement multipliers.',
    totalSteps: 2,
    claimed: false
  },
  {
    id: 'alpha-community',
    title: 'Telegram Alpha VIP Access',
    reward: '+200 SVEs',
    description: 'Join the official VELOOP Telegram channel for early beta announcements, flash drops, and exclusive weekly promo codes.',
    totalSteps: 1,
    claimed: false
  }
];

function CampaignModal({ isOpen, onClose, channels = [], initialTab = 'channels', onClaimReward }) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [followedChannels, setFollowedChannels] = useState({
    instagram: true,
    youtube: true,
    x: true,
    telegram: false,
    linkedin: false
  });
  const [copiedChannelId, setCopiedChannelId] = useState(null);
  const [campaigns, setCampaigns] = useState(initialCampaigns);
  const [verifyingCampaignId, setVerifyingCampaignId] = useState(null);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const handleFollowToggle = (channelId) => {
    setFollowedChannels((prev) => ({
      ...prev,
      [channelId]: !prev[channelId]
    }));
  };

  const handleCopyHandle = async (channel) => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(channel.handle);
      }
      setCopiedChannelId(channel.id);
      setTimeout(() => setCopiedChannelId(null), 2000);
    } catch {
      setCopiedChannelId(channel.id);
      setTimeout(() => setCopiedChannelId(null), 2000);
    }
  };

  const handleClaimCampaign = (campaignId) => {
    setVerifyingCampaignId(campaignId);
    setTimeout(() => {
      setCampaigns((prev) =>
        prev.map((c) => (c.id === campaignId ? { ...c, claimed: true } : c))
      );
      setVerifyingCampaignId(null);
      if (onClaimReward) {
        onClaimReward(campaignId);
      }
    }, 1200);
  };

  const followedCount = Object.values(followedChannels).filter(Boolean).length;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalDialog} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div className={styles.headerTitleGroup}>
            <Sparkles size={20} className={styles.headerIcon} />
            <h3 className={styles.headerTitle}>VELOOP Social Channels & Campaigns</h3>
          </div>
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close dialog"
          >
            <X size={17} />
          </button>
        </div>

        <div className={styles.modalTabs}>
          <button
            type="button"
            className={`${styles.tabBtn} ${activeTab === 'channels' ? styles.tabBtnActive : ''}`}
            onClick={() => setActiveTab('channels')}
          >
            <Users size={15} />
            <span>Official Channels</span>
            <span className={styles.tabCount}>{channels.length || 5}</span>
          </button>

          <button
            type="button"
            className={`${styles.tabBtn} ${activeTab === 'campaigns' ? styles.tabBtnActive : ''}`}
            onClick={() => setActiveTab('campaigns')}
          >
            <Gift size={15} />
            <span>Active Campaigns</span>
            <span className={styles.tabCount}>{campaigns.length}</span>
          </button>
        </div>

        <div className={styles.modalBody}>
          {activeTab === 'channels' ? (
            <div className={styles.channelsGrid}>
              {channels.map((channel) => {
                const IconComponent = channelIconMap[channel.id] || FaInstagram;
                const isFollowed = Boolean(followedChannels[channel.id]);
                const isCopied = copiedChannelId === channel.id;

                return (
                  <div key={channel.id} className={styles.channelCard}>
                    <div className={styles.channelCardLeft}>
                      <div
                        className={styles.channelIconWrap}
                        style={{ color: channel.color }}
                      >
                        <IconComponent />
                      </div>

                      <div className={styles.channelMeta}>
                        <div className={styles.channelNameRow}>
                          <span className={styles.channelName}>{channel.name}</span>
                          <span className={styles.officialTag}>Verified</span>
                        </div>

                        <div className={styles.channelSubline}>
                          <button
                            type="button"
                            className={styles.copyHandleBtn}
                            onClick={() => handleCopyHandle(channel)}
                            title="Click to copy handle"
                          >
                            {isCopied ? (
                              <>
                                <Check size={12} color="#10b981" />
                                <span style={{ color: '#10b981' }}>Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy size={12} />
                                <span>{channel.handle}</span>
                              </>
                            )}
                          </button>
                          <span>•</span>
                          <span>{channel.members}</span>
                        </div>
                      </div>
                    </div>

                    <div className={styles.channelActions}>
                      <button
                        type="button"
                        className={`${styles.followToggleBtn} ${isFollowed ? styles.followedBtn : ''}`}
                        onClick={() => handleFollowToggle(channel.id)}
                      >
                        {isFollowed ? (
                          <>
                            <Check size={13} strokeWidth={2.5} />
                            <span>Following</span>
                          </>
                        ) : (
                          <>
                            <Sparkles size={13} />
                            <span>Follow</span>
                          </>
                        )}
                      </button>

                      <a
                        href={channel.url}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.openLinkBtn}
                        title={`Open ${channel.name}`}
                      >
                        <ExternalLink size={13} />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className={styles.campaignsList}>
              {campaigns.map((camp) => {
                const isVerifying = verifyingCampaignId === camp.id;
                const progressCurrent = camp.id === 'launch-drop' ? followedCount : camp.totalSteps;
                const progressPercent = Math.min(100, Math.round((progressCurrent / camp.totalSteps) * 100));

                return (
                  <div key={camp.id} className={styles.campaignCard}>
                    <div className={styles.campaignHeader}>
                      <div className={styles.campaignTitleWrap}>
                        <div className={styles.campaignBadgeIcon}>
                          <Gift size={16} />
                        </div>
                        <h4 className={styles.campaignTitle}>{camp.title}</h4>
                      </div>
                      <span className={styles.campaignRewardPill}>{camp.reward}</span>
                    </div>

                    <p className={styles.campaignDesc}>{camp.description}</p>

                    <div className={styles.progressBarContainer}>
                      <div className={styles.progressLabelRow}>
                        <span>Progress: {progressCurrent} of {camp.totalSteps} completed</span>
                        <span>{progressPercent}%</span>
                      </div>
                      <div className={styles.progressBarTrack}>
                        <div
                          className={styles.progressBarFill}
                          style={{ width: `${progressPercent}%` }}
                        ></div>
                      </div>
                    </div>

                    <button
                      type="button"
                      className={`${styles.claimButton} ${camp.claimed ? styles.claimedState : ''}`}
                      disabled={camp.claimed || isVerifying || progressPercent < 60}
                      onClick={() => handleClaimCampaign(camp.id)}
                    >
                      {isVerifying ? (
                        <>
                          <Loader2 size={14} className="spin-animation" />
                          <span>Verifying...</span>
                        </>
                      ) : camp.claimed ? (
                        <>
                          <CheckCircle2 size={14} />
                          <span>Reward Claimed!</span>
                        </>
                      ) : (
                        <>
                          <Sparkles size={14} />
                          <span>Verify & Claim {camp.reward}</span>
                        </>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className={styles.modalFooter}>
          <p className={styles.disclaimerText}>
            <ShieldCheck size={14} color="#10b981" />
            <span>Participate in eligible social campaigns and unlock official rewards.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CampaignModal;
