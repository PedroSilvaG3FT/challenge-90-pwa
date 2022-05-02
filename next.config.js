/** @type {import('next').NextConfig} */

const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");

const nextConfig = { reactStrictMode: true };

module.exports = withPlugins([
    [nextConfig],
    [
        withPWA,
        {
            pwa: {
                // disable: process.env.NODE_ENV === "development",
                dest: "public",
                register: true,
                sw: "/sw.js",
            },
        },
    ],
]);
