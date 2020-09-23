# Tailwindcss Config

...and css variables.

## Usage

```sh
npm i -D tailwindcss@^1.8.4 tailwindcss-important@^1.0.0
```

```sh
npm i -D https://github.com/vue-admin-ui/tailwindcss-config.git#v1.0.0
```

### Config Usage

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

### CSS Variables Usage

import in js file

```js
import 'tailwindcss-config/dist/variables.css';
```

or import in css file

```css
@import "tailwindcss-config/dist/variables.css";
```