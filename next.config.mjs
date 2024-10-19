/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	images: {
		unoptimized: true,
		loader: 'imgix', // or 'cloudinary' or 'akamai', etc.
		path: '',
	},
	// images: {
	// 	remotePatterns: [
	// 		{
	// 			protocol: 'https',
	// 			hostname: 'landingpage.huglemon.com',
	// 		},
	// 	],
	// },
};

export default nextConfig;
