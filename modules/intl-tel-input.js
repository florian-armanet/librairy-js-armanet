import intlTelInput from 'intl-tel-input'
import * as utilScript from 'intl-tel-input/build/js/utils.js'
import CLASS from 'librairy-js-armanet/common/constants/css-classes'

export default () => {
    const inputs = document.querySelectorAll('.js-intl-tel-input');

    [...inputs].forEach(input => {
        const form = input.closest('form')
        if (!form) return

        const hiddenInput = input;
        const targetInput = document.createElement('input')
        targetInput.setAttribute('type', 'text')
        targetInput.classList.add(...input.classList)
        targetInput.setAttribute('style', input.getAttribute('style'))
        targetInput.setAttribute('value', input.getAttribute('value'))
        targetInput.value = input.value
        input.parentElement.appendChild(targetInput)
        input.setAttribute('type', 'hidden');

        const errorMsg = form.querySelector('.js-intl-tel-error'),
              validMsg = form.querySelector('.js-intl-tel-valid'),
              submit   = form.querySelector('[type=submit]')

        if (!errorMsg || !validMsg || !submit) return

        // Disabled the submit button
        submit.disabled = true

        const channelCodeSmNode = document.querySelector('[data-channel-code-sm]')
        const initialCountry    = channelCodeSmNode && channelCodeSmNode.dataset.channelCodeSm ? channelCodeSmNode.dataset.channelCodeSm : 'fr'

        // initialise plugin
        const iti = intlTelInput(targetInput, {
            initialCountry,
            utilsScript: utilScript
        })

        const reset = () => {
            errorMsg.classList.add(CLASS.HIDDEN)
            validMsg.classList.add(CLASS.HIDDEN)
        }

        const checkValidNumber = () => {
            if (!iti.getNumber()) return;

            if (hiddenInput) {
                hiddenInput.value = iti.getNumber()
            }
            validMsg.classList.toggle(CLASS.HIDDEN, !iti.isValidNumber())
            errorMsg.classList.toggle(CLASS.HIDDEN, iti.isValidNumber())
            submit.disabled = !iti.isValidNumber()
        }

        checkValidNumber()

        targetInput.addEventListener('countrychange', (e) => {
            reset()
            checkValidNumber()
        })

        targetInput.addEventListener('keyup', (e) => {
            reset()
            checkValidNumber()
        })
    })
}
