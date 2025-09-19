# Academic Notes Repository

A professional repository for LaTeX/Markdown academic notes with automated PDF compilation and GitBook integration.

## 📚 Subjects

This repository contains notes for the following subjects:

- **[Probability I](probability/)** - Basic probability concepts, random variables, and distributions
- **[Stochastic Differential Equations](sde/)** - Brownian motion, Itô calculus, and SDE applications
- **[Algorithms](algorithms/)** - Algorithm analysis, sorting, graph algorithms, and dynamic programming

## 🚀 Features

- **Automated LaTeX Compilation**: GitHub Actions automatically compiles `.tex` files to PDFs
- **GitBook Integration**: Professional documentation with sidebar navigation
- **PDF Publishing**: Compiled PDFs are automatically published to GitHub Pages
- **Live PDF Preview**: GitBook pages with embedded PDF viewers using iframes
- **Clean Structure**: Organized, minimal, and professional repository layout

## 📁 Repository Structure

```
├── probability/
│   ├── README.md
│   ├── notes.tex
│   └── pdf-viewer.md
├── sde/
│   ├── README.md
│   ├── notes.tex
│   └── pdf-viewer.md
├── algorithms/
│   ├── README.md
│   ├── notes.tex
│   └── pdf-viewer.md
├── .github/workflows/
│   └── latex-compile.yml
├── .gitbook.yml
├── SUMMARY.md
└── README.md
```

## 🛠️ Setup Instructions

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `academic-notes` or `latex-notes`
3. Make it public (required for GitHub Pages)
4. Don't initialize with README (we already have one)

### 2. Push Your Code

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Academic notes repository setup"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. Save the settings

### 4. Update PDF URLs

After pushing, update the PDF viewer pages with your actual GitHub username and repository name:

1. Replace `[YOUR_USERNAME]` with your GitHub username
2. Replace `[YOUR_REPO_NAME]` with your repository name
3. Commit and push the changes

### 5. Set Up GitBook (Optional)

1. Go to [GitBook](https://www.gitbook.com)
2. Create a new space
3. Connect it to your GitHub repository
4. GitBook will automatically sync with your repository

## 📝 Usage

### Adding New Notes

1. Edit the `.tex` files in each subject folder
2. Commit and push changes
3. GitHub Actions will automatically compile the PDFs
4. PDFs will be available at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/pdfs/`

### Viewing Notes

- **GitBook**: Professional documentation interface with sidebar navigation
- **PDF Viewers**: Embedded PDF viewers in each subject's `pdf-viewer.md` page
- **Direct Download**: Direct links to PDF files

## 🔧 Customization

### LaTeX Templates

Each `notes.tex` file includes:
- Professional document class and packages
- Proper formatting and structure
- Mathematical notation support
- Hyperlinks and cross-references

### GitBook Configuration

The `.gitbook.yml` file configures:
- Root directory structure
- Table of contents organization
- Navigation sidebar

### GitHub Actions

The workflow automatically:
- Compiles all `.tex` files
- Runs LaTeX twice for proper cross-references
- Publishes PDFs to GitHub Pages
- Triggers on push and pull requests

## 📖 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test the LaTeX compilation
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Support

If you encounter any issues:

1. Check the GitHub Actions workflow status
2. Verify GitHub Pages is enabled
3. Ensure all LaTeX files compile locally
4. Check the PDF viewer URLs are correct

---

*Happy note-taking! 📚*