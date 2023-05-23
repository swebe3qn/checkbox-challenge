const nativeCheckbox = document.querySelector('#native');
const customCheckbox = document.querySelector('#custom');
let isFocused = false, isChecked = false;

const handleFocus = () => {
    if (!isFocused) {
        nativeCheckbox?.focus();
        customCheckbox?.classList.add('focus');
    } else {
        document.activeElement.blur();
        customCheckbox?.classList.remove('focus');
    }

    isFocused = !isFocused;
}

const handleChecked = () => {
    if (!isChecked) {
        if (nativeCheckbox) nativeCheckbox.checked = true;
        customCheckbox?.classList.add('checked');
    } else {
        if (nativeCheckbox) nativeCheckbox.checked = false;
        customCheckbox?.classList.remove('checked');
    }

    isChecked = !isChecked;
}

[nativeCheckbox, customCheckbox].forEach(el => {
    el?.addEventListener('click', handleChecked)
})

document.onkeydown = e => {
    // on tab
    if (e.keyCode === 9) {
        e.preventDefault();
        handleFocus();
    }
    // on space
    else if (e.keyCode === 32 && isFocused) {
        e.preventDefault();
        handleChecked();
    }
}