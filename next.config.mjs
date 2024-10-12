/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
  // If your repository is not at the root of your GitHub Pages site, set the basePath
  // basePath: '/your-repo-name',
};

export default nextConfig;
