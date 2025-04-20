let dropdown = document.getElementById("dropdown");
function menuButton(){
    if (dropdown.classList.contains("hidden")){
        dropdown.classList.remove("hidden");
        dropdown.classList.add("flex");
    } else {
        dropdown.classList.remove("flex");
        dropdown.classList.add("hidden");
    }
}