# Overriding JS file

Add a name property to each object to act as an id (cf `/modules/scripts.js`). 
To override a JS file, all you have to do is enter the following in your js entrypoint of your project the same `name` that we have in `/modules/scripts.js`, don't forget to fill in the new file (ex: `your-new-script-slider.js`) and the selector (ex: `.new-class`)

### Example with the slider:
```js
import { default as Scripts } from 'librairy-js-armanet/modules/load-scripts'

document.addEventListener('DOMContentLoaded', async () => {
    await Scripts({
        params: {
        },
        additionalScripts: [
            {
                module: () => import ('./app/animations/appear'),
                element:document.querySelector('.js-appear'),
            },
            {
                module: () => import ('./app/animations/appear-sides'),
                element:document.querySelector('.js-appear-sides'),
            },
            {
                module: () => import ('./app/animations/appear-sides-stagger'),
                element:document.querySelector('.js-appear-sides-stagger-trigger'),
            },
            {
                module: () => import ('./app/animations/bg-rounded'),
                element:document.querySelector('[data-bg-rounded-trigger]'),
            },
            {
                module: () => import ('./app/animations/line-transitions'),
                element:document.querySelector('.gsap-line-transition'),
            },
            {
                module: () => import ('./app/your-new-script-slider'),
                element:document.querySelector('.new-class'),
                name: 'slider',
            },
        ]
    })
})
```
