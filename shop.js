
const topBtn = document.getElementById("topBtn");

if (topBtn) {
    window.onscroll = () => {
        topBtn.style.display = (window.scrollY > 200) ? "block" : "none";
    };

    topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
}


let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(name + " toegevoegd!");
}