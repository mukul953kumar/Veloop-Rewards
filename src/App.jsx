import React from 'react';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.appWrapper}>
      <main className={styles.mainContent}>
        <div className="banner-container">
          <header className={styles.heroHeader}>
            <div className={styles.heroBadge}>VELOP Rewards Platform</div>
            <h1 className={styles.heroTitle}>Engage, Earn & Compete</h1>
            <p className={styles.heroSubtitle}>
              Interactive reward banners designed for maximum engagement and seamless user experience.
            </p>
          </header>

          <section className={styles.bannersList}>
            <div className={styles.emptyStateCard}>
              <h2 className={styles.emptyStateTitle}>Day 01 Setup Complete</h2>
              <p>Project foundation, design system variables, and responsive container structure are ready.</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
