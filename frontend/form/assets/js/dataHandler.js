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