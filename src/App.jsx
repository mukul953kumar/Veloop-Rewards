import React, { useState, useEffect } from 'react';
import Navbar from './components/common/Navbar/Navbar';
import ShowcaseNav from './components/common/ShowcaseNav/ShowcaseNav';
import LeaderboardBanner from './components/banners/LeaderboardBanner/LeaderboardBanner';
import WatchAdsBanner from './components/banners/WatchAdsBanner/WatchAdsBanner';
import ContactBanner from './components/banners/ContactBanner/ContactBanner';
import FollowEarnBanner from './components/banners/FollowEarnBanner/FollowEarnBanner';
import DailyBonusBanner from './components/banners/DailyBonusBanner/DailyBonusBanner';
import ContactModal from './components/banners/ContactBanner/ContactModal';
import ComingSoonPage from './pages/ComingSoonPage/ComingSoonPage';
import Footer from './components/common/Footer/Footer';
import styles from './App.module.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [supportModalOpen, setSupportModalOpen] = useState(false);
  const [supportModalTab, setSupportModalTab] = useState('message');
  const [activeBannerTab, setActiveBannerTab] = useState('all');
  const [viewMode, setViewMode] = useState('stacked');
  const [highlightedId, setHighlightedId] = useState(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'rankings' || hash === 'watch-ads' || hash === 'follow-earn') {
        setCurrentPage(hash);
      } else if (hash === '' || hash === 'home' || hash === 'leaderboard' || hash === 'contact' || hash === 'social-channels' || hash === 'daily-bonus') {
        setCurrentPage('home');
        if (hash === 'leaderboard' || hash === 'contact' || hash === 'daily-bonus') {
          setActiveBannerTab(hash);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenSupport = (tab = 'message') => {
    setSupportModalTab(tab);
    setSupportModalOpen(true);
  };

  const handleSelectBannerTab = (tabId) => {
    setActiveBannerTab(tabId);
    if (viewMode === 'stacked') {
      if (tabId === 'all') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(tabId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          setHighlightedId(tabId);
          setTimeout(() => setHighlightedId(null), 1800);
        }
      }
    } else {
      if (tabId === 'all') {
        setViewMode('stacked');
      }
    }
  };

  const handleToggleViewMode = () => {
    setViewMode((prev) => {
      const nextMode = prev === 'stacked' ? 'focus' : 'stacked';
      if (nextMode === 'focus' && activeBannerTab === 'all') {
        setActiveBannerTab('leaderboard');
      }
      return nextMode;
    });
  };

  return (
    <div className={styles.appWrapper}>
      <Navbar onNavigate={navigateTo} />

      <main className={styles.mainContent}>
        <div className="banner-container">
          {currentPage === 'home' ? (
            <>
              <ShowcaseNav
                activeTab={activeBannerTab}
                onSelectTab={handleSelectBannerTab}
                viewMode={viewMode}
                onToggleViewMode={handleToggleViewMode}
              />

              {viewMode === 'focus' ? (
                <section className={styles.focusViewContainer}>
                  {activeBannerTab === 'leaderboard' && (
                    <div id="leaderboard" className={styles.bannerSectionItem}>
                      <LeaderboardBanner onAction={() => navigateTo('rankings')} />
                    </div>
                  )}
                  {activeBannerTab === 'watch-ads' && (
                    <div id="watch-ads" className={styles.bannerSectionItem}>
                      <WatchAdsBanner onAction={() => navigateTo('watch-ads')} />
                    </div>
                  )}
                  {activeBannerTab === 'contact' && (
                    <div id="contact" className={styles.bannerSectionItem}>
                      <ContactBanner onOpenSupport={handleOpenSupport} />
                    </div>
                  )}
                  {activeBannerTab === 'follow-earn' && (
                    <div id="follow-earn" className={styles.bannerSectionItem}>
                      <FollowEarnBanner />
                    </div>
                  )}
                  {activeBannerTab === 'daily-bonus' && (
                    <div id="daily-bonus" className={styles.bannerSectionItem}>
                      <DailyBonusBanner />
                    </div>
                  )}
                </section>
              ) : (
                <section className={styles.bannersList}>
                  <div
                    id="leaderboard"
                    className={`${styles.bannerSectionItem} ${highlightedId === 'leaderboard' ? styles.bannerHighlighted : ''}`}
                  >
                    <LeaderboardBanner onAction={() => navigateTo('rankings')} />
                  </div>
                  <div
                    id="watch-ads"
                    className={`${styles.bannerSectionItem} ${highlightedId === 'watch-ads' ? styles.bannerHighlighted : ''}`}
                  >
                    <WatchAdsBanner onAction={() => navigateTo('watch-ads')} />
                  </div>
                  <div
                    id="contact"
                    className={`${styles.bannerSectionItem} ${highlightedId === 'contact' ? styles.bannerHighlighted : ''}`}
                  >
                    <ContactBanner onOpenSupport={handleOpenSupport} />
                  </div>
                  <div
                    id="follow-earn"
                    className={`${styles.bannerSectionItem} ${highlightedId === 'follow-earn' ? styles.bannerHighlighted : ''}`}
                  >
                    <FollowEarnBanner />
                  </div>
                  <div
                    id="daily-bonus"
                    className={`${styles.bannerSectionItem} ${highlightedId === 'daily-bonus' ? styles.bannerHighlighted : ''}`}
                  >
                    <DailyBonusBanner />
                  </div>
                </section>
              )}
            </>
          ) : (
            <ComingSoonPage
              feature={currentPage}
              onBack={() => navigateTo('home')}
            />
          )}
        </div>
      </main>

      <Footer onOpenSupport={handleOpenSupport} onNavigate={navigateTo} />

      <ContactModal
        isOpen={supportModalOpen}
        onClose={() => setSupportModalOpen(false)}
        initialTab={supportModalTab}
      />
    </div>
  );
}

export default App;
