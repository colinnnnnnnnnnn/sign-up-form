const pass = document.getElementById('password');
const conf = document.getElementById('confirm-pass');
const leg = document.getElementById('leg');
conf.disabled = true;

pass.addEventListener('input', () => {
    if (pass.value != '') {
        conf.disabled = false;
    }
    else {
        conf.disabled = true;
        conf.value = '';
    }
});

conf.addEventListener('focusout', () => {
    if (pass.value != conf.value) {
        pass.classList.add('error');
        conf.classList.add('error');
        leg.textContent = '*Passwords do not match';
    }

    else {
        pass.classList.remove('error');
        conf.classList.remove('error');
        leg.textContent = '';
    }
});