/** @type {import('next').NextConfig} */
const { withPlausibleProxy } = require('next-plausible')

const nextConfig = {
	reactStrictMode: true,
	async redirects() {
		return [
			{
				source: '/cv',
				destination: 'https://cv.cargill.dev',
				permanent: true
			},
			{
				source: '/studentbeans',
				destination: 'https://studentbeans.com',
				permanent: true
			},
			{
				source: '/payday',
				destination: 'https://www.payday.so',
				permanent: true
			},
			{
				source: '/ayybee',
				destination: 'https://www.ayybee.xyz',
				permanent: true
			},
			{
				source: '/discord',
				destination: 'https://discord.com/users/243843255928750090',
				permanent: true
			},
			{
				source: '/github',
				destination: 'https://github.com/dcrgll',
				permanent: true
			},
			{
				source: '/linkedin',
				destination: 'https://www.linkedin.com/in/daaaan',
				permanent: true
			},
			{
				source: '/email',
				destination: 'mailto:dan@cargill.dev',
				permanent: true
			},
			{
				source: '/twitter',
				destination: 'https://www.twitter.com/dcrgll',
				permanent: true
			},
			{
				source: '/instagram',
				destination: 'https://www.instagram.com/dncrgll',
				permanent: true
			},
			{
				source: '/soundcloud',
				destination: 'https://soundcloud.com/dncrgll',
				permanent: true
			},
			{
				source: '/casdron',
				destination: 'https://casdron.co.uk',
				permanent: false
			},
			{
				source: '/one-planet-plate',
				destination: 'https://www.oneplanetplate.org',
				permanent: false
			},
			{
				source: '/conjurer',
				destination: 'https://conjureruk.com',
				permanent: false
			},
			{
				source: '/carton',
				destination: 'https://bycarton.io',
				permanent: false
			}
		]
	},
	images: {
		remotePatterns: [{ hostname: 'images.ctfassets.net' }]
	}
}

module.exports = withPlausibleProxy()(nextConfig)
