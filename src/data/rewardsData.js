export const leaderboardData = {
  stageBadge: 'COMPETITION STAGE ACTIVE',
  title: 'Rank Higher.',
  titleHighlight: 'Earn More.',
  description: 'Complete activities, earn rewards, gain XP, and compete with other users to climb the leaderboard.',
  prizePool: '50,000 VEs in prizes',
  ctaText: 'Check Rankings',
  podium: [
    {
      rank: 2,
      badge: '02',
      badgeColor: '#3b82f6',
      username: 'User B',
      points: '11,820 VEs'
    },
    {
      rank: 1,
      badge: '01',
      badgeColor: '#f59e0b',
      username: 'User A',
      points: '12,450 VEs'
    },
    {
      rank: 3,
      badge: '03',
      badgeColor: '#ea580c',
      username: 'User C',
      points: '10,970 VEs'
    }
  ]
};

export const watchAdsData = {
  badge: 'ON-DEMAND REWARDS',
  title: 'Watch Ads.',
  titleHighlight: 'Earn VEs.',
  description: 'Watch eligible advertisements and earn VEs for completing ad activities.',
  features: ['No Daily Cap', 'Instant Credits'],
  ctaText: 'Watch & Earn',
  rewardText: '+38 VEs'
};

export const contactData = {
  cornerBadge: '3',
  badge: 'CONTACT US',
  title: 'Need Help?',
  titleHighlight: "We're Here.",
  description: 'Have a question, concern, or need assistance? Get in touch with the VELOOP Rewards team.',
  ctaText: 'Contact Support',
  email: 'velooprewardsofficial@gmail.com',
  boxTitle: "We're here to help",
  links: [
    { label: 'Help Center', href: '#' },
    { label: 'Submit a Ticket', href: '#' }
  ]
};

export const followEarnData = {
  cornerBadge: '4',
  badge: 'FOLLOW & EARN',
  title: 'Follow & Earn',
  titleHighlight: 'Stay Connected.',
  description: 'Follow VELOOP Rewards on our official channels and participate in eligible social campaigns to unlock rewards.',
  ctaText: 'Explore Our Channels',
  disclaimer: 'Participate in eligible social campaigns and unlock rewards.',
  handle: '@velooprewards',
  stats: {
    posts: '128',
    followers: '24.5K',
    following: '8'
  },
  rewardAmount: '+500 SVEs',
  rewardSubtitle: 'Demo Campaign',
  channels: [
    {
      id: 'instagram',
      name: 'Instagram',
      handle: '@velooprewards',
      members: '24.5K Followers',
      url: 'https://instagram.com',
      color: '#E1306C',
      tag: 'Official'
    },
    {
      id: 'youtube',
      name: 'YouTube',
      handle: 'VELOOP Rewards',
      members: '18.2K Subscribers',
      url: 'https://youtube.com',
      color: '#FF0000',
      tag: 'Media'
    },
    {
      id: 'x',
      name: 'X / Twitter',
      handle: '@velooprewards',
      members: '31.4K Followers',
      url: 'https://x.com',
      color: '#1DA1F2',
      tag: 'News'
    },
    {
      id: 'telegram',
      name: 'Telegram',
      handle: 't.me/velooprewards',
      members: '15.8K Members',
      url: 'https://telegram.org',
      color: '#229ED9',
      tag: 'Community'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      handle: 'VELOOP Rewards',
      members: '9.4K Followers',
      url: 'https://linkedin.com',
      color: '#0A66C2',
      tag: 'Company'
    }
  ]
};

export const dailyBonusData = {
  cornerBadge: '5',
  badge: 'DAILY BONUS',
  title: 'Your Daily Bonus Is Waiting',
  titleHighlight: "Claim Today's Reward.",
  description: 'Check in regularly and claim your available daily bonus before the opportunity resets.',
  ctaText: 'Claim Bonus',
  bonusAmount: '+25 GEMS',
  bonusStatus: 'Available Now',
  completedDays: 6,
  totalDays: 7,
  resetHours: 14,
  resetMinutes: 23,
  resetSeconds: 45,
  streakDays: [
    { day: 1, reward: '+10', completed: true },
    { day: 2, reward: '+15', completed: true },
    { day: 3, reward: '+20', completed: true },
    { day: 4, reward: '+20', completed: true },
    { day: 5, reward: '+25', completed: true },
    { day: 6, reward: '+25', completed: true, isCurrent: true },
    { day: 7, reward: '+100', completed: false, isMega: true }
  ]
};

