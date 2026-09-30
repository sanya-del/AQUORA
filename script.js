/* =========================
   AQUORA PRODUCT SETTINGS
========================= */

let selectedModel = "Straw";
let selectedSize = "500 ml";
let selectedShape = "Slim";
let selectedColor = "Black";


/* =========================
   ELEMENTS
========================= */

const productImage = document.getElementById("productImage");
const productTitle = document.getElementById("productTitle");
const productPrice = document.getElementById("productPrice");


/* =========================
   SIZE BASE PRICES
========================= */

const sizePrices = {
    "500 ml": 99,
    "750 ml": 119,
    "1 L": 139,
    "1.5 L": 159
};


/* =========================
   SHAPE EXTRA PRICE
========================= */

const shapePrices = {
    "Slim": 0,
    "Classic": 10,
    "Sport": 20,
    "Premium": 30
};


/* =========================
   MODEL
========================= */

function selectModel(model, button) {

    selectedModel = model;

    document.querySelectorAll(".model-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");


    /* Change bottle image */

    if (model === "Straw") {

        productImage.src = "assets/straw-bottle.png";

    } else if (model === "Normal") {

        productImage.src = "assets/normal-bottle.png";
    }


    updateProduct();
}


/* =========================
   SIZE
========================= */

function selectSize(size, button) {

    selectedSize = size;

    document.querySelectorAll(".size-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");


    /* Visual bottle size */

    if (size === "500 ml") {

        productImage.style.width = "220px";

    } else if (size === "750 ml") {

        productImage.style.width = "250px";

    } else if (size === "1 L") {

        productImage.style.width = "280px";

    } else if (size === "1.5 L") {

        productImage.style.width = "315px";
    }


    updateProduct();
}


/* =========================
   SHAPE
========================= */

function selectShape(shape, button) {

    selectedShape = shape;

    document.querySelectorAll(".shape-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");


    /* Visual shape effect */

    if (shape === "Slim") {

        productImage.style.transform =
            "scaleX(0.88)";

    } else if (shape === "Classic") {

        productImage.style.transform =
            "scaleX(1)";

    } else if (shape === "Sport") {

        productImage.style.transform =
            "scaleX(1.08)";

    } else if (shape === "Premium") {

        productImage.style.transform =
            "scaleX(1.15)";
    }


    /* IMPORTANT:
       Shape changes the price too.
    */

    updateProduct();
}


/* =========================
   COLOUR
========================= */

function selectColor(color, button) {

    selectedColor = color;

    document.querySelectorAll(".colour").forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");


    /*
       Colour changes only the bottle appearance.
       Price will NOT change.
    */

    productImage.style.filter = "none";


    if (color === "Black") {

        productImage.style.filter = "none";

    } else if (color === "Blue") {

        productImage.style.filter =
            "sepia(1) saturate(6) hue-rotate(175deg) brightness(0.85)";

    } else if (color === "Purple") {

        productImage.style.filter =
            "sepia(1) saturate(5) hue-rotate(250deg) brightness(0.85)";

    } else if (color === "Pink") {

        productImage.style.filter =
            "sepia(1) saturate(6) hue-rotate(300deg) brightness(0.9)";

    } else if (color === "Green") {

        productImage.style.filter =
            "sepia(1) saturate(5) hue-rotate(80deg) brightness(0.85)";

    } else if (color === "Orange") {

        productImage.style.filter =
            "sepia(1) saturate(6) hue-rotate(10deg) brightness(0.95)";
    }


    /*
       Do NOT change price here.
    */

    updateProduct();
}


/* =========================
   UPDATE PRODUCT
========================= */

function updateProduct() {

    /*
       Size price + Shape extra price
    */

    const basePrice = sizePrices[selectedSize];

    const shapeExtra = shapePrices[selectedShape];

    const finalPrice = basePrice + shapeExtra;


    /* Product title */

    productTitle.textContent =
        `AQUORA ${selectedSize}`;


    /* Product price */

    productPrice.textContent =
        `₹${finalPrice}`;
}


/* =========================
   ADD TO CART
========================= */

function addToCart() {

    const basePrice = sizePrices[selectedSize];

    const shapeExtra = shapePrices[selectedShape];

    const finalPrice = basePrice + shapeExtra;


    alert(
        `AQUORA Added!\n\n` +
        `Model: ${selectedModel}\n` +
        `Size: ${selectedSize}\n` +
        `Shape: ${selectedShape}\n` +
        `Colour: ${selectedColor}\n` +
        `Price: ₹${finalPrice}`
    );
}


/* =========================
   INITIAL SETUP
========================= */

updateProduct();