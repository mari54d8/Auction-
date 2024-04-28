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
        addData(data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
      });
  }

  function addData(data) {
    const main = document.querySelector('.auctions');

    data.forEach(product => {
        
        const auctionData = document.createElement('section');
        auctionData.classList.add('auction__data');

        const categoryColor = document.createElement('span');
        categoryColor.classList.add('auction__categoryColor')
        auctionData.appendChild(categoryColor);

        const status = document.createElement('img');
        status.classList.add('auction__statusIcon');
        auctionData.appendChild(status);

        const expiryDate = document.createElement('p');
        expiryDate.classList.add('auction__expiryDate');
        expiryDate.textContent = product.expiryDate;
        auctionData.appendChild(expiryDate);

        const artist = document.createElement('p');
        artist.classList.add('auction__artist');
        artist.textContent = product.artist;
        auctionData.appendChild(artist);

        const artTitle = document.createElement('p');
        artTitle.classList.add('auction__artTitle');
        artTitle.textContent = product.artTitle;
        auctionData.appendChild(artTitle);

        const startPrice = document.createElement('p');
        startPrice.classList.add('auction__startPrice');
        startPrice.textContent = product.startPrice + '$';
        auctionData.appendChild(startPrice);
       
        const currentPrice = document.createElement('p');
        currentPrice.classList.add('auction__currentPrice');
        currentPrice.textContent = product.currentPrice + '$';
        auctionData.appendChild(currentPrice);

        const buttons = document.createElement('section');
        buttons.classList.add('auction__buttons');
        auctionData.appendChild(buttons);
        const showBidsButton = document.createElement('button');
        showBidsButton.classList.add('button', 'button__admin', 'button__admin--showBids')
        showBidsButton.textContent = 'show all bids';
        buttons.appendChild(showBidsButton);
        const editAuctionButton = document.createElement('button');
        editAuctionButton.classList.add('button', 'button__admin', 'button__admin--editProduct')
        const editIcon = document.createElement('img');
        editIcon.src = 'images_admin/Subtract.svg';
        editAuctionButton.append(editIcon);
        buttons.appendChild(editAuctionButton);

        main.appendChild(auctionData);

        showCategory(product, categoryColor);

        updateStatus(product, status);
    });
  }

  // -------------------- colorCode auctions -----------------
  function showCategory(product, categoryColor) {
    // get the category (1=painting, 2=sculpture)
    // get the span categoryColor
    const productCategory = product.category;
    if(productCategory === 2) {
        categoryColor.classList.add('--sculpture')
    }
  }
// -------------------- status icon -------------------------
  function updateStatus(product, status) {
    const statusActive = product.active;
    console.log(statusActive);
    if (statusActive === "True") {
        status.src = 'images_admin/icon_active.png';
    }
    else {
        status.src = 'images_admin/icon_completed.png'
    }
  }

  getJSON()