# Notion Page Renderer

This React component renders a Notion page.

The prop `blocks` is a `GetBlockResponse` consisting of:
* The blocks returned by [/v1/blocks/{block_id}/children](https://developers.notion.com/reference/get-block-children), passing the page ID.
* Then executing it again for the blocks with children.
* Combining the results adding the children blocks to their parents on the `[type].children` key.

## Limitations

As of 2022 July, these are some limitations of the Notion API that limit styling and accessibility possibilities:

* It doesn't return any information about width of blocks that can be adjusted using the Notion app.
* It doesn't group list items under a list component, so if one wishes to use a list tag to wrap consecutive list items, it has to be done in the application code.
* It doesn't return index of numbered list items, so we have to calculate which lsit item number to show.
* Images can have a caption, but not an alt.
* The URLs of images uploaded in Notion are temporary, and trying to optimize them with Next.js will likely cause reaching a limit.
  

## Resources

* https://samuelkraft.com/blog/building-a-notion-blog-with-public-api
* https://spencerwoo.com/blog/revisiting-blogging-with-notion-2022
