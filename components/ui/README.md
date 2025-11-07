# Guru Design System

A comprehensive, Ayurveda and Yoga inspired design system built with Vue 3, TypeScript, and Tailwind CSS.

## Philosophy

This design system embraces the calming, natural, and spiritual essence of Ayurveda and Yoga practices. Every component features:

- 🌿 **Natural color palettes** inspired by earth, plants, and spiritual energy
- ✨ **Soft animations** that create a sense of flow and peace
- 💫 **Blurred gradients** for a dreamy, meditative atmosphere
- 🎨 **Harmonious typography** combining elegant display fonts with readable body text

## Color Palette

### Primary Colors

- **Primary (Terracotta)**: `primary-50` to `primary-900` - Warm earth tones representing grounding and stability
- **Secondary (Sage)**: `secondary-50` to `secondary-900` - Soft healing greens for growth and balance
- **Accent (Coral)**: `accent-50` to `accent-900` - Energetic warm tones for vitality

### Spiritual Colors

- **Earth**: `earth-50` to `earth-900` - Deep grounding browns
- **Lotus (Pink)**: `lotus-50` to `lotus-900` - Spiritual rose tones representing purity
- **Spiritual (Indigo)**: `spiritual-50` to `spiritual-900` - Meditative purples for inner wisdom

## Typography

- **Display Font**: Cormorant Garamond - Elegant serif for headings
- **Body Font**: Inter - Clean, readable sans-serif for content

## Components

### GuruButton

A versatile button component with smooth animations and multiple variants.

**Props:**
- `variant`: `'primary' | 'secondary' | 'accent' | 'outline' | 'ghost'` (default: `'primary'`)
- `size`: `'sm' | 'md' | 'lg'` (default: `'md'`)
- `disabled`: `boolean` (default: `false`)
- `fullWidth`: `boolean` (default: `false`)
- `loading`: `boolean` (default: `false`)

**Example:**
```vue
<GuruButton variant="primary" size="lg" @click="handleClick">
  Click Me
</GuruButton>
```

### GuruInput

Text input with validation states and helper text.

**Props:**
- `modelValue`: `string`
- `type`: `'text' | 'email' | 'password' | 'number' | 'tel' | 'url'` (default: `'text'`)
- `label`: `string`
- `placeholder`: `string`
- `error`: `string`
- `disabled`: `boolean`
- `required`: `boolean`
- `helperText`: `string`

**Example:**
```vue
<GuruInput
  v-model="email"
  type="email"
  label="Email"
  placeholder="your@email.com"
  required
  helper-text="We'll never share your email"
/>
```

### GuruTextarea

Multi-line text input with the same validation features as GuruInput.

**Props:**
- `modelValue`: `string`
- `label`: `string`
- `placeholder`: `string`
- `error`: `string`
- `disabled`: `boolean`
- `required`: `boolean`
- `rows`: `number` (default: `4`)
- `helperText`: `string`

**Example:**
```vue
<GuruTextarea
  v-model="message"
  label="Your Message"
  :rows="6"
  placeholder="Share your thoughts..."
/>
```

### GuruSelect

Dropdown select with custom styling.

**Props:**
- `modelValue`: `string | number`
- `options`: `Array<{ value: string | number, label: string }>`
- `label`: `string`
- `placeholder`: `string`
- `error`: `string`
- `disabled`: `boolean`
- `required`: `boolean`

**Example:**
```vue
<GuruSelect
  v-model="selected"
  label="Choose your Dosha"
  :options="[
    { value: 'vata', label: 'Vata' },
    { value: 'pitta', label: 'Pitta' },
    { value: 'kapha', label: 'Kapha' }
  ]"
/>
```

### GuruCheckbox

Styled checkbox with optional label.

**Props:**
- `modelValue`: `boolean`
- `label`: `string`
- `disabled`: `boolean`

**Example:**
```vue
<GuruCheckbox v-model="agreed" label="I agree to the terms" />
```

### GuruRadio

Radio button with optional label.

**Props:**
- `modelValue`: `string | number`
- `value`: `string | number`
- `name`: `string` (required)
- `label`: `string`
- `disabled`: `boolean`

**Example:**
```vue
<GuruRadio
  v-model="selected"
  value="morning"
  name="practice-time"
  label="Morning Practice"
/>
```

### GuruCard

Container with multiple visual variants.

**Props:**
- `variant`: `'default' | 'gradient' | 'glass' | 'elevated'` (default: `'default'`)
- `padding`: `'none' | 'sm' | 'md' | 'lg'` (default: `'md'`)
- `hoverable`: `boolean` (default: `false`)

**Example:**
```vue
<GuruCard variant="gradient" hoverable>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</GuruCard>
```

### GuruModal

Animated modal dialog with backdrop blur.

**Props:**
- `modelValue`: `boolean` (required)
- `title`: `string`
- `size`: `'sm' | 'md' | 'lg' | 'xl'` (default: `'md'`)
- `closable`: `boolean` (default: `true`)

**Slots:**
- `default`: Modal content
- `footer`: Modal footer (optional)

**Example:**
```vue
<GuruModal v-model="showModal" title="Welcome!">
  <p>Modal content here</p>
  <template #footer>
    <GuruButton @click="showModal = false">Close</GuruButton>
  </template>
</GuruModal>
```

### GuruBadge

Small status indicators with optional dots.

**Props:**
- `variant`: `'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info'` (default: `'primary'`)
- `size`: `'sm' | 'md' | 'lg'` (default: `'md'`)
- `dot`: `boolean` (default: `false`)

**Example:**
```vue
<GuruBadge variant="success" :dot="true">Active</GuruBadge>
```

### GuruContainer

Layout container with gradient backgrounds.

**Props:**
- `gradient`: `'primary' | 'secondary' | 'spiritual' | 'lotus' | 'none'` (default: `'none'`)
- `blur`: `boolean` (default: `false`)
- `maxWidth`: `'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'` (default: `'lg'`)
- `padding`: `'none' | 'sm' | 'md' | 'lg'` (default: `'md'`)

**Example:**
```vue
<GuruContainer gradient="spiritual" max-width="xl">
  <h1>Page Content</h1>
</GuruContainer>
```

## Design Tokens

### Shadows
- `shadow-soft`: Subtle shadow for gentle depth
- `shadow-soft-lg`: Larger soft shadow for elevation
- `shadow-inner-soft`: Soft inner shadow

### Animations
- `animate-fade-in`: Fade in animation
- `animate-slide-up`: Slide up with fade
- `animate-slide-down`: Slide down with fade
- `animate-scale-in`: Scale in animation
- `animate-shimmer`: Shimmer effect for loading states

### Blur
- `backdrop-blur-sm`: Small backdrop blur
- `backdrop-blur-md`: Medium backdrop blur (default for glass effects)

## Usage in Your Project

All components are auto-imported by Nuxt and can be used directly in your templates:

```vue
<template>
  <GuruContainer gradient="lotus">
    <GuruCard variant="glass">
      <h2>Get Started</h2>
      <GuruInput v-model="name" label="Your Name" />
      <GuruButton variant="primary" @click="submit">
        Submit
      </GuruButton>
    </GuruCard>
  </GuruContainer>
</template>
```

## Best Practices

1. **Use semantic colors**: Choose colors that match the meaning (primary for main actions, accent for highlights, secondary for supportive actions)
2. **Combine gradients wisely**: The gradient variants work best on containers and cards
3. **Leverage hover effects**: Set `hoverable` on cards to add interactive feedback
4. **Use appropriate sizes**: Match component sizes to their importance in the hierarchy
5. **Provide helpful feedback**: Use error messages and helper text to guide users

## Accessibility

All components include:
- Proper ARIA labels and roles
- Keyboard navigation support
- Focus indicators with ring utilities
- Color contrast meeting WCAG AA standards
- Disabled states that are clearly indicated

## Browser Support

The design system supports all modern browsers:
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)

Requires browsers with support for:
- CSS Grid
- CSS Custom Properties
- Backdrop Filter (for glass effects)
