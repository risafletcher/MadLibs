# CSS

As we learned earlier, CSS stands for *Cascading Style Sheets*. It is a language we use to tell the browser
how to style our page. It's considered **cascading** because styles are applied according to *priority*.
The last rule declaration in a style sheet has a higher *priority*.

For example:
```
h1 {
    background-color: orange;
    border: 1px solide black;
    padding: 5px;
    font-weight: bold;
}
```
These instructions will tell our browser that we want to style our `<h1>` element.

Here, we are telling the browser to set the background color of the page to orange, set a 1 pixel (`px`) wide
black `border`, add some spacing, known here as "`padding`", and make our font **bold**.

Because this targets *all* `<h1>` elements, every time we use `<h1>`, it will have an orange `background-color`,
a `1px solid black` `border` and a **`bold`** font.

If you want to target a specific element or elements, we can give the element a `class`. In our HTML, we
specify our `class` by giving the element an *attribute*.
```
<p class="game-description">This is a Mad Libs game I made!</p>
```
See where we're adding `class` here? We're giving it a class with the name "`game-description`". Now,
we're going to have to define this style in our CSS:
```
.game-description {
    color: blue;
    font-style: italic;
}
```
Here we are setting the color of our `game-description` to `blue` and the text will be *italicized*.
