function checkCapital(){
    var pattern = /[A-Z]/;
    var text = document.getElementById("myInput").value;
    let alerter = document.getElementById("alerter")
    /* alert(text); */
    if (pattern.test(text)){
        alerter.style.display = "block";
        alerter.style.color = "red";
    }
    else{
        alerter.style.display = "none";
    }
}
