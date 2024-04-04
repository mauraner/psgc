/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, n as renderComponent } from '../astro_B-qOJv4b.mjs';
import 'kleur/colors';
import { g as getCollection } from './404_4x3L7RNq.mjs';

const $$Astro = createAstro("https://localhost:3000/");
async function getStaticPaths() {
  const blogEntries = await getCollection("blog");
  return blogEntries.map((blogpost) => ({
    params: { slug: blogpost.slug },
    props: { blogpost }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { blogpost } = Astro2.props;
  const { Content } = await blogpost.render();
  return renderTemplate`${renderComponent($$result, "Content", Content, {})}`;
}, "/home/julien/cloud/aides/maurane/psgc/psgc/src/pages/blog/[slug].astro", void 0);

const $$file = "/home/julien/cloud/aides/maurane/psgc/psgc/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

export { $$slug as default, $$file as file, getStaticPaths, $$url as url };
