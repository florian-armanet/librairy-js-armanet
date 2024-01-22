import { removeClassByPrefix } from '../common/utils/remove-class-by-prefix'
import CLASSES from '../common/constants/css-classes'
import choiceViewport from '../common/utils/choiceViewport'
import { getViewport } from '../common/utils/viewport'

class SeeMore {
    constructor (target) {
        this.target           = target
        this.trigger          = [...document.querySelectorAll('[data-see-more-trigger]')]
            .find(trigger => trigger.dataset.seeMoreTrigger === this.target.dataset.seeMoreTarget)
        this.triggerToDisable = [...document.querySelectorAll('[data-see-more-disable]')]
            .find(triggerToDisable => triggerToDisable.dataset.seeMoreDisable === this.target.dataset.seeMoreTarget)
        this.seeMoreLines     = Number(this.target.dataset.seeMoreLines)
    }

    /**
     *
     * @returns {number}
     */
    nbLines () {
        const lineHeightValuePx = window.getComputedStyle(this.target).getPropertyValue('line-height')
        const lineHeightInt     = parseInt(lineHeightValuePx.replace('px', ''))
        return Math.ceil(this.target.offsetHeight / lineHeightInt)
    }

    /**
     *
     */
    hideLines () {
        this.target.classList.add(`line-clamp-${ this.seeMoreLines }`)
    }

    /**
     *
     */
    processSeeMore () {
        if (!this.trigger) return

        if (this.seeMoreLines >= this.nbLines()) {
            this.trigger.classList.add(CLASSES.HIDDEN)
            return
        }

        this.hideLines()

        this.trigger.addEventListener('click', (e) => {
            removeClassByPrefix(this.target, 'line-clamp-')
            this.trigger.classList.add(CLASSES.HIDDEN)

            if (this.triggerToDisable) {
                this.triggerToDisable.classList.remove(CLASSES.HIDDEN)
            }
        })

        if (this.triggerToDisable) {
            this.triggerToDisable.addEventListener('click', (e) => {
                this.hideLines()
                this.trigger.classList.remove(CLASSES.HIDDEN)

                this.triggerToDisable.classList.add(CLASSES.HIDDEN)
            })
        }
    }

    init() {
        const seeMoreDevice = this.target.dataset?.seeMoreDevice ? this.target.dataset.seeMoreDevice : null
        const currentViewport  = seeMoreDevice ? choiceViewport(seeMoreDevice) : getViewport().width

        if (seeMoreDevice && seeMoreDevice.includes('down')) {
            if (getViewport().width <= currentViewport) {
                this.processSeeMore()
                return
            }

            this.trigger.classList.add(CLASSES.HIDDEN)
            return
        }

        if (seeMoreDevice && !seeMoreDevice.includes('down')) {
            if (getViewport().width >= currentViewport) {
                this.processSeeMore()
                return
            }

            this.trigger.classList.add(CLASSES.HIDDEN)
            return
        }

        this.processSeeMore()
    }
}

export default () => {
    const targets = document.querySelectorAll('[data-see-more-target]');

    [...targets].forEach(target => {
        const instanceSeeMore = new SeeMore(target)
        instanceSeeMore.init()
    })
}
