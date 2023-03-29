async function login_function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    db_msg = document.getElementById('msg')
    console.log("request comes in login")

    await fetch("/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json'
        },
        body: JSON.stringify({ 'email': email, 'password': password })
    })
        .then(response => response.json())
        .then(data => {
            if (data['status'] == 200) {
                window.location.href = '/index';
            } else {
                db_msg.classList.remove('hidden');
                db_msg.classList.add('error-msg');
            }
        })
};






// captcha function

var code;
function createCaptcha() {
  //clear the contents of captcha div first 
  document.getElementById('captcha').innerHTML = "";
  var charsArray =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lengthOtp = 6;
  var captcha = [];
  for (var i = 0; i < lengthOtp; i++) {
    //below code will not allow Repetition of Characters
    var index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array
    if (captcha.indexOf(charsArray[index]) == -1)
      captcha.push(charsArray[index]);
    else i--;
  }
  var canv = document.createElement("canvas");
  canv.id = "captcha";
  canv.width = 100;
  canv.height = 50;
  var ctx = canv.getContext("2d");
  ctx.font = "25px Georgia";
  ctx.strokeText(captcha.join(""), 0, 30);
  //storing captcha so that can validate you can save it somewhere else according to your specific requirements
  code = captcha.join("");
  document.getElementById("captcha").appendChild(canv); // adds the canvas to the body element

  
}
function validateCaptcha(event) {
  event.preventDefault();
  if (document.getElementById("cpatchaTextBox").value == code) {
    login_function(this);
    console.log("validate captcha comes")
  }else{
    alert("Invalid Captcha. try Again");
    createCaptcha();
  }
}


document.getElementById("login").addEventListener('submit', validateCaptcha);
