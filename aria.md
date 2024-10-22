# ARIA
### Accessible Rich Internet Applications
- An attribute used in many Bootstrap components. 
- It's a way to make websites more accessible to people with disabilities.

### ARIA Attributes

1. `aria-current`===ARIA for navbars/list groups.
- This ARIA indicates that an item is currently selected.
- `"page"` indicates that the item is a page.
- `"true"` indicates that the item is currently selected.
- Use on elements that can be selected.
- Other valid values for `aria-current=""`:
 `"step"` `"location"` `"date"` `"time"`

2. `aria-disabled`===ARIA for navbars
- This ARIA indicates the status of an item.
- `"true"` indicates that the item is disabled.
- switch it to `"false"` when the item is enabled.
- Use on elements that can be disabled and enabled.

3. `aria-label=""`===ARIA for alerts.
- This ARIA describes an item without a label.
- `"Close"` is describing a button that has a meaning, but no label.
- Use on icons or images that have a meaning but no label.

### Enable the accessibility tree in developer tools. 

1. Load the generic-elements.html file from your sandbox.
2. In the browser, open the developer tools.
3. Go to the Elements tab.
4. Accessibility tab.
5. Enable full-page accessibility tree.
6. Refresh page.

### Accessibility Tree:

- represents the structure of a web page.
- only includes accessibility elements
- how assistive technologies interpret a web page to a user

### Semantic Elements
1. header
2. main
3. footer
4. section
5. headings
6. `<p>`
7. `<article>`
   - Use for blog posts, news articles, and other independent self-contained content.
   - Example: recipe cards
8. `<section>`
    - Use to enclose themes, categories, and content with headings.
    - Example: recipe ingredients, recipe instructions
9. `<dialog>`
    - used for a box or window that can be opened or closed.
    - Example: Bootstrap alert
    - NOTE: use the `open` attribute to show the `<dialog>` content.
10. `<output>`
    - use for the result of a calculation or showing feedback.
    - Example: The form has been successfully submitted.

### Semantic Attributes

1. Attributes that begin with `aria`
   - aria-current
   - aria-disabled
   - aria-label
2. `type`
   - type="password"
   - type="tel"
3. `role`
   - role="alert"

### HTML Attributes for Semantics that Support ARIA
Example: `<input type="email">`
1. email
2. url
3. tel
4. search
5. date
6. time
7. week
8. month
9. number
10. range
11. color
12. file
13. datetime-local
14. role="alert"
    - any built-in role value


---
  - [BootStrap Link](getbootstrap.com)

 
### Nav Bar

<nav class="nav">
  <a class="nav-link active" aria-current="page" href="#">Active</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link disabled" aria-disabled="true">Disabled</a>
</nav>

### List Group

<ul class="list-group">
  <li class="list-group-item active" aria-current="true">An active item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>

### Alert

<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">Close</button>
</div>
