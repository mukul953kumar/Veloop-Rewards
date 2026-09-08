import React from 'react';
import { 
  Layers, 
  Trophy, 
  PlayCircle, 
  MessageCircle, 
  Users, 
  Gift, 
  LayoutList, 
  Maximize2 
} from 'lucide-react';
import styles from './ShowcaseNav.module.css';

const navItems = [
  { id: 'all', label: 'All Banners', badge: '5', icon: Layers, activeClass: styles.tabActiveAll },
  { id: 'leaderboard', label: 'Leaderboard', badge: '01', icon: Trophy, activeClass: styles.tabActiveLeaderboard },
  { id: 'watch-ads', label: 'Watch Ads', badge: '02', icon: PlayCircle, activeClass: styles.tabActiveWatchAds },
  { id: 'contact', label: 'Contact Us', badge: '03', icon: MessageCircle, activeClass: styles.tabActiveContact },
  { id: 'follow-earn', label: 'Follow & Earn', badge: '04', icon: Users, activeClass: styles.tabActiveFollowEarn },
  { id: 'daily-bonus', label: 'Daily Bonus', badge: '05', icon: Gift, activeClass: styles.tabActiveDailyBonus }
];

function ShowcaseNav({ activeTab = 'all', onSelectTab, viewMode = 'stacked', onToggleViewMode }) {
  return (
    <nav className={styles.navWrapper} aria-label="Banners showcase filter">
      <div className={styles.navContainer}>
        <div className={styles.tabsScrollArea} role="tablist">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeTab === item.id;
            const activeStyle = isActive ? item.activeClass : '';

            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`${styles.tabItem} ${activeStyle}`}
                onClick={() => onSelectTab(item.id)}
              >
                <IconComponent size={14} />
                <span>{item.label}</span>
                <span className={styles.tabBadge}>{item.badge}</span>
              </button>
            );
          })}
        </div>

        <div className={styles.viewModeControls}>
          <button
            type="button"
            className={`${styles.modeToggleBtn} ${styles.modeToggleActive}`}
            onClick={onToggleViewMode}
            title={viewMode === 'stacked' ? 'Switch to Focus View (1 card)' : 'Switch to Stacked View (all cards)'}
            aria-label="Toggle showcase view mode"
          >
            {viewMode === 'stacked' ? (
              <>
                <LayoutList size={14} />
                <span className={styles.modeText}>Stacked (5)</span>
              </>
            ) : (
              <>
                <Maximize2 size={14} />
                <span className={styles.modeText}>Focus (1)</span>
              </>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default ShowcaseNav;
