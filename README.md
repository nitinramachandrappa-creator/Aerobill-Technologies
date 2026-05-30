# Aerobill Technologies — Website

Simple static website for Aerobill Technologies showcasing Hospital Management Software and Restaurant POS with demo booking and contact forms.

Quick start:

Open `index.html` in your browser (double-click or serve with a static server).

To serve locally using Python 3:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

Deploy: You can host these static files on GitHub Pages, Netlify, or any static hosting provider.

GitHub Pages deploy

1. Push this repository to GitHub (create a repo and push `main`).

```bash
git init
git add .
git commit -m "Initial Aerobill website"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

2. The included GitHub Actions workflow (`.github/workflows/deploy.yml`) will upload the site artifact and deploy it to GitHub Pages automatically when you push to `main`.

3. After the workflow runs, your site will be available at `https://<your-username>.github.io/<your-repo>/`.

Next steps:
- Wire the forms to a real backend or form service (e.g., Formspree, Netlify Forms).
- Add company branding, images, and screenshots for demos.
