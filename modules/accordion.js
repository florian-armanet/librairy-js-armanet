import { containsClass, removeClass, toggleClass } from '../common/utils/handlerClass'
import { getViewport } from '../common/utils/viewport'
import choiceViewport from '../common/utils/choiceViewport'

class Accordion {
    constructor (parent) {
        this.parent            = parent
        this.trigger           = this.parent.querySelector('.js-accordion-trigger')
        this.target            = this.parent.querySelector('.js-accordion-target')
        this.isOpenedByDefault = this.parent.classList.contains('js-accordion-opened')
    }

    /**
     *
     * @param nodes
     * @returns {*}
     */
    getTotalMarginsY (nodes) {
        const getAllMarginsBottom = [...nodes]
            .map(el => parseInt(window.getComputedStyle(el, null).getPropertyValue('margin-bottom')))
        const getAllMarginsTop    = [...nodes]
            .map(el => parseInt(window.getComputedStyle(el, null).getPropertyValue('margin-top')))

        const [totalMT, totalMB] = [getAllMarginsBottom, getAllMarginsTop].map(el => {
            return el.reduce((acc, currentValue) => {
                return acc + currentValue
            }, 0)
        })

        return totalMT + totalMB
    }

    /**
     *
     */
    checkHeight (elHeight) {
        containsClass(this.parent) ? this.target.style.maxHeight = elHeight + 'px' : this.target.style.maxHeight = 0 + 'px'
    }

    /**
     *
     */
    processAccordion () {
        if (!this.target || !this.trigger) return

        const { accordionDevice } = this.parent.dataset
        const currentViewport     = accordionDevice ? choiceViewport(accordionDevice) : getViewport().width

        if (getViewport().width <= currentViewport) {
            const AllChildren = this.target.querySelectorAll('*')

            const elHeightWithoutPaddings = this.target.offsetHeight
            const elHeight                = elHeightWithoutPaddings + this.getTotalMarginsY(AllChildren)
            this.target.style.maxHeight   = 0 + 'px'

            if (this.isOpenedByDefault) {
                toggleClass(this.parent)
            }

            this.checkHeight(elHeight)

            this.trigger.addEventListener('click', (e) => {
                e.preventDefault()

                toggleClass(this.parent)
                this.checkHeight(elHeight)
            })

            const elementsStopPropagation = this.trigger.querySelectorAll('.js-accordion-stopPropagation')
            elementsStopPropagation.forEach(elStopPropagation => {
                elStopPropagation.addEventListener('click', (event) => {
                    event.stopPropagation()
                })
            })
        }
    }

    /**
     *
     */
    init () {
        this.processAccordion()
    }
}

export default () => {
    const accordions = document.querySelectorAll('.js-accordion')
    if (!accordions.length) return

    accordions.forEach(el => {
        const instanceAccordion = new Accordion(el)
        instanceAccordion.init()
    })
}

/**
 *
 * Reset property maxHeight and state isActive
 * @param container
 */
export const resetAccordion = (container) => {
    const target = container.querySelector('.js-accordion-target')
    removeClass(container, target)
    target.style.maxHeight = 0 + 'px'
}
