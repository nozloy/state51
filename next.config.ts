import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	output: 'standalone',
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '*.cdn.yclients.com',
			},
		],
	},
	allowedDevOrigins: ['*.yclients.com', 'nozloy.ru', 'barberstate51.ru'],
}

export default nextConfig
