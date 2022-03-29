/**
 * System of dropdown
 */
export default () => {
    const triggers = document.querySelectorAll('[data-click-trigger]')

    ;[...triggers].forEach(trigger => {
        const { clickTrigger } = trigger.dataset
        const target = document.querySelector(`[data-click-target="${clickTrigger}"]`)

        if (target) {
            /**
             * TODO: handle different classNames
             */
            new Trigger(
                { el: trigger },
                { el: target }
            )
        }
    })
}

class Trigger {

    /**
     *
     * @param {object} trigger {el: Element, className: string}
     * @param {object} target {el: Element, className: string}
     */
    constructor (trigger, target) {
        this.trigger = trigger
        this.target = target

        this.DEFAULT_TRIGGER_CLASSNAME = 'is-active'
        this.DEFAULT_TARGET_CLASSNAME = 'is-visible'

        trigger.className = trigger.className || this.DEFAULT_TRIGGER_CLASSNAME
        target.className = target.className || this.DEFAULT_TARGET_CLASSNAME

        this.initEventsHandler()
        this.stopTargetPropagation()
    }

    initEventsHandler () {
        this.handleSelfClick()
        this.handleOutsideClick()
        this.handleEscapeKey()
    }

    hide () {
        [this.trigger, this.target].forEach(c => c.el.classList.remove(c.className))
    }

    toggle (e) {
        e.preventDefault();
        [this.trigger, this.target].forEach(c => c.el.classList.toggle(c.className))
    }

    stopTargetPropagation () {
        this.target.el.addEventListener('click', e => {
            e.stopPropagation()
        })
    }

    handleEscapeKey () {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.target.el.classList.contains(this.DEFAULT_TARGET_CLASSNAME)) {
                this.hide()
            }
        })
    }

    handleSelfClick () {
        this.trigger.el.addEventListener('click', (e) => this.toggle(e))
    }

    handleOutsideClick () {
        document.addEventListener('click', (e) => {
            if (!this.target.el.contains(e.target) && !this.trigger.el.contains(e.target)) {
                this.hide()
            }
        })
    }
}
