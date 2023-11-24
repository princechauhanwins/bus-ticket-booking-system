function register (){
let name,email,password;
name=document.getElementById("name").value;
email=document.getElementById("email").value;
password=document.getElementById("password").value;

if(name==""){
document.getElementById("error").innerHTML="Enter Name";
}
else if(email==""){
document.getElementById("error1").innerHTML="Enter Email";
}
else if(password==""){
document.getElementById("error2").innerHTML="Enter Password";
}
else{
    let user_record=new Array();
user_record=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
if(user_record.some((v)=>{
return v.email==email
}
)){
    window.location.href="login.html";
}
else{
user_record.push({
    "name":name,
    "email":email,
    "password":password
})
localStorage.setItem("users",JSON.stringify(user_record));
}
}
}

