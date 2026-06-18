import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.NEXT_PUBLIC_APP_ENV === "production";

  return {
    rules: {
      userAgent: "*",
      // Block ALL crawling when not in production (staging / migration phase).
      // Flip NEXT_PUBLIC_APP_ENV to "production" to open up crawling.
      disallow: isProduction ? [] : "/",
    },
    // Only advertise sitemap when live
    ...(isProduction && {
      sitemap: `https://${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/sitemap.xml`,
    }),
  };
}
