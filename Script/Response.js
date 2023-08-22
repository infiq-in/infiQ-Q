function sendEmail(){
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("Cnum").value;
    let message = document.getElementById("msg").value;
    let body = "Name : " + fname+" "+lname +"<br>Email : "+email+"<br>Contact Number : "+number+"<br> Message : "+message; 
    Email.send({
    SecureToken :  "fe35663c-638e-4fd9-88f5-64b22f43e6a6",
    To : 'infiqteam@gmail.com',
    From : 'infiqteam@gmail.com',
    Subject : "Contact Form Response",
    Body : body
}).then(
  message => alert("Response Submitted Successfully !!!!"),    
      document.getElementById("myForm").reset();

);
    }
