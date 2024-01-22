import choiceViewport from '../common/utils/choiceViewport'
import { getViewport } from '../common/utils/viewport'

export default () => {
    const AllElToApplyLeft0 = document.querySelectorAll('[data-left0]')

    AllElToApplyLeft0.forEach(el => {
        const { left0 } = el.dataset
        const currentViewport = left0 ? choiceViewport(left0) : getViewport().width

        if (left0 !== undefined && left0.includes('down')) {
            if (getViewport().width <= currentViewport) {
                process(el)
            }
            return;
        }

        if (left0 !== undefined && !left0.includes('down')) {
            if (getViewport().width >= currentViewport) {
                process(el)
            }
            return;
        }

        process(el)
    })
}

/**
 *
 * @param el
 */
const process = (el) => {
    const positionX = el.getBoundingClientRect().x
    positionX > 0 ? el.style.left = -positionX + 'px' : el.style.left = positionX + 'px'
}
