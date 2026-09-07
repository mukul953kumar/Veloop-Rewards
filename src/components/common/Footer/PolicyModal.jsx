import React, { useEffect } from 'react';
import { X, Shield, FileText, Award } from 'lucide-react';
import styles from './PolicyModal.module.css';

const policyContents = {
  privacy: {
    icon: Shield,
    title: 'Privacy Policy',
    sections: [
      {
        title: 'Information Collection & Usage',
        text: 'VELOOP Rewards collects minimal personal data required to authenticate your account and verify eligible rewards. We do not sell or monetize personal information.'
      },
      {
        title: 'Data Security & Protection',
        text: 'All account telemetry, transactions, and user sessions are encrypted using industry-standard 256-bit SSL protocols and stored on secure cloud infrastructure.'
      },
      {
        title: 'Cookies & Analytics',
        text: 'We utilize essential cookies solely to preserve session streaks, leaderboard rankings, and user preferences across browser reloads.'
      }
    ]
  },
  terms: {
    icon: FileText,
    title: 'Terms of Service',
    sections: [
      {
        title: 'Eligibility & Fair Play',
        text: 'Participation in VELOOP Rewards requires genuine user interaction. Automated scripts, VPN spoofing, and duplicate multi-accounts are strictly prohibited.'
      },
      {
        title: 'Token & Rewards Distribution',
        text: 'VE tokens, XP points, and digital perks earned on the platform represent loyalty credits and are subject to verification rules prior to redemption.'
      },
      {
        title: 'Account Responsibilities',
        text: 'Users are responsible for maintaining the confidentiality of their credentials and monitoring daily reset opportunities and challenge deadlines.'
      }
    ]
  },
  rules: {
    icon: Award,
    title: 'Reward Rules & Verification',
    sections: [
      {
        title: 'Ad Engagement Verification',
        text: 'Watch Ads & Earn credits are disbursed upon verified video playback completion. No daily cap applies to eligible featured sponsor ads.'
      },
      {
        title: 'Leaderboard Cycle & Distribution',
        text: 'Active competition stages reset every Sunday at midnight UTC. The top ranked participants receive prize pool distributions directly to their balance.'
      },
      {
        title: 'Streak Multipliers',
        text: 'Daily bonus check-ins must be completed every 24 hours. Missing a day resets the 7-day bonus progress ladder back to Day 1.'
      }
    ]
  }
};

function PolicyModal({ isOpen, onClose, policyType = 'privacy' }) {
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

  const content = policyContents[policyType] || policyContents.privacy;
  const IconComponent = content.icon;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalDialog} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div className={styles.headerTitleGroup}>
            <IconComponent size={18} className={styles.headerIcon} />
            <h3 className={styles.headerTitle}>{content.title}</h3>
          </div>
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={16} />
          </button>
        </div>

        <div className={styles.modalBody}>
          {content.sections.map((section, idx) => (
            <div key={idx} className={styles.section}>
              <h4 className={styles.sectionTitle}>{section.title}</h4>
              <p className={styles.sectionText}>{section.text}</p>
            </div>
          ))}
        </div>

        <div className={styles.modalFooter}>
          <button type="button" className={styles.confirmBtn} onClick={onClose}>
            Understood
          </button>
        </div>
      </div>
    </div>
  );
}

export default PolicyModal;
