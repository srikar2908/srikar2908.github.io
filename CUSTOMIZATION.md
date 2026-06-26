# Customization Guide

This guide explains how to quickly customize the portfolio details, styling, and content.

## 1. Updating Personal Information

All primary identity profiles (Name, Email, Socials, Resume link, Tagline) are centralized in a single data file:

👉 **[src/data/personal.ts](file:///src/data/personal.ts)**

Open this file and modify the values in the `personalInfo` object:

```typescript
export const personalInfo = {
  name: "Srikar Kukkadapu",
  email: "your.email@example.com",
  phone: "+91 XXXXXXXXXX",
  github: "your_github_username",
  githubUrl: "https://github.com/your_github_username",
  linkedinUrl: "https://www.linkedin.com/in/your_profile/",
  resumeUrl: "https://drive.google.com/your_resume_link",
  tagline: "Your custom tagline here..."
};
```

All references across the Hero section, contact forms, navigation, footer, metadata, and JSON-LD headers will update automatically.

---

## 2. Modifying Lists (Skills, Education, Certifications, Achievements)

Each category is separated into structured data files under `src/data/` for simple edits:

- **Skills**: Update categories, skill descriptors, or SVG icon pointers in [src/data/skills.ts](file:///src/data/skills.ts).
- **Education**: Add institutions, GPAs, or coursework bullet points in [src/data/education.ts](file:///src/data/education.ts).
- **Certifications**: Add certificates, issuers, credential IDs, and color tags in [src/data/certifications.ts](file:///src/data/certifications.ts).
- **Achievements**: Add competitive prizes or events in [src/data/achievements.ts](file:///src/data/achievements.ts).

---

## 3. Changing Accent Colors & Theme Styles

The color system uses CSS Custom Properties (Variables) integrated with Tailwind:

👉 **[src/styles/global.css](file:///src/styles/global.css)**

- Find the `:root` selector to modify **Light Mode** colors.
- Find the `.dark` selector to modify **Dark Mode** colors.
- Modify `--accent` (using HSL values) to instantly update the primary theme highlight (buttons, focus states, links).

For example, to change the accent from blue to a premium purple:
- Light Mode accent: `262 83% 58%` (#8B5CF6)
- Dark Mode accent: `263 90% 70%` (#A78BFA)

---

## 4. Swapping Profile Photo Initials

The avatar in the **About** section renders a vector layout displaying the initials "SK". If you want to use a real photo:
1. Copy your photo to `public/avatar.jpg` (recommended square size: 400x400px).
2. Edit [src/components/sections/About.astro](file:///src/components/sections/About.astro) and replace the monogram overlay with an `<img>` tag:
   ```html
   <img 
     src="/avatar.jpg" 
     alt="Srikar Kukkadapu" 
     width="400" 
     height="400" 
     class="w-full h-full object-cover" 
     loading="lazy" 
   />
   ```

---

## 5. Connecting Formspree for the Contact Form

By default, the contact form opens the user's local email client using `mailto:`. To enable serverless email submissions:
1. Register a free account at [Formspree](https://formspree.io).
2. Create a form and get your Endpoint ID (looks like `https://formspree.io/f/mqkvgdrj`).
3. Create a `.env` file in the project root:
   ```env
   PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your_endpoint_id
   ```
4. Update the `<form>` tag in [src/components/sections/Contact.astro](file:///src/components/sections/Contact.astro) to submit to this endpoint.

---

## 6. Adjusting Animations

All animations use Framer Motion presets defined in:

👉 **[src/utils/animations.ts](file:///src/utils/animations.ts)**

You can adjust standard durations, stagger speeds, or threshold options. If a user has `prefers-reduced-motion` enabled, the `useAnimationVariants` hook automatically disables motion to respect their accessibility preferences.
