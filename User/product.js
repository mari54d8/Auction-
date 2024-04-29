// STEP 1 – Get the URL from the current page
const queryString = window.location.search;
console.log(queryString);

// STEP 2 – Break the string into an object
const urlParams = new URLSearchParams(queryString);

// STEP 3 – Find the "id" part
const id = urlParams.get('id')
console.log(id);

function getJSON() {
   
    fetch('http://roundhouse.proxy.rlwy.net:20655/items')
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
        addData(data[id]);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
      });
  }
  
  function addData(product) {
    let currentPrice = product.currentPrice;
    console.log(currentPrice);
    const productInformation = document.querySelector('.product__information');
    
    // const artist = document.createElement('h1');
    // artist.textContent = product.artist;
    // artist.classList.add('product__artist');
    // productInformation.appendChild(artist);

    // const title = document.createElement('h2');
    // title.textContent = product.artTitle;
    // title.classList.add('product__title');
    // productInformation.appendChild(title);

    // const description = document.createElement('p');
    // description.textContent = product.description;
    // description.classList.add('product__description');
    // productInformation.appendChild(description);

    // const countdown = document.createElement('p');
    // countdown.textContent = product.timeLeft;
    // countdown.classList.add('product__countdown');
    // productInformation.appendChild(countdown);

    // const price = document.createElement('h3');
    // price.textContent = product.currentPrice;
    // price.classList.add('product__price');
    // productInformation.appendChild(price);

    // const buttons = document.createElement('sections');
    // buttons.classList.add('product__bidOptions');
    // productInformation.appendChild(buttons);

    // const button1 = document.createElement('button');
    // button1.textContent = "100$"
    // button1.classList.add('button');
    // button1.classList.add('button__bid');
    // button1.addEventListener('click', addBid)
    // buttons.appendChild(button1);


    // const button2 = document.createElement('button');
    // button2.textContent = "200$"
    // button2.classList.add('button');
    // button2.classList.add('button__bid');
    // buttons.appendChild(button2);

    // const button3 = document.createElement('button');
    // button3.textContent = "300$"
    // button3.classList.add('button');
    // button3.classList.add('button__bid');
    // buttons.appendChild(button3);

    productInformation.innerHTML = `
        <h1 class="product__artist">${product.artist}</h1>
        <h2 class="product__title">"${product.artTitle}"</h2>
        <p class="product__description">${product.description}</p>
        <p class="product__countdown">Time left: ${product.timeLeft}</p>
        <h3 class="product__price">${currentPrice} $</h3>
        <section class="product__bidOptions">
            <button class="button button__bid button__bid--little">100$</button>
            <button class="button button__bid button__bid--medium">200$</button>
            <button class="button button__bid button__bid--big">300$</button>
        </section>`;

    const price = document.querySelector('.product__price');

    const bidButtonLittle = document.querySelector('.button__bid--little');
    console.log(bidButtonLittle);
    bidButtonLittle.addEventListener('click', () => {
        currentPrice += 100;
        price.textContent = currentPrice + "$";

        addToMyBids(productInformation)
    })

    const bidButtonMedium = document.querySelector('.button__bid--medium');
    bidButtonMedium.addEventListener('click', () => {
        currentPrice += 200;
        price.textContent = currentPrice + "$";
        addToMyBids(productInformation)
    })

    const bidButtonBig = document.querySelector('.button__bid--big');
    bidButtonBig.addEventListener('click', () => {
        currentPrice += 300;
        price.textContent = currentPrice + "$";
        addToMyBids(productInformation)
    })

  }

  function addToMyBids(productInformation) {
    
    body.classList.toggle('showCart');
    
    const cart = document.querySelector('.listCart');
    const cartItem = productInformation.cloneNode(true);
    console.log(cartItem);
    cart.appendChild(cartItem);

    }

  getJSON();