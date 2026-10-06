/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Sirve el mismo sitio HTML publicado en segundopinto.netlify.app
  async rewrites() {
    return {
      beforeFiles: [
        { source: '/', destination: '/portfolio.html' },
        { source: '/intro', destination: '/intro.html' },
        { source: '/portfolio', destination: '/portfolio.html' },
      ],
    };
  },
};

module.exports = nextConfig;
