# Template: Vite + Vue 3 + Sass + Tailwind 4 + DaisyUI 5
![Starter template: Vite + Vue 3 + Sass + Tailwind 4 + DaisyUI 5](https://tpl-vue3-tailwind4-daisyui5.brown.sk/template-image.png)

This template should help get you started developing with Vue 3 in Vite. The template is based on the [Vite + Vue 3 template](https://vite.new/vue), but with some additional features:

- ✅ [Vite](https://vite.dev/) for the build tool
- ✅ [Vue 3](https://vuejs.org/) for the frontend
- ✅ [Vue Router](https://router.vuejs.org/) for routing
- ✅ [Sass](https://sass-lang.com/) for styling
- ✅ [Tailwind CSS 4](https://tailwindcss.com/) for styling
- ✅ [DaisyUI 5](https://daisyui.com/) for additional Tailwind CSS components
- ✅ [Vitest](https://vitest.dev/) + [Vue Test Utils](https://test-utils.vuejs.org/) for unit tests
- ✅ [ESLint](https://eslint.org/) for linting
- ✅ [Yarn 4](https://yarnpkg.com/) via Corepack, with a 7-day minimum dependency age
- ✅ **Theme configuration** (light, dark, system, ...)
- ✅ **UI blocks (components)** pre-configured with DaisyUI
- ✅ **GitHub Actions** for CI and GitHub Pages deployment

### Demo
- 🌐 [https://tpl-vue3-tailwind4-daisyui5.brown.sk/](https://tpl-vue3-tailwind4-daisyui5.brown.sk/)

### Requirements
- Node.js 20.19+ (or 22+)
- Corepack (bundled with Node.js): `corepack enable`

### Template initialization by forking (recommended) 🍴
⏩ Use github's template feature to create a new repository based on this template:

→ [Create a repository from this template](https://github.com/new?template_name=starter-template-vite-vue3-sass-tailwind4-daisyui5&template_owner=martinille) ←

### Template initialization by cloning
⏩ Clone the repository:
```bash
git clone https://github.com/martinille/starter-template-vite-vue3-sass-tailwind4-daisyui5.git <project-name>
```

⏩ Change the directory:
```bash
cd <project-name>
```

⏩ Remove the `.git` directory:
```bash
rm -rf .git
```

⏩ Enable Corepack and install the dependencies:
```bash
corepack enable
yarn install
```

### Scripts
| Command              | Description                                 |
|----------------------|---------------------------------------------|
| `yarn dev`           | Start the Vite dev server with HMR          |
| `yarn build`         | Build the project into `dist/`              |
| `yarn preview`       | Preview the production build locally        |
| `yarn test`          | Run the unit tests once                     |
| `yarn test:watch`    | Run the unit tests in watch mode            |
| `yarn test:coverage` | Run the unit tests with a coverage report   |
| `yarn lint`          | Lint the project                            |
| `yarn lint:fix`      | Lint the project and apply the fixes        |

### Dependency safety
`.yarnrc.yml` sets `npmMinimalAgeGate: 10080`, so Yarn refuses to install any package
version published less than 7 days ago. Compromised releases are usually detected and
unpublished within hours, so the delay keeps a freshly backdoored version out of the
project. Use `npmPreapprovedPackages` to whitelist a package when a security patch has
to land immediately.

### Testing
Tests run on [Vitest](https://vitest.dev/) in a jsdom environment and live next to the
code they cover, as `*.test.js`. `src/test/setup.js` stubs `window.matchMedia`, which
jsdom does not implement and the theme handling needs.

```bash
yarn test            # run once
yarn test:watch      # re-run on change
yarn test:coverage   # coverage report
```

### Folder structure
- 📁 `public/` - Static files served as-is
- 📁 `src/` - Source files
  - 📁 `assets/` - Static assets
    - 📁 `icons/` - Inline SVG icons
    - 📁 `images/` - Images
    - 📁 `styles/` - Styles
      - 📁 `vendor/` - Tailwind CSS and DaisyUI configuration
  - 📁 `components/` - Vue components
  - 📁 `router/` - Vue Router configuration
  - 📁 `test/` - Test setup
  - 📁 `utils/` - Framework-agnostic helpers (theme handling)
  - 📁 `views/` - Vue views
  - 📄 `App.vue` - Root component
  - 📄 `config.js` - App-wide constants
  - 📄 `main.js` - Entry point

### Styling
Tailwind CSS is compiled through PostCSS (`postcss.config.js`), which is what makes it
work together with Sass. The Tailwind and DaisyUI configuration lives in CSS:

- `src/assets/styles/vendor/tailwind.css` - theme tokens, base/component/utility layers, custom variants
- `src/assets/styles/vendor/daisyui.css` - enabled DaisyUI themes and theme overrides
- `src/assets/styles/main.scss` - entry point, project-wide styles

### Theming
`src/utils/theme.js` is the single source of truth for the available themes. It stores the
selection in `localStorage`, applies it to `<html data-theme="...">` and, when `system` is
selected, follows the OS colour scheme live. An inline script in `index.html` applies the
stored theme before the first paint to avoid a flash of the wrong theme.

### GitHub Pages

The template includes a GitHub workflow for deployment to GitHub Pages. To enable GitHub Pages:

1. Visit your repository's Settings
2. Select the Pages section
3. In the "Build and deployment" area, set the source to "GitHub Actions"

### TODO
- [ ] 🕘 Minimal template (no additional features)
