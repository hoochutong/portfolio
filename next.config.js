/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Static HTML 내보내기 설정
  images: {
    unoptimized: true,  // GitHub Pages 배포를 위해 필요
  },
  assetPrefix: './',  // GitHub Pages 배포를 위한 asset 경로 설정
}

module.exports = nextConfig 