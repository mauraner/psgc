/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, n as renderComponent, m as maybeRenderHead, h as addAttribute } from '../astro_B-qOJv4b.mjs';
import 'kleur/colors';
import { g as getCollection, a as $$BlogList, b as $$Default, d as $$Card, e as $$Pill, $ as $$Button, f as $$RecentBlogPosts } from './404_CeEJzqAs.mjs';

const $$Astro$2 = createAstro("https://localhost:3000/");
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  const posts = await getCollection("blog").then(
    (collection) => collection.reverse()
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Default, { "title": "Actualit\xE9s", "description": "Actualit\xE9s |\xA0Atualit\xE9s du PS Grand Chasseral", "pageTitle": "PSGC" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-green p-6"> ${renderComponent($$result2, "BlogList", $$BlogList, { "posts": posts })} </main> ` })}`;
}, "/home/julien/cloud/aides/maurane/psgc/psgc/src/pages/blog/index.astro", void 0);

const $$file$2 = "/home/julien/cloud/aides/maurane/psgc/psgc/src/pages/blog/index.astro";
const $$url$2 = "/blog";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://localhost:3000/");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Default, { "title": "Organisation", "pageTitle": "Organisation", "description": "Organisation" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-red p-6"> <section id="about" class="grid md:grid-cols-8 gap-8 mt-4"> <h2 class="hidden">Info</h2> <div class="col-span-8"> ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <div class="flex flex-col justify-between items-start gap-4"> <p class="mt-4 outfit text-2xl md:text-5xl lg:text-7xl">
Le bureau
</p> </div> ` })} </div> <div class="col-span-2"> ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <div class="flex flex-col justify-between items-start gap-4"> <p class="mt-4 outfit text-2xl md:text-5xl lg:text-7xl">
Maurane Riesen
</p> <p class="mt-2 outfit text-xl md:text-3xl lg:text-5xl">
Co-présidente, députée (La Neuveville)
</p> </div> ` })} </div> <div class="col-span-2"> ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <div class="flex flex-col justify-between items-start gap-4"> <p class="mt-4 outfit text-2xl md:text-5xl lg:text-7xl">
Théo <br> Brand
</p> <p class="mt-2 outfit text-xl md:text-3xl lg:text-5xl">
Co-président, conseiller de ville (Saint-Imier)
</p> </div> ` })} </div> <div class="col-span-2"> ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <div class="flex flex-col justify-between items-start gap-4"> <p class="mt-4 outfit text-2xl md:text-5xl lg:text-7xl">
Chiara Voisin
</p> <p class="mt-2 outfit text-xl md:text-3xl lg:text-5xl">
Trésorière, conseillère de ville (Saint-Imier)
</p> </div> ` })} </div> <div class="col-span-2"> ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <div class="flex flex-col justify-between items-start gap-4"> <p class="mt-4 outfit text-2xl md:text-5xl lg:text-7xl">
Gilles Marchand
</p> <p class="mt-2 outfit text-xl md:text-3xl lg:text-5xl">
Communication (Tavannes)
</p> </div> ` })} </div> </section> <section id="about" class="grid md:grid-cols-8 gap-8 mt-4"> <div class="col-span-2"> ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <div class="flex flex-col justify-between items-start gap-4"> <p class="mt-4 outfit text-2xl md:text-5xl lg:text-7xl">
A nommer
</p> <p class="mt-2 outfit text-xl md:text-3xl lg:text-5xl">
Secrétaire
</p> </div> ` })} </div> <div class="col-span-8"> ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <div class="flex flex-col justify-between items-start gap-4"> <p class="mt-4 outfit text-2xl md:text-5xl lg:text-7xl">
Le Comité de Direction
</p> </div> ` })} </div> </section> </main> ` })}`;
}, "/home/julien/cloud/aides/maurane/psgc/psgc/src/pages/organisation/index.astro", void 0);

const $$file$1 = "/home/julien/cloud/aides/maurane/psgc/psgc/src/pages/organisation/index.astro";
const $$url$1 = "/organisation";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://localhost:3000/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const builtWith = [
    { name: "Socialisme", url: "blog/tags/socialisme/" },
    { name: "R\xE9gion", url: "blog/tags/r%C3%A9gion/" },
    { name: "F\xE9minisme", url: "blog/tags/f%C3%A9minisme/" },
    { name: "Ecologie", url: "blog/tags/ecologie/" },
    { name: "Service public", url: "blog/tags/service%20public/" },
    { name: "Sant\xE9", url: "blog/tags/sant%C3%A9/" },
    { name: "Jura bernois", url: "blog/tags/jura%20bernois/" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Default, { "title": "Accueil", "pageTitle": "Accueil", "description": "Site internet du PS Grand Chasseral" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-red p-6"> <section id="about" class="grid md:grid-cols-8 gap-8 mt-4"> <h2 class="hidden">Info</h2> <div class="col-span-4"> ${renderComponent($$result2, "Card", $$Card, { "color": "pink" }, { "default": ($$result3) => renderTemplate` <div class="flex flex-col justify-between items-start gap-4"> <p class="mt-4 outfit text-2xl md:text-5xl lg:text-7xl">
PS <a class="text-white">Grand Chasseral</a> </p> <p class="mt-2 outfit text-xl md:text-3xl lg:text-5xl">
Fédération régionale du Parti Socialiste dans le Jura bernois
</p> </div> ` })} </div> <div class="col-span-2"> ${renderComponent($$result2, "Card", $$Card, { "color": "orange" }, { "default": ($$result3) => renderTemplate` <h2 class="text-2xl md:text-4xl lg:text-6xl mb-8 dm-serif">
Nous prenons position
</h2> <ul class="flex gap-4 flex-wrap"> ${builtWith.map((item) => renderTemplate`<li> ${renderComponent($$result3, "Pill", $$Pill, {}, { "default": ($$result4) => renderTemplate` <a class="sanchez"${addAttribute(item.url, "href")} target="_blank"${addAttribute(`Go to ${item.name}`, "title")}> ${item.name} </a> ` })} </li>`)} </ul> ` })} </div> <div class="col-span-2"> ${renderComponent($$result2, "Card", $$Card, { "color": "violet" }, { "default": ($$result3) => renderTemplate` <h2 class="text-2xl md:text-4xl lg:text-6xl mb-4 dm-serif">
Je m'engage!
</h2> <p class="poppins">
Pour ma famille, mes amis, ma région, avec ou sans chichis
</p> <br> ${renderComponent($$result3, "Button", $$Button, { "target": "_self", "href": "/contact/" }, { "default": ($$result4) => renderTemplate`
Contact &rarr;
` })} <br> <br> ${renderComponent($$result3, "Button", $$Button, { "target": "_self", "href": "/support/" }, { "default": ($$result4) => renderTemplate`
Soutenez-nous &rarr;
` })} ` })} </div> </section> ${renderComponent($$result2, "RecentBlogPosts", $$RecentBlogPosts, {})} </main> ` })}`;
}, "/home/julien/cloud/aides/maurane/psgc/psgc/src/pages/index.astro", void 0);

const $$file = "/home/julien/cloud/aides/maurane/psgc/psgc/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$1 as a, index as b, index$2 as i };
