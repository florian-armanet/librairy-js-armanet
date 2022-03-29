const buttonsValidate     = document.querySelectorAll('[data-select-relocate-validate]')
const selectsRelocate     = document.querySelectorAll('[data-select-relocate]')
const selectsRelocateAuto = document.querySelectorAll('.js-select-relocate-auto')

export default () => {
    selectRelocate()
    selectRelocateAuto()
};

const selectRelocate = () => {
    [...buttonsValidate].forEach(buttonValidate => {
        buttonValidate.addEventListener('click', (event) => {
            const { selectRelocateValidate } = event.currentTarget.dataset
            const selectRelocateTarget       = [...selectsRelocate].find(select => select.dataset.selectRelocate === selectRelocateValidate)
            const indexTagSelect             = selectRelocateTarget.selectedIndex
            const optionSelected             = selectRelocateTarget.options

            if (!optionSelected[indexTagSelect].value) return

            window.location = optionSelected[indexTagSelect].value
        })
    })
}

const selectRelocateAuto = () => {
    [...selectsRelocateAuto].forEach(selectRelocateAuto => {
        selectRelocateAuto.addEventListener('change', (event) => {
            window.location = event.target.value
        })
    })
}
