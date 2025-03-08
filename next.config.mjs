/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 15'te artık i18n bu şekilde kullanılmıyor
  // Kendi LanguageContext sistemimiz var
  eslint: {
    // Build üretiminde ESLint hatalarını görmezden gel
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Build üretiminde TypeScript hatalarını görmezden gel
    ignoreBuildErrors: true,
  },
};

export default nextConfig; 