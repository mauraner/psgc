import rss from '@astrojs/rss';
import { g as getCollection } from './404_4x3L7RNq.mjs';

async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: 'Actualités',
    description: 'Actualités du PS Grand Chasseral',
    stylesheet: false,
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
    customData: '<language>en-us</language>',
    canonicalUrl: 'https://brutal.elian.codes',
  });
}

export { GET };
