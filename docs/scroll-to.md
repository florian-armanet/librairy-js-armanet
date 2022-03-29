# Scroll to

| Element | Data attribute
| :--------: | :-----: |
| Triggers | `data-scroll-trigger` |
| Targets | `data-scroll-target` |

### HTML
Add same value at data attributes `data-scroll-trigger` 
and `data-scroll-target` for a trigger and its target

``` html
<section>
    <div data-scroll-trigger="exemple">Trigger</div>
</section>
<section>
    ...
</section>
<section>
    ...
</section>
<section>
    ...
</section>
<section>
    <div data-scroll-target="exemple">Target</div>
</section>
```

<br/>

***

# Scroll to top

| Element | Class
| :--------: | :-----: |
| Trigger | `js-scroll-top` |

### HTML

``` html
<footer>
    <p class="js-scroll-top">Aller en haut</p>
</footer>
```

<br/>

***

# Scroll on load

| Element | Class
| :--------: | :-----: |
| Trigger | `js-scroll-on-load` |

### HTML
Go to element automatically after the page has loaded

``` html
<header>
    ...
</header>
<section>
    <div class="js-scroll-on-load">Target</div>
</section>
```
