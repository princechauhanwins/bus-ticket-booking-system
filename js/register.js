function register (){
let name,email,password,numbercheck,emailcheck;
name=document.getElementById("name").value;
email=document.getElementById("email").value;
password=document.getElementById("password").value;
numbercheck=/^([^s\][a-zA-Z]*)$/;
emailcheck=  /[^\s@]+@[^\s@]+\.[^\s@]+/;


if(numbercheck.test(name))
{
document.getElementById("error").innerHTML="Enter Your Name";
}
else
{
    document.getElementById("error").innerHTML="";
}
if(!emailcheck.test(email))
{
document.getElementById("error1").innerHTML="Enter valid Email";
}
else
{
    document.getElementById("error1").innerHTML="";
}
if(password=="")
{
document.getElementById("error2").innerHTML="Enter Password";
}
else{
    document.getElementById("error2").innerHTML="";
    let user_record=new Array();
user_record=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
if(user_record.some((v)=>{
return v.email==email
}
)){
alert ("User Alredy Exist");
}
else{
user_record.push({
    "name":name,
    "email":email,
    "password":password
})
localStorage.setItem("users",JSON.stringify(user_record));
window.location.href="login.html";
}
}
}

