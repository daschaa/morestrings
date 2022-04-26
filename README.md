<h1 align="center">
  <img src="https://github.com/daschaa/morestrings/blob/HEAD/docs/logo.png" />
</h1>

<div align="center">

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/) ![npm bundle size](https://img.shields.io/bundlephobia/min/morestrings) ![npm](https://img.shields.io/npm/dw/morestrings)

</div>
<p>
<strong>More functions for strings!</strong> This project aims to add more features to the string prototype. 
</p>

## 🚀 Setup & Usage
The package can be installed with
```bash
npm install morestrings
```
After the install, just call for `more()`! ❤️
```javascript
import { more } from 'morestrings';

more();
"Dogs are great!".reverse; // => !taerg era sgoD
"Dogs are great!".slugify; // => dogs-are-great!
```