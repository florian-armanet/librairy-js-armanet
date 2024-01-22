# Position absolute with left 0

| Element | Data attribute |
|:-------:|:--------------:|
| Element |  `data-left0`  |

### HTML
Add data attribute `data-left0`

Values for `data-left0`
- `if no value` : all devices
- `xl` : >1240
- `xl-down` : <1240
- `lg` : >1024
- `lg-down` : <1024
- `sm` : >567
- `sm-down` : <567

Required styles css :
- position: absolute
- left: 0
- width: XXXvw (ex: 100vw)
- right: auto

### HTML (Example with dropdown module)
``` html
<div class="relative">
    <div data-click-trigger="menu">
        Trigger of dropdown
    </div>
    
    <div class="has-trigger-transition absolute sm-down:left-0 sm-down:w-screen"
        data-click-target="menu" 
        data-left0="sm-down">
        <p>Content</p>  
    </div>
</div>
```
