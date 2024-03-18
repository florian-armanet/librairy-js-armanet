### JS

In `assets/js/common/constants/scripts.js`, you import scripts
```js
export default [
    {
        module: () => import ('../../app/animations/appear'),
        element: document.querySelector('.js-appear')
    },
    {
        module: () => import ('../../app/animations/appear-sides'),
        element: document.querySelector('.js-appear-sides')
    },
    {
        module: () => import ('../../app/animations/appear-sides-stagger'),
        element: document.querySelector('.js-appear-sides-stagger-trigger')
    },
    {
        module: () => import ('../../app/animations/line-transitions'),
        element: document.querySelector('.gsap-line-transition')
    },
    {
        module: () => import ('../../app/animations/bg-rounded'),
        element: document.querySelector('[data-bg-rounded-trigger]')
    },
    {
        module: () => import ('../../app/accordion'),
        element: document.querySelector('.js-accordion')
    },
    {
        module: () => import ('../../app/contact-form'),
        element: document.querySelector('#contact-form')
    },
    {
        module: () => import ('../../app/lazyload'),
        element: document.querySelector('.lazyload'),
    },
    {
        module: () => import ('../../app/click-handler'),
        element: document.querySelector('[data-click-trigger]'),
    },
    {
        module: () => import ('../../app/header-height-mobile'),
        element: document.querySelector('.js-header'),
    },
    {
        module: () => import ('../../app/height-group'),
        element: document.querySelector('[data-height-group]'),
    },
    {
        module: () => import ('../../app/image-modal'),
        element: document.querySelector('.js-image-modal'),
    },
    {
        module: () => import ('../../app/menu'),
        element: document.querySelector('.js-menu-trigger'),
    },
    {
        module: () => import ('../../app/modal'),
        element: document.querySelector('[data-modal-trigger]'),
    },
    {
        module: () => import ('../../app/scroll-to'),
        element: document.querySelector('.js-scroll-top')
            || document.querySelector('.js-scroll-on-load')
            || document.querySelector('[data-scroll-trigger]'),
    },
    {
        module: () => import ('../../app/slider'),
        element: document.querySelector('.js-init-slider')
    },
    {
        module: () => import ('../../app/tag-clicked'),
        element: document.querySelector('[data-trigger-tag]')
    },
    {
        module: () => import ('../../app/ticker'),
        element: document.querySelector('.js-ticker')
    },
]

```

In js entrypoint of your project
```js
import { default as Scripts } from 'librairie-js/modules/load-scripts'
// import { default as Map } from './app/map'

(async () => {
    await Scripts({
        params: {
            slider: [GLIDE_REFS],
            // map: [MapTheme],
        },
        additionalScripts: [
            {
                module: () => import ('./app/your-script-1'),
                element: document.querySelector('.js-your-script-1'),
            },
            {
                module: () => import ('./app/your-script-2'),
                element: document.querySelector('.js-your-script-2'),
            },
        ]
    })
})()

```
