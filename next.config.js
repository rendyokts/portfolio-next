/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dxgsqxdi3/**"
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/ddyw1qr9c/**"
      },
      {
        hostname: "i.scdn.co",
      },
      {
        hostname: "lh3.googleusercontent.com",
      }
    ],
  },
};

module.exports = nextConfig;
