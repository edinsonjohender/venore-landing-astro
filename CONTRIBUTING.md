# Contributing to VENORE Landing Page

Thank you for your interest in contributing! This document provides guidelines for contributing to this project.

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the community

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/venore-landing-astro.git
   cd venore-landing-astro
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Create a branch** for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### Local Development

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Before Submitting

1. **Test your changes**:
   ```bash
   npm run build
   npm run preview
   ```

2. **Check for errors**:
   - No console errors
   - All links work
   - Forms function correctly
   - Responsive on mobile/tablet/desktop

3. **Performance check**:
   - Run Lighthouse in Chrome DevTools
   - Ensure Desktop score >= 95
   - Ensure Mobile score >= 90

## Commit Guidelines

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, missing semicolons, etc.)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

### Examples

```bash
feat(carousel): add touch swipe support
fix(waitlist): handle email validation errors
docs(readme): update installation instructions
perf(hero): optimize SVG animation performance
```

## Pull Request Process

1. **Update documentation** if needed
2. **Add/update tests** if applicable
3. **Ensure all checks pass**
4. **Write a clear PR description**:
   - What does this PR do?
   - Why is this change needed?
   - How was it tested?
   - Screenshots (if UI changes)

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
How was this tested?

## Screenshots (if applicable)
Add screenshots here

## Checklist
- [ ] Code follows project style
- [ ] Self-reviewed code
- [ ] Commented complex code
- [ ] Documentation updated
- [ ] No new warnings
- [ ] Tests pass locally
```

## Code Style

### TypeScript/React

- Use **functional components** with hooks
- Use **TypeScript** for all new files
- Prefer `const` over `let`
- Use **arrow functions** for consistency

```typescript
// Good
const MyComponent = () => {
  const [state, setState] = useState("");

  return <div>{state}</div>;
};

// Avoid
function MyComponent() {
  var state = "";
  return <div>{state}</div>;
}
```

### Astro Components

- Use **TypeScript** in frontmatter
- Keep components focused and small
- Document complex logic

```astro
---
interface Props {
  title: string;
  description?: string;
}

const { title, description = "" } = Astro.props;
---

<section>
  <h2>{title}</h2>
  {description && <p>{description}</p>}
</section>
```

### CSS/Tailwind

- Use **Tailwind utility classes** first
- Custom CSS only when necessary
- Follow mobile-first approach
- Use CSS variables for theme colors

```tsx
// Good
<button className="px-4 py-2 bg-foreground text-background hover:bg-foreground/90">
  Click me
</button>

// Avoid inline styles
<button style={{ padding: "8px 16px" }}>
  Click me
</button>
```

## Project Structure Guidelines

### Adding New Components

**Sections** (page-level):
```
src/components/sections/NewSection.tsx
```

**UI Components** (reusable):
```
src/components/ui/NewComponent.tsx
```

**SVG Components**:
```
src/components/svg/NewSvg.tsx
```

### Adding Blog Posts

Create a new `.md` file in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "Brief description"
date: 2026-01-24
category: "Development"
draft: false
---

Your content here...
```

## Performance Guidelines

### Critical Performance Rules

1. **Images**:
   - Use `loading="lazy"` for non-hero images
   - Use `decoding="async"`
   - Optimize images before committing

2. **JavaScript**:
   - Keep bundles small (< 100KB per component)
   - Use code splitting when possible
   - Avoid large dependencies

3. **CSS**:
   - Use Tailwind utilities
   - Avoid `@apply` (increases bundle size)
   - Use CSS transforms for animations (GPU-accelerated)

4. **Fonts**:
   - Don't add new fonts without discussion
   - Use system fonts when possible

### Testing Performance

```bash
npm run build
npm run preview
```

Then run Lighthouse in Chrome DevTools:
- Open DevTools (F12)
- Go to "Lighthouse" tab
- Select "Desktop" or "Mobile"
- Click "Analyze page load"

Target scores:
- **Desktop:** >= 95
- **Mobile:** >= 90

## Questions?

If you have questions about contributing:

1. Check existing [Issues](https://github.com/edinsonjohender/venore-landing-astro/issues)
2. Create a new issue with the `question` label
3. Be specific and provide context

## License

By contributing, you agree that your contributions will be licensed under the project's AGPL-3.0 License.

---

Thank you for contributing! 🎉
