# Sticky

| Element | Class | Data attribute |
| :--------: | :-----: |:-----: |
| Target  | `js-sticky`
| Parent (optionnal)  | `js-sticky-parent`
|  |  |  `data-sticky-classes` (optionnal)
|  |  |  `data-sticky-device` (optionnal)

`Parent` : sticky effect will fixed only in the container element

### HTML without parent (sticky will ALWAYS be fixed)

``` html
<div class="js-sticky">
    Your DOM of sticky...
</div>
```

### HTML with parent (sticky will ONLY be fixed in main)

``` html
<main class="js-sticky-parent">
    <div class="js-sticky">
        Your DOM of sticky...
    </div>
    [...]
</main>
```

---
#### Options
- `data-sticky-classes` : when element is fixed, remove default classes and put your classes.
  Default classes: `fixed top-0 left-0 right-0 -translateY-100`

- `data-sticky-device` values :
    - `xl` : >1240
    - `xl-down` : <1240
    - `lg` : >1024
    - `lg-down` : <1024
    - `sm` : >567
    - `sm-down` : <567
---

### HTML with options

``` html
<div class="js-sticky"
    data-sticky-classes="fixed top-0 left-4 right-4 -translateY-100"
    data-sticky-device="lg">
    Your DOM of sticky...
</div>
```
