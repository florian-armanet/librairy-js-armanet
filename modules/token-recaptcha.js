export default () => {
    const recaptchaInputs = document.querySelectorAll('input[data-recaptcha-site-key]')

    if (!recaptchaInputs.length) return

    try {
        if (!grecaptcha) {
            console.error('grecaptcha object doesn\'t exist.')
            return
        }
    } catch (e) {
        return
    }

    const [firstInput] = recaptchaInputs
    const siteKey      = firstInput.dataset.recaptchaSiteKey

    grecaptcha.execute(siteKey, {
        // action: 'homepage'
    }).then((token) => {
        recaptchaInputs.forEach(input => {
            input.value = token
            input.setAttribute('value', token)
        })
    })
}
