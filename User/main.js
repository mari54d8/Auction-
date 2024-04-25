// ------------------ login side ---------------------
/**
 *  få fat i brugernavnet 
 *  buttons: kom videre til "paintings"
 */

const loginEmail = document.querySelector(".login__email");
const buttonLogin = document.querySelector(".login__button");
buttonLogin.addEventListener('click', login);

function login() {
    const userName = loginEmail.value;
    console.log(userName);

    window.location.href = 'paintings.html';
    window.reload();
}


/** --------------- sæt data ind i vores product page ----------------
 * 
 * 
*/
// –––––––––––––––––––––––––––––––––––––––––––––––––––
// PART 1 – GET THE JSON FILES THROUGH A HTTP URL
// –––––––––––––––––––––––––––––––––––––––––––––––––––

const allItems = 'http://roundhouse.proxy.rlwy.net:54600/items';
//  This function is used for loading a JSON file from an URL
function getJSON(allItems) {
    // Make a GET request using the Fetch API
    fetch(allItems)
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
    // Loop through items
    for (const item of data.items) {
      console.log("Working on item", item);
  
      // Create output
      let output = {};
      output.title = item.title;
      output.description = item.description;
      output.currentPrice = item.actualPrice;
      output.expires = item.expires;
  
      // Send object to function that populates the DOM
      populateDOM(output);
    }
  }
  
  // –––––––––––––––––––––––––––––––––––––––––––––––––––
  // PART 3 – INSERT DATA IN THE DOM
  // –––––––––––––––––––––––––––––––––––––––––––––––––––
  //  Receives the formatted data as item object
  //  and inserts it into the DOM
  
  function populateDOM(item) {
    // Update the DOM with the received data
  
    console.log("Populating with this item", item);
  
    // Create DOM element
    let productCard = document.createElement("article");
    productCard.classList.add("productCard");
  
    productCard.innerHTML = `
    <h2 class="productCard__title">${item.title}</h2>
    <p class="productCard__describtion">${item.description}</p>
    <h3 class="productCard__countdown">${item.expiryDate}</h3>
    <button class="productCard__bid">Byd</button>
    `;
  
    document.querySelector(".products").appendChild(element);
  }
  

/** ------------------ see details på productCard -----------------
 * 
 *  få fat i button
 *  få fat i productCard af selve button
 *  flyt til anden side
 *  append selve productCard der
 */