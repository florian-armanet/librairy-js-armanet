# Click Handler = Dropdown

| Element | Data attribute | Class
| :--------: | :-----: | :-----: |
| Trigger | `data-click-trigger` |
| Target | `data-click-target` | `has-trigger-transition`

### HTML
Add same value at data attributes `data-click-trigger` 
and `data-click-target`.

Add class `has-trigger-transition` at the target.

``` html
<div class="Menu__item" data-click-trigger="menu">
    Menu item
</div>

<div class="Menu__submenu has-trigger-transition" data-click-target="menu">
    <div class="Menu__submenu-item">Submenu item</div>
    <div class="Menu__submenu-item">Submenu item</div>
    <div class="Menu__submenu-item">Submenu item</div>    
</div>
```


### CSS
``` css
.has-trigger-transition {
    transform: rotateX(0deg);
    transform-origin: top center;
    opacity: 1;
    will-change: transform;
    transition: all 0.25s ease-out;

    &:not(.is-visible) {
        transform: rotateX(-90deg);
        opacity: 0;
    }
}
```
