# Notion Page Renderer

This React component renders a Notion page.

The prop `blocks` is a `GetBlockResponse` consisting of:
* The blocks returned by [/v1/blocks/{block_id}/children](https://developers.notion.com/reference/get-block-children), passing the page ID.
* Then executing it again for the blocks with children.
* Combining the results adding the children blocks to their parents on the `[type].children` key.
* We probe images to obtain their dimensions, necessay for Next.js image optimization and in any case useful to avoid CLS.

## Limitations

As of 2022 August, these are some limitations of the Notion API that limit styling and accessibility possibilities:

* **Block width missing:** it doesn't return any information about width of blocks that can be adjusted using the Notion app.
  * Alternative: display images at their real size, and make columns proportional.
* **Lists have no wrapper:** It doesn't group list items under a list component, so if one wishes to use a list tag to wrap consecutive list items, it has to be done in the application code.
  * Workaround: wrap each list item in a list, and use the `start` attribute for numbered lists to show the right number.
* **Numbered list items have no index:** It doesn't return index of numbered list items, so we have to calculate which lsit item number to show.
  * Workaround: Add a `counter` property to numbered list items that starts at zero and increases for every consecutive item found.
* **Images have no alt:** Images can have a caption, but not an alt.
  * Workaround: use the caption text both as alt and below the image in a `figcaption` tag.
* **Images hosted in Notion can'be be used with `next/image`:** The URLs of images uploaded in Notion are temporary, and trying to optimize them with Next.js will likely cause reaching a limit.
  * Workaround: use a script to move all images from Notion to an external CDN, Cloudinary. [https://github.com/guillermodlpa/upload-notion-images-to-cloudinary](https://github.com/guillermodlpa/upload-notion-images-to-cloudinary)
* **Bookmark blocks only return a URL** Bookmark blocks, which in Notion show a preview that includes title, description, og:image and favicon, when using the API they only return the bookmarked URL.
  * Workaround: unfurl the bookmarked URL on the client side, proxying the request via an API endpoint to avoid CORS issues.
  
## Resources

* https://samuelkraft.com/blog/building-a-notion-blog-with-public-api
* https://spencerwoo.com/blog/revisiting-blogging-with-notion-2022
