# Accordion

| Element | Class | Data attribute
| :--------: | :-----: |:-----: |
| Wrapper  | `js-accordion` | `data-accordion-device` (optional)
| Trigger  | `js-accordion-trigger` |
| Target  | `js-accordion-target` |
| Element stopPropagation (optional)  | `js-accordion-stopPropagation` |

### HTML
Add class `js-accordion` and data attribute

Add classes `js-accordion-trigger` and `js-accordion-target`

Values for `data-accordion-device`
- `xl-down` : <1240
- `lg-down` : <1024
- `sm-down` : <567
- `if no value` : all devices

``` html
<div class="js-accordion mb-6 md:px-4" data-accordion-device="lg-down">
    <div class="js-accordion-trigger o-grid flex-flow-centerY cursor-pointer">
        <p class="o-col-10 md:o-col-6">Question</p>
        <div class="o-col-2 md:o-col-6">
            <i class="Icon-angle-right text-blue-sky text-6xl"></i>
        </div>
    </div>
    <div class="js-accordion-target mx-6 md:mx-12">
        <div class="py-6">Reponse</div>
    </div>
</div>
```

---
#### Options
- `data-accordion-device` values :
    - `if no value` : all devices
    - `xl-down` : <1240
    - `lg-down` : <1024
    - `sm-down` : <567
---

### CSS
``` css
/*
 * [ components / accordion ]
 */

// -----------------------------------------------------------------------------
$devices: (
        xl, lg, sm
);

.js-accordion {
    @apply overflow-hidden;

    &.isActive {
        overflow: initial;
    }

    &[data-accordion-device="mobile"] {
        @screen lg {
            overflow: initial;
        }
    }
}

.js-accordion-trigger {
    @apply relative z-2;
}

.js-accordion-target {
    @apply relative;
    z-index: -1;
}

.js-accordion-trigger i.Icon-angle-right {
    @apply w-auto;
}

.js-accordion-trigger i.Icon-angle-right {
    @apply inline-block transition-fast;
}

.js-accordion.isActive .js-accordion-trigger i.Icon-angle-right {
    transform: rotate(90deg);
}

.js-accordion.isActive i.Icon-plus:before {
    content: "\e915";
}

.js-accordion-target {
    @apply relative transition-fast;
    opacity: 0;
    min-height: 0 !important;

    @each $device in $devices {
        .js-accordion[data-accordion-device="#{$device}-down"] & {
            @screen #{$device}-down {
                @apply z-1 opacity-100;
                //overflow: initial;
            }
        }
    }

    .js-accordion.isActive & {
        @apply z-1 opacity-100;
    }
}

@each $device in $devices {
    @screen #{$device} {
        [data-accordion-device="#{$device}-down"] .js-accordion-trigger i {
            display: none !important;
        }
    }
}
```


###JS
If you want to check file : `assets/js/app/accordion.js`
