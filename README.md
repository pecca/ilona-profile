# Ilona Mäkelä - Rowing Athlete Profile

A professional profile website for Ilona Mäkelä, showcasing her rowing achievements, academic excellence, and recruitment information for US university coaches.

## 🚣‍♀️ About

This website serves as a comprehensive athletic and academic profile for recruiting purposes. It includes:

- **Athletic Performance**: Personal best times, competition results, and physical statistics
- **Academic Profile**: Current grades, achievements, and academic interests
- **Media Gallery**: Photos and videos showcasing rowing technique and competitions
- **Contact Information**: Direct contact details and coaching references

## 🛠 Technology Stack

- **React 18** - Modern JavaScript framework
- **Material-UI (MUI)** - Professional UI component library
- **Vite** - Fast build tool and development server
- **GitHub Pages** - Hosting platform

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation and profile header
│   ├── About.jsx           # Personal introduction and background
│   ├── Athletic.jsx        # Athletic achievements and statistics
│   ├── Academic.jsx        # Academic profile and grades
│   ├── MediaGallery.jsx    # Photo and video gallery
│   └── Contact.jsx         # Contact form and information
├── App.jsx                 # Main application component
├── main.jsx               # Application entry point
└── index.css              # Global styles

public/
├── images/                # Photo gallery images
└── videos/                # Training and competition videos
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/pecca/ilona-profile.git
cd ilona-profile
```

2. Install dependencies

```bash
npm install
```

3. Start development server

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173/ilona-profile/`

## 📸 Adding Media

### Photos

1. Add image files to `public/images/` directory
2. Update the `photos` array in `src/components/MediaGallery.jsx`
3. Include proper titles, descriptions, and categories

### Videos

1. Add video files to `public/videos/` directory
2. Add corresponding thumbnail images to `public/images/`
3. Update the `videos` array in `src/components/MediaGallery.jsx`

## 🎯 Customization

### Personal Information

- Update athlete details in `src/components/Header.jsx`
- Modify personal story in `src/components/About.jsx`
- Update contact information in `src/components/Contact.jsx`

### Athletic Data

- Update personal best times in `src/components/Athletic.jsx`
- Add new competition results and achievements
- Modify physical statistics

### Academic Information

- Update current grades in `src/components/Academic.jsx`
- Add new achievements and test scores
- Modify academic interests and goals

### Styling

- Customize theme colors in `src/App.jsx`
- Modify component styles using Material-UI's styling system
- Update global styles in `src/index.css`

## 🌐 Deployment

### GitHub Pages

1. Build the project

```bash
npm run build
```

2. Deploy to GitHub Pages

```bash
npm run deploy
```

The site will be available at: `https://pecca.github.io/ilona-profile/`

### Other Hosting Platforms

The built files in the `dist/` directory can be deployed to any static hosting service like:

- Netlify
- Vercel
- AWS S3
- Firebase Hosting

## 📧 Contact

For technical questions about this website:

- Email: [technical-contact@email.com]
- GitHub: [@pecca](https://github.com/pecca)

For rowing recruitment inquiries, please use the contact form on the website or reach out directly to the athlete and coaching staff.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

_This website was built to showcase athletic and academic excellence for US university rowing recruitment._
