# Resume Builder

A modern React-based resume builder application that allows users to create professional resumes with real-time preview functionality.

## Features

- **Real-time Preview**: See your resume changes instantly as you type
- **Multiple Sections**: Support for header, objective, education, experience, projects, skills, and achievements
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Clean Interface**: Modern, user-friendly design built with React and Tailwind CSS
- **Form Management**: Efficient form handling with proper validation

## Tech Stack

- **React** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **HTML2Canvas** - For PDF generation (in progress)
- **jsPDF** - PDF creation library

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/SarveshShahane/Resume-Builder
cd resume-builder
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure


```

Resume Builder/
├── src/
│   ├── components/
│   │   ├── forms/              # Form components for data input
│   │   │   ├── AchievementsForm.jsx
│   │   │   ├── EducationForm.jsx
│   │   │   ├── ExperienceForm.jsx
│   │   │   ├── HeaderForm.jsx
│   │   │   ├── ObjectiveForm.jsx
│   │   │   ├── ProjectsForm.jsx
│   │   │   └── SkillsForm.jsx
│   │   └── preview/            # Resume preview components
│   │       ├── AchievementsPreview.jsx
│   │       ├── EducationPreview.jsx
│   │       ├── ExperiencePreview.jsx
│   │       ├── HeaderPreview.jsx
│   │       ├── ObjectivePreview.jsx
│   │       ├── ProjectsPreview.jsx
│   │       ├── ResumePreview.jsx
│   │       └── SkillsPreview.jsx
│   ├── App.jsx                 # Main application component
│   ├── App.css                 # Application styles
│   ├── index.css               # Global styles
│   └── main.jsx                # Application entry point
├── public/                     # Static assets
├── index.html                  # HTML template
├── package.json                # Dependencies and scripts
├── tailwind.config.js          # Tailwind CSS configuration
├── vite.config.js              # Vite configuration
└── README.md                   # Project documentation

```

## Known Issues & Contributions Welcome

### 🚧 Major Features Need Development - Help Needed!

This project has several **incomplete features** that require community contributions:

#### 1. PDF Download Feature
- **OKLCH Color Function Errors**: Modern Tailwind CSS color functions (OKLCH) are causing compatibility issues with HTML2Canvas
- **Text Overlap Issues**: Generated PDFs sometimes have overlapping text elements
- **Layout Inconsistencies**: The PDF output doesn't always match the preview layout

#### 2. Preview UI Incomplete
- **Styling Issues**: Preview components need better CSS styling and layout improvements
- **Responsive Design**: Preview area doesn't adapt well to different screen sizes
- **Visual Polish**: Missing professional styling, proper spacing, and typography
- **Layout Bugs**: Some sections don't render correctly in the preview pane
- **Mobile View**: Preview is not optimized for mobile devices

**We welcome contributions to fix these issues!** 

If you have experience with:
- PDF generation in React applications
- HTML2Canvas and jsPDF libraries
- CSS-to-PDF conversion challenges
- Modern color function compatibility
- React component styling and layout
- Responsive design with Tailwind CSS

Please feel free to:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request with your improvements

### How to Contribute

1. **Report Issues**: Found a bug? Open an issue with detailed reproduction steps
2. **Feature Requests**: Have ideas for improvements? We'd love to hear them!
3. **Code Contributions**: 
   - Fix the PDF download feature
   - Improve the preview UI styling and layout
   - Enhance responsive design
   - Add new resume sections
   - Fix mobile compatibility issues

## Current Functionality

✅ **Working Features:**
- Complete resume form with all sections
- Basic form validation
- Data flow between forms and preview
- Basic project structure

⚠️ **Partially Working:**
- Resume preview (functional but needs styling improvements)
- Real-time updates (works but preview layout needs work)

❌ **Known Issues:**
- PDF download generates files with overlapping text
- OKLCH color function compatibility errors
- Preview UI lacks professional styling
- Layout elements don't render correctly in both preview and PDF
- Mobile responsiveness needs improvement
- Typography and spacing inconsistencies

## Contributing

We especially need help with:
1. **PDF Generation**: Solving HTML2Canvas + modern CSS compatibility issues
2. **Preview UI**: Creating a professional, polished preview interface
3. **Responsive Design**: Making the entire app work seamlessly on all devices

Your contributions can help make this a fully functional, professional resume builder for everyone!

## Development Setup

This project uses:
- **Vite** for fast development and building
- **React** with modern hooks and functional components
- **Tailwind CSS** for styling (though preview components need more work)
- **ESLint** for code quality

## License

This project is open source and available under the MIT License.

---

**Note**: This is an active development project in early stages. Both the core preview functionality and PDF export features need significant community support to reach completion. Your contributions, whether for UI improvements or PDF generation fixes, would be greatly appreciated! 🚀

**Perfect for:** Developers looking to contribute to an open-source project, practice React/CSS skills, or solve challenging PDF generation problems.
