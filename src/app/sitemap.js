export default function sitemap() {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/book_at_caravan_serai`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/about_us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/restaurants/moroccan`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/restaurants/franch`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/restaurants/menu`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/events/seminars`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/events/weddings`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/events/private_events`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/spa_and_wellness/hammam_and_messages`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/spa_and_wellness/hair_removal`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/spa_and_wellness/body_care`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/spa_and_wellness/hands_and_feet`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/experiences/billiards`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/experiences/hiking_and_cycling`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },

    {
      url: `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/experiences/yoga_sessions`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}