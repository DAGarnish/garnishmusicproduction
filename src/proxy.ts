import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",
  ],
};

export async function proxy(req: NextRequest) {
  const url = req.nextUrl;

  // Read root domain from env — set NEXT_PUBLIC_ROOT_DOMAIN in .env.local (dev) or your hosting platform (prod)
  // e.g. dev: "localhost:3000"  |  prod: "garnishmusicproduction.com" or any custom domain
  const rootDomain = process.env.NEXT_PUBLIC_ROOT_DOMAIN || "localhost:3000";

  // Get hostname of request (e.g. bh.garnishmusicproduction.com, bh.localhost:3000)
  const hostHeader = req.headers.get("host") || "";
  const hostname = hostHeader.replace(".localhost:3000", `.${rootDomain}`);

  // Get the path (e.g. /, /about, /courses)
  const path = url.pathname;

  // Check if it's the root domain
  if (
    hostname === rootDomain ||
    hostname === `www.${rootDomain}` ||
    hostname === "localhost:3000"
  ) {
    return NextResponse.next();
  }

  let subdomain = hostname.replace(`.${rootDomain}`, "");

  // Handle vercel preview/custom domains (e.g. bh.garnishmusicproduction.vercel.app vs garnishmusicproduction.vercel.app)
  if (hostname.endsWith(".vercel.app")) {
    const parts = hostname.split(".");
    // A standard vercel domain is 3 parts: project.vercel.app
    if (parts.length <= 3 || hostname.includes("---")) {
      return NextResponse.next();
    }
    // If it's a subdomain like bh.project.vercel.app, the first part is the subdomain
    subdomain = parts[0];
  }

  // Shared global routes that should not be scoped to a subdomain
  const sharedRoutes = ['/contact-map', '/connect', '/instructors'];
  if (sharedRoutes.some(route => path.startsWith(route))) {
    // Rewrite directly to the root-level path instead of /sites/subdomain/path
    return NextResponse.rewrite(new URL(path, req.url));
  }

  // Rewrite to the dynamically mapped route. 
  // For instance, if user visits bh.garnishmusicproduction.com/about 
  // It transparently rewrites to /sites/bh/about behind the scenes
  // You would create your Next.js file at src/app/sites/[subdomain]/page.tsx
  return NextResponse.rewrite(new URL(`/sites/${subdomain}${path}`, req.url));
}
