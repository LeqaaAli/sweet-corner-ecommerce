// 🔐 Auth & Cart Helpers
const getCurrentUser = () => JSON.parse(localStorage.getItem('sweetCurrentUser'));
const getCartKey = () => getCurrentUser() ? `sweetCart_${getCurrentUser().email}` : 'sweetCart_guest';
let cart = JSON.parse(localStorage.getItem(getCartKey())) || [];

function saveCart() { localStorage.setItem(getCartKey(), JSON.stringify(cart)); }
function updateCartBadge() {
    const cartCountEl = document.getElementById('cart-count');
    if (!cartCountEl) return;
    const totalQty = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
    cartCountEl.textContent = totalQty;
    cartCountEl.style.display = totalQty > 0 ? 'flex' : 'none';
}

// 🍰 Dessert Data
const internationalDesserts = [
    { name: "Parisian Macaron", price: 180, img: "images/macaron.jpg" },
    { name: "Pistachio Baklava", price: 220, img: "images/bakalava.jpg" },
    { name: "Brownies", price: 420, img: "images/Brownies.jpg" },
    { name: "Caramel Pudding", price: 150, img: "images/Caramel Pudding.jpg" },
    { name: "Chocolate Cake", price: 190, img: "images/Chocolate Cake.jpg" },
    { name: "Italian Classic Tiramisu", price: 350, img: "images/tiramisu.jpg" },
    { name: "Chocolate Mousse", price: 280, img: "images/Chocolate Mousse.jpg" },
    { name: "Chocolate truffles", price: 140, img: "images/Chocolate truffles.jpg" },
    { name: "Cinnamon Roll", price: 160, img: "images/Cinnamon Roll.jpg" },
    { name: "Cookieroopwafels", price: 310, img: "images/Cookies.jpg" },
    { name: "Cramel ice cream", price: 290, img: "images/Cramel ice cream.jpg" },
    { name: "Cranberry Apple Pie", price: 120, img: "images/Cranberry Apple Pie.jpg" },
    { name: "Cream Ice Cream", price: 200, img: "images/Cream Ice Cream.jpg" },
    { name: "Cream puff", price: 240, img: "images/Cream puff.jpg" },
    { name: "Croissant", price: 100, img: "images/Croissant.jpg" },
    { name: "Cupcake", price: 380, img: "images/Cupcake.jpg" },
    { name: "Custard", price: 450, img: "images/Custard.jpg" },
    { name: "Donuts", price: 170, img: "images/Donuts.jpg" },
    { name: "Éclair", price: 260, img: "images/Éclair.jpg" },
    { name: "Fruit Tart", price: 550, img: "images/Fruit Tart.jpg" },
    { name: "Fudge Brownies", price: 180, img: "images/Fudge Brownies.jpg" },
    { name: "Ice Cream", price: 400, img: "images/Ice Cream.jpg" },
    { name: "Jelly Donut", price: 150, img: "images/Jelly Donut.jpg" },
    { name: "Lemon Cake", price: 130, img: "images/Lemon Cake.jpg" },
    { name: "Milk Cake", price: 420, img: "images/Milk Cake.jpg" },
    { name: "Mini Cupcakes", price: 180, img: "images/Mini Cupcakes.jpg" },
    { name: "New York Cheesecake", price: 190, img: "images/New York Cheesecake.jpg" },
    { name: "Pancakes", price: 320, img: "images/Pancakes.jpg" },
    { name: "Pistachio Cake", price: 280, img: "images/Pistachio Cake.jpg" },
    { name: "Red Velvet Cake", price: 110, img: "images/Red Velvet Cake.jpg" },
    { name: "Rice Pudding", price: 210, img: "images/Rice Pudding.jpg" },
    { name: "Strawberry Cake", price: 300, img: "images/Strawberry Cake.jpg" },
    { name: "Waffles", price: 340, img: "images/Waffles.jpg" },
];

// 🖼️ Render Grid
const grid = document.getElementById('product-grid');
internationalDesserts.forEach((item) => {
    grid.innerHTML += `
        <div class="card">
            <div class="img-box"><img src="${item.img}" alt="${item.name}" loading="lazy"></div>
            <div class="card-info">
                <h3 class="card-title">${item.name}</h3>
                <span class="price">${item.price} EGP</span>
                <button class="order-btn" onclick="addToCart('${item.name}', ${item.price}, '${item.img}')">Add to Cart</button>
            </div>
        </div>
    `;
});

// 🛒 Add to Cart
function addToCart(name, price, img) {
    const existing = cart.find(i => i.name === name);
    if (existing) existing.qty++;
    else cart.push({ name, price, img, qty: 1 });
    saveCart(); updateCartBadge();
    alert(`🛒 "${name}" has been added to your cart!`);
}

updateCartBadge();
