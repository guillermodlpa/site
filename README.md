# Guillermo de la Puente's Personal Site

[https://guillermodlpa.com](https://guillermodlpa.com)

## Technologies

* Next.js
* Notion as CMS
* Chakra UI

This is version 2 of the site. You can [check out the source code of version 1](https://github.com/guillermodlpa/site/tree/v1) poweered by [Siteleaf](https://www.siteleaf.com/) and [Jekyll](https://jekyllrb.com/).

## How to use Notion as a CMS

Each blog post is a Notion page in a Notion database. During build time, all pages are statically generated pulling information using the Notion API.

To render the blog posts, I implemented a component `NotionPageRenderer`. Learn more about it in [NotionPageRenderer > README.](features/blogPost/NotionPageRenderer)

```jsx
<NotionPageRenderer blocks={blocks} />
```

