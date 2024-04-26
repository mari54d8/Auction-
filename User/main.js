// ------------------ login side ---------------------
/**
 *  få fat i brugernavnet 
 *  buttons: kom videre til "paintings"
 */

// const loginEmail = document.querySelector(".login__email");
// const buttonLogin = document.querySelector(".login__button");
// buttonLogin.addEventListener('click', login);

// function login() {
//     const userName = loginEmail.value;
//     console.log(userName);

//     window.location.href = 'paintings.html';
//     window.reload();
// }


/** --------------- sæt data ind i vores product page ----------------
 * 
 * 
*/
// –––––––––––––––––––––––––––––––––––––––––––––––––––
// PART 1 – GET THE JSON FILES THROUGH A HTTP URL
// –––––––––––––––––––––––––––––––––––––––––––––––––––


//  This function is used for loading a JSON file from an URL
function getJSON(allItems) {
    // Make a GET request using the Fetch API
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
        formatData(data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
      });
  }
  
  // –––––––––––––––––––––––––––––––––––––––––––––––––––
  // PART 2 – FORMAT THE DATA AS YOU WANT IT TO BE
  // –––––––––––––––––––––––––––––––––––––––––––––––––––
  
  // This handles the received data and formats into an item object
  function formatData(data) {
    console.log(data[1].artTitle);
    // Loop through items
    for (const product of data) {
      console.log("Working on item", product);
      populateDOM(product);
    }
  }
  
  // –––––––––––––––––––––––––––––––––––––––––––––––––––
  // PART 3 – INSERT DATA IN THE DOM
  // –––––––––––––––––––––––––––––––––––––––––––––––––––
  //  Receives the formatted data as item object
  //  and inserts it into the DOM
  // !!!!!!! få fat i kategorien: kategori 1 = painting, kategori 2 = statue
  
  getJSON();

  function populateDOM(product) {
    // Update the DOM with the received data
  
    console.log("Populating with this item", product);
  
    // Create DOM element
    let productCard = document.createElement("article");
    productCard.classList.add("productCard");
    
    productCard.innerHTML = `
    <section class="productCard__information">
    <h2 class="productCard__artist">${product.artist}</h2>
    <h3 class="productCard__title">${product.artTitle}</h3>
    <p class="productCard__description">${product.description}</p>
    <h3 class="productCard__countdown">${product.expiryDate}</h3>
    <button class="productCard__bid">Byd</button>
    </section>
    `;
  
    document.querySelector(".products").appendChild(productCard);
  }
  

/** ------------------ "see details" på productCard -----------------
 *
 *  få fat i button
 *  få fat i productCard af selve button
 *  flyt til anden side
 *  append selve productCard der
 */



/** ----------------- vis selve productCard i product.html
 * 
 * clone 
 */