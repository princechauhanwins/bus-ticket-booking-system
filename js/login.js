function login (){
    let email,password;
    email=document.getElementById("email").value;
    password=document.getElementById("password").value;
if(email==""){
    document.getElementById("emailerror").innerHTML="Enter Email Address";
}
else if(password==""){
    document.getElementById("passerror").innerHTML="Enter Email Password";
}
else{
    document.getElementById("emailerror").innerHTML="";
    document.getElementById("passerror").innerHTML="";
    let user_record=new Array();
    user_record=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(user_record.some((v)=>{
    return v.email==email && v.password==password
    })){
        let current_user=user_record.filter((v)=>{
            return v.email==email && password==password
        })[0]
        localStorage.setItem("name",current_user.name);
        window.location.href="home.html";
    }
    else{
        alert("login fail")
    }
}
    
    }
    
    