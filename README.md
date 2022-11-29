# Guillermo de la Puente's Personal Site

[https://guillermodlpa.com](https://guillermodlpa.com)

This is version 2 of the site. You can [check out the source code of version 1](https://github.com/guillermodlpa/site/tree/v1) poweered by [Siteleaf](https://www.siteleaf.com/) and [Jekyll](https://jekyllrb.com/).

## Technologies

* Next.js
* Notion API
* Chakra UI
* MDX

## Services

* Notion as CMS
* FormBold for contact form backend
* Umami for traffic analytics

## How to use Notion as a CMS

Each blog post is a Notion page in a Notion database. During build time, all pages are statically generated pulling information using the [Notion API.](https://developers.notion.com/)

To render the blog posts, I implemented a `NotionPageRenderer` component. Learn more about it in [NotionPageRenderer > README.](features/blogPost/NotionPageRenderer)

```jsx
<NotionPageRenderer blocks={blocks} />
```

🖼❕ Images hosted in Notion can't be optimized with `next/image` because their URLs are temporary. Check out the README above and the repo [guillermodlpa/upload-notion-images-to-cloudinary](https://github.com/guillermodlpa/upload-notion-images-to-cloudinary) for more details.

## Markdown for content

It's truly a pain in the ass to write and edit large chunks of copy in JSX or as strings. That's why I used markdown for the portfolio project descriptions, and `@next/mdx` to parse it to React. The result is actually delightful to work with as a developer!

## Contact Form

The contact form backend is powered by [FormBold](https://formbold.com/). It's as easy to use as signing up, creating a form, and posting the payload to the given form's endpoint. Note that the request fails with a 500 if any of the values is undefined or empty string.

## RSS

The RSS feed (https://guillermodlpa.com/rss.xml) is generated dynamically, pulling the blog posts and returning them in RSS feed XML format. [Check out the implementation.](./pages/rss.xml.tsx)

Before, I had the RSS generated in the `postbuild` step using [next-rss](https://www.npmjs.com/package/next-rss). That package was perfect except was perfect except for the fact that it seemed to bug out with dynamic routes, so I forked it and made a version with the fix and the ability to add more information to the feed items: [@guillermodlpa/next-rss](https://www.npmjs.com/package/@guillermodlpa/next-rss).
