# Tailwindcss Config

...and css variables.

## Usage

```sh
npm i -D tailwindcss@^1.8.4 tailwindcss-important@^1.0.0
```

```sh
npm i -D @vue-admin-ui/tailwindcss-config
```

### Config Usage

```
module.exports = {
  ...require('@vue-admin-ui/tailwindcss-config'),
  purge: {
    mode: 'layers',
    layers: ['utilities'],
    content: [
      './src/**/*.vue',
    ],
  },
}
```

### CSS Variables Usage

import in js file

```js
import '@vue-admin-ui/tailwindcss-config/dist/variables.css';
```

or import in css file

```css
@import "@vue-admin-ui/tailwindcss-config/dist/variables.css";
```