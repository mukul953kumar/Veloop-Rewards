import React, { useState, useEffect } from 'react';
import { X, Mail, MessageSquare, Send, CheckCircle2, HelpCircle, Copy, Check } from 'lucide-react';
import styles from './ContactModal.module.css';

function ContactModal({ isOpen, onClose, initialTab = 'message' }) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'general',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    setActiveTab(initialTab);
    setIsSubmitted(false);
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.message.trim()) {
      return;
    }
    setIsSubmitted(true);
  };

  const handleCopyDirectEmail = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText('velooprewardsofficial@gmail.com');
      }
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalDialog} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div className={styles.headerTitleGroup}>
            <MessageSquare size={18} className={styles.headerIcon} />
            <h3 className={styles.headerTitle}>VELOP Support & Help</h3>
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

        <div className={styles.modalTabs}>
          <button
            type="button"
            className={`${styles.tabBtn} ${activeTab === 'message' ? styles.tabBtnActive : ''}`}
            onClick={() => {
              setActiveTab('message');
              setIsSubmitted(false);
            }}
          >
            <Send size={14} />
            <span>Send a Ticket</span>
          </button>
          <button
            type="button"
            className={`${styles.tabBtn} ${activeTab === 'faq' ? styles.tabBtnActive : ''}`}
            onClick={() => setActiveTab('faq')}
          >
            <HelpCircle size={14} />
            <span>FAQ & Help Center</span>
          </button>
        </div>

        <div className={styles.modalBody}>
          {activeTab === 'message' ? (
            isSubmitted ? (
              <div className={styles.successNotice}>
                <CheckCircle2 size={46} className={styles.successIcon} />
                <h4 className={styles.successTitle}>Ticket Submitted Successfully</h4>
                <p className={styles.successDesc}>
                  Thank you! Our dedicated support team has received your inquiry and will respond to your email within 2 business hours.
                </p>
                <button
                  type="button"
                  className={styles.submitBtn}
                  onClick={onClose}
                >
                  Back to Platform
                </button>
              </div>
            ) : (
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="supportName" className={styles.label}>
                    Your Name
                  </label>
                  <input
                    id="supportName"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Alex Rivera"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="supportEmail" className={styles.label}>
                    Email Address
                  </label>
                  <input
                    id="supportEmail"
                    name="email"
                    type="email"
                    required
                    placeholder="e.g. user@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="supportCategory" className={styles.label}>
                    Inquiry Category
                  </label>
                  <select
                    id="supportCategory"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className={styles.select}
                  >
                    <option value="general">General Support</option>
                    <option value="rewards">Rewards & VE Tokens</option>
                    <option value="leaderboard">Leaderboard & Ranking</option>
                    <option value="technical">Technical / Bug Report</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="supportMessage" className={styles.label}>
                    How can we assist you?
                  </label>
                  <textarea
                    id="supportMessage"
                    name="message"
                    required
                    placeholder="Describe your issue or question in detail..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className={styles.textarea}
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  <Send size={15} />
                  <span>Submit Ticket</span>
                </button>
              </form>
            )
          ) : (
            <div className={styles.faqList}>
              <div className={styles.faqItem}>
                <span className={styles.faqQuestion}>When are VEs credited to my balance?</span>
                <span className={styles.faqAnswer}>
                  VE tokens are credited immediately upon completing verified activities such as watching eligible advertisements or claiming daily bonuses.
                </span>
              </div>

              <div className={styles.faqItem}>
                <span className={styles.faqQuestion}>How often does the leaderboard reset?</span>
                <span className={styles.faqAnswer}>
                  Active competition stages reset on a weekly cycle. Prize pool rewards are distributed automatically to top ranked participants.
                </span>
              </div>

              <div className={styles.faqItem}>
                <span className={styles.faqQuestion}>Can I participate across multiple devices?</span>
                <span className={styles.faqAnswer}>
                  Yes, your account streak, points, and rewards sync automatically across desktop, tablet, and mobile browsers.
                </span>
              </div>

              <div className={styles.directEmailBox}>
                <div className={styles.emailInfo}>
                  <span className={styles.emailLabel}>Need direct priority support?</span>
                  <span className={styles.emailValue}>velooprewardsofficial@gmail.com</span>
                </div>
                <button
                  type="button"
                  className={styles.emailCopyBtn}
                  onClick={handleCopyDirectEmail}
                >
                  {emailCopied ? (
                    <>
                      <Check size={13} />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
