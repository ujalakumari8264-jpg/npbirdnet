# Bird Net India - Professional Bird Netting Services

A modern, production-ready React website for Bird Net India - a leading provider of bird netting and safety solutions in Mumbai.

## 🚀 Features

- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Modern UI/UX** - Clean design with smooth animations and transitions
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Fast Performance** - Optimized build with code splitting
- **Accessible** - WCAG compliant with proper focus states

## 📦 Tech Stack

- React 19
- React Router DOM 7
- Tailwind CSS 4
- Lucide React Icons
- Vite 7

## 🛠️ Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd my-react-app

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
my-react-app/
├── public/
│   ├── _redirects          # Netlify SPA redirect
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── WhatsAppButton.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── BlogDetail.jsx
│   │   ├── Blogs.jsx
│   │   ├── Contact.jsx
│   │   ├── Gallery.jsx
│   │   ├── Home.jsx
│   │   ├── NotFound.jsx
│   │   ├── ServiceDetail.jsx
│   │   ├── Services.jsx
│   │   └── Videos.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── netlify.toml            # Netlify configuration
├── vercel.json             # Vercel configuration
└── package.json
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite and configure settings
6. Click "Deploy"

**Or use Vercel CLI:**

```bash
npm i -g vercel
vercel
```

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Build settings are auto-configured via `netlify.toml`
6. Click "Deploy site"

**Or use Netlify CLI:**

```bash
npm i -g netlify-cli
netlify deploy --prod
```

### Deploy to GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

## 🔧 Environment Variables

No environment variables required for basic deployment. For production, you may want to add:

```env
VITE_API_URL=your-api-url
VITE_GOOGLE_MAPS_KEY=your-maps-key
```

## 📱 Pages

| Page           | Route          | Description                                    |
| -------------- | -------------- | ---------------------------------------------- |
| Home           | `/`            | Landing page with hero, services, testimonials |
| About          | `/about`       | Company information and benefits               |
| Services       | `/services`    | All services overview                          |
| Service Detail | `/service/:id` | Individual service details                     |
| Gallery        | `/gallery`     | Project gallery with filters                   |
| Videos         | `/videos`      | Video gallery                                  |
| Blogs          | `/blogs`       | Blog listing                                   |
| Blog Detail    | `/blogs/:id`   | Individual blog post                           |
| Contact        | `/contact`     | Contact form and information                   |
| 404            | `*`            | Not found page                                 |

## 📞 Contact Information

- **Phone:** +91 9082074661
- **Email:** neerajpatel902664@gmail.com
- **Address:** 21.132971, 72.874458 (Surat, Gujarat)

## 📄 License

© 2024 Bird Net India. All rights reserved.
