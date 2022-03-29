# Overriding JS file

Ajouter une propriété name dans chaque objet (cf `node_modules/asdoriacore/modules/scripts.js`) et qui fait office d'id. 
Pour override un fichier JS, il suffit juste de renseigner dans `app.js` le même `name` que l'on a dans
`node_modules/asdoriacore/modules/scripts.js`, en n'oubliant pas de renseigner le nouveau fichier
(ex: `ton-nouveau-script-slider.js`) et le sélecteur (ex: `.peu-importe`)

### Exemple avec le slider:
```js
import { default as Scripts } from 'asdoriacore/modules/load-scripts'
// import GLIDE_REFS from './common/constants/glide.json'
// import MapTheme from './themes/map.json'

document.addEventListener('DOMContentLoaded', async () => {
    await Scripts({
        params: {
            // slider: [GLIDE_REFS],
            // map: [MapTheme],
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
                module: () => import ('./app/ton-nouveau-script-slider'),
                element:document.querySelector('.peu-importe'),
                name: 'slider',
            },
        ]
    })
})
```
