# GitHub Pages Static Site with CI/CD

A simple static website hosted on GitHub Pages with automated CI/CD pipeline using GitHub Actions.

## Overview

This project demonstrates a basic CI/CD workflow that automatically deploys a static website to GitHub Pages whenever changes are pushed to the `Web` folder.

## Features

- 🚀 Automated deployment to GitHub Pages
- 🔄 CI/CD pipeline triggered on changes to the `Web` folder
- 📦 Simple static site hosting
- ⚡ Fast deployment with GitHub Actions

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── Web/                        # Static site files
│   ├── index.html
│   ├── css/
│   ├── js/
│   └── assets/
└── README.md
```

## How It Works

1. **Make changes** to any file in the `Web` folder
2. **Push to repository** (main/master branch)
3. **GitHub Actions automatically triggers** the deployment workflow
4. **Site is deployed** to GitHub Pages

## Setup Instructions

### 1. Enable GitHub Pages

1. Go to your repository **Settings**
2. Navigate to **Pages** section
3. Under **Source**, select **GitHub Actions**

### 2. Configure the Workflow

The GitHub Actions workflow (`.github/workflows/deploy.yml`) is already configured to:
- Trigger on pushes to the `Web` folder
- Build and deploy the static site
- Publish to GitHub Pages

### 3. Access Your Site

Once deployed, your site will be available at:
```
https://<username>.github.io/<repository-name>/
```

## Development

To make changes to the website:

1. Edit files in the `Web` folder
2. Commit your changes:
   ```bash
   git add Web/
   git commit -m "Update website"
   git push origin main
   ```
3. GitHub Actions will automatically deploy your changes

## Technologies Used

- **GitHub Pages** - Static site hosting
- **GitHub Actions** - CI/CD automation
- **HTML/CSS/JavaScript** - Frontend technologies

## Workflow Triggers

The deployment workflow is triggered when:
- Changes are pushed to the `Web` folder
- Changes are made to the workflow file itself

## Contributing

Feel free to fork this project and submit pull requests for any improvements.

## Support

If you encounter any issues or have questions, please open an issue in the repository.

---

**Live Site:** [View Site](https://madhawapathum.github.io/gh-deployment-workflow/)

This project is part of the roadmap.sh DevOps projects:https://roadmap.sh/projects/github-actions-deployment-workflow
