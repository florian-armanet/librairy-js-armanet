# Select relocate

| Element | Class | Data attribute |
| :--------: | :-----: |:-----: |
| Select  | | `data-select-relocate`
| Button Validate  | | `data-select-relocate-validate`

```html
<select name="" id="" class="mySelect" data-select-relocate="choiceUse">
    <option value="" selected disabled
            hidden>{{ block_choice_use.customValue('label') }}</option>
    {% for item in taxonChildren %}
        <option value="{{ path('sylius_shop_product_index', { 'slug': item.slug }) }}">{{ item.name }}</option>
    {% endfor %}
</select>

<button class="z-1 bg-tertiary-base text-white px-4 sm:px-5 h-10 flex-flow-center"
        aria-label="{{ block_choice_use.customValue('label') }}"
        data-select-relocate-validate="choiceUse">
    <i class="Icon-search text-lg lg:text-2xl"></i>
</button>
```

<br>

---

# Select relocate auto (when you clicked on option in select)
| Element | Class |
| :--------: | :-----: |
| Select  | `js-select-relocate-auto` |
```html
<select name="{{ attr.code }}" class="mySelect js-select-relocate-auto">
    <option value="" selected hidden disabled>{{ currentValue }}</option>
    {% for associatedProduct in associatedProducts|filter(a => a.code != product.code) %}
        {% set value = _self.getAttrValue(attr, associatedProduct, product.name) %}
        <option value="{{ path('sylius_shop_product_show', {'slug' : associatedProduct.slug}) }}">
            {{ value }}
        </option>
    {% endfor %}
</select>
```

