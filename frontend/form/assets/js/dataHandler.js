let personalData = {
    fullname: '',
    email: '',
    phone: '',
    gender: '',
    birthdate: '',
    city: '',
    address: '',
    passport: '',
    passport_issue: '',
    passport_expiry: '',
    studied: false,
    studied_city: '',
    studied_university: '',
    studied_major: ''
}

const fullnameHandler = () => {
    personalData.fullname = document.getElementById("fullname").value;
    console.log(personalData.fullname);
}

const emailHandler = () => {
    personalData.email = document.getElementById("email").value;
    console.log(personalData.email);
}

const phoneHandler = () => {
    personalData.phone = document.getElementById("phone").value;
    console.log(personalData.phone);
}

const genderHandler = () => {
    personalData.gender = document.getElementById("gender").value;
    console.log(personalData.gender);
}

const birthdateHandler = () => {
    personalData.birthdate = document.getElementById("birthdate").value;
    console.log(personalData.birthdate);
}

const cityHandler = () => {
    personalData.city = document.getElementById("city").value;
    console.log(personalData.city);
}
