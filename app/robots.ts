import type { MetadataRoute } from 'next';
import { SITE_URL } from '../lib/paths';
export const dynamic = 'force-static';
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: '*', allow: '/vino_tobar_site/' }, sitemap: `${SITE_URL}sitemap.xml` }; }
