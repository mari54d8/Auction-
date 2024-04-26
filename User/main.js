
// ---------------- get data --------------


function getJSON(allItems) {
   
    fetch('http://roundhouse.proxy.rlwy.net:54600/items')
      .then((response) => {
        if (!response.ok) {
          // If the request does not return 300 OK
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Pass the received data on to the function that formats it
        console.log("Data received:", data);
        addData(data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
      });
  }
  
// ------------------ add Data into the DOM -----------------
// vanskelighed: even produkter skal vises på højre side, odd på venstre side
function addData(data) {

  // hvis det er et even element -> udføre denne funktion, hvis ikke -> udfør anden funktion
    for (let i = 0; i < data.length; i ++) {
      if (i%2 === 0) {
          addEvenProduct(data[i])  
          // data[i] er så et enkelt element/produkt, vi overgiver til funktionen
      } else {
          addOddProduct(data[i])
      }
    }
  }

function addEvenProduct(product) {
// har ikke brug for en loop her, fordi funktionen kun får overgivet ET produkt
    let productCard = document.createElement("article");
    productCard.classList.add("productCard");
    
    productCard.innerHTML = `
    <section class="productCard__information">
      <h2 class="productCard__artist">${product.artist}</h2>
      <h3 class="productCard__title">${product.artTitle}</h3>
      <h3 class="productCard__countdown">${product.expiryDate}</h3>
      <p class="productCard__description">${product.description}</p>
      <a class="productCard__seeDetails" href="product.html?id=${product.id}">See details</a>
    <img class="productCard__imageFrame" src="images/Rectangle 45.png" alt="">
    </section>
    `;
    
    document.querySelector(".products").appendChild(productCard);

}

function addOddProduct(product) {

      let productCard = document.createElement("article");
      productCard.classList.add("productCard");
      productCard.classList.add('productCard--left');
      
      productCard.innerHTML = `
      <section class="productCard__information productCard__information--left">
        <h2 class="productCard__artist productCard__artist--left">${product.artist}</h2>
        <h3 class="productCard__title">${product.artTitle}</h3>
        <h3 class="productCard__countdown productCard__countdown--left">${product.timeLeft}</h3>
        <p class="productCard__description productCard__description--left">${product.description}</p>
        <a class="productCard__seeDetails productCard__seeDetails--left" href="product.html?id=${product.id}">See details</a>
      </section>
      <img class="productCard__imageFrame productCard__imageFrame--left" src="images/Rectangle 45.png" alt=""></img>
      `;
    
      document.querySelector(".products").appendChild(productCard);

}

  getJSON();
  
// <img class="productCard__image" src="${product.image}">
//<img class="productCard__image productCard__image--left" src="${product.image}">

/** ------------------ "see details" på productCard -----------------
 */





// -------------------- open my bids --------------------------

let myBids = document.querySelector('.myBids');
let body = document.querySelector('body');
let close = document.querySelector('.close');


myBids.addEventListener('click', () => {
  body.classList.toggle('showCart');
});

close.addEventListener('click', () => {
  body.classList.toggle('showCart');
})