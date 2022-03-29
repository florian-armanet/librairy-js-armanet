/**
 * Generate same height by elements group
 * Exemple : List of cards where titles have to have the same height
 */
const heightGroup = () => {
    const heightGroups = document.querySelectorAll('[data-height-group]')

    const arrayGroups = [...heightGroups]
        .map(({ dataset: { heightGroup } }) => heightGroup)
        .filter((el, index, arr) => index === arr.indexOf(el));

    [...arrayGroups].forEach(group => {
        const elementsInGroup = document.querySelectorAll(`[data-height-group=${ group }]`)
        const heightMax       = Math.max(...[...elementsInGroup].map(node => node.offsetHeight));
        [...elementsInGroup].forEach(el => el.style.height = heightMax + 'px')
    })
}

export default () => {
    heightGroup()
}
