const products = [
  {
    name: "iPhone 14",
    price: 250000,
    image: "https://via.placeholder.com/200"
  },
  {
    name: "Laptop",
    price: 180000,
    image: "https://via.placeholder.com/200"
  },
  {
    name: "Headphones",
    price: 15000,
    image: "https://via.placeholder.com/200"
  }
];

const container = document.getElementById("product-container");
function showProducts() {
  products.map(product => {
    container.innerHTML += `
      <div class="card">
        <img src="${product.image}" />
        <h3>${product.name}</h3>
        <p>Rs ${product.price}</p>
      </div>
    `;
  });
}

showProducts();