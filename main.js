const myLogo =
[
    {image : "img/logo1.jpg"}
];
var logo1 = "";
myLogo.forEach((element) => {
    logo1 =`
    <a href="https://www.gucci.com/us/en/"><img src="${element.image}" alt=""></a>
    `
    document.getElementsByClassName('logo')[0].innerHTML = logo1;
});

const mylink = [
    {image : "img/f1.png"},
    {image : "img/f2.jpg"},
    {image : "img/f3.png"},
    {image : "img/f4.png"},
    {image : "img/f5.png"}
];
var imgHTML = "";
mylink.forEach((element) => {
    imgHTML += `
    <a href=""><img src="${element.image}" alt=""></a>
    `;
    document.getElementsByClassName('logo-link')[0].innerHTML = imgHTML;
});

// <------------------------------------------->

const container = document.querySelectorAll(".container");
const gucci = [
    {
        id : "1001",
        brand : "GUCCI",
        image : "img/s1.avif",
        price: "$590.00",
        describe : "COTTON JERSEY T-SHIRT WITH GUCCI EMBROIDERY",
        category: "clothes",
    },
    {
        id : "1002",
        brand : "GUCCI",
        price: "$590.00",
        image : "img/s2.avif",
        describe : "T-SHIRT WITH GUCCI BLADE PRINT",
        category: "clothes",
    },
    {
        id : "1003",
        brand : "GUCCI",
        image : "img/s3.avif",
        price: "$1,500.00",
        describe : "GG COTTON JACQUARD POLO T-SHIRT",
        category: "clothes",
    },
    {
        id : "1004",
        brand : "GUCCI",
        image : "img/s4.avif",
        price: "$590.00",
        describe : "CHILDRENS COTTON T-SHIRT WITH GUCCI LOGO",
        category: "clothes",
    },
    {
        id : "1005",
        brand : "GUCCI",
        image : "img/s5.avif",
        price: "$1,790.00",
        describe : "GG MARMONT MATELASSÉ SHOULDER BAG",
        category: "bags",
    },
    {
        id : "1006",
        brand : "GUCCI",
        image : "img/s6.avif",
        price: "$2,980.00",
        describe : "GG MARMONT MEDIUM SHOULDER BAG",
        category: "bags",
    },
    {
        id : "1007",
        brand : "GUCCI",
        image : "img/s7.webp",
        price: "$2,550.00",
        describe : "GG MARMONT SMALL SHOULDER BAG",
        category: "bags",
    },
    {
        id : "1008",
        brand : "GUCCI",
        image : "img/s8.avif",
        price: "$1,790.00",
        describe : "OPHIDIA GG MINI TOP HANDLE BAG",
        category: "bags",
    },
    {
        id : "1009",
        brand : "GUCCI",
        image : "img/s9.avif",
        price: "$3,800.00",
        describe : "GG LINEN COTTON JACQUARD JACKET",
        category: "clothes",
    },
    {
        id : "1010",
        brand : "GUCCI",
        image : "img/s10.avif",
        price: "$3,600.00",
        describe : "HORSEBIT CHECK WOOL JACKET",
        category: "clothes",
    },
    {
        id : "1011",
        brand : "GUCCI",
        image : "img/s11.avif",
        price: "$1,800.00",
        describe : "STRIPED HORSEBIT SILK JACQUARD SHIRT",
        category: "clothes",
    },
    {
        id : "1012",
        brand : "GUCCI",
        image : "img/s12.avif",
        price: "$3,500.00",
        describe : "INTERLOCKING G CHAIN PRINT SILK DRESS",
        category: "clothes",
    },
    {
        id : "10013",
        brand : "GUCCI",
        image : "img/s13.avif",
        price: "$993.47",
        describe : "WOMEN'S RHYTON GUCCI LOGO LEATHER SNEAKER",
        category: "shoes",
    },
    {
        id : "1014",
        brand : "GUCCI",
        image : "img/s14.avif",
        price: "$671.57",
        describe : "WOMEN'S GUCCI ACE SNEAKER WITH WEB",
        category: "shoes",
    },
    {
        id : "1015",
        brand : "GUCCI",
        image : "img/s15.avif",
        price: "$790.00",
        describe : "MEN'S ACE EMBROIDERED SNEAKER",
        category: "shoes",
    },
    {
        id : "1016",
        brand : "GUCCI",
        image : "img/s16.avif",
        price: "$890.00",
        describe : "MEN'S GG RHYTON SNEAKER",
        category: "shoes",
    },
    {
        id : "1017",
        brand : "GUCCI",
        image : "img/s17.avif",
        price: "$1,090.00",
        describe : "WOMEN'S SCREENER SNEAKER WITH CRYSTALS",
        category: "shoes",
    },
    {
        id : "1018",
        brand : "GUCCI",
        image : "img/s18.avif",
        price: "$990.00",
        describe : "WOMEN'S SCREENER SNEAKER",
        category: "shoes",
    },
    {
        id : "1019",
        brand : "GUCCI",
        image : "img/s19.avif",
        price: "$345.37",
        describe : "CHILDREN'S ACE SNEAKER",
        category: "shoes",
    },
    {
        id : "1020",
        brand : "GUCCI",
        image : "img/s20.avif",
        price: "$460.00",
        describe : "ORIGINAL GG CANVAS BASEBALL HAT WITH WEB",
        category: "hats",
    },
    {
        id : "1021",
        brand : "GUCCI",
        image : "img/s21.avif",
        price: "$393.14",
        describe : "ORIGINAL GG CANVAS BASEBALL HAT WITH WEB",
        category: "hats",
    },
    {
        id : "1022",
        brand : "GUCCI",
        image : "img/s22.avif",
        price: "$460.00",
        describe : "JUMBO GG CANVAS BASEBALL HAT",
        category: "hats",
    },
    {
        id : "1023",
        brand : "GUCCI",
        image : "img/s23.avif",
        price: "$590.00",
        describe : "GG CANVAS BUCKET HAT",
        category: "hats",
    },
    {
        id : "1024",
        brand : "GUCCI",
        image : "img/s24.avif",
        price: "$719.98",
        describe : "GG CANVAS BUCKET HAT WITH DOUBLE G",
        category: "hats",
    }
];

// Choose option
    // Function to filter and display products based on category
const filterProducts = (category) => {
    const filteredProducts = gucci.filter(product => product.category === category);
    displayFilteredProducts(filteredProducts);
};
    // Function to display filtered products
const displayFilteredProducts = (products) => {
    let filteredHTML = " ";
    products.forEach(product => {
        filteredHTML += `
            <div class="card">
                <div class="img-card">
                    <a href="${product.url}">
                        <img src="${product.image}" class="card-img-top" alt="">
                    </a>
                </div>
                <div class="card-body">
                    <p class="card-text"><b>${product.price}<br>
                        <a href="">Brand : ${product.brand} || ID : ${product.id}</b> <br>${product.describe}</a>
                    </p>
                </div>
            </div>
        `;
    });
    document.getElementById('productDetails').innerHTML = filteredHTML;
};
    // Add event listeners for category links
const bagsLink = document.getElementById('bags');
const clothesLink = document.getElementById('clothes');
const shoeslink = document.getElementById('shoes');
const hatslink = document.getElementById('hats');

bagsLink.addEventListener('click', () => filterProducts('bags'));
clothesLink.addEventListener('click', () => filterProducts('clothes'));
shoeslink.addEventListener('click', () => filterProducts('shoes'));
hatslink.addEventListener('click', () => filterProducts('hats'));
// Display all products initially
displayFilteredProducts(gucci); // Display all products initially
// choose option

// //This code show only image and describe our product!
// var myCard = '';
// gucci.forEach((product) => {
//     myCard += `
//   <div class="card">
//     <div class="img-card">
//       <a href="${product.url}">
//         <img src="${product.image}" class="card-img-top" alt="...">
//       </a>
//     </div>
//     <div class="card-body">
//       <p class="card-text"><b>${product.price}<br>
//         <a href="">Brand : ${product.brand} || ID : ${product.id}</b> <br>${product.describe}</a>
//       </p>
//     </div>
    
//   </div>
//     `;
//     document.getElementsByClassName('container')[0].innerHTML = myCard; 
// });




  