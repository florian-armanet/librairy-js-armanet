import EventBus from '../common/utils/eventBusVanilla';
import events from '../common/constants/events'

const modals  = document.querySelectorAll('[data-modal]')

export default () => {
    [...modals].forEach(el => {
        el.addEventListener('click', event => {
            EventBus.dispatchEvent(events.MODAL_CLICKED, event.currentTarget.dataset.modal)
        })
    })
}
