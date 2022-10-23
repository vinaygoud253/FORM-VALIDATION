const form = document.querySelector('#form');
const names = document.querySelector('#name');
const email = document.querySelector('#email');
const phoneno = document.querySelector('#PhoneNo');
const password = document.querySelector('#password');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const nameValue = names.value.trim();
    const emailValue = email.value.trim();
    const phonenoValue = phoneno.value.trim();
    const passwordValue = password.value.trim();

    if (nameValue == ""){
        e.preventDefault();
        alert('please enter the name first');
        names.focus();
        return false;
    }
    if(!isNaN(nameValue)){
        e.preventDefault();
        alert('please enter the valid name');
        names.focus();
        return false;
    }
    if (emailValue == ""){
        e.preventDefault();
        alert('please enter the email first');
        email.focus();
        return false;
    }
    if (phonenoValue == ""){
        e.preventDefault();
        alert('please enter the phone number first');
        phoneno.focus();
        return false;
    }
    if (phonenoValue.length<10||phonenoValue.length>10){
        e.preventDefault();
        alert("please provide valid no");
        phoneno.focus();
        return false;
    }


    if (passwordValue == ""){
        e.preventDefault();
        alert('please enter the password first');
        password.focus();
        return false;
    }
    if (passwordValue.length<5){
        e.preventDefault();
        alert('please enter the password greater than 5 digits');
        password.focus();
        return false;
    }
    alert('your form is submitted successfully')
})