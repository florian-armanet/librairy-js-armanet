const _IS_ACTIVE = 'isActive';

export const removeClass = (...nodes) => {
    [...nodes].forEach(node => node.classList.remove(_IS_ACTIVE));
}

export const toggleClass = (...nodes) => {
    [...nodes].forEach(node => node.classList.toggle(_IS_ACTIVE));
}

export const addClass = (...nodes) => {
    [...nodes].forEach(node => node.classList.add(_IS_ACTIVE));
}

export const containsClass = node => node.classList.contains(_IS_ACTIVE);
