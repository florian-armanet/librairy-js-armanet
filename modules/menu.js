import { toggleClass } from '../common/utils/handlerClass'

export default () => {
    const triggers = [...document.querySelectorAll('.js-menu-trigger')]
    const close    = document.querySelector('.js-menu-close')
    const target   = document.querySelector('.js-menu-target')

    if (close) {
        triggers.push(close)
    }
    handlerEvent(triggers, target)
}

const handlerEvent = (triggers, target) => {
    triggers.forEach(node => {
        node.addEventListener('click', () => {
            document.body.parentNode.classList.toggle('overflow-hidden')
            toggleClass(target)
        })
    })
}
