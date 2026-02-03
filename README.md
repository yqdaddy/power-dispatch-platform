# Electric Power Dispatch Platform Architecture Documentation

Interactive documentation site for the Electric Power Dispatch Platform architecture design.

## Live Site

After deployment, your site will be available at:
`https://<your-username>.github.io/power-dispatch-platform/`

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Updating the Knowledge Base

All content is stored in a single file for easy maintenance:

**`src/data/content.js`**

### What you can update:

| Section | Description |
|---------|-------------|
| `platformInfo` | Platform title, subtitle, version |
| `tabs` | Navigation tabs |
| `flowSteps` | Workflow status steps |
| `roles` | Role definitions and features |
| `moduleCategories` | Module categories and sub-modules |
| `keyMetrics` | Overview page metrics |
| `coreValues` | Core design principles |
| `industryFeatures` | Industry-specific features |
| `exceptionFlows` | Exception handling flows |
| `COLORS` | Color theme configuration |

### Example: Adding a new module

```javascript
// In src/data/content.js, find moduleCategories array
// Add a new category:
{
  category: "New Category",
  color: "#1565C0",
  icon: "🆕",
  modules: [
    { name: "Module Name", desc: "Module description" },
    // Add more modules...
  ]
}
```

### Example: Updating workflow steps

```javascript
// In src/data/content.js, find flowSteps array
// Modify or add steps:
{
  status: "Status Name",
  actor: "Actor",
  desc: "Description",
  color: COLORS.primary,
  icon: "📝"
}
```

## Deployment

### Automatic Deployment (Recommended)

The site automatically deploys to GitHub Pages when you push to the `main` branch.

1. Enable GitHub Pages in repository settings:
   - Go to Settings > Pages
   - Source: GitHub Actions

2. Push your changes:
```bash
git add .
git commit -m "Update documentation"
git push origin main
```

### Manual Deployment

```bash
npm run build
npm run deploy
```

## Project Structure

```
power-dispatch-platform/
├── src/
│   ├── data/
│   │   └── content.js    # All editable content
│   ├── App.jsx           # Main component
│   └── main.jsx          # Entry point
├── public/
│   └── favicon.svg
├── index.html
├── vite.config.js        # Vite configuration
└── package.json
```

## Customization

### Changing Colors

Edit the `COLORS` object in `src/data/content.js`:

```javascript
export const COLORS = {
  primary: "#1B3A5C",    // Main brand color
  secondary: "#2E7D32",  // Secondary color
  accent: "#E65100",     // Accent color
  // ... more colors
};
```

### Changing Base URL

If your repository name is different, update `vite.config.js`:

```javascript
export default defineConfig({
  base: '/your-repo-name/',
  // ...
})
```

## License

MIT
