# Aerobill Technologies — Website

A polished static website for Aerobill Technologies featuring hospital management and restaurant POS solutions with a modern homepage, product pages, demo booking, and contact form.

## Preview locally
Open `index.html` in your browser, or serve the site with a local static server.

```bash
cd c:\Users\DELL\Desktop\website
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## GitHub Pages deploy
This site includes a GitHub Actions workflow at `.github/workflows/deploy.yml` to deploy the site automatically when you push to the `main` branch.

1. Push this repository to GitHub.

```bash
git init
git add .
git commit -m "Initial Aerobill website"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

2. Enable GitHub Pages in repository settings with branch `main` and folder `/ (root)`.

3. After the workflow runs, your site will be available at `https://<your-username>.github.io/<your-repo>/`.

## Notes
- The site now uses a modern responsive layout with hero imagery and polished sections.
- The contact/demo forms currently show a browser confirmation and can be wired to a backend later.
