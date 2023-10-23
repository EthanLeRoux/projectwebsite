let shop = document.getElementById("shop");

let girls = document.getElementById("girls");
let leatherBag = document.getElementById("leatherBag");


let basket = JSON.parse(localStorage.getItem("data")) || [];

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  console.log(basket);
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};

let generateShop = () => {
    return (shop.innerHTML = shopItemsData
      .map((x) => {
        let { id, img, name,price, desc } = x;
        let search = basket.find((y) => y.id === id) || [];
        return `
      <div id=product-id-${id} class="item">
        <img width="300" height="300" src=${img} alt="">
        <div class="details">
          <h3>${name}</h3>
          <p>R ${desc} </p>

          <div class="price-quantity">
            <h3>R ${price} </h3>
            <div class="buttons">
              <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
             
        <div class="cart">
        <i onclick="increment(${id})" class="bi bi-cart2"></i>
          <div id="cartAmount" class="cartAmount">0</div>
          <div id=${id} class="quantity">${
            search.item === undefined ? 0 : search.item
          }</div>
        </div>

              <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
    </div>
      `;
      })
      .join(""));
  };
  
  generateShop();
/**
 * test for women
 */
let generateWomenShop = () => {
  return (girls.innerHTML = shopWomenData
    .map((x) => {
      let { id, img, name,price, desc } = x;
      let search = basket.find((y) => y.id === id) || [];
      return `
    <div id=product-id-${id} class="item">
      <img width="300" height="300" src=${img} alt="">
      <div class="details">
        <h3>${name}</h3>
        <p>R ${desc} </p>

        <div class="price-quantity">
          <h3>R ${price} </h3>
          <div class="buttons">
            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
           
      <div class="cart">
      <i onclick="increment(${id})" class="bi bi-cart2"></i>
        <div id="cartAmount" class="cartAmount">0</div>
        <div id=${id} class="quantity">${
          search.item === undefined ? 0 : search.item
        }</div>
      </div>

            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
          </div>
        </div>
      </div>
  </div>
    `;
    })
    .join(""));
};

generateWomenShop();

/**
 * bags
 *  */

let generateBagShop = () => {
  return (leatherBag.innerHTML = shopBagData
    .map((x) => {
      let { id, img, name,price, desc } = x;
      let search = basket.find((y) => y.id === id) || [];
      return `
    <div id=product-id-${id} class="item">
      <img width="300" height="300" src=${img} alt="">
      <div class="details">
        <h3>${name}</h3>
        <p>R ${desc} </p>

        <div class="price-quantity">
          <h3>R ${price} </h3>
          <div class="buttons">
            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
           
      <div class="cart">
      <i onclick="increment(${id})" class="bi bi-cart2"></i>
        <div id="cartAmount" class="cartAmount">0</div>
        <div id=${id} class="quantity">${
          search.item === undefined ? 0 : search.item
        }</div>
      </div>

            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
          </div>
        </div>
      </div>
  </div>
    `;
    })
    .join(""));
};

generateBagShop();


  /**
   * ! used to decrease the selected product item quantity by 1
   */
  
  let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
  
    if (search === undefined) return;
    else if (search.item === 0) return;
    else {
      search.item -= 1;
    }
  
    update(selectedItem.id);
    basket = basket.filter((x) => x.item !== 0);
    console.log(basket);
    localStorage.setItem("data", JSON.stringify(basket));
  };
  
  /**
   * ! To update the digits of picked items on each item card
   */
  
  let update = (id) => {
    let search = basket.find((x) => x.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation();
  };
  
  /**
 * ! To calculate total amount of selected Items
 */

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  };
  
  calculation();
  /**
   * popup
   *

  let popUp =() =>{

  
    // Get the elements by their ID
    var popupLink = document.getElementById("popup-link");
    var popupWindow = document.getElementById("popup-window");
    var closeButton = document.getElementById("close-button");
    // Show the pop-up window when the link is clicked
    popupLink.addEventListener("click", function(event) {
      event.preventDefault();
      popupWindow.style.display = "block";
    });
    // Hide the pop-up window when the close button is clicked
    closeButton.addEventListener("click", function() {
      popupWindow.style.display = "none";
    });
  };*/