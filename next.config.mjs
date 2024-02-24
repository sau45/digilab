/** @type {import('next').NextConfig} */
const isLocal = process.env.NODE_ENV === "development";

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: isLocal
          ? "http://localhost:5050/api/:path*"
          : "https://nextjs-digilab-backend.vercel.app/:path*",
      },
    ];
  },
};



export default nextConfig;
