import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import postcss from "postcss";
import postcssConfig from "./postcss.config.js";

export default async function (eleventyConfig) {
  eleventyConfig.addGlobalData("layout", "page.njk");

  // Markdown with heading anchors (required for in-page heading links in the docs nav)
  eleventyConfig.setLibrary("md", markdownIt({ html: true }).use(markdownItAnchor));

  // Pass through assets
  eleventyConfig.addPassthroughCopy({ "site/_assets": "/_assets" });

  // FOR REFERENCE: Shortcode
  /*
  const md = markdownIt({ html: true });
  eleventyConfig.addPairedShortcode("expandable", (content, title = "") => {
    const body = md.render(content);
    return `
		<details>
		  <summary>${title}</summary>
		  <div>
			${body}
		  </div>
		</details>
	  `;
  });
  */

  // Pass through .woff and .woff2 files in the _css folder
  eleventyConfig.addPassthroughCopy({
    "site/_js": "/_js",
  });

  // Transform CSS files using PostCSS
  eleventyConfig.addTemplateFormats("css");

  eleventyConfig.addExtension("css", {
    outputFileExtension: "css",
    compile: async (inputContent, inputPath) => {
      if (!inputPath.endsWith(".css")) return;

      return async () => {
        const result = await postcss(postcssConfig.plugins).process(
          inputContent,
          {
            from: inputPath,
          }
        );
        return result.css;
      };
    },
  });

  // Extracts { anchor, text } pairs from <h2> elements in rendered HTML
  eleventyConfig.addFilter("extractHeadings", (content) => {
    if (!content) return [];
    return [...content.matchAll(/<h2[^>]*id="([^"]*)"[^>]*>(.*?)<\/h2>/gs)].map(
      ([, anchor, inner]) => ({ anchor, text: inner.replace(/<[^>]+>/g, "") })
    );
  });

  eleventyConfig.addCollection("docsFlatPages", (collectionApi) => {
    const allDocs = collectionApi
      .getAll()
      .filter((p) => p.inputPath.includes("/docs/") && p.inputPath.endsWith(".md"));
    const root = allDocs.find((p) => /\/docs\/index\.md$/.test(p.inputPath));
    const rest = allDocs
      .filter((p) => !/\/docs\/index\.md$/.test(p.inputPath))
      .sort((a, b) => (a.data.index ?? 0) - (b.data.index ?? 0));
    return root ? [root, ...rest] : rest;
  });

  eleventyConfig.addFilter("docsAdjacentPages", (flatPages, currentUrl) => {
    const i = flatPages.findIndex((p) => p.url === currentUrl);
    if (i === -1) return { prev: null, next: null };
    return {
      prev: i > 0 ? flatPages[i - 1] : null,
      next: i < flatPages.length - 1 ? flatPages[i + 1] : null,
    };
  });

  eleventyConfig.addCollection("docsNav", (collectionApi) => {
    const allDocs = collectionApi
      .getAll()
      .filter((p) => p.inputPath.includes("/docs/") && p.inputPath.endsWith(".md"));

    const root = allDocs.find((p) => /\/docs\/index\.md$/.test(p.inputPath));

    const sections = allDocs
      .filter((p) => /\/docs\/[^/]+\/index\.md$/.test(p.inputPath))
      .sort((a, b) => (a.data.index ?? 0) - (b.data.index ?? 0));

    return {
      root,
      sections: sections.map((section) => {
        const dir = section.inputPath.replace(/index\.md$/, "");
        return {
          section,
          pages: allDocs
            .filter((p) => p.inputPath.startsWith(dir) && !p.inputPath.endsWith("index.md"))
            .sort((a, b) => (a.data.index ?? 0) - (b.data.index ?? 0)),
        };
      }),
    };
  });

  // Watch JS files for changes
  eleventyConfig.setWatchThrottleWaitTime(100);
  eleventyConfig.addWatchTarget("site/_js");

  return {
    dir: {
      input: "site",
      output: "dist",
    },
  };
}
