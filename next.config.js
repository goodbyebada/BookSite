// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

const apiURL = "https://www.aladin.co.kr/ttb/api";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // async rewrites() {
  //   return [
  //     {
  //       destination: `${apiURL}/:path*`,
  //       source: "/:path*",
  //     },
  //
  // },
};

module.exports = nextConfig;
