import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Muhammad Portfolio',
        short_name: 'Mortal',
        description: 'A portfolio Progressive Web App built by Muhammad',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#000000',
        icons: [
            {
                src: '/Pwa-logos/web-app-manifest-192x192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'any',
            },
            {
                src: '/Pwa-logos/web-app-manifest-192x192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'maskable',
            },
            {
                src: '/Pwa-logos/web-app-manifest-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any',
            },
            {
                src: '/Pwa-logos/web-app-manifest-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable',
            },
        ],
        screenshots: [
            {
                src: '/logo.png',
                sizes: '1280x720',
                type: 'image/png',
                form_factor: 'wide',
            },
            {
                src: '/logo.png',
                sizes: '1080x1920',
                type: 'image/png',
                form_factor: 'narrow',
            },
        ],
    };
}
