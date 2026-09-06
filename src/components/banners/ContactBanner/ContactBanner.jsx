import React, { useState } from 'react';
import { MessageCircle, Mail, Copy, Check, BookOpen, ChevronRight, UserCheck } from 'lucide-react';
import ContactVisual from './ContactVisual';
import ContactModal from './ContactModal';
import { contactData } from '../../../data/rewardsData';
import styles from './ContactBanner.module.css';

function ContactBanner({ data = contactData, onAction, onOpenSupport }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState('message');

  const handleCopyEmail = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(data.email);
      }
      setCopiedEmail(true);
      setTimeout(() => {
        setCopiedEmail(false);
      }, 2000);
    } catch {
      setCopiedEmail(true);
      setTimeout(() => {
        setCopiedEmail(false);
      }, 2000);
    }
  };

  const handleOpenModal = (tab = 'message') => {
    if (onOpenSupport) {
      onOpenSupport(tab);
    } else {
      setModalTab(tab);
      setIsModalOpen(true);
    }
    if (onAction) {
      onAction();
    }
  };

  const handleLinkClick = (e, label) => {
    e.preventDefault();
    if (label.toLowerCase().includes('help')) {
      handleOpenModal('faq');
    } else {
      handleOpenModal('message');
    }
  };

  const getLinkIcon = (label) => {
    if (label.toLowerCase().includes('help')) {
      return <BookOpen size={15} className={styles.linkIcon} />;
    }
    return <Mail size={15} className={styles.linkIcon} />;
  };

  return (
    <article className={styles.bannerCard}>
      <div className={styles.bannerGrid}>
        <div className={styles.contentColumn}>
          <div className={styles.badgeHeader}>
            <span className={styles.cornerBadge}>{data.cornerBadge || '3'}</span>
            <span className={styles.stageBadge}>{data.badge || 'CONTACT US'}</span>
          </div>

          <h2 className={styles.heading}>
            {data.title || 'Need Help?'}{' '}
            <span className={styles.titleHighlight}>{data.titleHighlight || "We're Here."}</span>
          </h2>

          <p className={styles.description}>
            {data.description}
          </p>

          <button
            type="button"
            className={styles.ctaButton}
            onClick={() => handleOpenModal('message')}
          >
            <span>{data.ctaText || 'Contact Support'}</span>
            <MessageCircle size={18} className={styles.ctaIcon} />
          </button>
        </div>

        <div className={styles.visualColumn}>
          <ContactVisual onOpenSupport={handleOpenModal} />
        </div>

        <div className={styles.actionColumn}>
          <div className={styles.supportCard}>
            <div className={styles.cardHeader}>
              <UserCheck size={16} className={styles.headerIcon} />
              <span>{data.boxTitle || "We're here to help"}</span>
            </div>

            <div className={styles.emailSection}>
              <div className={styles.emailLabelRow}>
                <Mail size={14} className={styles.emailIcon} />
                <span>Email Us</span>
              </div>
              <span className={styles.emailAddress}>{data.email}</span>
              <button
                type="button"
                className={`${styles.copyButton} ${copiedEmail ? styles.copyButtonSuccess : ''}`}
                onClick={handleCopyEmail}
              >
                {copiedEmail ? (
                  <>
                    <Check size={14} className={styles.copyIcon} />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} className={styles.copyIcon} />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            <div className={styles.linksDivider}></div>

            <div className={styles.quickLinks}>
              {data.links?.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={styles.quickLinkItem}
                  onClick={(e) => handleLinkClick(e, link.label)}
                >
                  <div className={styles.linkLeft}>
                    {getLinkIcon(link.label)}
                    <span>{link.label}</span>
                  </div>
                  <ChevronRight size={14} className={styles.linkChevron} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {!onOpenSupport && (
        <ContactModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          initialTab={modalTab}
        />
      )}
    </article>
  );
}

export default ContactBanner;
