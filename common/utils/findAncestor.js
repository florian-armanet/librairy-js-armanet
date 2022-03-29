/**
 *
 * @param el                    {HTMLElement}
 * @param selector              {string}
 * @param isFirst               {boolean}
 * @returns                     {HTMLElement|null}
 */
const findAncestor = (el, selector, isFirst = true) => {
    if (!el.parentElement) return

    if (!isFirst && [...el.parentElement.querySelectorAll(selector)].find(e => e === el)) {
        return el
    }

    return findAncestor(el.parentElement, selector, false)
}

export default findAncestor
