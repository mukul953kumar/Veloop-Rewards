import React, { useState } from 'react';
import Navbar from './components/common/Navbar/Navbar';
import PreviewController from './components/common/PreviewController/PreviewController';
import LeaderboardBanner from './components/banners/LeaderboardBanner/LeaderboardBanner';
import Footer from './components/common/Footer/Footer';
import styles from './App.module.css';

function App() {
  const [viewportMode, setViewportMode] = useState('desktop');

  const getViewportClass = () => {
    switch (viewportMode) {
      case 'tablet':
        return styles.viewportTablet;
      case 'mobile':
        return styles.viewportMobile;
      default:
        return styles.viewportDesktop;
    }
  };

  return (
    <div className={styles.appWrapper}>
      <Navbar />

      <main className={styles.mainContent}>
        <div className="banner-container">
          <PreviewController
            currentMode={viewportMode}
            onModeChange={setViewportMode}
          />

          <div className={`${styles.viewportWrapper} ${getViewportClass()}`}>
            <section className={styles.bannersList}>
              <LeaderboardBanner />
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
