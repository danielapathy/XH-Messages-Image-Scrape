# XH-Messages-Image-Scrape
Efficiently searches for and opens images from XH messages

# Usage
This script is designed for **chrome**. In order for this script to run, you must set `Pop-ups and redirects` to `Allow (default)` from the settings page. The following video will show you how to enable this setting on any domain. Just follow this tutorial on the XH website.
  
https://user-images.githubusercontent.com/96850995/151568783-ea3cdb35-9d00-48d4-9700-e4f5fc8060b7.mp4
  
  
## Tampermonkey

This script can be used with Tampermonkey to avoid the need to manually download images
```js
// ==UserScript==
// @name         XH-CDN-DL
// @namespace    https://github.com/danielapathy/XH-Messages-Image-Scrape/
// @version      0.1
// @description  Automatically download images
// @author       Daniel
// @match        https://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_download
// ==/UserScript==

(function() {
    'use strict';
    if(window.location.host.includes('xhcdn')) {
        GM_download(window.location.href, Math.random().toString().substring(3, 13) + '_' + window.location.href.split('/').at(-1));
        window.close();
    }
})();
```

