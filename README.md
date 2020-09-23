# Tailwindcss Config

...and css variables.

## Config Usage

```
module.exports = {
  ...require('tailwind-config'),
  purge: {
    mode: 'layers',
    layers: ['utilities'],
    content: [
      './src/**/*.vue',
    ],
  },
}
```

## CSS Variables Usage

```js
import 'tailwindcss-config/dist/variables.css';
```

or

```css
@import "tailwindcss-config/dist/variables.css";
```