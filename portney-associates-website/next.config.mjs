/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Founder name-variant aliases → canonical founder page (permanent, non-indexable duplicates avoided)
      { source: "/jp-portney", destination: "/jonathan-portney", permanent: true },
      { source: "/j-portney", destination: "/jonathan-portney", permanent: true },
      { source: "/jon-portney", destination: "/jonathan-portney", permanent: true },
    ];
  },
};

export default nextConfig;
