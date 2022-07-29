let search = document.querySelector(".search-form");
let icon = document.querySelector("#search-btn");
search.style.display = "none";

icon.onclick = () => {


    if (search.style.display === "none") {
        search.style.display = "block";
        search.style.display = "flex";


    } else if (search.style.display === "block" || search.style.display === "flex") {
        search.style.display = "none";
        search.style.display != "flex";

    }



};
let cart = document.querySelector(".cart-items-container");
let card = document.querySelector("#card-btn");
cart.style.right = "-100%";
cart.style.display = "none";
card.onclick = () => {
    if (cart.style.right === "-100%") {
        cart.style.right = "0%";
        cart.style.display = "block";

    } else if (cart.style.right === "0%") {
        cart.style.right = "-100%";
        cart.style.display = "none";

    }
}