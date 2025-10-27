# Aaron Chegini's Portfolio

A clean, modern portfolio website showcasing AI/ML projects and research publications. Built with vanilla HTML, CSS, and JavaScript with data-driven content from JSON files.

## Features

- **Dynamic Content Loading**: Projects and publications loaded from JSON files
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Clean Code**: Well-organized, maintainable codebase
- **Easy Customization**: Simply edit JSON files to update content

## File Structure

```
Portfolio/
├── index.html              # Home page
├── projects.html           # Projects listing page
├── publications.html       # Publications listing page
├── contact.html           # Contact page
├── css/
│   └── base.css           # All styles with CSS variables
├── js/
│   └── app.js             # Dynamic content loading and utilities
├── data/
│   ├── projects.json      # Projects data
│   └── publications.json  # Publications data
├── files/
│   ├── d.jpeg            # Profile photo
│   └── AaronCheginiResume.pdf  # Resume
└── README.md             # This file
```

## Customization

### Updating Projects

Edit `data/projects.json` to add, remove, or modify projects:

```json
{
  "projects": [
    {
      "id": "unique-id",
      "number": "01",
      "title": "Project Title",
      "shortDescription": "Brief description for home page",
      "fullDescription": "Detailed description for project page",
      "venue": "Company/Conference Name",
      "date": "Year or Date Range",
      "details": [
        "Technical detail 1",
        "Technical detail 2"
      ],
      "technologies": ["Tech1", "Tech2", "Tech3"],
      "links": {
        "details": "projects.html#unique-id",
        "paper": "https://...",
        "github": "https://github.com/...",
        "demo": "https://..."
      }
    }
  ]
}
```

### Updating Publications

Edit `data/publications.json` to add, remove, or modify publications:

```json
{
  "publications": [
    {
      "id": "unique-id",
      "number": "01",
      "title": "Publication Title",
      "venue": "Conference/Journal Name",
      "date": "Year",
      "authors": "Author Names",
      "abstract": "Publication abstract",
      "links": {
        "details": "publications.html#unique-id",
        "paper": "https://...",
        "code": "https://github.com/..."
      }
    }
  ]
}
```

### Customizing Styles

Edit `css/base.css` to customize colors, fonts, and spacing. Key CSS variables:

```css
:root {
  --bg-primary: #13131A;        /* Primary background */
  --bg-secondary: #1a1a24;      /* Secondary background */
  --text-primary: #ffffff;      /* Primary text color */
  --text-secondary: #a0a0a0;    /* Secondary text color */
  --accent: #B2FF00;            /* Accent color */
  --border: #2a2a3a;            /* Border color */
}
```

### Updating Personal Information

1. **Profile Photo**: Replace `files/d.jpeg` with your photo
2. **Resume**: Replace `files/AaronCheginiResume.pdf` with your resume
3. **Contact Info**: Edit `contact.html` to update email addresses and social links
4. **Bio**: Edit the intro section in `index.html`

## Running Locally

### Option 1: Python HTTP Server
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`

### Option 2: PHP Built-in Server
```bash
php -S localhost:8000
```

### Option 3: Node.js HTTP Server
```bash
npx serve .
```

### Option 4: VS Code Live Server Extension
Install the "Live Server" extension and click "Go Live"

## Deployment

The site is static HTML/CSS/JS, so it can be deployed to:

- **GitHub Pages**: Push to a repo and enable GitHub Pages
- **Netlify**: Drag and drop the folder or connect to a Git repo
- **Vercel**: Similar to Netlify, supports Git integration
- **Any Web Host**: Upload files via FTP/SFTP

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Tips

- Keep the `id` field in JSON files unique and URL-friendly (lowercase, hyphens)
- The `number` field is displayed as a decorative element on cards
- Links with `#` as the URL will be automatically hidden by JavaScript
- All dates and venues are displayed as-is from the JSON files
- The visual appearance is preserved through CSS - modify variables for easy theming

## License

This project is open source and available under the MIT License.

