import 'cookieconsent'

export default () => {
    const cookieConsentEl = document.getElementById('cookieconsent')

    if (!cookieConsentEl) return

    window.cookieconsent.initialise({
        container: cookieConsentEl,
        revokable: false,
        law: {
            regionalLaw: false,
        },
        content: {
            header: 'Ce site utilise des cookies !',
            message: 'Ce site utilise des cookies pour améliorer votre expérience. En restant sur ce site, vous acceptez l\'utilisation de ceux-ci.',
            dismiss: 'J\'ai compris',
            allow: 'Accepter',
            deny: 'Refuser',
            link: 'En savoir plus',
            href: 'https://www.cookiesandyou.com',
            close: '&#x274c;',
            policy: 'Cookie Policy',
            target: '_blank',
        },
        location: true,
        onPopupOpen: () => displayModal(cookieConsentEl),
        onPopupClose: () => hideModal(cookieConsentEl),
        onInitialise: state => {
            if (state !== window.cookieconsent.status.dismiss) {
                displayModal(cookieConsentEl)
            }
        },
        type: 'categories'
    })
}

const displayModal = (el) => {
    el.classList.remove('hidden')
}

const hideModal = (el) => {
    el.classList.add('hidden')
}
