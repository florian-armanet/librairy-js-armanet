# Modal with Vue.js

You use one generic modal which go to take data (image, title, text...) from trigger

<br/>

| Element | Data attribute | Class
| :--------: | :-----: | :-----: |
| Triggers | `data-modal` |
| Targets | `Modal vue` |

### HTML
The purpose is to serialize data to json in a data attribute `data-modal` (ex: use filter `json_encode` with Erebor)

``` html
{% set imagesObject = [get_media('image_gallery_1'), get_media('image_gallery_2')] %}
{% set images = [] %}
{% for imageCode in imagesObject|map(imageObj => imageObj.code) %}
    {% if imageCode is not empty %}
        {% set images = images|merge([{
            original: get_media(imageCode).path|imagine_filter('modal_image_main'),
            name: get_media(imageCode).name,
        }]) %}
    {% endif %}
{% endfor %}
<div class="max-w-md mx-auto flex-flow-center m-4">
    <button class="Button Button--primary" data-modal="{{ images|json_encode }}">
        {{ block.customValue('title') }}
    </button>
</div>
```

### CSS 
``` scss
// 1. Vue
// -------------------------------------------------------------------
.Modal-wrapper {
    @apply fixed inset-0 z-fixed;
    background: rgba(0, 0, 0, 0.3);
}

.Modal {
    @apply fixed left-0 right-0 mx-4 py-8 px-4 z-popup;
    background: rgba(255, 255, 255, 1);
    top: 50%;
    transform: translateY(-50%);
    max-height: calc(100vh - theme('spacing.4') * 2);
    overflow-y: auto;

    @screen lg {
        max-height: calc(100vh - theme('spacing.8') * 2);
        @apply p-8 mx-8;
    }
}
```

### VUE.JS
For the moment, use Er-Demo with:
- Entrypoint: `assets/js/modal.js`
- Directory: `assets/js/modal/`
