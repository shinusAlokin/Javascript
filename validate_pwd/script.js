/* const check = document.getElementById("check");
check.addEventListener("click", changeType); */


function showPassword(){
   let pwd = document.getElementById("password");
   if (pwd.type === "password"){
    pwd.type = "text"; 
   }
   else{
    pwd.type = "password";
   }
     
}

/* function changeType(){
   document.getElementById("password").setAttribute("type", "text");

} */