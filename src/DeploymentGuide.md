# Deployment Guide for Your Portfolio Website

This guide will help you deploy your portfolio website using Core FTP, as you mentioned. Here's a step-by-step process:

## Before Exporting Your Project

1. **Build your production-ready website**
   ```bash
   npm run build
   ```
   This will create a `dist` folder containing optimized static files for your website.

2. **Test your production build locally**
   ```bash
   npm run preview
   ```
   This will serve your built website locally so you can verify everything works as expected.

3. **Prepare your files for deployment**
   - Ensure all links are correct (absolute vs. relative paths)
   - Verify all images and assets are loading properly
   - Check that the site is responsive on different devices

## Using Core FTP for Deployment

1. **Download and install Core FTP** (if you haven't already)
   - Get it from the [official website](https://www.coreftp.com/)

2. **Configure your FTP connection**
   - Open Core FTP
   - Click on "Site Manager" or use the quick connect option
   - Enter your hosting provider's FTP details:
     - Server/Host: (from your hosting provider)
     - Username: (your FTP username)
     - Password: (your FTP password)
     - Port: (usually 21 for standard FTP)
     - Initial remote directory: (often public_html, www, or htdocs)

3. **Connect to your server**
   - After entering your details, click "Connect"
   - You should see your local files on the left and server files on the right

4. **Upload your website files**
   - Navigate to your project's `dist` folder in the left (local) panel
   - Navigate to your website's root directory in the right (remote) panel
   - Select all files in the `dist` folder
   - Right-click and select "Upload" (or drag from left to right)
   - Confirm any overwrites if you're updating an existing site

5. **Verify your upload**
   - After uploading is complete, open your website URL in a browser
   - Check all pages and functionality to ensure everything works correctly

## Post-Deployment Tips

1. **Set up proper redirects**
   - If needed, create or modify the `.htaccess` file to handle redirects or URL rewrites
   - This is especially important for single-page applications (SPAs)

2. **Configure caching**
   - Set appropriate cache headers for your static assets for better performance
   - Consider adding a `Cache-Control` header for files that don't change often

3. **Regular maintenance**
   - Keep track of your site's performance and analytics
   - Update content regularly to keep your portfolio fresh
   - Consider setting up automated backups

4. **Domain and SSL**
   - Ensure your domain is properly configured to point to your hosting
   - Consider adding an SSL certificate for HTTPS (many hosting providers offer free Let's Encrypt certificates)

## Troubleshooting Common Issues

- **404 errors**: Check if all your file paths are correct
- **Blank page**: Check your browser console for JavaScript errors
- **Styling issues**: Ensure your CSS files are properly loaded
- **Slow loading**: Optimize images and consider using a CDN for assets
- **FTP connection issues**: Verify your credentials and check if your hosting provider has specific FTP requirements

Remember to always keep a backup of your website files before making any significant changes to your deployed site.