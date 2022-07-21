/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')
const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')

const nextConfig = { reactStrictMode: true }

const withImagesConfig = {
    esModule: true,
    images: {
        disableStaticImages: true
    }
}

const withPWAConfig = {
    pwa: {
        dest: 'public',
        register: true,
        skipWaiting: true
    }
}

module.exports = withPlugins([
    [nextConfig],
    [withImages, withImagesConfig],
    [withPWA, withPWAConfig]
])
