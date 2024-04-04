import { f as createComponent, r as renderTemplate, n as renderComponent, u as unescapeHTML } from './astro_B-qOJv4b.mjs';
import 'kleur/colors';
import { $ as $$BlogPost } from './BlogPost_hYZxTQrm.mjs';

const html = "<p>Le PSGC est une fédération régionale du parti socialiste du canton de Berne et constitue une association au sens des articles 60 et suivants du Code civil suisse. Il dispose de statuts, intègre les sections socialistes dans le Jura bernois et leurs membres ainsi que des membres individuels.</p>\n<p>Les statuts du PSGC <a href=\"../../public/docs/statuts_psgc_dec2023.pdf\">sont téléchargeables ici</a>.</p>\n<p>Les organes du PSGC sont :</p>\n<ul>\n<li>le congrès régional</li>\n<li>le comité directeur</li>\n<li>le bureau</li>\n<li>l’organe de révision</li>\n</ul>\n<p>Le congrès régional est l’organe suprême et réunit tous les membres du PS GC. Le comité directeur est l’organe exécutif et intègre le bureau ainsi qu’un-e représentant-e des sections, les élu-e-s au Conseil exécutif, au Grand Conseil et au Conseil du Jura bernois, le préfet ou la préfète socialiste et les élu-e-s aux chambres fédérales. Le bureau est l’organe stratégique et de communication du parti. Il est composé d’une présidence, d’un-e secrétaire, d’un-e caisser-ère et d’un responsable communication.</p>";

				const frontmatter = {"title":"Organes et statuts du PSGC","description":"Qui sommes nous et comment sommes nous organisés","pubDate":"3 mai 2024","author":"PSGC","tags":["Socialisme","Jura bernois"],"imgUrl":"../../assets/paysage1.jpg","layout":"../../layouts/BlogPost.astro"};
				const file = "/home/julien/cloud/aides/maurane/psgc/psgc/src/content/blog/blogpost-3.md";
				const url = undefined;
				function rawContent() {
					return "\nLe PSGC est une fédération régionale du parti socialiste du canton de Berne et constitue une association au sens des articles 60 et suivants du Code civil suisse. Il dispose de statuts, intègre les sections socialistes dans le Jura bernois et leurs membres ainsi que des membres individuels.\n\nLes statuts du PSGC [sont téléchargeables ici](../../public/docs/statuts_psgc_dec2023.pdf).\n\n\nLes organes du PSGC sont : \n- le congrès régional\n- le comité directeur\n- le bureau\n- l'organe de révision\n\nLe congrès régional est l’organe suprême et réunit tous les membres du PS GC. Le comité directeur est l’organe exécutif et intègre le bureau ainsi qu’un-e représentant-e des sections, les élu-e-s au Conseil exécutif, au Grand Conseil et au Conseil du Jura bernois, le préfet ou la préfète socialiste et les élu-e-s aux chambres fédérales. Le bureau est l’organe stratégique et de communication du parti. Il est composé d’une présidence, d’un-e secrétaire, d’un-e caisser-ère et d’un responsable communication.  ";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$BlogPost, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
