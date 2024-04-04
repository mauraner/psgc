import { renderers } from './renderers.mjs';
import { manifest } from './manifest_FaDWK4TF.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_DR4st7vu.mjs');
const _page1 = () => import('./chunks/404_CGN9x9df.mjs');
const _page2 = () => import('./chunks/_tag__DflSuAGk.mjs');
const _page3 = () => import('./chunks/_slug__CONCtIno.mjs');
const _page4 = () => import('./chunks/index_BUHgSbLI.mjs');
const _page5 = () => import('./chunks/feed_csD2YSLG.mjs');
const _page6 = () => import('./chunks/index_1zAJ0yA6.mjs');
const _page7 = () => import('./chunks/default_DoXS0HuF.mjs');
const _page8 = () => import('./chunks/_slug__tyampzP0.mjs');
const _page9 = () => import('./chunks/index_BqGIqJO2.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/blog/tags/[tag].astro", _page2],
    ["src/pages/blog/[slug].astro", _page3],
    ["src/pages/blog/index.astro", _page4],
    ["src/pages/feed.xml.js", _page5],
    ["src/pages/organisation/index.astro", _page6],
    ["src/pages/v1/generate/og/default.png.ts", _page7],
    ["src/pages/v1/generate/og/[slug].png.ts", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "5c80f20a-c820-4ae0-b94d-1c4986066331"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
