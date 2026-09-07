import React, { useState } from 'react';
import { ShieldCheck, Zap, Info } from 'lucide-react';
import PolicyModal from './PolicyModal';
import styles from './Footer.module.css';

function Footer({ onOpenSupport, onNavigate }) {
  const [activePolicy, setActivePolicy] = useState(null);
  const [toastText, setToastText] = useState('');

  const showToast = (message) => {
    setToastText(message);
    setTimeout(() => {
      setToastText('');
    }, 2500);
  };

  const handleScrollTo = (elementId) => {
    if (onNavigate) {
      onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById(elementId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 120);
    } else {
      const el = document.getElementById(elementId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleSupportLink = (tab) => {
    if (onOpenSupport) {
      onOpenSupport(tab);
    } else {
      handleScrollTo('contact');
    }
  };

  const handleEmailCopy = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText('velooprewardsofficial@gmail.com');
      }
      showToast('Support email copied to clipboard!');
    } catch {
      showToast('Support email: velooprewardsofficial@gmail.com');
    }
  };

  const handleLogoClick = () => {
    if (onNavigate) {
      onNavigate('home');
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={`banner-container ${styles.footerContainer}`}>
        <div className={styles.topSection}>
          <div className={styles.brandCol}>
            <div
              className={styles.brandLogo}
              onClick={handleLogoClick}
              style={{ cursor: 'pointer' }}
            >
              <span className={styles.logoVeloop}>VELOOP</span>
              <span className={styles.logoRewards}>REWARDS</span>
            </div>
            <p className={styles.brandTagline}>
              Next-generation rewards and gamified fintech ecosystem. Earn, rank, and unlock exclusive rewards.
            </p>
            <div className={styles.systemStatus}>
              <span className={styles.statusDot}></span>
              <span>All Systems Operational</span>
            </div>
          </div>

          <div className={styles.linksGroup}>
            <div className={styles.linksCol}>
              <h4 className={styles.linksTitle}>Features</h4>
              <ul className={styles.linksList}>
                <li>
                  <button
                    type="button"
                    className={styles.footerLink}
                    onClick={() => handleScrollTo('leaderboard')}
                  >
                    Leaderboard
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className={styles.footerLink}
                    onClick={() => handleScrollTo('watch-ads')}
                  >
                    Watch & Earn
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className={styles.footerLink}
                    onClick={() => showToast('Daily Bonus banner unlocks in Day 11!')}
                  >
                    Daily Bonus
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className={styles.footerLink}
                    onClick={() => handleScrollTo('follow-earn')}
                  >
                    Follow & Earn
                  </button>
                </li>
              </ul>
            </div>

            <div className={styles.linksCol}>
              <h4 className={styles.linksTitle}>Support</h4>
              <ul className={styles.linksList}>
                <li>
                  <button
                    type="button"
                    className={styles.footerLink}
                    onClick={() => handleSupportLink('faq')}
                  >
                    Help Center
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className={styles.footerLink}
                    onClick={() => handleSupportLink('message')}
                  >
                    Submit Ticket
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className={styles.footerLink}
                    onClick={() => handleSupportLink('faq')}
                  >
                    Platform FAQ
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className={styles.footerLink}
                    onClick={handleEmailCopy}
                  >
                    Email Support
                  </button>
                </li>
              </ul>
            </div>

            <div className={styles.linksCol}>
              <h4 className={styles.linksTitle}>Security</h4>
              <div className={styles.trustBadge}>
                <ShieldCheck size={16} className={styles.shieldIcon} />
                <span>256-Bit SSL Encrypted</span>
              </div>
              <div className={styles.trustBadge}>
                <Zap size={16} className={styles.zapIcon} />
                <span>Instant Token Payouts</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            © 2026 VELOOP Rewards. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <button
              type="button"
              className={styles.legalLink}
              onClick={() => setActivePolicy('privacy')}
            >
              Privacy Policy
            </button>
            <span className={styles.linkDot}>•</span>
            <button
              type="button"
              className={styles.legalLink}
              onClick={() => setActivePolicy('terms')}
            >
              Terms of Service
            </button>
            <span className={styles.linkDot}>•</span>
            <button
              type="button"
              className={styles.legalLink}
              onClick={() => setActivePolicy('rules')}
            >
              Reward Rules
            </button>
          </div>
        </div>
      </div>

      {toastText && (
        <div className={styles.toastNotification}>
          <Info size={16} className={styles.toastIcon} />
          <span>{toastText}</span>
        </div>
      )}

      <PolicyModal
        isOpen={Boolean(activePolicy)}
        onClose={() => setActivePolicy(null)}
        policyType={activePolicy || 'privacy'}
      />
    </footer>
  );
}

export default Footer;
