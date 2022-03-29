import axios from 'axios'
import ReloadRecaptcha from './reload-recaptcha'
import TokenRecaptcha from './token-recaptcha'
import EventBus from '../common/utils/eventBusVanilla'
import events from '../common/constants/events'

export default () => {
    const containers = document.querySelectorAll('.js-form');

    [...containers].forEach(container => {
        initForm(container)
    })
}

const initForm = (container) => {
    const form = container.querySelector('form')

    if (!form) return

    form.addEventListener('submit', e => {
        e.stopPropagation()
        e.preventDefault()

        axios.post(form.action,
            new FormData(form),
            {
                headers: { 'Content-Type': 'multipart/form-data' }
            }
        ).then(({ data }) => {
            container.innerHTML = data

            TokenRecaptcha()
            initForm(container)
            ReloadRecaptcha()

            EventBus.dispatchEvent(events.FORM_SUBMIT, { data, form })

            const anchorY = form.getBoundingClientRect().y
            window.scrollTo({
                top: anchorY + scrollY - 200,
                behavior: 'smooth'
            })
        })
    })
}
