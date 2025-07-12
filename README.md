# 🚀 Anurag Kumar - Portfolio Website

A modern, responsive portfolio website built with Next.js, showcasing my skills, projects, and professional journey as a Software Developer.

![Portfolio Preview](https://img.shields.io/badge/Next.js-15.3.5-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-black?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🎨 **Modern Design**
- **Dark Theme**: Elegant dark gray (#121212) background with orange accents
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: AOS (Animate On Scroll) and Framer Motion animations
- **Interactive Elements**: Hover effects, transitions, and micro-interactions

### 🎯 **Key Sections**
- **Hero Section**: Animated typewriter effect with profile picture
- **About**: Personal story and background information
- **Skills**: Categorized technical skills with icons
- **Projects**: Showcase of recent work with live demos
- **Contact**: Contact form with EmailJS integration
- **Footer**: Social links and additional information

### 🛠️ **Technical Features**
- **Next.js 15**: Latest React framework with App Router
- **Tailwind CSS 4**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **AOS**: Scroll-triggered animations
- **EmailJS**: Contact form functionality
- **Responsive Images**: Optimized with Next.js Image component

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Anu4raggdev/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── icons/           # Technology icons
│   ├── profile-pic/     # Profile images
│   ├── projects/        # Project screenshots
│   └── resume/          # Resume PDF
├── src/
│   ├── app/
│   │   ├── globals.css  # Global styles
│   │   ├── layout.js    # Root layout
│   │   └── page.js      # Home page
│   └── components/
│       ├── Hero.js      # Hero section
│       ├── About.js     # About section
│       ├── Skills.js    # Skills section
│       ├── Projects.js  # Projects section
│       ├── Contact.js   # Contact section
│       ├── Footer.js    # Footer component
│       ├── Navbar.js    # Navigation
│       ├── SocialSidebar.js # Social links
│       └── ClientWrapper.js # Client-side wrapper
├── package.json
└── README.md
```

## 🎨 Customization

### Colors
The portfolio uses a consistent color scheme:
- **Primary Background**: `#121212` (Dark Gray)
- **Accent Color**: `#f97316` (Orange)
- **Secondary Text**: `#cccccc` (Light Gray)
- **White Text**: `#ffffff`

### Adding New Projects
1. Add project images to `public/projects/`
2. Update the `projects` array in `src/components/Projects.js`
3. Include project details, technologies, and links

### Adding New Skills
1. Add skill icons to `public/icons/`
2. Update the `categories` array in `src/components/Skills.js`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Other Platforms
The project can be deployed to any platform that supports Next.js static exports.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance Features

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting with Next.js
- **Minification**: Optimized production builds
- **SEO Optimized**: Meta tags and structured data

## 🔧 Technologies Used

### Frontend
- **Next.js 15**: React framework
- **React 19**: UI library
- **Tailwind CSS 4**: Styling
- **Framer Motion**: Animations
- **AOS**: Scroll animations

### Backend & Services
- **EmailJS**: Contact form handling
- **GitHub**: Version control
- **Vercel**: Deployment platform

### Development Tools
- **ESLint**: Code linting
- **PostCSS**: CSS processing
- **Node.js**: Runtime environment

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: sunnyanurag16@gmail.com
- **LinkedIn**: [Anurag Kumar](https://www.linkedin.com/in/anurag-kumar-aa656133b)
- **GitHub**: [@Anu4raggdev](https://github.com/Anu4raggdev)
- **Instagram**: [@silent_eyess69](https://www.instagram.com/silent_eyess69)

---

⭐ **Star this repository if you found it helpful!**
