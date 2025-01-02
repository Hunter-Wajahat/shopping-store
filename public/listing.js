const products = [
  {
    tittle:"Product Name",
    rating:"⭐⭐⭐⭐⭐",
    price:"$20",
    imageUrl: "https://images-na.ssl-images-amazon.com/images/I/61NGnpjoRDL._AC_UL900_SR900,600_.jpg",
    description: "Package Includes: 1 x TAB"
  },
  {
    tittle:"Product Name",
    rating:"⭐⭐⭐⭐⭐",
    price:"$20",
    imageUrl: "https://images-na.ssl-images-amazon.com/images/I/61u-OaDSfQL._AC_UL900_SR900,600_.jpg",
    description: "Package Includes: 1 x Headphones"
  },
  {
    tittle:"Product Name",
    rating:"⭐⭐⭐⭐⭐",
    price:"$20",
    imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71sWRy5QxIL._AC_UL300_SR300,200_.jpg",
    description: "Package Includes: Earpords"
  },
  {
    tittle:"Product Name",
    rating:"⭐⭐⭐⭐⭐",
    price:"$20",
    imageUrl: "https://images-na.ssl-images-amazon.com/images/I/61uErj96W1L._AC_UL300_SR300,200_.jpg",
    description: "Package Includes: 1 x Speaker"
  },
  {
    tittle:"Product Name",
    rating:"⭐⭐⭐⭐⭐",
    price:"$20",
    imageUrl: "resorces/2light.jpg",
    description: "Package Includes: 1 x Split Solar"
  }
];

// Select all item elements
const items = document.querySelectorAll('.it');

// Populate items with product information
products.forEach((product, index) => {
  if (items[index]) {
    items[index].innerHTML = `
              <div class="trp">
              <h1 class="tittle">${product.tittle}</h1>
              <h3 class="rating">${product.rating}</h3>
              <h2 class="price">${product.price}</h2>
                    <div class="description-container">
        <p>${product.description}</p>
      </div>
              </div>

      <img src="${product.imageUrl}" onerror="this.onerror=null; handleError(this);" alt="">
      <i onclick="addtocart()" class='bx bx-cart-add'><span class="popup-text">Add to Cart</span></i>
`;
  }
});

// function addtocart(product) {
//   // Retrieve existing cart data or initialize an empty array
//   let cart = JSON.parse(localStorage.getItem('cart')) || [];

//   // Add the new product to the cart
//   cart.push(product);

//   // Save the updated cart back to localStorage
//   localStorage.setItem('cart', JSON.stringify(cart));

//   // Optionally, give feedback to the user
//   alert(`Product added to cart! ${cart}`);
// }

