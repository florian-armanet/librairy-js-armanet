export default (params) => [
    {
        module: () => import ('../modules/accordion'),
        element: document.querySelector('.js-accordion'),
        name: 'accordion',
        priority: 1,
    },
    {
        module: () => import ('../modules/contact-form'),
        element: document.querySelector('.js-form'),
        name: 'contact-form',
    },
    {
        module: () => import ('../modules/custom-select'),
        element: document.querySelector('.mySelect'),
        name: 'custom-select',
    },
    {
        module: () => import ('../modules/input-number'),
        element: document.querySelector('.js-input-number-container'),
        name: 'input-number',
    },
    {
        module: () => import ('../modules/lazyload'),
        element: document.querySelector('.js-lazyload'),
        name: 'lazyload',
    },
    {
        module: () => import ('../modules/click-handler'),
        element: document.querySelector('[data-click-trigger]'),
        name: 'click-handler',
    },
    {
        module: () => import ('../modules/header-height-mobile'),
        element: document.querySelector('.js-header-height-mobile'),
        name: 'header-height-mobile',
    },
    {
        module: () => import ('../modules/height-group'),
        element: document.querySelector('[data-height-group]'),
        name: 'height-group',
    },
    {
        module: () => import ('../modules/menu'),
        element: document.querySelector('.js-menu-trigger'),
        name: 'menu',
    },
    {
        module: () => import ('../modules/modal'),
        element: document.querySelector('[data-modal]'),
        name: 'modal',
    },
    {
        module: () => import ('../modules/modal-bis'),
        element: document.querySelector('[data-modal-trigger]'),
        name: 'modal-bis',
    },
    {
        module: () => import ('../modules/multiple-menu'),
        element: document.querySelector('[data-menu-trigger]'),
        name: 'multiple-menu',
    },
    {
        module: () => import ('../modules/scroll-to'),
        element: document.querySelector('.js-scroll-top')
            || document.querySelector('.js-scroll-on-load')
            || document.querySelector('[data-scroll-trigger]'),
        name: 'scroll-to',
    },
    {
        module: () => import ('../modules/slider'),
        element:document.querySelector('.js-init-slider'),
        priority: -1,
        name: 'slider',
        params: params.slider,
    },
    {
        module: () => import ('../modules/split-title'),
        element: document.querySelector('.js-split-title'),
        name: 'split-title',
    },
    {
        module: () => import ('../modules/tag-clicked'),
        element: document.querySelector('[data-trigger-tag]'),
        name: 'tag-clicked',
    },
    {
        module: () => import ('../modules/tabs'),
        element: document.querySelector('.js-tab-container'),
        name: 'tabs',
    },
    {
        module: () => import ('../modules/ticker'),
        element: document.querySelector('.js-ticker'),
        name: 'ticker',
    },
    {
        module: () => import ('../modules/sticky'),
        element: document.querySelector('.js-sticky'),
        name: 'sticky',
        priority: 3,
    },
    {
        module: () => import ('../modules/map'),
        element: document.querySelector('.js-map'),
        name: 'map',
        priority: 1,
        params: params.map,
    },
    {
        module: () => import ('../modules/see-more'),
        element: document.querySelector('[data-see-more-trigger]'),
        name: 'see-more',
        priority: 2,
    },
    {
        module: () => import ('../modules/select-relocate'),
        element: document.querySelector('[data-select-relocate]')
            || document.querySelector('.js-select-relocate-auto'),
        name: 'select-relocate',
    },
]
