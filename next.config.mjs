/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  
  images: {
    // This allows you to use quality={100} in your Image components
    qualities: [75, 100],
  },
};

export default nextConfig;