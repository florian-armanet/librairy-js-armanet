# See more

|       Element       |          Class          |
|:-------------------:|:-----------------------:|
|       Trigger       | `data-see-more-trigger` |
| Disable (optionnal) | `data-see-more-disable` |
|       Target        | `data-see-more-target`  |
|  Nb lines in view   |  `data-see-more-lines`  |

### HTML
``` html
<div class="mb-8">
    <span data-see-more-target="shortDescription" data-see-more-lines="3">
        {{ product.shortDescription|raw }}
    </span>
    <button class="has-underline has-underline--invert text-primary-base"
            data-see-more-trigger="shortDescription">
        {{ 'app.base.see_more'|trans }}
    </button>
    <button class="hidden has-underline has-underline--invert text-primary-base"
            data-see-more-disable="shortDescription">
        {{ 'app.base.see_less'|trans }}
    </button>
</div>
```

### CSS
``` scss
/* purgecss start ignore */
    @for $i from 1 through 5 {
        .line-clamp-#{$i} {
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: $i;
            -webkit-box-orient: vertical;
        }
    }
/* purgecss end ignore */
```
