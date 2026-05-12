import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        disallow: ['/_next/'],
      },
    ],
    sitemap: 'https://lukasstinson.com/sitemap.xml',
  };
}