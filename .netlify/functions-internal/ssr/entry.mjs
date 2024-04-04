import { renderers } from './renderers.mjs';
import { manifest } from './manifest_ykJSwkfO.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_BXL2CfHA.mjs');
const _page1 = () => import('./chunks/404_CMgdofuQ.mjs');
const _page2 = () => import('./chunks/_tag__BnJBYL0I.mjs');
const _page3 = () => import('./chunks/_slug__4ewZpSQa.mjs');
const _page4 = () => import('./chunks/index_CESZMrsJ.mjs');
const _page5 = () => import('./chunks/feed_GdTF9_Zm.mjs');
const _page6 = () => import('./chunks/index_BTXlO3Ba.mjs');
const _page7 = () => import('./chunks/default_DoXS0HuF.mjs');
const _page8 = () => import('./chunks/_slug__C32D5C1k.mjs');
const _page9 = () => import('./chunks/index_DPY1jA_B.mjs');
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
    "middlewareSecret": "6ed2295c-a43c-4c14-8468-dcce09e3e697"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
