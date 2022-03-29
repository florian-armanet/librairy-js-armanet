import { addClass, removeClass } from '../common/utils/handlerClass'
import { isTablet } from '../common/utils/viewport'

class Tabs {
    constructor (container) {
        this.container = container
        this.triggers  = container.querySelectorAll('[data-tab-trigger]')
        this.targets   = container.querySelectorAll('[data-tab-target]')
        this.selects   = container.querySelectorAll('.js-tabs-select')
    }

    /**
     *
     * @param target
     */
    heightTab (target) {
        const tabContent = this.container.querySelector('.js-tab-content')
        if (!tabContent) return

        tabContent.style.height = target.offsetHeight + 'px'
    }

    /**
     *
     * @param event
     * @param value
     */
    process (event, value) {
        [...this.triggers, ...this.targets].forEach(trigger => removeClass(trigger))

        const target = [...this.targets].find(el => el.dataset.tabTarget === value)

        addClass(event.currentTarget, target)

        this.heightTab(target)
    }

    /**
     *
     */
    init () {
        this.heightTab(this.targets[0])

        if (isTablet()) {
            this.selects.forEach(select => {
                select.addEventListener('change', (event) => {
                    this.process(event, event.currentTarget.value);
                })
            })

            return;
        }

        this.triggers.forEach(trigger => {
            trigger.addEventListener('click', (event) => {
                const { tabTrigger } = event.currentTarget.dataset;
                this.process(event, tabTrigger);
            })
        });
    }
}

export default () => {
    const tabsContainers = document.querySelectorAll('.js-tab-container');
    [...tabsContainers].forEach(tabContainer => {
        const tabInstance = new Tabs(tabContainer)
        tabInstance.init()
    })
}
