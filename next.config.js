/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')
const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')

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
                disable: process.env.NODE_ENV === 'development',
                dest: 'public',
                register: true,
                sw: '/sw.js'
            }
        }
    ]
])
