export default () => {
    const titles = document.querySelectorAll('.js-split-title');

    [...titles].forEach(title => {
        if(!title.textContent.split('').includes('_')) return;

        let splitTitle  = title.innerHTML.split('_')
        let partTitle   = splitTitle[1]

        splitTitle[1]   = '<span class="text-primary-base font-bold">' + partTitle + '</span>'
        title.innerHTML = splitTitle.join(' ')
    })
}
