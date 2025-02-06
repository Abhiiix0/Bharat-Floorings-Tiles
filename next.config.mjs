import withVideos from "next-videos";

/** @type {import('next').NextConfig} */
const nextConfig = withVideos({
  images: {
    domains: ["res.cloudinary.com"],
  },
});

export default nextConfig;
