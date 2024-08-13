// src/utils/services.js

import SeoImage from '../assets/services/seo.png';
import PpcImage from '../assets/services/ppc.png';
import SocialMediaImage from '../assets/services/smm.png';
import ContentCreationImage from '../assets/services/content-creation.png';
import EmailMarketingImage from '../assets/services/email-marketing.png';
import AnalyticsImage from '../assets/services/analytics.png';

export const servicesData = [
    {
        title: 'SEO Optimization',
        description: 'Improve your website’s visibility on search engines with our SEO services.',
        image: SeoImage,
        backgroundColor: 'bg-[#F3F3F3]',
        foregroundColor: 'bg-primary',
        textColor: 'text-black',
    },
    {
        title: 'PPC Advertising',
        description: 'Boost your online presence with targeted PPC advertising campaigns.',
        image: PpcImage,
        backgroundColor: 'bg-primary',
        foregroundColor: 'bg-white',
        textColor: 'text-blue-900'
    },
    {
        title: 'Social Media Marketing',
        description: 'Engage your audience and grow your brand on social media platforms.',
        image: SocialMediaImage,
        backgroundColor: 'bg-green-100',
        foregroundColor: 'bg-green-500',
        textColor: 'text-green-900'
    },
    {
        title: 'Content Creation',
        description: 'Create compelling content that drives engagement and conversions.',
        image: ContentCreationImage,
        backgroundColor: 'bg-red-100',
        foregroundColor: 'bg-red-500',
        textColor: 'text-red-900'
    },
    {
        title: 'Email Marketing',
        description: 'Reach your audience directly with targeted email campaigns and newsletters.',
        image: EmailMarketingImage,
        backgroundColor: 'bg-purple-100',
        foregroundColor: 'bg-purple-500',
        textColor: 'text-purple-900'
    },
    {
        title: 'Analytics',
        description: 'Track and analyze your website’s performance to make data-driven decisions.',
        image: AnalyticsImage,
        backgroundColor: 'bg-gray-100',
        foregroundColor: 'bg-primary',
        textColor: 'text-gray-900'
    }
];
