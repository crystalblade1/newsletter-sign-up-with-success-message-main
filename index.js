
function validateEmail(){

   
    const emailInput = document.getElementById("input-email");
    const message = document.getElementById("message");
    const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.com$/;
    const wrapper = document.getElementById("wrapper");
    const successForm = document.getElementById("SuccessForm");
    


    if (!regex.test(emailInput.value) || emailInput.value.trim()==""){
        message.textContent = "Invalid Email Address";
        message.style.color = "red";
        emailInput.classList.add("invalid");

    }else{
        message.textContent ="";
        emailInput.classList.remove("invalid");
        wrapper.style.display = "none";
        successForm.style.display = "block";
        
    }

}

function DismissMessage(){

    const successForm = document.getElementById("SuccessForm");
    successForm.style.display = "none";

}