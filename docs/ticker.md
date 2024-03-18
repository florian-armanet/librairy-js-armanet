# Ticker

Tickers allows you to display list of elements in succession 
that is not very important. (ex: reassurance)

> Available on mobile only

<br/>

| Element | Class
| :--------: | :-----: |
| List | `js-ticker` |
| Item | `js-ticker-item` |

### HTML
``` html
<ul class="js-ticker m-reassurance__listing o-grid o-grid--loose lg-down:m-0">
    {foreach from=$elements key=k item=element name=elements}
        {assign var=title value={"Titre_reassurance_"|cat:{$k+1|string_format:"%d"}}}
        <li class="js-ticker-item m-reassurance__item {if $smarty.foreach.elements.index !== (sizeof($elements) - 1)} lg:border-r lg:border-white{/if}">
            <div class="flex-flow-centerY mb-2">
                <img src="{$element.image}"
                     alt="{$element.text}"
                     class="mr-3"
                >
                <h3 class="text-md uppercase font-core leading-normal w-32">{l s={$title} d='Cornerdeals.Reassurance'}</h3>
            </div>
            <span class="relative">{$element.text}</span>
        </li>
    {/foreach}
</ul>
```

### CSS 
``` scss
@screen lg-down {
    // List
    .js-ticker {
        @apply relative overflow-hidden;
        @apply m-0 #{'!important'};
        max-width: 320px;
    }

    // Item
    .js-ticker-item {
        @apply transition-fast absolute opacity-0 flex flex-wrap;
        top: 50%;
        transform: translateY(-100%);
        flex: 0 0 320px;
        max-width: 320px;

        &:first-child {
            @apply opacity-100;
            transform: translateY(-50%);
        }
    }
}
```
