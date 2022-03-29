import { isTablet } from '../common/utils/viewport'

/**
 *
 * @param container
 */
const processTicker = (container) => {
    let current = 0;
    const slides = container.querySelectorAll('.js-ticker-item')

    setInterval(function () {
        slides.forEach((e) => {
            e.style.transform = 'translateY(-100%)'
            e.style.opacity   = 0
        })
        current                         = ( current !== slides.length - 1 ) ? current + 1 : 0
        slides[current].style.transform = 'translateY(-50%)'
        slides[current].style.opacity   = 1
    }, 4000)
}


export default () => {
    if (isTablet()) {
        const containers = document.querySelectorAll('.js-ticker');

        [...containers].forEach(container => {
            processTicker(container)
        })
    }
}
