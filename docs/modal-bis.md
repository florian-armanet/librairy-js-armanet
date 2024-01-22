# Modal without Vue.js

You can use multiples modals

<br/>

|  Element   |         Data attribute         |      Class       |
|:----------:|:------------------------------:|:----------------:|
|  Trigger   |      `data-modal-trigger`      |                  |
|   Target   |      `data-modal-target`       |                  |
| Background |    `data-modal-background`     |                  |
|   Target   |`data-modal-device` (optionnal) |                  |
|   Close    |                                | `js-modal-close` |

### HTML

Add same value at data attributes `data-modal-trigger`
and `data-modal-target` for a trigger and its target. Don't forget button close.

``` html
<section>
    <button class="Button Button--primary" data-modal-trigger="exemple1">
        Cliquer pour ouvrir la modal N°1
    </button>
    <button class="Button Button--primary" data-modal-trigger="exemple2">
        Cliquer pour ouvrir la modal N°2
    </button>
</section>

<div data-modal-background="exemple1"></div>

<div data-modal-target="exemple1">
   <button class="js-modal-close">
       <i class="Icon-close ml-4"></i>
       <span>Fermer</span>
   </button>
   <div class="mx-auto" style="background: blue; width: 200px; height: 200px">
       <p class="text-white">Modal 1</p>
   </div>
</div>

<div data-modal-background="exemple2"></div>

<div data-modal-target="exemple2" data-modal-device="lg-down">
   <button class="js-modal-close">
       <i class="Icon-close ml-4"></i>
       <span>Fermer</span>
   </button>
   <div class="mx-auto" style="background: red; width: 200px; height: 200px">
       <p class="text-white">Modal 2</p>
   </div>
</div>
```

---

#### Options

- `data-modal-device` values :
    - `if no value` : all devices
    - `xl` : >1240
    - `xl-down` : <1240
    - `lg` : >1024
    - `lg-down` : <1024
    - `sm` : >567
    - `sm-down` : <567

---

### CSS

``` scss
// 2. Bis
// -------------------------------------------------------------------
[data-modal-target] {
    @apply fixed inset-0 translateY-100 opacity-0;
    transition: opacity .25s ease;
    background-color: rgba(114, 114, 114, .5);

    &.isActive {
        @apply z-fixed translateY-0 opacity-100;
    }
}

.js-modal-container {
    @apply bg-white invisible absolute absolute-center px-4 sm:px-8 md:px-24 py-10;
    z-index: 1030;
    width: 700px;
    overflow-y: auto;
    min-height: 300px;
    max-height: 90vh;

    @screen md-down {
        @apply w-full h-full top-0 left-0;
        transform: translate(0, 0);
        max-height: 100vh;
    }

    &.isActive {
        @apply visible;
    }
}

.js-modal-close {
    @apply flex flex-row-reverse items-center absolute text-lg;
    top: 10px;
    right: 10px;
}
```
