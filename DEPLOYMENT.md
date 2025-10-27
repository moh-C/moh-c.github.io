# Deploying to GitHub Pages (moh-c.github.io)

## Quick Deployment Steps

### 1. Initialize Git (if not already done)
```bash
cd Portfolio
git init
git add .
git commit -m "Initial portfolio commit"
```

### 2. Connect to GitHub Repository
```bash
# Add your GitHub repo as remote
git remote add origin https://github.com/moh-C/moh-C.github.io.git

# Or if using SSH
git remote add origin git@github.com:moh-C/moh-C.github.io.git
```

### 3. Push to GitHub
```bash
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages
1. Go to your repo: https://github.com/moh-C/moh-C.github.io
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

### 5. Wait for Deployment
- GitHub will automatically build and deploy your site
- Usually takes 1-2 minutes
- Check deployment status in the **Actions** tab
- Your site will be live at: **https://moh-c.github.io**

## Troubleshooting

### Site Not Loading?
1. Check GitHub Actions tab for build errors
2. Ensure repo name is exactly: `moh-C.github.io`
3. Wait a few minutes - initial deployment can take up to 10 minutes
4. Clear browser cache and try again

### Content Not Showing?
1. Check browser console (F12) for errors
2. Verify JSON files are loading (Network tab)
3. If seeing 404 for data files, paths might need adjustment

### Force Rebuild
```bash
# Make a small change and push
git commit --allow-empty -m "Trigger rebuild"
git push
```

## Updating Your Portfolio

### Method 1: Update via Git (Recommended)
```bash
# Make changes to JSON files or any other files
git add .
git commit -m "Updated projects/publications"
git push
```

### Method 2: GitHub Web Interface
1. Go to your repo on GitHub
2. Navigate to the file you want to edit
3. Click the pencil icon (Edit)
4. Make changes
5. Commit directly to main branch

## Custom Domain (Optional)

If you want to use a custom domain like `aaronchegin.com`:

1. Add a `CNAME` file in root with your domain:
```
aaronchegin.com
```

2. Update DNS settings with your domain provider:
```
Type: CNAME
Name: www
Value: moh-c.github.io

Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

3. In GitHub repo Settings → Pages → Custom domain, enter your domain

## Checking Your Live Site

✅ **Your portfolio will be accessible at:**
### https://moh-c.github.io

You can share this link on:
- LinkedIn profile
- Resume/CV
- Email signature
- GitHub profile README
- Business cards

## Important Files for GitHub Pages

- ✅ `.nojekyll` - Prevents Jekyll processing (already added)
- ✅ `index.html` - Homepage (must be in root)
- ✅ `README.md` - Repo documentation
- ✅ All paths are relative (works on GitHub Pages)

## Next Steps After Deployment

1. **Test everything**: Click through all pages and links
2. **Test on mobile**: Check responsive design
3. **Share your link**: Update your profiles with the new URL
4. **Monitor**: Check Google Search Console for SEO insights
5. **Analytics** (optional): Add Google Analytics to track visitors

---

**Need help?** Check the [GitHub Pages documentation](https://docs.github.com/en/pages)

