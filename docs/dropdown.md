# Dropdown = Dropdown

| Element |     Data attribute      | Class
| :--------: |:-----------------------:| :-----: |
| Trigger | `data-dropdown-trigger` |
| Target | `data-dropdown-target`  | `has-trigger-transition`

### HTML
Add same value at data attributes `data-dropdown-trigger` 
and `data-dropdown-target`.

Add class `has-trigger-transition` at the target.

``` html
<div class="Menu__item" data-dropdown-trigger="menu">
    Menu item
</div>

<div class="Menu__submenu has-trigger-transition" data-dropdown-target="menu">
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
