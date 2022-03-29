import { addClass, removeClass } from '../common/utils/handlerClass'
import gsap from 'gsap'
import { isTablet } from '../common/utils/viewport'
import { resetAccordion } from './accordion'

const triggers = document.querySelectorAll('[data-trigger-tag]')
const targets  = document.querySelectorAll('[data-target-tag]')
const list     = document.querySelector('.js-container-target-tags')

export default () => {
    [...triggers].forEach(trigger => {
        trigger.addEventListener('click', event => {
            const tl = gsap.timeline({ paused: true })
            const { triggerTag } = event.currentTarget.dataset;

            function processFilter (triggerTag) {
                [...triggers].forEach(el => removeClass(el))
                addClass(trigger)

                const targetsActive = [...targets].filter(target => target.dataset.targetTag.includes(triggerTag));
                [...targets].forEach(el => removeClass(el));
                [...targetsActive].forEach(el => addClass(el))
            }

            tl.to(list, {
                opacity: 0,
                duration: 0.25,
                onComplete: processFilter,
                onCompleteParams: [triggerTag],
            })

            tl.to(list, {
                opacity: 1,
                duration: 0.15,
            })

            tl.play()

            if (isTablet()) {
                resetAccordion(trigger.parentNode.parentNode)
            }
        })
    })
}
