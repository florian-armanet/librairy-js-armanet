# Slider

> We use the library of [glide](https://glidejs.com/)

| Element | Data attribute | Class
| :--------: | :-----: | :-----: |
| Ref | `data-slider-ref` |  |
| Instance |  | `glide js-init-slider` |
| Relocate arrows trigger (optionnal) | `data-relocate-arrows-trigger` |  |
| Relocate arrows target (optionnal) | `data-relocate-arrows-target` |  |
| Relocate bullets trigger (optionnal) | `data-relocate-bullets-trigger` |  |
| Relocate bullets target (optionnal) | `data-relocate-bullets-target` |  |

### HTML
Add classes `glide js-init-slider`

Add a value at data attributes `data-slider-ref`. This value is a
reference to file `glide.json`

``` html
<div class="glide js-init-slider relative" data-slider-ref="slider-test">
    <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
            {% for text in texts %}
                <li class="glide__slide">{{ text }}</li>
            {% endfor %}
        </ul>
    </div>
    <div class="glide__arrows" data-glide-el="controls">
        <i class="Icon-angle-left" data-glide-dir="<"></i>
        <i class="Icon-angle-right" data-glide-dir=">"></i>
    </div>
</div>
```

**Optionnal**: you can also relocate arrows and bullets with data attributes:

arrows: `data-relocate-arrows-trigger="uniqueName"` 
and `data-relocate-arrows-target="uniqueName"`

bullets: `data-relocate-bullets-trigger="uniqueName"`
and `data-relocate-bullets-target="uniqueName"`
``` html
<div class="glide js-init-slider relative" data-slider-ref="slider-test"
    data-relocate-arrows-trigger="uniqueName" data-relocate-bullets-trigger="uniqueName">
    <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
            {% for text in texts %}
                <li class="glide__slide">{{ text }}</li>
            {% endfor %}
        </ul>
    </div>
</div>
[...]
<div class="glide__arrows" data-glide-el="controls" data-relocate-arrows-target="uniqueName">
    <i class="Icon-angle-left" data-glide-dir="<"></i>
    <i class="Icon-angle-right" data-glide-dir=">"></i>
</div>
<div class="glide__bullets" data-glide-el="controls[nav]" data-relocate-bullets-target ="uniqueName">
    {% for text in texts %}
        <button class="glide__bullet" data-glide-dir="={{ loop.index0 }}"></button>
    {% endfor %}
</div>
```

### JSON (ex: glide.json)
Create a json file `glide.json`.
It's here where you refer the options of glide.
``` json
{
    "hp-carousel": {
        "type": "carousel",
        "gap": 0,
        "autoplay": 5000
    },
    "slider-test": {
        "perView": 3,
        "autoplay": 3000,
        "gap": 8,
        "breakpoints": {
            "575": {
                "perView": 2
            }
        }
    }
}
```
