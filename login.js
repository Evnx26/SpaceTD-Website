function formValidation(e){
    e.preventDefault();

    var name = document.getElementById("name")
    var dob = document.getElementById("dob")
    var gender = document.getElementById("gender")
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    var country = document.getElementById("country")

    var today = new Date()
    if(name.value.length < 1){
        alert("Name must have at least 1 characters!")
    }
    else if(!dob.value){
        alert("Select a Date of Birth!")
    }
    else if(!gender.value){
        alert("Select a gender!")
    }
    else if(!email.value.endsWith("@gmail.com")){
        alert("Email must using Gmail!")
    }
    else if(password.value.length < 8){
        alert("Password must have at least 8 characters!")
    }
    else if(!country.value){
        alert("Select a country")
    }
    else{
        alert("Succesfull")
        window.location.href="home.html"
    }
}