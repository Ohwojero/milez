import { Award, Mic, Sparkles } from 'lucide-react'

export const serviceOptions = [
  'Sponsored Skit / Ad',
  'Event MC / Hosting',
  'Brand Ambassadorship',
  'Media Interview / Appearance',
  'Other Inquiry',
] as const

export const collaborationTypes = [
  {
    id: 'skits',
    service: serviceOptions[0],
    title: 'Brand Skits & Ads',
    tag: 'Highest ROI',
    description: 'Custom organic comedy skits naturally integrating your product or brand for viral social reach.',
    features: ['Custom Relatable Script', 'TikTok, IG & YouTube Post', 'High Engagement Delivery'],
    icon: Sparkles,
  },
  {
    id: 'hosting',
    service: serviceOptions[1],
    title: 'Event MC & Live Hosting',
    tag: 'Stage Energy',
    description: 'Dynamic host and MC for corporate galas, private celebrations, campus tours, and comedy nights.',
    features: ['Audience Hype & Crowd Control', 'Interactive Stand-Up Set', 'Unforgettable Atmosphere'],
    icon: Mic,
  },
  {
    id: 'ambassador',
    service: serviceOptions[2],
    title: 'Brand Ambassadorship',
    tag: 'Partnership',
    description: 'Long-term partnership representing your brand across digital campaigns, billboards, and media tours.',
    features: ['Exclusive Brand Face', 'Multi-Month Content Strategy', 'Dedicated Promotional Pushes'],
    icon: Award,
  },
] as const
