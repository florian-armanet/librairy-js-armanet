# Simple burger menu

| Element | Class
| :--------: | :-----: |
| Trigger  | `js-menu-trigger` |
| Target  | `js-menu-target` |
| Close  | `js-menu-close` |

### HTML
``` html
<button class="js-menu-trigger xl:hidden" aria-label="Menu">
    <i class="Icon-menu text-3xl text-white"></i>
</button>
<div class="js-menu-target js-height-mobile xl:hidden flex-flow-center fixed top-0 left-0 h-screen w-screen bg-primary-base text-white transition-fast">
    <i class="js-menu-close Icon-cancel text-3xl absolute top-8 right-8"></i>
    <ul>
        <li>Menu Item 1</li>
        <li>Menu Item 2</li>
        <li>Menu Item 3</li>
        <li>Menu Item 4</li>
    </ul>
</div>
```

### CSS 
In `assets/css/5-layout/_layout-menu.scss`
``` scss
.js-menu-target {
    &:not(.isActive) {
        transform: translateX(100%);
    }
}
```
