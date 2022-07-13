/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')
const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')
const runtimeCaching = require('next-pwa/cache')
const nextConfig = { reactStrictMode: true }

module.exports = withPlugins([
    [nextConfig],
    [
        withImages,
        {
            esModule: true,
            images: {
                disableStaticImages: true
            }
        }
    ],
    [
        withPWA,
        {
            pwa: {
                dest: 'public',
                register: true,
                skipWaiting: true
                // disable: false,
                // dest: 'public',
                // register: true,
                // sw: '/sw.js'
            }
        }
    ]
])
