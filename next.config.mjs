/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/process", destination: "/testing#how-it-works", permanent: true },
      { source: "/transparency", destination: "/seal#product-transparency", permanent: true },
    ];
  },
};
export default nextConfig;
