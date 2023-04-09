window.onload = () => {

    let fullName = document.getElementsByClassName('form-input')[0];
    let yourUserName = document.getElementsByClassName('form-input')[1];
    let eMail = document.getElementsByClassName('form-input')[2];
    let password = document.getElementsByClassName('form-input')[3];
    let passwordRepeat = document.getElementsByClassName('form-input')[4];

    fullName.onkeydown = (e) => {
        if ('1234567890'.indexOf(e.key) !== -1) {
            e.preventDefault();
        }
    };

    yourUserName.onkeydown = (e) => {
        if ('.,'.indexOf(e.key) !== -1) {
            e.preventDefault();
        }
    };

    let checkBox = document.getElementsByClassName('form-checkbox')[0];
    let popup = document.getElementById('popup');

    checkBox.onchange = () => {
        if (checkBox.checked)
            console.log('Cогласен')
        else
            console.log('Не согласен')
    }

    let singUp = document.getElementById('btn-sing-in');

    singUp.onclick = function formValid() {

        if (!fullName.value) {
            alert('Fill in Full Name');
            return;
        }
        if (!yourUserName.value) {
            alert('Fill in User Name');
            return;
        }
        if (!eMail.value) {
            alert('Fill in e-mail');
            return;
        }
        if (!password.value) {
            alert('Fill in Password');
            return;
        }
        if (password.value.length < 8) {
            alert('The password must contain at least 8 characters');
            return;
        }
        if (password.value !== passwordRepeat.value) {
            alert('Password mismatch');
            return;
        }
        if (!checkBox.checked) {
            alert('You have not agreed to the privacy policy');
            return;
        }
        popup.style.visibility = 'visible'
    }


    let registrationOk = document.getElementById('btn-ok');

    registrationOk.onclick = () => {
        popup.style.visibility = 'hidden';
        for (let i = 0; i < 5; i++) {
            document.getElementsByTagName('input')[i].value = null
        }
        checkBox.checked = false;
        document.getElementsByTagName('h1')[0].textContent = 'Log in to the system';
        document.getElementsByTagName('label')[0].style.display = 'none';
        document.getElementsByTagName('label')[2].style.display = 'none';
        document.getElementsByTagName('label')[4].style.display = 'none';
        document.getElementsByTagName('label')[5].style.display = 'none';
        document.getElementsByTagName('a')[0].style.display = 'none';
        singUp.innerText = 'Sign In';
        singUp.onclick = (e) => {
            if (!yourUserName.value) {
                alert('Fill in User Name');
                return;
            }
            if (!password.value) {
                alert('Fill in password');
                return;
            }
            alert('Welcome, ' + yourUserName.value)
        }
    }
    document.getElementsByTagName('a')[0].onclick = () => {
        document.getElementsByTagName('h1')[0].textContent = 'Log in to the system';
        document.getElementsByTagName('label')[0].style.display = 'none';
        document.getElementsByTagName('label')[2].style.display = 'none';
        document.getElementsByTagName('label')[4].style.display = 'none';
        document.getElementsByTagName('label')[5].style.display = 'none';
        document.getElementsByTagName('a')[0].style.display = 'none';
        singUp.innerText = 'Sign In';
        singUp.onclick = () => {
            if (!yourUserName.value) {
                alert('Fill in User Name');
                return;
            }
            if (!password.value) {
                alert('Fill in password');
                return;
            }
            if (password.value.length < 8) {
                alert('The password must contain at least 8 characters');
                return;
            }
            alert('Welcome, ' + yourUserName.value)
            for (let i = 0; i < 5; i++) {
                document.getElementsByTagName('input')[i].value = null
            }
        }
    }
}

console.log('hw13');
console.log('Привет, девелопер');

