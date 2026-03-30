if (!self.define) {
    let e,
        s = {};
    const i = (i, a) => (
        (i = new URL(i + '.js', a).href),
        s[i] ||
            new Promise((s) => {
                if ('document' in self) {
                    const e = document.createElement('script');
                    (e.src = i), (e.onload = s), document.head.appendChild(e);
                } else (e = i), importScripts(i), s();
            }).then(() => {
                let e = s[i];
                if (!e)
                    throw new Error(`Module ${i} didn’t register its module`);
                return e;
            })
    );
    self.define = (a, c) => {
        const n =
            e ||
            ('document' in self ? document.currentScript.src : '') ||
            location.href;
        if (s[n]) return;
        let l = {};
        const o = (e) => i(e, n),
            r = { module: { uri: n }, exports: l, require: o };
        s[n] = Promise.all(a.map((e) => r[e] || o(e))).then(
            (e) => (c(...e), l)
        );
    };
}
define(['./workbox-f1770938'], function (e) {
    'use strict';
    importScripts(),
        self.skipWaiting(),
        e.clientsClaim(),
        e.precacheAndRoute(
            [
                {
                    url: '/Pwa-logos/web-app-manifest-512x512.png',
                    revision: '8d27187ec7739a904b5f5e901f2d5ef5',
                },
                {
                    url: '/Pwa-logos/web-app-manifest-512x512.png',
                    revision: 'f6ec5c8bf370f9dc9670aaa84e8b3239',
                },
                {
                    url: '/Pwa-logos/web-app-manifest-512x512.png',
                    revision: '1effdf416529d92ba023f1b756472339',
                },
                {
                    url: '/Pwa-logos/web-app-manifest-512x512.png',
                    revision: '78922bfb95c56e6e1adaf62111866c2e',
                },
                {
                    url: '/Pwa-logos/web-app-manifest-512x512.png',
                    revision: 'e84339c72cfb0797e92a41952897083a',
                },
                {
                    url: '/Pwa-logos/card.png',
                    revision: 'c59465cf2964b15728e3c3de30251bfa',
                },
                {
                    url: '/Pwa-logos/web-app-manifest-512x512.png',
                    revision: 'fa47d778fe38081ad5488de670764414',
                },
                {
                    url: '/Pwa-logos/web-app-manifest-512x512.png',
                    revision: '0687756bf01dcc1a7dc9c3394ffc5042',
                },
                {
                    url: '/website-overview.png',
                    revision: '14e1dcd6ea8afc2ba2f5ac14623400fc',
                },
                {
                    url: '/_next/static/chunks/0e762574-6c4a5d715e217f79.js',
                    revision: 'uDO7AAUZgTQ2ip0f58n9t',
                },
                {
                    url: '/_next/static/chunks/173-e7c17582bcee25ed.js',
                    revision: 'uDO7AAUZgTQ2ip0f58n9t',
                },
                {
                    url: '/_next/static/chunks/183-c60d10e3f13df6b5.js',
                    revision: 'uDO7AAUZgTQ2ip0f58n9t',
                },
                {
                    url: '/_next/static/chunks/229-0ac46130b00ad9fa.js',
                    revision: 'uDO7AAUZgTQ2ip0f58n9t',
                },
                {
                    url: '/_next/static/chunks/274-f170b3806151a23c.js',
                    revision: 'uDO7AAUZgTQ2ip0f58n9t',
                },
                {
                    url: '/_next/static/chunks/293-ac2af3ab2ed830f1.js',
                    revision: 'uDO7AAUZgTQ2ip0f58n9t',
                },
                {
                    url: '/_next/static/chunks/30a37ab2-2fa755a240d16e72.js',
                    revision: 'uDO7AAUZgTQ2ip0f58n9t',
                },
                {
                    url: '/_next/static/chunks/3d47b92a-79d77a955150937b.js',
                    revision: 'uDO7AAUZgTQ2ip0f58n9t',
                },
                {
                    url: '/_next/static/chunks/455-9626699e291c96d7.js',
                    revision: 'uDO7AAUZgTQ2ip0f58n9t',
                },
                {
                    url: '/_next/static/chunks/478-b06e3382fb5a6c25.js',
                    revision: 'uDO7AAUZgTQ2ip0f58n9t',
                },
                {
                    url: '/_next/static/chunks/488-be651eba7014c700.js',
                    revision: 'uDO7AAUZgTQ2ip0f58n9t',
                },
                {
                    url: '/_next/static/chunks/4bd1b696-69b5a592377d34e0.js',
                    revision: 'uDO7AAUZgTQ2ip0f58n9t',
                },
                {
                    url: '/_next/static/chunks/53c13509-251ab11791e3af24.js',
                    revision: 'uDO7AAUZgTQ2ip0f58n9t',
                },
                {
                    url: '/_next/static/chunks/566-c3d38342df2c2ce8.js',
                    revision: 'uDO7AAUZgTQ2ip0f58n9t',
                },
                {
                    url: '/_next/static/chunks/5e22fd23-442f77a52c6a1821.js',
                    revision: 'uDO7AAUZgTQ2ip0f58n9t',
                },
                {
                    url: '/_next/static/chunks/615-31c3213430a7f925.js',
                    revision: 'uDO7AAUZgTQ2ip0f58n9t',
                },
                {
                    url: '/_next/static/chunks/624-b828c799b9a0171b.js',
                    revision: 'uDO7AAUZgTQ2ip0f58n9t',
                },
                {
                    url: '/_next/static/chunks/649-ba98044ea6b9011b.js',
                    revision: 'uDO7AAUZgTQ2ip0f58n9t',
                },
                {
                    url: '/_next/static/chunks/795d4814-230aa6bc01909f26.js',
                    revision: 'uDO7AAUZgTQ2ip0f58n9t',
                },
                {
                    url: '/_next/static/chunks/845-36eaf52a3d93766b.js',
                    revision: 'uDO7AAUZgTQ2ip0f58n9t',
                },
                {
                    url: '/_next/static/chunks/8e1d74a4-169dc592ccccbaba.js',
                    revision: 'uDO7AAUZgTQ2ip0f58n9t',
                },
                {
                    url: '/_next/static/chunks/910-b81c42b7c62d88c5.js',
                    revision: 'uDO7AAUZgTQ2ip0f58n9t',
                },
                {
                    url: '/_next/static/chunks/94730671-e5c8754e0d720023.js',
                    revision: 'uDO7AAUZgTQ2ip0f58n9t',
                },
                {
                    url: '/_next/static/chunks/app/_not-found/page-8a896b67466a7c2f.js',
                    revision: 'uDO7AAUZgTQ2ip0f58n9t',
                },
                {
                    url: '/_next/static/chunks/app/components/about/page-d44da550dbcc29da.js',
                    revision: 'uDO7AAUZgTQ2ip0f58n9t',
                },
                {
                    url: '/_next/static/chunks/app/components/education/page-2e78b35ee8e2bab6.js',
                    revision: 'uDO7AAUZgTQ2ip0f58n9t',
                },
                {
                    url: '/_next/static/chunks/app/components/experience/page-c42321594c0aaa43.js',
                    revision: 'uDO7AAUZgTQ2ip0f58n9t',
                },
                {
                    url: '/_next/static/chunks/app/components/hero-section/page-66810ae5cdef3c99.js',
                    revision: 'uDO7AAUZgTQ2ip0f58n9t',
                },
                {
                    url: '/_next/static/chunks/app/components/skills/page-3556cd69f88bdf7b.js',
                    revision: 'uDO7AAUZgTQ2ip0f58n9t',
                },
                {
                    url: '/_next/static/chunks/app/layout-25ca73aa547a73a2.js',
                    revision: 'uDO7AAUZgTQ2ip0f58n9t',
                },
                {
                    url: '/_next/static/chunks/app/page-bd481f96ab7e1964.js',
                    revision: 'uDO7AAUZgTQ2ip0f58n9t',
                },
                {
                    url: '/_next/static/chunks/app/projects/%5Bid%5D/page-47ec76623e149396.js',
                    revision: 'uDO7AAUZgTQ2ip0f58n9t',
                },
                {
                    url: '/_next/static/chunks/app/projects/page-d48b6c096eeee5a7.js',
                    revision: 'uDO7AAUZgTQ2ip0f58n9t',
                },
                {
                    url: '/_next/static/chunks/c15bf2b0-ab03a155d0d7e7fd.js',
                    revision: 'uDO7AAUZgTQ2ip0f58n9t',
                },
                {
                    url: '/_next/static/chunks/f8025e75-798c90b793983ffc.js',
                    revision: 'uDO7AAUZgTQ2ip0f58n9t',
                },
                {
                    url: '/_next/static/chunks/framework-d29117d969504448.js',
                    revision: 'uDO7AAUZgTQ2ip0f58n9t',
                },
                {
                    url: '/_next/static/chunks/main-app-ea465f3034e72618.js',
                    revision: 'uDO7AAUZgTQ2ip0f58n9t',
                },
                {
                    url: '/_next/static/chunks/main-c9d26e0caf71ac90.js',
                    revision: 'uDO7AAUZgTQ2ip0f58n9t',
                },
                {
                    url: '/_next/static/chunks/pages/_app-d23763e3e6c904ff.js',
                    revision: 'uDO7AAUZgTQ2ip0f58n9t',
                },
                {
                    url: '/_next/static/chunks/pages/_error-9b7125ad1a1e68fa.js',
                    revision: 'uDO7AAUZgTQ2ip0f58n9t',
                },
                {
                    url: '/_next/static/chunks/polyfills-42372ed130431b0a.js',
                    revision: '846118c33b2c0e922d7b3a7676f81f6f',
                },
                {
                    url: '/_next/static/chunks/webpack-3a3a35c975d7d449.js',
                    revision: 'uDO7AAUZgTQ2ip0f58n9t',
                },
                {
                    url: '/_next/static/css/c01560aa8504b6e3.css',
                    revision: 'c01560aa8504b6e3',
                },
                {
                    url: '/_next/static/css/de27f1c1334c3538.css',
                    revision: 'de27f1c1334c3538',
                },
                {
                    url: '/_next/static/media/4473ecc91f70f139-s.p.woff',
                    revision: '78e6fc13ea317b55ab0bd6dc4849c110',
                },
                {
                    url: '/_next/static/media/463dafcda517f24f-s.p.woff',
                    revision: 'cbeb6d2d96eaa268b4b5beb0b46d9632',
                },
                {
                    url: '/_next/static/media/logo.0bc81e29.png',
                    revision: 'e84339c72cfb0797e92a41952897083a',
                },
                {
                    url: '/_next/static/uDO7AAUZgTQ2ip0f58n9t/_buildManifest.js',
                    revision: '25e384b4cec3fb7d9bf56a590e6b9c5d',
                },
                {
                    url: '/_next/static/uDO7AAUZgTQ2ip0f58n9t/_ssgManifest.js',
                    revision: 'b6652df95db52feb4daf4eca35380933',
                },
                {
                    url: '/logo.png',
                    revision: 'e84339c72cfb0797e92a41952897083a',
                },
                {
                    url: '/svg/common/blur-23.svg',
                    revision: 'a75aa61e5a246b6d47b0004a9d27309b',
                },
                {
                    url: '/svg/common/grid.svg',
                    revision: '4059253fedf8e205d870303d6129d239',
                },
                {
                    url: '/svg/common/hero.svg',
                    revision: 'd33b61b8bd3f0dcce3b67c27f1273467',
                },
                {
                    url: '/svg/common/section.svg',
                    revision: '1118180cd02e6fd6a9804f27e92a5baf',
                },
                {
                    url: '/svg/skills/adobe-xd.svg',
                    revision: '0ee1cc5928c8db3e85c65e51e6525d6e',
                },
                {
                    url: '/svg/skills/adobeaudition.svg',
                    revision: '58f3d81d8e9264fc8df8cfde4cf58af1',
                },
                {
                    url: '/svg/skills/after-effects.svg',
                    revision: '241dc01a0aff9c60da913f5b6a65d0e4',
                },
                {
                    url: '/svg/skills/angular.svg',
                    revision: '7696d862bb70908392a79df5230ec110',
                },
                {
                    url: '/svg/skills/aws.svg',
                    revision: 'b7f09ee2045ad700ccba4102f2e4155e',
                },
                {
                    url: '/svg/skills/azure.svg',
                    revision: 'f548d3f1cd3e4faf1f0b7099db1a4907',
                },
                {
                    url: '/svg/skills/blender.svg',
                    revision: '8b61b044e68e4a0e7c0b94654d4ae793',
                },
                {
                    url: '/svg/skills/bootstrap.svg',
                    revision: '53b32f2e7321dcaa2a27c637c6e36b82',
                },
                {
                    url: '/svg/skills/bulma.svg',
                    revision: '346e11a0bddfc1b06c07cc1596186d1c',
                },
                {
                    url: '/svg/skills/c.svg',
                    revision: 'e85538a5f40888dcbc932f14f03ae3aa',
                },
                {
                    url: '/svg/skills/canva.svg',
                    revision: 'b8f13636be472787575c9a38a40d1c2a',
                },
                {
                    url: '/svg/skills/capacitorjs.svg',
                    revision: 'f406481aac55baee3cb09d8a858cd8c2',
                },
                {
                    url: '/svg/skills/coffeescript.svg',
                    revision: '188980bfae79e5e6115b2eb00ea97322',
                },
                {
                    url: '/svg/skills/cplusplus.svg',
                    revision: 'f525a103eda91528ace5248914305d93',
                },
                {
                    url: '/svg/skills/csharp.svg',
                    revision: 'eaa9632e78db110e155c571e7bcd3742',
                },
                {
                    url: '/svg/skills/css.svg',
                    revision: '989a735cec29082b067dc389ea2da68a',
                },
                {
                    url: '/svg/skills/dart.svg',
                    revision: '6775917ea12c014f2459559b962b7dab',
                },
                {
                    url: '/svg/skills/deno.svg',
                    revision: '4b150ace63ac1e340780402489c9f53f',
                },
                {
                    url: '/svg/skills/django.svg',
                    revision: '8c0e0365dbe471cb772c4d96eceda8a6',
                },
                {
                    url: '/svg/skills/docker.svg',
                    revision: '7e6ccb94a73afd23c3960aef7e296210',
                },
                {
                    url: '/svg/skills/fastify.svg',
                    revision: 'fb59f648c047ed2b322c28c951445dd4',
                },
                {
                    url: '/svg/skills/figma.svg',
                    revision: '8e60c911c41bc8c6166ddb414532893d',
                },
                {
                    url: '/svg/skills/firebase.svg',
                    revision: '704986854726d329449f30664550f986',
                },
                {
                    url: '/svg/skills/flutter.svg',
                    revision: '9ca247cd652b40ff125ee3c0a7657992',
                },
                {
                    url: '/svg/skills/gcp.svg',
                    revision: 'd2115a79cde7279b8d1769f76ec14e89',
                },
                {
                    url: '/svg/skills/gimp.svg',
                    revision: 'f9df1ce5d3cbb84b2a5abd3a9a29960a',
                },
                {
                    url: '/svg/skills/git.svg',
                    revision: 'e6b832b0c31b469c8fcdfd4f2c4f1d3b',
                },
                {
                    url: '/svg/skills/go.svg',
                    revision: 'adc194341db39b5cbaf53da38122de45',
                },
                {
                    url: '/svg/skills/graphql.svg',
                    revision: 'b6b6c04bcc0e9f73b357dcd6036822a0',
                },
                {
                    url: '/svg/skills/haxe.svg',
                    revision: '8b08228c47e3c6a081f4bba19007e8c4',
                },
                {
                    url: '/svg/skills/html.svg',
                    revision: '68aab8d074270f9ee0a7e385519d98fa',
                },
                {
                    url: '/svg/skills/illustrator.svg',
                    revision: '6deb63cde26eab996119f0e442984c1c',
                },
                {
                    url: '/svg/skills/ionic.svg',
                    revision: 'fede5c3abee4ba5015901a255e53b443',
                },
                {
                    url: '/svg/skills/java.svg',
                    revision: 'dd071c0b9452691dffc27aae39ce7d80',
                },
                {
                    url: '/svg/skills/javascript.svg',
                    revision: '46524a43caf30828c17e38ec573dc5a3',
                },
                {
                    url: '/svg/skills/julia.svg',
                    revision: '5a1447e927d55aac27779dfb4c155d43',
                },
                {
                    url: '/svg/skills/kotlin.svg',
                    revision: '4ca0bb1e4556fd0f62cc6842d9520969',
                },
                {
                    url: '/svg/skills/lightroom.svg',
                    revision: '4a62a1bd9ed87f1e3b0352894eeda281',
                },
                {
                    url: '/svg/skills/markdown.svg',
                    revision: '2c92d1b98fd7db382f1232823118537d',
                },
                {
                    url: '/svg/skills/materialui.svg',
                    revision: '16e051373d0089014e66365b82a9380f',
                },
                {
                    url: '/svg/skills/matlab.svg',
                    revision: 'd9f74f0a1b6fe9575b438de61755b9ea',
                },
                {
                    url: '/svg/skills/memsql.svg',
                    revision: 'e4a5e511e3d7bcb57b8390a2fc0d376c',
                },
                {
                    url: '/svg/skills/microsoftoffice.svg',
                    revision: '733d1a4387ba008f27e784bde2c9b2e4',
                },
                {
                    url: '/svg/skills/mongoDB.svg',
                    revision: 'e7d230b7ad2cb1744a781ad63b10487f',
                },
                {
                    url: '/svg/skills/mysql.svg',
                    revision: '2cf2fd30658ed833e714cf1fd682d120',
                },
                {
                    url: '/svg/skills/nextJS.svg',
                    revision: 'b9159e822528599d52e216907227a0bd',
                },
                {
                    url: '/svg/skills/nginx.svg',
                    revision: '3868dbe51aafc3df8a240d58fe8fb392',
                },
                {
                    url: '/svg/skills/numpy.svg',
                    revision: '961f7a1bd730836151b5687a91a3fe1c',
                },
                {
                    url: '/svg/skills/nuxtJS.svg',
                    revision: '59fdf8e11c4231ac9353be8aa2d0fef3',
                },
                {
                    url: '/svg/skills/opencv.svg',
                    revision: 'b18a26d418342b335ac5129a45fa9129',
                },
                {
                    url: '/svg/skills/photoshop.svg',
                    revision: 'dda9f7b1ca28d3d3e0ee20eff198bbef',
                },
                {
                    url: '/svg/skills/php.svg',
                    revision: 'a6ce9f3d438bd4a39e9acae56eeb30b8',
                },
                {
                    url: '/svg/skills/picsart.svg',
                    revision: '467f568a277aa3b2c7751e51a6fe7376',
                },
                {
                    url: '/svg/skills/postgresql.svg',
                    revision: '58ecff980609fade0b1cb5f8ded6cef3',
                },
                {
                    url: '/svg/skills/premierepro.svg',
                    revision: '78b22e7158a93a28eb2b7d0ab5e331e0',
                },
                {
                    url: '/svg/skills/python.svg',
                    revision: 'bcf6930fc92ab953201424bb0908e456',
                },
                {
                    url: '/svg/skills/pytorch.svg',
                    revision: '5f2b7688dfcf98a41922dc5f6b74ffba',
                },
                {
                    url: '/svg/skills/react.svg',
                    revision: '7be113a51aa59fbe2be7ac966109e3de',
                },
                {
                    url: '/svg/skills/ruby.svg',
                    revision: 'ab4f7ad7c6790993a00c5b6f9994c145',
                },
                {
                    url: '/svg/skills/selenium.svg',
                    revision: 'db9de5c67343d81db7ffedcf7618954c',
                },
                {
                    url: '/svg/skills/sketch.svg',
                    revision: '6129bbaf3c61e1bbb7e5ec033591992b',
                },
                {
                    url: '/svg/skills/sqlite.svg',
                    revision: '23bf430b6b73e93205d7f72d9e125cef',
                },
                {
                    url: '/svg/skills/strapi.svg',
                    revision: 'c2c413f2e00734611ef38826c533ee1f',
                },
                {
                    url: '/svg/skills/svelte.svg',
                    revision: '6275bb59e5ee52a6652185d7ea84ee3d',
                },
                {
                    url: '/svg/skills/swift.svg',
                    revision: '24e1c0382e569faf2ca47fa1c802a180',
                },
                {
                    url: '/svg/skills/tailwind.svg',
                    revision: 'b6952af50c6e4db78abefc8d9a529a8b',
                },
                {
                    url: '/svg/skills/tensorflow.svg',
                    revision: 'e9e391585abd9c372c20c8b9b5bb08d9',
                },
                {
                    url: '/svg/skills/typescript.svg',
                    revision: '8854b02a490d214fb564211c1cf531e2',
                },
                {
                    url: '/svg/skills/unity.svg',
                    revision: '639e923cdca2c22431b25cb42f975345',
                },
                {
                    url: '/svg/skills/vitejs.svg',
                    revision: '64d68c9e11c592778203b486575d6e8d',
                },
                {
                    url: '/svg/skills/vue.svg',
                    revision: '940fb2b1181eaac0546c5270ff383212',
                },
                {
                    url: '/svg/skills/vuetifyjs.svg',
                    revision: '0fa842cba4f33f0851827e7937150239',
                },
                {
                    url: '/svg/skills/webix.svg',
                    revision: '8014b75ee0ced9b136ffb1b59e093c71',
                },
                {
                    url: '/svg/skills/wolframalpha.svg',
                    revision: 'ac304980b06315ed7b541d6e22cd5054',
                },
                {
                    url: '/svg/skills/wordpress.svg',
                    revision: '199652e448e77f58952b655a74b42956',
                },
            ],
            { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
        ),
        e.cleanupOutdatedCaches(),
        e.registerRoute(
            '/',
            new e.NetworkFirst({
                cacheName: 'start-url',
                plugins: [
                    {
                        cacheWillUpdate: async ({ response: e }) =>
                            e && 'opaqueredirect' === e.type
                                ? new Response(e.body, {
                                      status: 200,
                                      statusText: 'OK',
                                      headers: e.headers,
                                  })
                                : e,
                    },
                ],
            }),
            'GET'
        ),
        e.registerRoute(
            /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
            new e.CacheFirst({
                cacheName: 'google-fonts-webfonts',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 4,
                        maxAgeSeconds: 31536e3,
                    }),
                ],
            }),
            'GET'
        ),
        e.registerRoute(
            /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
            new e.StaleWhileRevalidate({
                cacheName: 'google-fonts-stylesheets',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 4,
                        maxAgeSeconds: 604800,
                    }),
                ],
            }),
            'GET'
        ),
        e.registerRoute(
            /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'static-font-assets',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 4,
                        maxAgeSeconds: 604800,
                    }),
                ],
            }),
            'GET'
        ),
        e.registerRoute(
            /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'static-image-assets',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 64,
                        maxAgeSeconds: 2592e3,
                    }),
                ],
            }),
            'GET'
        ),
        e.registerRoute(
            /\/_next\/static.+\.js$/i,
            new e.CacheFirst({
                cacheName: 'next-static-js-assets',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 64,
                        maxAgeSeconds: 86400,
                    }),
                ],
            }),
            'GET'
        ),
        e.registerRoute(
            /\/_next\/image\?url=.+$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'next-image',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 64,
                        maxAgeSeconds: 86400,
                    }),
                ],
            }),
            'GET'
        ),
        e.registerRoute(
            /\.(?:mp3|wav|ogg)$/i,
            new e.CacheFirst({
                cacheName: 'static-audio-assets',
                plugins: [
                    new e.RangeRequestsPlugin(),
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400,
                    }),
                ],
            }),
            'GET'
        ),
        e.registerRoute(
            /\.(?:mp4|webm)$/i,
            new e.CacheFirst({
                cacheName: 'static-video-assets',
                plugins: [
                    new e.RangeRequestsPlugin(),
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400,
                    }),
                ],
            }),
            'GET'
        ),
        e.registerRoute(
            /\.(?:js)$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'static-js-assets',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 48,
                        maxAgeSeconds: 86400,
                    }),
                ],
            }),
            'GET'
        ),
        e.registerRoute(
            /\.(?:css|less)$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'static-style-assets',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400,
                    }),
                ],
            }),
            'GET'
        ),
        e.registerRoute(
            /\/_next\/data\/.+\/.+\.json$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'next-data',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400,
                    }),
                ],
            }),
            'GET'
        ),
        e.registerRoute(
            /\.(?:json|xml|csv)$/i,
            new e.NetworkFirst({
                cacheName: 'static-data-assets',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400,
                    }),
                ],
            }),
            'GET'
        ),
        e.registerRoute(
            ({ sameOrigin: e, url: { pathname: s } }) =>
                !(
                    !e ||
                    s.startsWith('/api/auth/callback') ||
                    !s.startsWith('/api/')
                ),
            new e.NetworkFirst({
                cacheName: 'apis',
                networkTimeoutSeconds: 10,
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 16,
                        maxAgeSeconds: 86400,
                    }),
                ],
            }),
            'GET'
        ),
        e.registerRoute(
            ({ request: e, url: { pathname: s }, sameOrigin: i }) =>
                '1' === e.headers.get('RSC') &&
                '1' === e.headers.get('Next-Router-Prefetch') &&
                i &&
                !s.startsWith('/api/'),
            new e.NetworkFirst({
                cacheName: 'pages-rsc-prefetch',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400,
                    }),
                ],
            }),
            'GET'
        ),
        e.registerRoute(
            ({ request: e, url: { pathname: s }, sameOrigin: i }) =>
                '1' === e.headers.get('RSC') && i && !s.startsWith('/api/'),
            new e.NetworkFirst({
                cacheName: 'pages-rsc',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400,
                    }),
                ],
            }),
            'GET'
        ),
        e.registerRoute(
            ({ url: { pathname: e }, sameOrigin: s }) =>
                s && !e.startsWith('/api/'),
            new e.NetworkFirst({
                cacheName: 'pages',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400,
                    }),
                ],
            }),
            'GET'
        ),
        e.registerRoute(
            ({ sameOrigin: e }) => !e,
            new e.NetworkFirst({
                cacheName: 'cross-origin',
                networkTimeoutSeconds: 10,
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 3600,
                    }),
                ],
            }),
            'GET'
        );
});
