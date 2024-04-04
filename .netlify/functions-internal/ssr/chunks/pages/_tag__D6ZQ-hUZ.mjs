/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, n as renderComponent, m as maybeRenderHead } from '../astro_B-qOJv4b.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$Button, a as $$BlogList, b as $$Default } from './404_sDCeJtTp.mjs';

const $$Astro = createAstro("https://localhost:3000/");
async function getStaticPaths() {
  const allPosts = await getCollection("blog").then(
    (collection) => collection.reverse()
  );
  const tags = [];
  allPosts.forEach((post) => {
    post.data.tags.forEach((tag) => {
      tags.push(tag.toLowerCase());
    });
  });
  return Array.from(new Set(tags)).map((tag) => {
    return {
      params: { tag },
      props: {
        tag,
        blogposts: allPosts.filter(
          (post) => post.data.tags.map((tag2) => tag2.toLowerCase()).includes(tag)
        )
      }
    };
  });
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag, blogposts } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Default, { "title": `Blog: ${tag}`, "description": `Actualit\xE9s | ${tag}`, "pageTitle": `Actualit\xE9s |\xA0 ${tag}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="p-6 bg-purple grid gap-4"> <div> ${renderComponent($$result2, "Button", $$Button, { "href": "/blog/" }, { "default": ($$result3) => renderTemplate`&larr; Retour aux actualités` })} </div> ${renderComponent($$result2, "BlogList", $$BlogList, { "posts": blogposts })} </main> ` })}`;
}, "/home/julien/cloud/aides/maurane/psgc/psgc/src/pages/blog/tags/[tag].astro", void 0);

const $$file = "/home/julien/cloud/aides/maurane/psgc/psgc/src/pages/blog/tags/[tag].astro";
const $$url = "/blog/tags/[tag]";

export { $$tag as default, $$file as file, getStaticPaths, $$url as url };
