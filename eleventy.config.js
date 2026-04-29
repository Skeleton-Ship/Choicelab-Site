import markdownIt from "markdown-it";
import postcss from "postcss";
import postcssConfig from "./postcss.config.js";

export default async function (eleventyConfig) {
  eleventyConfig.addGlobalData("layout", "page.njk");

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

  // FOR REFERENCE: Collections
  /*
  eleventyConfig.addCollection("calendarPages", function (collectionApi) {
    // Filter pages in /calendar/
    return (
      collectionApi
        .getAll()
        .filter(
          (page) =>
            page.inputPath.includes("/calendar/") &&
            !page.inputPath.endsWith("/calendar/index.md")
        )
        // Sort by frontmatter `order`
        .sort((a, b) => a.data.order - b.data.order)
    );
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
