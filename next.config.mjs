/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ['res.cloudinary.com', "gravatar.com"]
    }
};

export default nextConfig;
