import { gsap } from 'gsap'
import { positionY } from '../common/utils/positionY'
import choiceViewport from '../common/utils/choiceViewport'
import { getViewport } from '../common/utils/viewport'

class Sticky {
    constructor (sticky) {
        this.sticky            = sticky
        this.stickyInner       = this.sticky.firstElementChild
        this.endPositionSticky = this.sticky.offsetHeight + positionY(this.sticky)
        this.isFixed           = false

        this.SELECTOR_STICKY_PARENT         = 'js-sticky-parent'

        this.classesNoFixed      = ['relative']
        this.classesFixed        = []
        this.defaultClassesFixed = ['fixed', 'top-0', 'left-0', 'right-0', '-translateY-100']

        this.endPositionStickyParent = document.body.offsetHeight

        this.stickyParent = this.sticky.closest('.' + this.SELECTOR_STICKY_PARENT)
        if (this.stickyParent) {
            this.endPositionStickyParent = this.stickyParent.offsetHeight + positionY(this.stickyParent) - this.sticky.offsetHeight
        }
    }

    /**
     *
     */
    classesHandler () {
        const { stickyClasses } = this.sticky.dataset

        if (stickyClasses !== undefined && stickyClasses !== '') {
            const stickyClassesArray = stickyClasses.split(' ')
            this.classesFixed.push(...stickyClassesArray)
            return
        }

        this.classesFixed.push(...this.defaultClassesFixed)
    }

    /**
     * Params for context of GSAP in property onCompleteParams
     * @param el
     * @param classesNoFixed
     * @param classesFixed
     */
    processFixed (el, classesNoFixed, classesFixed) {
        el.classList.remove(...classesNoFixed)
        el.classList.add(...classesFixed)
    }

    /**
     *
     */
    processReset () {
        this.stickyInner.classList.add(...this.classesNoFixed)
        this.stickyInner.classList.remove(...this.classesFixed)
    }

    /**
     *
     */
    appear () {
        const tl = gsap.timeline()
        tl.set(this.stickyInner, { clearProps: 'all' })
        tl.to(this.stickyInner, {
            duration: 0,
            onComplete: this.processFixed,
            onCompleteParams: [this.stickyInner, this.classesNoFixed, this.classesFixed]
        })
        tl.to(this.stickyInner, { y: 0, duration: 0.5 })
    }

    /**
     *
     */
    observeBodyResize () {
        const resizeObserver = new ResizeObserver((entries) => {
            this.endPositionStickyParent = this.stickyParent.offsetHeight + positionY(this.stickyParent) - this.sticky.offsetHeight
            this.endPositionSticky       = this.sticky.offsetHeight + positionY(this.sticky)
        })

        resizeObserver.observe(document.body)
    }

    /**
     *
     */
    processScrolling () {
        if (scrollY > this.endPositionSticky && scrollY < this.endPositionStickyParent && !this.isFixed) {
            this.isFixed = true
            this.appear()
        }

        if (( scrollY < this.endPositionSticky && this.isFixed ) || ( scrollY > this.endPositionStickyParent && this.isFixed )) {
            this.isFixed = false
            this.processReset()
        }
    }

    /**
     *
     */
    fixedSticky () {
        this.sticky.style.height = this.sticky.offsetHeight + 'px'
        this.sticky.style.width  = this.sticky.offsetWidth + 'px'

        if (!this.stickyInner) return

        if (this.stickyParent) {
            this.processReset()
        }

        window.addEventListener('scroll', () => {
            this.processScrolling()
        })
    }

    /**
     *
     */
    processSticky () {
        this.classesHandler()
        this.fixedSticky()
        this.observeBodyResize()
    }

    /**
     *
     */
    init () {
        const stickyDevice    = this.sticky.dataset?.stickyDevice ? this.sticky.dataset.stickyDevice : null
        const currentViewport = stickyDevice ? choiceViewport(stickyDevice) : getViewport().width

        if (stickyDevice && stickyDevice.includes('down')) {
            if (getViewport().width <= currentViewport) {
                this.processSticky()
            }
            return
        }

        if (stickyDevice && !stickyDevice.includes('down')) {
            if (getViewport().width >= currentViewport) {
                this.processSticky()
            }
            return
        }

        this.processSticky()
    }
}

export default () => {
    const stickies = document.querySelectorAll('.js-sticky');

    [...stickies].forEach(sticky => {
        const instanceSticky = new Sticky(sticky)
        instanceSticky.init()
    })
}
