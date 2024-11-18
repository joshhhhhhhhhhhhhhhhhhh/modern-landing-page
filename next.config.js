/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Helps detect potential problems in the application
    swcMinify: true, // Enables SWC-based minification for faster builds
    images: {
        // Configure the image optimization settings
        domains: ['your-image-domain.com'], // Add allowed image domains
        formats: ['image/avif', 'image/webp'], // Enable modern image formats
    },
    experimental: {
        // Enables some experimental features that can improve performance
        optimizeImages: true, // Optimizes images automatically
        optimizeCss: true, // CSS optimization
        serverActions: true, // Experimental feature for server-side functions
    },
    async redirects() {
        return [
            {
                source: '/old-route',
                destination: '/new-route',
                permanent: true, // Can help with SEO
            },
        ]
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://external-api.com/:path*', // Proxy to external API
            },
        ]
    },
    reactRefresh: true, // Enables React Fast Refresh for better development experience
}

module.exports = nextConfig
