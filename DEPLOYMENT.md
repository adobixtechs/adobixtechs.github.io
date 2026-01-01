# Firebase Deployment Guide

This project is configured for Firebase Hosting deployment.

## Prerequisites

1. Install Node.js (version 18 or higher)
2. Install Firebase CLI globally (optional, or use npm scripts):
   ```bash
   npm install -g firebase-tools
   ```

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Login to Firebase (if not already logged in):
   ```bash
   npm run login
   # or
   firebase login
   ```

3. Verify your Firebase project:
   - Current project: `adobixtechnologies`
   - To change project, edit `.firebaserc` or run `firebase use <project-id>`

## Deployment

### Deploy everything:
```bash
npm run deploy
```

### Deploy only hosting:
```bash
npm run deploy:hosting
```

### Test locally before deploying:
```bash
npm run serve
```
This will start a local server at `http://localhost:5000`

## Configuration

- **Hosting directory**: `public/`
- **Firebase project**: `adobixtechnologies` (configured in `.firebaserc`)
- **404 page**: `public/404.html`

## Notes

- Static assets (images, CSS, JS) are cached for 1 year
- All routes that don't match a file will serve the 404 page
- Firebase cache files are ignored in `.gitignore`

