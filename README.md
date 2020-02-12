# gatsby-remark-http-to-https

This plugin swaps absolute image urls if they are using `http://` scheme to `https://`

For example:

```diff
-![MIT license badge](http://img.shields.io/badge/license-MIT-brightgreen.svg)
+![MIT license badge](https://img.shields.io/badge/license-MIT-brightgreen.svg)
```

```diff
-<img src="http://img.shields.io/npm/v/@florantara/gatsby-theme-mercadolibre-store.svg?style=flat" alt="npm version" />
+<img src="https://img.shields.io/npm/v/@florantara/gatsby-theme-mercadolibre-store.svg?style=flat" alt="npm version" />
```

It won't affect images already using `https://` scheme or images with relative urls
