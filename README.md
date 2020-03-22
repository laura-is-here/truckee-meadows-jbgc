# The Website for Truckee Meadows John Brown Gun Club

## Built with [Eleventy Netlify Boilerplate](https://github.com/danurbanowicz/eleventy-netlify-boilerplate)

Based on the [Eleventy Base Blog](https://github.com/11ty/eleventy-base-blog) repo (see there for additional info on Eleventy usage).

## Features

- NEW: Now with [Eleventy v0.10.0](https://github.com/11ty/eleventy/releases/tag/v0.10.0) freshness! :doughnut:
- NEW: Uses the official [Eleventy Navigation](https://www.11ty.dev/docs/plugins/navigation/) plugin to build menus
- Sample pages and a blog with tag support
- Netlify CMS with editor previews (thanks [@biilmann](https://github.com/biilmann)!)
- Includes a working contact form
- CSS 2kb minified, inlined for fastest page render
- Optional pipeline for minified inline JS
- Pre-builds and minifies your HTML too
- Uses Markdown files for content
- Uses Nunjucks (or Liquid) templates for layout
- 100% Javascript framework free
- Continuous Deployment workflow via Netlify

## Local development

### 1. Clone this repository:

```
git clone https://github.com/.laura-is-here/truckee-meadows-jbgc.git your-directory
```

### 2. Navigate to the directory

```
cd your-directory
```

Specifically have a look at `.eleventy.js` to see if you want to configure any Eleventy options differently.

### 3. Install dependencies locally

```
npm install
```

### 4. Edit \_data/metadata.json

This file contains your site title and author details, and can be used to store any other commonly used site data.

### 5. Run Eleventy (builds the site)

```
npm run build
```

Or build automatically when a template changes:

```
npm run dev
```
