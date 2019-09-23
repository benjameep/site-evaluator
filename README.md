### Head
The following are correctly declared and used in the head section of all HTML (Links to an external site.) pages.
- HTML5 doctype (Links to an external site.)
- meta charset attribute (Links to an external site.)
- meta viewport (Links to an external site.) (do not use a maximum-scale)
- A meaningful title (Links to an external site.) (about 70 characters maximum)
- meta description (Links to an external site.) (SEO - unique and no more than 300 characters)
- external CSS file references (Links to an external site.) are in the proper order
### HTML
- W3C compliant - validated to identify possible issues - W3C validator (Links to an external site.)
    - Scrape results of `https://validator.w3.org/nu/?doc=<url>`
    - Count how many warnings and errors are returned
- Semantic elements (Links to an external site.) are used
    - Count how many of each of the following tags are used
        - article
        - aside
        - figcaption
        - figure
        - footer
        - header
        - main
        - mark
        - nav
        - section
        - time
- Check for broken links - W3C Link Checker (Links to an external site.)
    - Watch for broken images in requests
    - Test all links to see if they return a 404
### CSS
- All embedded or inline CSS is avoided
    - Count style tags that have content
    - Count elements that have style attributes
- W3C compliant - validated to identify possible issues - W3C validator (Links to an external site.)
- CSS normalize (Links to an external site.) is used and up to date
    - Contains a style tag that references https://necolas.github.io/normalize.css/8.0.1/normalize.css
    - Or a style sheet that contains the line `/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */`
- Unique ID selectors (Links to an external site.) - if an ID selector is used, it is unique to a page (the planned use of class selector (Links to an external site.) is preferred)
    - List all ids used and check to see if they are all unique
- All pages are tested for responsive web design and with at least two browsers with appropriately sized text, links, and no scrolling to the right nor deadspace.
- No reasonable violations of design principles in the styling and layout in all three views.
### JavaScript
- No errors nor references to unused JavaScript functions per page
    - Listen for errors that occur on the page
- No output to the console in the live version of the page
    - Listen to the console for output
### Images
- Optimized (Links to an external site.) to fit the design needs of the site (image is no larger than needed at its maximum size on the page)
- Aspect ratios (Links to an external site.) match the saved image ratio
    - Use Lighthouse to test for image-aspect-ratio
- The alt attribute (Links to an external site.) is assigned a relevant value
### Accessibility
- The lang attribute (Links to an external site.) is used in the opening <html> tag
- Headings (Links to an external site.) are used in the proper order
- Accessibility (Links to an external site.) test errors and warnings are reviewed - wave testing through the web developer extension (Links to an external site.)
- No color contrast (Links to an external site.) violations - DevTools Audit (Links to an external site.)
### Performance
- The page weight does not exceed 500KB
- Google Pagespeed test (Links to an external site.) results at least 90
    - Use Lighthouse NPM Package to get rating



### 3rd Party Auditing Tools
- [Google Pagespeed test](https://developers.google.com/speed/pagespeed/insights/?url=benjameep.tech)
- [Nu HTML Checker](https://validator.w3.org/nu/?doc=https%3A%2F%2Fbenjameep.tech%2F)
