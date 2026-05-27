# Choicelab.xyz

This is the download and docs site for Choicelab. It's built on [Eleventy](https://www.11ty.dev).

## Setup

1. [Install Bun](https://bun.sh/package-manager) if you don't have it already.
2. In this repo, run `bun install` to get all the project's dependencies.
3. Run `bun dev` to view the site locally, or `bun build` to generate a build.

## Getting started

The entire site lives in the **site** folder. Within there, folders prefixed with an `_` are reserved for scripts, stylesheets, and assets. Every other folder correlates to a page on the site.

Each site page has a Markdown (.md) file containing _frontmatter_, which defines its title, which template it should use, and other metadata. It looks like this:

```
---
layout: page.njk
title: Privacy Policy
description: Our privacy terms.
---

```

## Templating

Each page's .md file specifies a layout, which corresponds to a layout file in the _/\_includes_ folder. These layout files are [Nunjucks](https://mozilla.github.io/nunjucks/) templates; you can also refer to [Eleventy's layout documentation](https://www.11ty.dev/docs/layouts/) for more detail on how templating works.

## CSS

Stylesheets are authored as regular CSS files, but with a twist: they're processed using [PostCSS](https://postcss.org), so you can use modern CSS features—like [variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) and [nesting](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting/Using_CSS_nesting)—and they'll be polyfilled to older browsers.

CSS files can be found in the _/\_css_ folder.

## Build & deploy

The Choicelab site has no backend—it's all frontend. As such, deploying to a server is easy: just run `bun build`, then serve the contents of the outputted _/dist_ folder.

**Caveat**: The site must be hosted at the domain or subdomain root (e.g. example.com or subdomain.example.com). It can't be hosted at a subdirectory ( example.com/mysite).
