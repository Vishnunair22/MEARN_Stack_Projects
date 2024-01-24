const login = () => {
    window.location.href = "login.html";
}

const logIn = () => {
    var userValue = document.getElementById('user1').value;
    var pswdValue = document.getElementById('password').value;

    if (userValue === '' || pswdValue === '') {
        alert('Please enter your account details');
    } else {
        localStorage.setItem("user", userValue);
        window.location.href = "dashboard.html";
    }
}

// Clear form
const clearForm = () => {
    var form = document.getElementById('myForm');
    form.reset();
}

