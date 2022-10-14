function checkNumber(){
    const pattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    const num = document.querySelector("#phn").value;
    const isvalid = document.querySelector("span");
    if (pattern.test(num)){
        isvalid.style.display = "none";
     /*    alert("valid"); */
        document.querySelector("#phn").value = `(${num.substring(0,3)})-(${num.substring(3,6)})-(${num.slice(6, num.length)})`
    }
   else{
    isvalid.style.display = "block";
    isvalid.style.color = "red";
   }
    
}