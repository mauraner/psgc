import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BPDPc_rl.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_BlMl6Umf.mjs');
const _page1 = () => import('./chunks/404_DvTZt9fe.mjs');
const _page2 = () => import('./chunks/_tag__CI3zxcXB.mjs');
const _page3 = () => import('./chunks/_slug__BEI4zyAu.mjs');
const _page4 = () => import('./chunks/index_lmc9BZso.mjs');
const _page5 = () => import('./chunks/feed_DmocQTND.mjs');
const _page6 = () => import('./chunks/index_CTbMjJOU.mjs');
const _page7 = () => import('./chunks/default_DoXS0HuF.mjs');
const _page8 = () => import('./chunks/_slug__CBP-WEgP.mjs');
const _page9 = () => import('./chunks/index_DYlQnQXx.mjs');
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
    "middlewareSecret": "887733b2-ab5d-47e9-b485-30356167ae9b"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
