/**
 * Resize the height of header IF you want that it take 100% of screen height
 */
import { getViewport } from '../common/utils/viewport'

export default () => {
    const header = document.querySelector('.js-header-height-mobile');

    if (getViewport().width < 768 && header) {
        resetHeight(header)
    }
}

const resetHeight = (el) => {
    el.style.height = window.innerHeight + 'px'
}
