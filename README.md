# WhiteHaven Luxury Inn - Multi-Page Website

A premium five-star luxury hotel website built with pure **HTML, CSS, and JavaScript**. No frameworks, no dependencies, just clean, elegant code ready to edit in VSCode.

## 📁 File Structure

```
whitehaven-multipage/
├── home.html          # Homepage with hero section
├── rooms.html         # All rooms and amenities
├── services.html      # Services and facilities
├── booking.html       # Booking and reservation form
├── contact.html       # Contact information and form
├── gallery.html       # Photo gallery with filtering
├── styles.css         # All styling (shared across all pages)
├── script.js          # All JavaScript functionality (shared)
└── README.md          # This file
```

## 🚀 Quick Start

### Option 1: Open in Browser
Simply double-click `home.html` to open in your default browser.

### Option 2: Run Local Server (Recommended)

**Using Python:**
```bash
cd whitehaven-multipage
python3 -m http.server 8000
# Visit: http://localhost:8000
```

**Using Node.js:**
```bash
cd whitehaven-multipage
npx http-server -p 8000
# Visit: http://localhost:8000
```

**Using VSCode:**
1. Install "Live Server" extension
2. Right-click on `home.html`
3. Select "Open with Live Server"
4. Browser opens automatically with auto-reload on save

## 📄 Pages Overview

### 🏠 home.html - Homepage
- Full-screen hero section with parallax effect
- About section with animated statistics
- Featured rooms showcase (3 room types)
- Services overview grid
- Special offers section
- Guest testimonials
- Newsletter signup area
- Call-to-action buttons

### 🛏️ rooms.html - Rooms Page
- Complete room listings with full details
- Standard Room (₦37,000/night)
- Deluxe Room (₦45,000/night)
- Premium Suite (₦73,000/night)
- Detailed room descriptions
- Features and amenities for each room
- Room amenities grid (WiFi, TV, AC, etc.)
- Book now buttons

### 🎯 services.html - Services Page
- 12 premium services with icons
- Service descriptions
- Special services section (weddings, events, catering)
- Amenities grid
- Hover animations

### 📅 booking.html - Booking Page
- Complete booking form
- Guest information fields
- Stay details (check-in, check-out, guests, room type)
- Special requests textarea
- Real-time booking summary with price calculation
- FAQ section
- Room information cards
- Contact information

### 📞 contact.html - Contact Page
- Contact form
- Multiple contact methods (phone, WhatsApp, email)
- Office hours
- Google Maps embed
- Department-specific contacts
- Location information

### 🖼️ gallery.html - Gallery Page
- Photo gallery with 12+ images
- Filter by category (All, Rooms, Facilities, Dining, Events)
- Hover overlay effects
- Responsive grid layout
- Call-to-action section

## 🎨 Customization Guide

### 1. Change Brand Colors

Edit the CSS variables at the top of `styles.css` (lines 14-30):

```css
:root {
    --primary: #D4AF37;              /* Gold - change this */
    --primary-dark: #B8860B;         /* Dark Gold */
    --secondary: #1a2f5a;            /* Dark Navy - change this */
    --secondary-light: #2d4a7f;      /* Light Navy */
    --background: #ffffff;           /* White */
    --text-dark: #1a1a1a;            /* Dark text */
    --text-light: #666666;           /* Light gray text */
}
```

**Example:** Change gold to silver:
```css
--primary: #C0C0C0;        /* Silver */
--primary-dark: #808080;   /* Dark Silver */
```

### 2. Update Hotel Contact Information

Search and replace in all HTML files:
- **Phone:** `+2348177448804` → Your phone number
- **WhatsApp:** `08160415393` → Your WhatsApp number
- **Email:** `Whitehavenluxinn@gmail.com` → Your email
- **Address:** `7 Solomon Woko Close, Eneka Link Road, Port Harcourt` → Your address

**Quick way in VSCode:**
- Press `Ctrl+H` (or `Cmd+H` on Mac)
- Find: `+2348177448804`
- Replace: Your number
- Click "Replace All"

### 3. Change Images

Replace image URLs throughout the HTML files. Look for `src="https://images.unsplash.com/..."` patterns.

**Example:**
```html
<!-- Before -->
<img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600" alt="Room">

<!-- After -->
<img src="path/to/your/luxury-room.jpg" alt="Luxury Room">
```

**Where to find images:**
- Unsplash: https://unsplash.com (free)
- Pexels: https://pexels.com (free)
- Pixabay: https://pixabay.com (free)
- Shutterstock: https://shutterstock.com (paid)

### 4. Update Room Prices

**In booking.html** (around line 95):
```html
<option value="standard">Standard Room - ₦37,000/night</option>
<option value="deluxe">Deluxe Room - ₦45,000/night</option>
<option value="suite">Premium Suite - ₦73,000/night</option>
```

**In script.js** (around line 185):
```javascript
const roomPrices = {
    standard: 37000,    // Change this
    deluxe: 45000,      // Change this
    suite: 73000        // Change this
};
```

### 5. Change Fonts

Edit the Google Fonts link in each HTML file's `<head>` section:

```html
<!-- Current fonts -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Lato:wght@400;600&display=swap" rel="stylesheet">
```

**To use different fonts:**
1. Visit https://fonts.google.com
2. Select fonts you like
3. Copy the link
4. Replace the link in all HTML files
5. Update CSS variable in `styles.css`:
```css
--font-display: 'Your Display Font', serif;
--font-body: 'Your Body Font', sans-serif;
```

### 6. Add New Services

In `services.html`, duplicate a service card and customize:

```html
<div class="service-card-full animate-fade-in-up">
    <div class="service-icon-large">
        <i class="fas fa-icon-name"></i>  <!-- Change icon -->
    </div>
    <h3>Service Name</h3>                 <!-- Change title -->
    <p>Service description here</p>       <!-- Change description -->
</div>
```

**Icon options:** Visit https://fontawesome.com/icons

### 7. Add Gallery Images

In `gallery.html`, add new gallery items:

```html
<div class="gallery-item" data-category="rooms">
    <img src="your-image.jpg" alt="Description">
    <div class="gallery-overlay">
        <div class="gallery-info">
            <h3>Title</h3>
            <p>Subtitle</p>
        </div>
    </div>
</div>
```

**Categories:** `rooms`, `facilities`, `dining`, `events`, `all`

### 8. Update Room Descriptions

In `rooms.html`, edit room descriptions and features:

```html
<p class="room-description">Your new description here</p>
<ul class="room-features-full">
    <li><i class="fas fa-check"></i> Your feature here</li>
</ul>
```

## ✨ Features Included

✅ **Responsive Design** - Works on mobile, tablet, desktop
✅ **Smooth Animations** - Fade-in, parallax, hover effects
✅ **Mobile Menu** - Hamburger menu for small screens
✅ **Booking Form** - Real-time price calculation
✅ **Contact Form** - With validation
✅ **Gallery** - With category filtering
✅ **Parallax Hero** - Scrolling background effect
✅ **Counter Animations** - Animated statistics
✅ **Notification System** - Success/error messages
✅ **Keyboard Navigation** - Accessible for all users
✅ **Form Validation** - Email, date, required fields
✅ **Glassmorphism** - Modern frosted glass effects
✅ **SEO Friendly** - Proper HTML structure

## 📱 Responsive Breakpoints

- **Desktop:** 1280px and above
- **Tablet:** 768px - 1279px
- **Mobile:** Below 768px
- **Small phones:** Below 480px

All pages automatically adapt to screen size!

## 🎯 Browser Support

✅ Chrome (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Edge (latest)
✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Form Data Handling

Currently, forms display success messages but don't send data anywhere. To integrate with a backend:

### Option 1: Formspree (Easiest)
1. Go to https://formspree.io
2. Create a free account
3. Get your form ID
4. Update form action in HTML:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: Netlify Forms
1. Deploy to Netlify (see below)
2. Add `netlify` attribute to forms
3. Netlify automatically handles submissions

### Option 3: Backend API
Connect to your own server/database with JavaScript:
```javascript
fetch('/api/booking', {
    method: 'POST',
    body: JSON.stringify(formData)
})
```

## 🚀 Deployment

### Deploy to Netlify (Easiest)
1. Create account at https://netlify.com
2. Drag and drop the `whitehaven-multipage` folder
3. Done! Your site is live with a free domain

### Deploy to GitHub Pages
1. Create repository on GitHub
2. Push files to `main` branch
3. Enable GitHub Pages in settings
4. Your site is live at `username.github.io/repo-name`

### Deploy to Your Own Server
1. Upload all files via FTP/SFTP
2. Ensure `.htaccess` is configured (if needed)
3. Your site is live

### Deploy to Vercel
1. Create account at https://vercel.com
2. Import your GitHub repository
3. Deploy with one click

## 💡 Tips & Tricks

1. **Live Reload:** Use VSCode Live Server for automatic refresh on save
2. **Mobile Testing:** Use Chrome DevTools (F12) → Toggle device toolbar
3. **Optimize Images:** Use TinyPNG or Squoosh before uploading
4. **Analytics:** Add Google Analytics tracking ID
5. **Favicon:** Replace favicon in each HTML file
6. **SEO:** Update meta descriptions in each HTML file
7. **Performance:** Minimize CSS/JS in production
8. **Backup:** Keep a backup of original files

## 🔧 Common Customizations

### Change Website Title
In each HTML file, update the `<title>` tag:
```html
<title>Our Rooms - WhiteHaven Luxury Inn</title>
```

### Change Navigation Links
In each HTML file, update the `.nav-menu` section:
```html
<a href="home.html" class="nav-link">Home</a>
<a href="rooms.html" class="nav-link">Rooms</a>
```

### Add Social Media Links
In the footer, update social links:
```html
<a href="https://instagram.com/yourusername">Instagram</a>
<a href="https://tiktok.com/@yourusername">TikTok</a>
```

### Change Button Text
Search for button text and replace:
```html
<button class="btn btn-primary">Book Now</button>
```

## 📝 SEO Optimization

Each page has:
- Descriptive `<title>` tags
- Meta viewport for mobile
- Semantic HTML structure
- Alt text on images
- Proper heading hierarchy (H1, H2, H3)

To improve SEO further:
1. Add meta descriptions in `<head>`
2. Use descriptive image filenames
3. Add internal links between pages
4. Create a sitemap.xml
5. Submit to Google Search Console

## 🔐 Security Notes

- Never commit API keys or passwords
- Validate form inputs on backend
- Use HTTPS in production
- Sanitize user input before storing
- Keep backups of important files

## 📞 Support & Troubleshooting

### Forms not working?
- Check browser console (F12) for errors
- Ensure form IDs match in HTML and JavaScript
- Verify email service is configured

### Images not loading?
- Check image URLs are correct
- Ensure images exist at specified path
- Use full URLs for external images

### Styles not applying?
- Clear browser cache (Ctrl+Shift+Delete)
- Check CSS file is linked correctly
- Verify CSS syntax in styles.css

### Mobile menu not working?
- Check JavaScript is enabled
- Verify script.js is linked
- Check browser console for errors

## 📄 File Sizes

- HTML files: ~15-20 KB each
- CSS: ~45 KB
- JavaScript: ~25 KB
- **Total:** ~150 KB (very fast loading!)

## 🎓 Learning Resources

- HTML: https://developer.mozilla.org/en-US/docs/Web/HTML
- CSS: https://developer.mozilla.org/en-US/docs/Web/CSS
- JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- VSCode: https://code.visualstudio.com/docs

## 📄 License

This website template is provided for WhiteHaven Luxury Inn.

---

**Created:** June 2026
**Last Updated:** June 29, 2026
**Version:** 1.0.0

**Enjoy your luxury hotel website! 🏨✨**

For more help, check the inline comments in HTML, CSS, and JavaScript files!
