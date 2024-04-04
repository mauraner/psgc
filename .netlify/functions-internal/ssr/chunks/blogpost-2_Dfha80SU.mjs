import { f as createComponent, r as renderTemplate, n as renderComponent, u as unescapeHTML } from './astro_B-qOJv4b.mjs';
import 'kleur/colors';
import { $ as $$BlogPost } from './BlogPost_hYZxTQrm.mjs';

const html = "<p>Le 3 mai 2024, à Cortébert a eu lieu une transformation majeure pour le parti socialiste : les forces socialistes, séparées jusqu’alors depuis plus de 40 ans, se réunissent sous une nouvelle entité : le Parti Socialiste Grand Chasseral (PSGC). La nouvelle fédération régionale PSGC constitue la fusion du Parti Socialiste du Jura bernois et du Parti Ensemble Socialiste. Il intègre toutes les sections socialistes, y compris Plateforme.Socialiste. L’assemblée constitutive rassemblée à Cortébert a validé les statuts et constitué les organes du parti.\nLe PSGC marque la volonté de tourner la page des divisions passées et de construire un avenir solidaire et prospère pour la région, représente un moment décisif dans l’histoire du socialisme local. Cette initiative promet de générer un nouvel élan et une énergie renouvelée, engagés pour le bien-être de la population, en faveur de davantage de justice sociale, d’égalité de solidarité et d’inclusion.</p>\n<p>Communiqué de presse du 3 mai 2024 [lien pdf]</p>";

				const frontmatter = {"title":"Assemblée constitutive du 3 mai","pubDate":"3 mai 2024","author":"PSGC","tags":["Jura bernois","Socialisme"],"imgUrl":"../../assets/statuts.jpg","description":"Un nouvel élan pour le socialisme dans notre région","layout":"../../layouts/BlogPost.astro"};
				const file = "/home/julien/cloud/aides/maurane/psgc/psgc/src/content/blog/blogpost-2.md";
				const url = undefined;
				function rawContent() {
					return "\nLe 3 mai 2024, à Cortébert a eu lieu une transformation majeure pour le parti socialiste : les forces socialistes, séparées jusqu’alors depuis plus de 40 ans, se réunissent sous une nouvelle entité : le Parti Socialiste Grand Chasseral (PSGC). La nouvelle fédération régionale PSGC constitue la fusion du Parti Socialiste du Jura bernois et du Parti Ensemble Socialiste. Il intègre toutes les sections socialistes, y compris Plateforme.Socialiste. L’assemblée constitutive rassemblée à Cortébert a validé les statuts et constitué les organes du parti.\nLe PSGC marque la volonté de tourner la page des divisions passées et de construire un avenir solidaire et prospère pour la région, représente un moment décisif dans l'histoire du socialisme local. Cette initiative promet de générer un nouvel élan et une énergie renouvelée, engagés pour le bien-être de la population, en faveur de davantage de justice sociale, d'égalité de solidarité et d'inclusion.\n\nCommuniqué de presse du 3 mai 2024 [lien pdf]";
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
