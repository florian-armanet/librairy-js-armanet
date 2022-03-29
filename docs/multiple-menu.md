# Generic menu

| Element | Data attribute | Class
| :--------: | :-----: | :-----: |
| Trigger  | `[data-menu-trigger]` |
| Target  | `[data-menu-target]` |
| Close  |  | `js-menu-close`

### HTML
``` html
<button class="flex-flow-center fixed top-16 right-4 p-4 bg-white z-header lg-down:hidden"
        data-menu-trigger="features">
    <i class="Icon-menu text-3xl"></i>
</button>

<div class="z-max overflow-auto fixed top-0 right-0 h-screen max-w-xs w-full bg-primary-base transition-fast"
     data-menu-target="features">
    <div class="flex-flow-centerY bg-primary-hover mb-8">
        <p class="Title Title--2xl text-left text-white flex-1 mb-0 p-4">
            Titre de la navigation
        </p>
        <div class="flex-flow-center p-4">
            <i class="js-menu-close Icon-cancel cursor-pointer text-3xl text-white"></i>
        </div>
    </div>
    <ul class="p-4">
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
[data-menu-target] {
    &:not(.isActive) {
        transform: translateX(100%);
    }
}
```
