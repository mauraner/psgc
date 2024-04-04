export { renderers } from '../renderers.mjs';

const page = () => import('./pages/404_BIsCOLBv.mjs').then(n => n._);

export { page };
