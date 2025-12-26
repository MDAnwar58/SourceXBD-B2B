/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: "http",
            hostname: "localhost",
         },
         {
            protocol: "https",
            hostname: "**",
         },
      ],
      unoptimized: true,
   },
   compress: true,
   // reactStrictMode: true, // for not production
   // experimental: {
   //    reactRoot: true, // not for production
   // },
   //    experimental: {
   //       isrMemoryCacheSize: 0,
   //    },
};

export default nextConfig;
