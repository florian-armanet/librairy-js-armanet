export default () => {
    scrollTo()
    scrollOnLoad()
    scrollToTop()
}

const scrollTo = () => {
    const triggers = document.querySelectorAll('[data-scroll-trigger]')
    const targets = document.querySelectorAll('[data-scroll-target]');

    [...triggers].forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const { scrollTrigger } = e.currentTarget.dataset;

            const target = [...targets].find(el => el.dataset.scrollTarget === scrollTrigger)
            if (!target) return;

            target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
    })
}

const scrollToTop = () => {
    const scrollToTop = document.querySelector('.js-scroll-top')
    if (!scrollToTop) return

    if (scrollToTop) {
        scrollToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        })
    }
}

const scrollOnLoad = () => {
    const anchor = document.querySelector('.js-scroll-on-load')
    if (!anchor) return

    const anchorY = anchor.getBoundingClientRect().y
    window.scrollTo({
        top: anchorY,
        behavior: 'smooth'
    })
}
