function selectAll(){
    const allInput = document.querySelectorAll(".check-comp");
    const checkall = document.querySelector("#all");
    if (checkall.checked){
        allInput.forEach((item) => {
            item.checked = true;})
    }
    else{
        allInput.forEach((item) => {
        item.checked = false;})
    }
}
  