/** @type {import('next').NextConfig} */
const nextConfig = {
    // crossOrigin:['https://blood-donation-backend-gp2b.onrender.com']

    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: '**',  // allows all HTTPS hostnames
            },
            {
              protocol: 'http',
              hostname: '**',  // allows all HTTP hostnames
            },
          ],

      },
};

export default nextConfig;
