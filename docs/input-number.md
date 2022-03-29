# Custom input number

| Element | Data attribute | Class
| :--------: | :-----: | :-----: |
| Container  |  | `js-input-number-container`
| Input  |  | `js-input-number`
| - | `data-input-number-operator="-"` |
| + | `data-input-number-operator="+"` |

### HTML
``` html
<div class="relative border w-32 h-12 bg-white mx-auto">
    <div class="js-input-number-container o-grid items-center mx-0 h-full">
        <span class="o-col-4 px-0 text-center cursor-pointer text-2xl"
              data-input-number-operator="-">-</span>
        <input value="1" min="1" class="js-input-number o-col-4 px-0 text-center">
        <span class="o-col-4 px-0 text-center cursor-pointer text-2xl"
              data-input-number-operator="+">+</span>
    </div>
</div>
```
