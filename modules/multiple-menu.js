import { addClass, removeClass } from '../common/utils/handlerClass'

export default () => {
    const triggers = document.querySelectorAll('[data-menu-trigger]')
    const targets  = document.querySelectorAll('[data-menu-target]');

    [...triggers].forEach(trigger => {
        trigger.addEventListener('click', (event) => {
            const { menuTrigger } = event.currentTarget.dataset;

            [...targets].forEach(target => removeClass(target))

            const targetActive = [...targets].find(target => target.dataset.menuTarget === menuTrigger)
            addClass(targetActive)

            const close = targetActive.querySelector('.js-menu-close')
            close.addEventListener('click', () => { removeClass(targetActive) })

            targetActive.addEventListener('click', e => e.stopPropagation());

            document.addEventListener('click', (e) => {
                if (!event.target.contains(e.target)) {
                    removeClass(targetActive)
                }
            })
        })
    })
}
