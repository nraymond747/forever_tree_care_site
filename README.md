# Forever Tree Care — Forest Modern

Static website ready for GitHub Pages.

## File Structure

```
forever-tree-care/
├── index.html
├── css/style.css
├── js/main.js
├── images/          ← put your photos here
└── README.md
```

## Deploy to GitHub Pages

1. Create a GitHub repo and push all files to `main`
2. Go to **Settings → Pages → Deploy from branch → main / root**
3. Your site is live at `https://yourusername.github.io/repo-name/`

## Swapping in Real Photos

### Hero photo
Find `.hero-img-placeholder` in `index.html` and replace with:
```html
<img src="images/hero.jpg" alt="Tree care work" style="width:100%;height:100%;object-fit:cover;border-radius:20px;" />
```
Recommended size: **1200×900px**

### Gallery photos
Find each `<div class="g-ph" style="background:...">` block and replace with:
```html
<img src="images/gallery-1.jpg" alt="Tree trimming" style="width:100%;height:100%;object-fit:cover;" />
```
- Tall item: **600×900px**
- Wide item: **900×450px**
- Regular items: **600×450px**

### About photo
Find `.about-img-ph` and replace with:
```html
<img src="images/about.jpg" alt="Our team" style="width:100%;height:100%;object-fit:cover;border-radius:28px;" />
```
Recommended size: **600×750px**

## Adding a Logo

Find the `.logo` in the nav and replace the SVG with your logo:
```html
<a href="#" class="logo">
  <img src="images/logo.svg" alt="Forever Tree Care" height="36" />
</a>
```

## Update Contact Info

Search `index.html` for:
- `(413) 555-0100` — your real phone number (update both the `href` and display text)
- `hello@forevertreecare.com` — your real email
- `Western Massachusetts` — your actual service area

## Wire Up the Contact Form (Formspree — free)

1. Sign up at [formspree.io](https://formspree.io) and create a form
2. In `index.html`, add `action` and `method` to the form tag:
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_ID" method="POST">
   ```
3. In `js/main.js`, replace the fake timeout with a real fetch:
   ```js
   fetch(form.action, {
     method: 'POST',
     body: new FormData(form),
     headers: { 'Accept': 'application/json' }
   }).then(r => {
     if (r.ok) { /* show success */ }
   });
   ```

## Color Customization

Edit the CSS variables at the top of `css/style.css`:
```css
:root {
  --forest-900: #0f2118;   /* darkest — hero, nav, footer */
  --forest-800: #1a3320;   /* dark green — headings, buttons */
  --forest-600: #2c5a38;   /* mid green — accents */
  --sage:       #7ec87a;   /* bright green — dots, highlights */
}
```
