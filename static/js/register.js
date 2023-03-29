
function register_function(event) {
    event.preventDefault();
    console.log("register function called")
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const ph_num = document.getElementById('ph-number').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const cpassword = document.getElementById('cpassword').value;
    const msg = document.getElementById('msg');
    console.log(fname, lname, ph_num, email, password, cpassword)

    if (password != cpassword) {
        msg.innerHTML = '<p id="msg" class="alert-msg">Password not matched</p>';
    }
    else {
        fetch("/user/register", {
            method: "POST",
            redirect: "follow",
            headers: { "Content-Type": "application/json", 'Accept': 'application/json' },
            body: JSON.stringify({ 'name': fname, 'lname': lname, 'ph_num': ph_num, 'email': email, 'password': password })
        }).then(response => response.json())
            .then(data => {
                if (data['status'] == 200) {
                    window.location.href = '/index';
                } else if(data['status'] == 300){
                    msg.innerHTML = '<p id="msg" class="alert-msg">Existing user</p>';
                }
            })
    }
}   

document.getElementById("register-form").addEventListener('submit', register_function);
