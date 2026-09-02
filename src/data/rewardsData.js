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
  badge: 'CONTACT US',
  title: 'Need Help?',
  titleHighlight: "We're Here.",
  description: 'Have a question, concern, or need assistance? Get in touch with the VELOOP Rewards team.',
  ctaText: 'Contact Support',
  email: 'velooprewardsofficial@gmail.com',
  links: [
    { label: 'Help Center', href: '#' },
    { label: 'Submit a Ticket', href: '#' }
  ]
};

export const followEarnData = {
  badge: 'FOLLOW & EARN',
  title: 'Follow & Earn',
  description: 'Follow VELOOP Rewards on our official channels and participate in eligible social campaigns to unlock rewards.',
  ctaText: 'Explore Our Channels',
  handle: '@veloprewards',
  stats: {
    posts: '128',
    followers: '24.5K',
    following: '8'
  },
  rewardAmount: '+500 SVEs',
  rewardSubtitle: 'Demo Campaign'
};

export const dailyBonusData = {
  badge: 'DAILY BONUS',
  title: 'Your Daily Bonus Is Waiting',
  description: 'Check in regularly and claim your available daily bonus before the opportunity resets.',
  ctaText: 'Claim Bonus',
  bonusAmount: '+25 GEMS',
  bonusStatus: 'Available Now',
  completedDays: 6,
  streakDays: [
    { day: 1, completed: true },
    { day: 2, completed: true },
    { day: 3, completed: true },
    { day: 4, completed: true },
    { day: 5, completed: true },
    { day: 6, completed: true },
    { day: 7, completed: false }
  ]
};
