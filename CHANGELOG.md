# Changelog

All notable changes to this template are documented here.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0]

### Breaking

- **Package manager is now Yarn 4 via Corepack.** Run `corepack enable` before
  `yarn install`. `package-lock.json` is gone, `yarn.lock` and `.yarnrc.yml` replace it.
- **Yarn refuses packages published less than 7 days ago** (`npmMinimalAgeGate` in
  `.yarnrc.yml`). Some dependency ranges are pinned slightly below the newest release
  for this reason.
- **`tailwind.config.js` removed.** Tailwind CSS 4 is configured in CSS, see
  `src/assets/styles/vendor/`.
- **`@tailwindcss/vite` removed.** Tailwind now runs only through PostCSS, which is
  what makes it work together with Sass. See `postcss.config.js`.
- **`autoprefixer` removed.** Tailwind CSS 4 adds vendor prefixes itself.
- **`src/utils/Themes.js` (static class) replaced by `src/utils/theme.js`** (plain
  module). Import `availableThemes`, `currentTheme`, `setTheme` and `initTheme`
  instead of the `Themes` class.
- **Vue Router upgraded from 4 to 5**, Vite from 6 to 8.
- Node.js 20.19 or newer is now required.

### Added

- Unit tests with [Vitest](https://vitest.dev/) and Vue Test Utils - `yarn test`.
- Linting with ESLint, including `eslint-plugin-vuejs-accessibility` - `yarn lint`.
- A CI workflow that lints, tests and builds on every push and pull request.
- Six components: Stats Overview, Data Table, Pagination, Modal Dialog, Toasts and
  Empty State, bringing the preview to 28.
- The components preview is now searchable and filterable by category, and the search
  term is kept in the URL so a filtered view can be shared.
- A working search and notification menu in the header.
- Colour swatches next to every theme in both theme pickers.
- Skip-to-content link, and accessible names for every form control and image.
- Scroll-to-top button.
- `dist/404.html` is written on build so deep links survive on static hosts.
- Document titles are derived from `meta.title` on each route.
- `renovate.json`, `.editorconfig`, `.nvmrc` and `jsconfig.json`.

### Fixed

- The theme bootstrap script wrote `data-theme="system"`, which is not a real DaisyUI
  theme, so a stored "system" preference rendered the default theme instead of the
  operating system one.
- Theme handling now survives an unavailable `localStorage` and follows the operating
  system live while "system" is selected.
- The countdown component leaked a `setTimeout` after unmount.
- The Vite logo was requested from `//vite.svg` (a protocol-relative URL) and never loaded.
- Breadcrumbs on the 404 page linked to the route pattern instead of the actual path.
- The header navigation is now reachable on small screens.
- Preview images are served from the project instead of a third-party CDN.

### Removed

- `src/data/themes.js`, an unused duplicate of the theme list.
- Empty `<style scoped lang="scss">` blocks from 32 components.
