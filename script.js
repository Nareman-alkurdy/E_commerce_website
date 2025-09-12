let timeoutId; 
function debounce(cb, dely = 5_00) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
        cb();
    }, dely);
}

const cartItems = [];
const productsResponse = [
    {
        id: 1,
        title: "Asus ROG Strix ",
        shortDesc: "Bold design with powerful specs.",
        image: "assets/product.jpg.avif",
         category: "recommended"
    },
    {
        id: 2,
        title: "HP Pavilion",
        shortDesc: "Sleek look, everyday reliability.",
         image: "assets/product.jpg.webp",
          category: "recommended"
    },
    {
        id: 3,
        title: "Lenove Legion",
        shortDesc: "smart cooling, solid performance.",
         image: "assets/product2.gpj.avif",
          category: "recommended"
    },
    {
        id: 4,
        title: "Dell XPS 15" ,
        shortDesc: "Fast-charging USB-C wall charger for multiple devices.",
         image: "assets/product3.jpg.avif",
          category: "recommended"
    },
    {
        id: 5,
        title: "Acer Predator  ",
        shortDesc: "Reliable for everyday tasks.",
         image: "assets/product4.webp",
         category: "recommended"
    },
    {
        id: 6,
        title: "Dell Alienware",
        shortDesc: "lightweight with modern style.",
         image: "assets/product5.jpg",
         category: "recommended"
    },
    {
        id: 7,
        title: "Aser swift3",
        shortDesc: "High-speed portable SSD with 1TB storage.",
         image: "assets/photo-1517336714731-489689fd1ca8.avif",
         category: "recommended"
    },
    {
        id: 8,
        title: "Acer Aspire Vero",
        shortDesc: "stylish and multitask.",
         image: "assets/premium_photo-1681566925324-ee1e65d9d53e.avif",
         category: "recommended"
    },
    {
        id: 9,
        title: "MSI Summit E13 Flip Evo",
        shortDesc: "stylish and multitask.",
         image: "assets/photo-1593642632823-8f785ba67e45.avif",
         category: "recommended"
    },
    {
        id: 10,
        title: "MSI GE76 Raider ",
        shortDesc: "Built for speed and power.",
         image: "assets/product77.avif",
         category: "recommended"
    },
    {
        id: 11,
        title: "Apple (MacBook)",
        shortDesc: "Built for speed and power.",
         image: "assets/lap.avif",
         category: "recommended"
    },
    {
        id: 12,
        title: "Samsung Galaxy Book 5 Pro 360 (16",
        shortDesc: "Built for speed and power.",
         image: "assets/laptop-dell-dc15250nt-bk-plastic-usbc-data-gallery-2.avif",
         category: "recommended"
    },
    {
        id: 13,
        title:"Apple MacBook Air 15 (M3, 2025)",
        shortDesc: "Built for speed and power.",
         image: "assets/istockphoto-2074244342-612x612.webp",
         category: "popular"
    },
    {
        id: 14,
        title: "Lenovo Yoga Pro 7 (Gen 10)",
        shortDesc: "Built for speed and power.",
         image: "assets/photo-1541807084-5c52b6b3adef.avif",
         category: "popular"
    },
    {
        id: 15,
        title: "HP EliteBook x360 1040 G8",
        shortDesc: "Built for speed and power.",
         image: "assets/istockphoto-2120395013-612x612.jpg",
         category: "popular"
    },
    {
        id: 16,
        title: " Dell Latitude 5430",
        shortDesc: "Built for speed and power.",
         image: "assets/photo-1611078489935-0cb964de46d6.avif",
         category: "popular"
    },
    {
        id: 17,
        title: "MSI Katana 15",
        shortDesc: "Built for speed and power.",
         image: "assets/istockphoto-1394988455-612x612.webp",
         category: "popular"
    },
     {
        id: 18,
        title: " Acer Nitro 5",
        shortDesc: "Built for speed and power.",
         image: "assets/photo-1577375729152-4c8b5fcda381.avif",
         category: "popular"
    },
    {
        id: 19,
        title: " HP Omen 16 ",
        shortDesc: "Built for speed and power.",
         image: "assets/photo-1541807084-5c52b6b3adef.avif",
         category: "popular"
    },
    {
        id: 20,
        title: "Dell Alienware m18 ",
        shortDesc: "Built for speed and power.",
         image: "assets/laptop-dell-dc15255nt-bk-plastic-usbc-data-gallery-2.avif",
         category: "popular"
    },
    {
        id: 21,
        title: "Gigabyte Aorus 17X",
        shortDesc: "Built for speed and power.",
         image: "assets/laptop-dell-db14250nt-fpr-laptop-bl-gallery-2.avif",
         category: "popular"
    },
    {
        id: 22,
        title: " Razer Blade 16",
        shortDesc: "Built for speed and power.",
         image: "assets/laptop-dell-dc15250nt-bk-plastic-usbc-data-gallery-2.avif",
         category: "popular"
    },
    {
        id: 23,
        title: "MSI Raider GE78 HX ",
        shortDesc: "Built for speed and power.",
         image: "assets/HP Victus 15.webp",
         category: "popular"
    },
    {
        id: 24,
        title: "HP Victus 15",
        shortDesc: "Built for speed and power.",
         image: "assets/71pJuxRFm3L._AC_UL960_FMwebp_QL65_.webp",
         category: "popular"
    },
]



//عناصر الصفحة 
const list = document.querySelector("#main-list");
const input = document.querySelector("#search-input");
const button = document.querySelector("#button-click");
const header = document.querySelector("#top-nav");
const backToTopButton = document.querySelector("#back-to-top");

// عناصر السلة 
const cartSidebar = document.getElementById("cart-sidebar");
const cartBtn = document.getElementById("cartBtn");
const closeCartBtn = document.getElementById("close-cart");
const clearCartBtn = document.getElementById("clear-cart");
const cartButtonBadge = document.querySelector('.cart-button__badge');


// localStorage
//localStorage.removeItem("cart");
const savedCart = JSON.parse(localStorage.getItem("cart"));
if (savedCart) {
  cartItems.push(...savedCart);
  cartButtonBadge.textContent = cartItems.length;

}

// Sidebar
cartBtn.addEventListener("click", () => {
  cartSidebar.classList.remove("hidden");
  cartSidebar.classList.add("show");
});

closeCartBtn.addEventListener("click", () => {
  cartSidebar.classList.remove("show");
  cartSidebar.classList.add("hidden");
});

clearCartBtn.addEventListener("click", () => {
  cartItems.length = 0;
  cartButtonBadge.textContent = "0";
  localStorage.removeItem("cart");
  renderCartItems();
});


function renderProducts(products) { /* ... */ }
function renderCartItems() {  {
  const container = document.getElementById("cart-items-container");
  container.innerHTML = '';

  cartItems.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.title;
    img.classList.add("cart-item-image");

    const detailsDiv = document.createElement("div");
    detailsDiv.classList.add("cart-item-details");

    const title = document.createElement("h4");
    title.textContent = item.title;

    const quantity = document.createElement("p");
    quantity.textContent = `الكمية: ${item.quantity}`;

    const actions = document.createElement("div");
    actions.classList.add("cart-item-actions");

    const increaseBtn = document.createElement("button");
    increaseBtn.textContent = "+";
    increaseBtn.onclick = () => {
      item.quantity += 1;
      localStorage.setItem("cart", JSON.stringify(cartItems));
      renderCartItems();
    };


    const decreaseBtn = document.createElement("button");
    decreaseBtn.textContent = "−";
    decreaseBtn.onclick = () => {
      item.quantity -= 1;
      if (item.quantity <= 0) {
        cartItems.splice(cartItems.indexOf(item), 1);
      }
      localStorage.setItem("cart", JSON.stringify(cartItems));
      renderCartItems();
    };

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => {
      cartItems.splice(cartItems.indexOf(item), 1);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      renderCartItems();
    };

    actions.appendChild(increaseBtn);
    actions.appendChild(decreaseBtn);
    actions.appendChild(removeBtn);

    detailsDiv.appendChild(title);
    detailsDiv.appendChild(quantity);
    detailsDiv.appendChild(actions);

    itemDiv.appendChild(img);
    itemDiv.appendChild(detailsDiv);

    container.appendChild(itemDiv);
  });

  cartButtonBadge.textContent = cartItems.length;
}
 }
function removeItem(id) { /* ... */ }


input.addEventListener('input', searchProducts);

function getInputValue() {
  return input.value;
}

function searchProducts(e) {
  debounce(() => {
    const inputValue = getInputValue().toLowerCase();
    

    const matchedProducts = productsResponse.filter(product =>
      product.title.toLowerCase().includes(inputValue)
    );
    renderProducts(matchedProducts);
  });
}




function createProductElement(product) {
    try {
        const productElementContainer = document.createElement('div');
        const productImage = document.createElement('img');
        const productElementTitle = document.createElement('h3');
        const productElementDescription = document.createElement('p');
        const productElementId = document.createElement('span');
        const productElementAddToCartButton = document.createElement('button');

        productElementContainer.classList.add('product-card');

        productImage.src = product.image;
        productImage.alt = product.title;
        productImage.classList.add('product-image');

        productElementTitle.textContent = product.title;
        productElementDescription.textContent = product.shortDesc;
        productElementId.textContent = `ID: ${product.id}`;
        productElementId.classList.add('product-id');
        productElementAddToCartButton.textContent = 'Add to Cart';
        productElementAddToCartButton.classList.add('add-to-cart-button');
        productElementAddToCartButton.onclick = () => {
        //const existingItem = cartItems,find(item => item.id === product.id);
        const existingItem = cartItems.find(item => item.id === product.id);
if (existingItem) {
  existingItem.quantity += 1;
} else {
  cartItems.push({
    id: product.id,
    title: product.title,
    image: product.image,
    shortDesc: product.shortDesc,
    quantity: 1
  });
}
cartButtonBadge.textContent = cartItems.length;
localStorage.setItem("cart", JSON.stringify(cartItems));
renderCartItems();

            cartButtonBadge.textContent = cartItems.length;
            alert(`Product ${product.title} added to cart.`);
        };

            if (cartItems.includes(product.id)) {
                return alert('This product is already in the cart.');
            }

            
        productElementContainer.appendChild(productImage);


        productElementContainer.appendChild(productElementTitle);
        productElementContainer.appendChild(productElementDescription);
        productElementContainer.appendChild(productElementId);
        productElementContainer.appendChild(productElementAddToCartButton);

        return productElementContainer;
    } catch (error) {
        return null;
    }
}

function renderProducts(products) {
    list.innerHTML = '';

    if (products.length === 0) {
        list.innerHTML = '<p class="empty-list">No products found.</p>';
        return;
    }

    products.forEach(p => {
        const productElement = createProductElement(p);
        list.appendChild(productElement);
    });

   
}

// Call renderProducts on page load
// renderProducts(productsResponse)



document.addEventListener('scroll', e => {
  debounce(() => {
    backToTopButton.classList.toggle('active');
  });
});


 // فصل لقسمين

function renderProductsByCategory(category, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  const filteredProducts = productsResponse.filter(product => product.category === category);

  filteredProducts.forEach(product => {
    const productElement = createProductElement(product);
    container.appendChild(productElement);
  });
}



renderProductsByCategory("recommended", "recommended-list");
renderProductsByCategory("popular", "popular-list");
renderCartItems();




