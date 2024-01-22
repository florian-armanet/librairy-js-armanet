# Intl tel input

|        Element         |        Class         |     Data attribute     |
|:----------------------:|:--------------------:|:----------------------:|
|     Wrapper = form     |                      |                        |
|         Input          | `js-intl-tel-input`  |                        |
|         Error          | `js-intl-tel-error`  |                        |
|         Valid          | `js-intl-tel-valid`  |                        |
|   Button type submit   |                      |                        |
| Local code (optionnal) |                      | `data-channel-code-sm` |


### HTML
```html
<body data-channel-code-sm="uk">
    <form>
        <div class="relative">
            <input type="text" class="js-intl-tel-input">
    
            <span class="js-intl-tel-valid hidden absolute absolute-y-center right-4 text-green-500">
                <i class="Icon-check text-xl"></i>
            </span>
    
            <span class="js-intl-tel-error hidden absolute absolute-y-center right-4 text-red-500">
                <i class="Icon-cancel text-xl"></i>
            </span>
        </div>
    
        <button type="submit">Envoyer</button>
    </form>
</body>
```
