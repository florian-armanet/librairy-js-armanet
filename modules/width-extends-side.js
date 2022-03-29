import { getViewport, isTablet } from '../common/utils/viewport'

const maxWidthContainer = 1184
const screenWidth = () => getViewport().width
const marginWidth = () => (screenWidth() - maxWidthContainer) / 2

export default () => {
    const elements = document.querySelectorAll('.js-width-extends-side')
    const elementsMarginLeft = document.querySelectorAll('.js-width-extends-side-ml')

    if (!isTablet()) {
        [...elements].forEach(el => {
            transformElWidth(el, true)
        });
        [...elementsMarginLeft].forEach(el => {
            transformX(el, '+')
        });
    }
}

const transformX = (el, sign) => {
    el.style.transform = `translateX(${sign + marginWidth()}px)`
}

const transformElWidth = (element, transform = false) => {
    const elementWidth = element.offsetWidth
    const newWidth = () => element.style.width = elementWidth + marginWidth() + 'px'

    window.addEventListener('resize', () => {
        newWidth()
        if(transform) {
            transformX(element, '-')
        }
    })
    newWidth()
    if(transform) {
        transformX(element, '-')
    }
}
