# Srikar Kukkadapu - Portfolio Website

This is the source code for Srikar Kukkadapu's professional portfolio website, built with Astro, React, TypeScript, and Tailwind CSS. The project is designed to be fully static, high-performance, and immediately deployable to GitHub Pages.

## Tech Stack

- **Framework**: Astro v4 (Static output configured)
- **Styling**: Tailwind CSS v3
- **Components**: React & Framer Motion (for smooth, lightweight animations)
- **Icons**: SVG illustrations
- **Fonts**: Inter (body text) and Geist Sans (headings) via `@fontsource`
- **Analytics & Activity**: Embeddable GitHub Statistics API integration
- **Deployment**: GitHub Pages (via custom GitHub Actions workflow)

## Getting Started

To run the project locally, ensure you have [Node.js](https://nodejs.org/) (v18+ recommended) and `pnpm` installed.

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Run the Development Server

```bash
pnpm dev
```

The site will be running at `http://localhost:4321/`.

### 3. Build for Production

```bash
pnpm build
```

This compiles the static pages into the `dist/` directory, ready to be served by any static host.

## Deployment

The project is pre-configured with a GitHub Actions workflow in [deploy.yml](file:///.github/workflows/deploy.yml) that triggers automatically on push to the `main` branch. 

To deploy:
1. Push this repository to your GitHub account under the name `srikar2908.github.io`.
2. Under the repository **Settings** > **Pages** page, ensure that **Source** is set to **GitHub Actions**.
3. That's it! Pushing to `main` will build and publish your site at `https://srikar2908.github.io/`.

## Customization

For detailed developer instructions on updating content, modifying styles, changing icons, and configuring form integrations, please refer to [CUSTOMIZATION.md](file:///CUSTOMIZATION.md).
