# `<head>`

`<head>` is an element container for all the head elements.

The `<head>` element can include a title for the document, scripts, styles, meta information, and more.

The following elements can go inside the `<head>` element:

* `<title>` 
  + This element is required in an HTML document. 
  + Provides a title for the page, which is used in the browser header, bookmarks, search engines and screen readers.
* `<style>`
  + This is where you specify styles for your page. You can enter CSS here, though it is usually added in another file
  then linked to this document.
* `<base>`
  + This tag specifies the base URL/target for all relative URLs in a document.
  + This is not visible to the user.
* `<link>`
  + This tag defines a link between a document and an external resource. For example, you may link your CSS file here like so:
  ```
    <link rel="stylesheet" type="text/css" href="style.css">
  ```
  + This is not visible to the user.
* `<meta>`
  + Provides metadata for your page. It is not visible to the user.
  + Metadata is data (information) about data.
  + Meta elements are typically used to specify page description, keywords, author of the document, last modified, and other 
  metadata.
* `<script>`
  + This tag is used to define a client-side script (JavaScript). This is where we can provide logic for buttons, forms, click
  events and more!
  + `<script>` can also be placed in our `<body>`. It is not visible to the user.
  + The `<script>` element either contains scripting statements, or it points to an external script file through the `src` 
  attribute.
* `<noscript>`
  + This is where alternate content is provided for users that have disabled scripts in their browser or have a browser that 
  doesn't support `script`, aka Javascript.
  + `<script>` can also be placed in our `<body>`. It is not visible to the user.
