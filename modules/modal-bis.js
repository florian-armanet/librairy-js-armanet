import { addClass, removeClass } from '../common/utils/handlerClass'
import choiceViewport from '../common/utils/choiceViewport'
import { getViewport } from '../common/utils/viewport'

class Modal {
    constructor (trigger) {
        this.trigger           = trigger
        const { modalTrigger } = this.trigger.dataset
        if (!modalTrigger) return

        this.target = document.querySelector(`[data-modal-target=${ modalTrigger }]`) || null
        if (!this.target) return

        this.background = document.querySelector(`[data-modal-background=${ modalTrigger }]`) || null
        if (!this.background) return

        this.backgroundPositionX = this.background.getBoundingClientRect().x
        this.buttonClose         = this.target.querySelector('.js-modal-close')
        this.header              = document.querySelector('.js-header')
    }

    /**
     *
     */
    close () {
        removeClass(this.target, this.background)
        document.body.parentElement.classList.remove('overflow-hidden')

        if (this.header) {
            this.header.style.zIndex = ''
        }
    }

    /**
     *
     */
    setWidthBackground () {
        this.background.style.width = `calc(100vw - ${this.backgroundPositionX}px)`
    }

    /**
     *
     */
    processModal () {
        this.trigger.addEventListener('click', (e) => {
            e.preventDefault()

            if (this.backgroundPositionX > 0) {
                this.setWidthBackground()
            }

            if (this.target && this.background) {
                [this.target, this.background].forEach(el => {
                    addClass(el)
                    document.body.parentElement.classList.add('overflow-hidden')

                    if (this.header) {
                        this.header.style.zIndex = '0'
                    }
                })
            }

            [this.buttonClose, this.background].forEach(el => {
                el.addEventListener('click', (e) => {
                    this.close()
                })
            })
        })
    }

    /**
     *
     */
    noModal () {
        this.target.removeAttribute('data-modal-target')
        this.background.classList.remove('js-modal-container')
        this.buttonClose.classList.add('hidden')
    }

    /**
     *
     */
    init () {
        if (!this.target || !this.background) return

        const { modalDevice } = this.target.dataset
        const currentViewport = modalDevice ? choiceViewport(modalDevice) : getViewport().width

        if (modalDevice && modalDevice.includes('down')) {
            if (getViewport().width <= currentViewport) {
                this.processModal()
                return
            }
        }

        if (modalDevice && !modalDevice.includes('down')) {
            if (getViewport().width >= currentViewport) {
                this.processModal()
                return
            }
        }

        if (!modalDevice) {
            this.processModal()
            return
        }

        this.noModal()
    }
}

export default () => {
    const triggers = document.querySelectorAll('[data-modal-trigger]');

    [...triggers].forEach(trigger => {
        const instanceModal = new Modal(trigger)
        instanceModal.init()
    })
};
