# GitHub Pages Deployment Guide

This guide will walk you through the process of deploying your personal website to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your computer
3. Basic knowledge of Git commands

## Step 1: Create a GitHub Repository

1. Log in to your GitHub account
2. Click on the "+" icon in the top-right corner and select "New repository"
3. Name your repository `yourusername.github.io` (replace `yourusername` with your actual GitHub username)
4. Make sure the repository is set to "Public"
5. Click "Create repository"

## Step 2: Initialize Git in Your Local Project

1. Open a terminal or command prompt
2. Navigate to your website directory
3. Initialize a Git repository:

```bash
cd /path/to/personal-website
git init
```

## Step 3: Connect Your Local Repository to GitHub

1. Add the remote GitHub repository:

```bash
git remote add origin https://github.com/yourusername/yourusername.github.io.git
```

## Step 4: Prepare Your Files for Deployment

1. Create a `.gitignore` file (optional):

```bash
touch .gitignore
```

2. Add any files you want Git to ignore (optional):

```
.DS_Store
node_modules/
.vscode/
```

## Step 5: Commit and Push Your Files

1. Add all your files to the staging area:

```bash
git add .
```

2. Commit your changes:

```bash
git commit -m "Initial website commit"
```

3. Push your files to GitHub:

```bash
git push -u origin main
```

Note: If you're using an older version of Git, you might need to use `master` instead of `main`:

```bash
git push -u origin master
```

## Step 6: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section
4. Under "Source", select the branch you pushed to (main or master)
5. Click "Save"

## Step 7: Access Your Website

1. After a few minutes, your website will be available at `https://yourusername.github.io`
2. GitHub will display the URL in the GitHub Pages section of your repository settings

## Step 8: Making Updates to Your Website

1. Make changes to your local files
2. Add the changes to the staging area:

```bash
git add .
```

3. Commit the changes:

```bash
git commit -m "Description of changes"
```

4. Push the changes to GitHub:

```bash
git push
```

5. Wait a few minutes for GitHub Pages to update your website

## Troubleshooting

- If your website doesn't appear, check if you've named your repository correctly: `yourusername.github.io`
- Make sure your repository is public
- Check if you have an `index.html` file in the root of your repository
- Look for any error messages in the GitHub Pages section of your repository settings

## Customizing Your Domain (Optional)

If you want to use a custom domain instead of `yourusername.github.io`:

1. Purchase a domain from a domain registrar (e.g., Namecheap, GoDaddy)
2. In your repository settings, under GitHub Pages, enter your custom domain
3. Configure your domain's DNS settings:
   - Add an A record pointing to GitHub Pages IP addresses:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or add a CNAME record pointing to `yourusername.github.io`
4. Create a file named `CNAME` in the root of your repository containing your custom domain

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Setting up a custom domain with GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Troubleshooting GitHub Pages issues](https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites)
