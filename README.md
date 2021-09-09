# svg-browser-export <a href="https://npm.im/svg-browser-export"><img src="https://badgen.net/npm/v/svg-browser-export"></a> <a href="https://npm.im/svg-browser-export"><img src="https://badgen.net/npm/dm/svg-browser-export"></a> <a href="https://packagephobia.now.sh/result?p=svg-browser-export"><img src="https://packagephobia.now.sh/badge?p=svg-browser-export"></a>

Export SVG to PNG, JPEG, or WEBP in the browser

<sub>Support this project by ⭐️ starring and sharing it. [Follow me](https://github.com/privatenumber) to see what other cool projects I'm working on! ❤️</sub>

## 🚀 Install

```bash
npm i svg-browser-export
```

## 🚦 Quick usage

```ts
import { exportSvg } from 'svg-browser-export'

const svgString = '<svg>...</svg>'

const exportedFileUrl = await exportSvg(svgString, 'png')
// => data:image/png;base64,....
```


## 👩‍🏫 Examples

### Getting a download URL for a SVG on the page
```ts
const svgElement = document.querySelector('.svg-selector')

const exportedFileUrl = await exportSvg(svgElement.innerHTML, 'png')
```

### Downloading a SVG automatically
Use it with [downloadjs](https://www.npmjs.com/package/downloadjs) to automatically download the exported asset.

```ts
import { exportSvg } from 'svg-browser-export'
import download from 'downloadjs'

...

const exportedFileUrl = await exportSvg(svgString, 'png')

download(exportedFileUrl, 'fileName.png')

```

## ⚙️ API

### exportSvg(svgString, exportFormat, scale)

Returns a promise that resolves to the exported file as a Base64 data URL.

#### svgString
Type: `string`

The SVG string.

#### exportFormat
Type: `'png' | 'jpeg' | 'bmp' | 'ico' | 'webp'`

The format to export the SVG to.


#### scale
Type: `number`

Optional

If you want to scale the SVG. For example, passing in `2` would double the dimensions of the SVG.

