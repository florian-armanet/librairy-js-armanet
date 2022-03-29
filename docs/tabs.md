# Tabs

| Element | Data attribute | Class
| :--------: | :-----: | :-----: |
| Container  |  | `js-tab-container`
| Tab Content  |  | `js-tab-content`
| Select (mobile)  |  | `js-tabs-select`
| Trigger | `data-tab-trigger` |
| Target | `data-tab-target` |

### HTML
``` html
<section class="js-tab-container py-32">
    {% set yourArrayOfTitles = ["Tab 1", "Tab 2", "Tab 3"] %}
    <div class="lg-down:hidden flex-flow-center lg-down:flex-col w-full">
        {% for title in yourArrayOfTitles %}
            <h3 class="text-center{{ loop.first ? ' isActive': '' }}"
                data-tab-trigger="{{ loop.index }}">{{ title }}</h3>
        {% endfor %}
    </div>
    
    <div class="lg:hidden relative overflow-hidden mb-12">
        <i class="Icon-angle-bottom -z-1 absolute right-5 absolute-y-center text-3xl text-primary-hover"></i>
        <select name="tabs" id="tabs" class="js-tabs-select text-primary-hover font-bold uppercase w-full px-10 py-5 bg-transparent border border-primary-hover">
            {% for title in yourArrayOfTitles %}
                <option value="{{ loop.index }}" {% if loop.first %}selected{% endif %}>{{ title }}</option>
            {% endfor %}
        </select>
    </div>
    
    <div class="js-tab-content max-w-sm w-full mx-auto text-center">
        {% set yourArrayOfContents = ["Content 1", "Content 2", "Content 3"] %}
        {% for content in yourArrayOfContents %}
            <div class="text-center{{ loop.first ? ' isActive': '' }}" 
                data-tab-target="{{ loop.index }}">
                <p>{{ content }}</p>
            </div>
        {% endfor %}
    </div>
</section>
```

### CSS
```scss
[data-tab-trigger] {
    @apply relative mx-4 font-bold uppercase text-gray-300 transition-fast py-4 cursor-pointer mb-8 lg-down:mb-2;

    &:hover, &.isActive {
        @apply text-primary-base transition-fast;

        &:before, &:after {
            @apply w-20 bg-primary-base;
        }
    }

    &:hover {
        @apply text-primary-hover;

        &:before, &:after {
            @apply text-primary-hover;
        }
    }

    &:before, &:after {
        content: '';
        @apply absolute absolute-x-center w-0 bg-gray-300 transition-fast;
        height: 3px;
    }

    &:before {
        @apply top-0;
    }

    &:after {
        @apply bottom-0;
    }
}

[data-tab-target] {
    transform: translateX(100%);
    @apply absolute top-0 w-full transition-fast opacity-0;

    &.isActive {
        @apply opacity-100;
        transform: translate(0);
    }
}

.js-tab-content {
    @apply relative transition-fast;
}
```
