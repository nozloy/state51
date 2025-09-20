import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
}
module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '*.cdn.yclients.com',
			},
		],
	},
	allowedDevOrigins: ['*.yclients.com', 'nozloy.ru'],
}
export default nextConfig
