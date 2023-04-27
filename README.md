## Overview
`<modal-dialog>` is a wrapper custom element that adds QoL features to `<dialog>` elements inside of it. 
Currently, the only feature is to close the `<dialog>` if its backdrop is clicked, but I may think of more features to add.

### Design
This custom element uses the light DOM and includes no styling. 
This allows the user to style and interact with the enclosed `<dialog>` element as normal while allowing the custom element to modify its behavior.

## Usage
Import in your Javascript bundle:
```javascript
// Custom element will automatically register itself.
import '@mschreiber68/modal-dialog'

// Can also import custom element class.
import { ModalDialog } from '@mschreiber68/modal-dialog'
```

```html
<modal-dialog>
    <dialog>
        <p>Modal Content</p>
    </dialog>
</modal-dialog>
```

## Installation
### Install via NPM:
```shell
npm i @mschreiber68/modal-dialog
```

### Download via CDN:
```html
<script src="https://unpkg.com/@mschreiber68/modal-dialog@latest/dist/cdn/index.js"></script>
```

## Demo
https://mschreiber68.github.io/modal-dialog/demo.html