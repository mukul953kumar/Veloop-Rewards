import React, { useState, useEffect } from 'react';
import Navbar from './components/common/Navbar/Navbar';
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

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'rankings' || hash === 'watch-ads' || hash === 'follow-earn') {
        setCurrentPage(hash);
      } else if (hash === '' || hash === 'home' || hash === 'leaderboard' || hash === 'contact' || hash === 'social-channels' || hash === 'daily-bonus') {
        setCurrentPage('home');
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

  return (
    <div className={styles.appWrapper}>
      <Navbar onNavigate={navigateTo} />

      <main className={styles.mainContent}>
        <div className="banner-container">
          {currentPage === 'home' ? (
            <section className={styles.bannersList}>
              <div id="leaderboard">
                <LeaderboardBanner onAction={() => navigateTo('rankings')} />
              </div>
              <div id="watch-ads">
                <WatchAdsBanner onAction={() => navigateTo('watch-ads')} />
              </div>
              <div id="contact">
                <ContactBanner onOpenSupport={handleOpenSupport} />
              </div>
              <div id="follow-earn">
                <FollowEarnBanner />
              </div>
              <div id="daily-bonus">
                <DailyBonusBanner />
              </div>
            </section>
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
