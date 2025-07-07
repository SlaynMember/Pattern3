# Pattern3 Design System Documentation

## Overview
The Pattern3 Design System provides a comprehensive set of design tokens, components, and guidelines that ensure consistency, accessibility, and performance across all Pattern3 digital products.

## Typography

### Font Family
- **Primary**: Inter (400, 500, 700 weights only)
- **Fallback**: -apple-system, BlinkMacSystemFont, sans-serif
- **Font Display**: swap (for optimal loading performance)

### Type Scale (Fluid Typography)
```css
--font-size-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)
--font-size-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem)
--font-size-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem)
--font-size-lg: clamp(1.125rem, 1rem + 0.625vw, 1.25rem)
--font-size-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)
--font-size-2xl: clamp(1.5rem, 1.3rem + 1vw, 2rem)
--font-size-3xl: clamp(1.875rem, 1.6rem + 1.375vw, 2.5rem)
--font-size-4xl: clamp(2.25rem, 1.9rem + 1.75vw, 3rem)
--font-size-5xl: clamp(3rem, 2.5rem + 2.5vw, 4rem)
--font-size-6xl: clamp(3.75rem, 3rem + 3.75vw, 5rem)
```

### Typography Components
- `.heading-1` - Main page headings
- `.heading-2` - Section headings  
- `.heading-3` - Subsection headings
- `.body-large` - Large body text
- `.body-base` - Standard body text
- `.body-small` - Small body text
- `.caption` - Captions and labels

### Usage Guidelines
- Use fluid typography for responsive scaling
- Limit to 3 font weights maximum
- Maintain WCAG AA contrast ratios (4.5:1 minimum)
- Use semantic heading hierarchy (h1 → h6)

## Color System

### Primary Colors
```css
--color-primary: #0891b2      /* Cyan-600 */
--color-primary-light: #06b6d4 /* Cyan-500 */
--color-primary-dark: #0e7490  /* Cyan-700 */
```

### Accent Colors
```css
--color-accent: #14b8a6       /* Teal-500 */
--color-accent-light: #5eead4 /* Teal-300 */
--color-accent-dark: #0f766e  /* Teal-700 */
```

### Gray Scale
```css
--color-gray-50: #f8fafc
--color-gray-100: #f1f5f9
--color-gray-200: #e2e8f0
--color-gray-300: #cbd5e1
--color-gray-400: #94a3b8
--color-gray-500: #64748b
--color-gray-600: #475569
--color-gray-700: #334155
--color-gray-800: #1e293b
--color-gray-900: #0f172a
```

## Iconography

### Custom Icon Set
Pattern3 uses a custom icon set following geometric/triangular aesthetic:
- `triangle` - Basic triangle shape
- `triangle-outline` - Outlined triangle
- `pattern3-logo` - Brand logo icon
- `ai-brain` - AI/intelligence representation
- `automation` - Process automation
- `strategy` - Strategic planning
- `healthcare` - Medical/health services
- `creative` - Creative/artistic work

### Icon Sizes
- `icon-xs` - 16px (1rem)
- `icon-sm` - 20px (1.25rem)
- `icon-md` - 24px (1.5rem) - Default
- `icon-lg` - 32px (2rem)
- `icon-xl` - 40px (2.5rem)
- `icon-2xl` - 48px (3rem)

### Icon Guidelines
- Use SVG format for scalability
- Maintain 2px stroke width for outlined icons
- Follow 24px grid system for consistency
- Optimize paths for minimal file size
- Include hover animations where appropriate

## Animation System

### Duration Scale
```css
--duration-fast: 0.15s    /* Quick interactions */
--duration-normal: 0.25s  /* Standard transitions */
--duration-slow: 0.35s    /* Complex animations */
```

### Easing Functions
```css
--ease-in: cubic-bezier(0.4, 0, 1, 1)
--ease-out: cubic-bezier(0, 0, 0.2, 1)
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55)
```

### Animation Classes
- `.animate-fade-in` - Fade in effect
- `.animate-fade-in-up` - Fade in from bottom
- `.animate-scale-in` - Scale in with bounce
- `.observe-fade-in` - Intersection observer triggered
- `.stagger-1` through `.stagger-5` - Staggered delays

### Performance Guidelines
- Use `transform` and `opacity` for animations
- Apply `will-change` sparingly
- Respect `prefers-reduced-motion`
- Keep animations under 500ms
- Use GPU acceleration for complex animations

## Component Library

### Button Component
```tsx
<Button 
  variant="primary|secondary|outline|ghost"
  size="sm|md|lg"
  loading={boolean}
  disabled={boolean}
>
  Button Text
</Button>
```

### Card Component
```tsx
<Card 
  variant="default|elevated|outlined|glass"
  padding="sm|md|lg|xl"
  hover={boolean}
>
  Card Content
</Card>
```

### Icon Component
```tsx
<Icon 
  name="triangle|arrow|check"
  size="xs|sm|md|lg|xl|2xl"
  hover={boolean}
  bounce={boolean}
/>
```

### AnimatedSection Component
```tsx
<AnimatedSection 
  animation="fade-in|scale|slide-left|slide-right"
  delay={number}
  threshold={number}
>
  Content to animate
</AnimatedSection>
```

## Performance Optimization

### Font Loading Strategy
1. Preload critical font weights (400, 500, 700)
2. Use `font-display: swap` for optimal loading
3. Subset fonts to include only needed characters
4. Implement fallback fonts for FOUT prevention

### Icon Optimization
1. Optimize SVGs with SVGO
2. Use icon sprites for repeated icons
3. Inline critical icons in HTML
4. Lazy load non-critical icons

### Animation Performance
1. Use CSS transforms over layout properties
2. Apply `will-change` only during animations
3. Use Intersection Observer for scroll animations
4. Implement reduced motion preferences

### Performance Budgets
- **Fonts**: Maximum 100KB total
- **Icons**: Maximum 50KB total
- **Critical CSS**: Maximum 14KB inline
- **Animation JS**: Maximum 25KB

## Accessibility

### Color Contrast
- All text must meet WCAG AA standards (4.5:1)
- Interactive elements must meet AA standards
- Focus indicators must be clearly visible

### Motion & Animation
- Respect `prefers-reduced-motion` setting
- Provide alternative static content
- Keep essential animations under 5 seconds

### Keyboard Navigation
- All interactive elements must be keyboard accessible
- Focus indicators must be clearly visible
- Tab order must be logical

## Implementation Guidelines

### CSS Architecture
```css
/* 1. Design System Variables */
@import './styles/design-system.css';

/* 2. Base Styles */
@import './styles/base.css';

/* 3. Component Styles */
@import './styles/components.css';

/* 4. Utility Classes */
@import './styles/utilities.css';
```

### Component Development
1. Use design tokens for all values
2. Follow BEM naming convention
3. Include accessibility attributes
4. Test across devices and browsers
5. Document component APIs

### Testing Checklist
- [ ] Visual regression testing
- [ ] Accessibility audit (WAVE, axe)
- [ ] Performance testing (Lighthouse)
- [ ] Cross-browser compatibility
- [ ] Mobile responsiveness
- [ ] Keyboard navigation
- [ ] Screen reader compatibility

## Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- iOS Safari 14+
- Android Chrome 90+

## Maintenance

### Regular Tasks
- Monitor font loading performance
- Optimize icon usage and file sizes
- Review animation performance
- Update color contrast ratios
- Test accessibility compliance

### Version Control
- Use semantic versioning for design system updates
- Document breaking changes
- Provide migration guides
- Maintain backwards compatibility when possible

---

For questions or contributions to the design system, please contact the Pattern3 development team.