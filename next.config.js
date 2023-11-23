/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dxgsqxdi3/**",
      },
      {
        hostname: "i.scdn.co",
      },
    ],
  },
};

module.exports = nextConfig;
