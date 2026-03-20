# Copilot Instructions for Ennis Tidy Towns Website

## Project Overview
- **Purpose**: Static website for Ennis Tidy Towns (ennistidytowns.ie)
- **Hosting**: GitHub Pages
- **Design Philosophy**: Clean, minimal, responsive

## Technology Stack
- Pure HTML5, CSS3, and vanilla JavaScript (no frameworks)
- Static site - no build process required
- Mobile-first responsive design

## Design Guidelines

### Icons & Typography
- **Icons**: Use Font Awesome (https://fontawesome.com/icons)
  - Included via: Font Awesome CDN (v6.5.1)
  - Social media brand icons: `<i class="fab fa-[platform]"></i>` (e.g., `fa-facebook`, `fa-instagram`)
  - General UI icons: `<i class="fas fa-[icon-name]"></i>` (solid style)
  - Alternative: `<i class="far fa-[icon-name]"></i>` (regular/outline style)
  - Font Awesome is the standard for both brand and UI icons

### Color Scheme
```css
--primary-color: #2d7d3b;    /* Tidy Towns Green */
--primary-dark: #1e5429;     /* Dark Green */
--secondary-color: #f4a442;   /* Orange/Gold accent */
```

### Navigation
- Fixed/floating navbar at top
- Mobile hamburger menu for small screens
- Smooth scrolling between sections

### Content Approach
- Currently: "Coming soon" minimal page
- Keep content concise and focused
- Environmental/community focus

## File Structure
- `index.html` - Main page
- `styles.css` - All styling
- `script.js` - Interactive features
- `CNAME` - Domain configuration (ennistidytowns.ie)
- Logo images in root directory

## Social Media Links
- Facebook: https://www.facebook.com/EnnisTidyTowns/
- Instagram: https://www.instagram.com/ennistidytowns/
- Email: Coming soon

## Development Preferences
- Write clean, readable code with comments
- Ensure cross-browser compatibility
- Test on mobile viewports
- Keep assets optimized (lightweight images, minimal dependencies)
- Prioritize accessibility (semantic HTML, ARIA labels, alt text)

## Common Tasks
- Use Material Symbols for new icons
- Maintain responsive design patterns (flexbox, CSS grid)
- Keep color palette consistent
- Test navigation on mobile before committing
