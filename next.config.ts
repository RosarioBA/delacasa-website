import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/menu-frognerveien", destination: "/menu", permanent: true },
      { source: "/menu-1", destination: "/menu", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/take-away-frognerveien", destination: "/", permanent: true },
      { source: "/menu-briskeby", destination: "/bonita", permanent: true },
    ];
  },
};

export default nextConfig;
