// document.addEventListener("DOMContentLoaded", () => {
//  document.getElementById("search").addEventListener("click", function(event) {
//     event.preventDefault();
//     console.log("menu clicked")
//     fnforSearch();
// });
// });

function fnforSearch(){
    console.log("Search entered")
    console.log(document.getElementById("forContentArea"));

    const searchContentArea = document.getElementById("forContentArea");
    searchContentArea.innerHTML = "";

    console.log(theOnlyDiv)
    console.log(searchContentArea);
    const forSearchPage = document.createElement("div");
    forSearchPage.id = "div4searchpage";
    searchContentArea.appendChild(forSearchPage);
    console.log(forSearchPage);


    const searchpgDiv = document.getElementById("div4searchpage")
    searchpgDiv.innerHTML = `
    <div class="container search-food w-100">
      <input type="text" id="searchInputfood" placeholder="Search for Foods" class="w-100"/>
      <button id="searchBtnfood"><img src="./images/Search.png" alt="Search" class="search-img-food" /></button>
      <div id="searchResult"></div>
  </div>

  <div class="searching-log container">

    <div class="log1 log">
      <h2>Regular Orders</h2>
      <div>
        <div class="foodproduct">
          <div>
            <img src="./images/curry.png" alt="curry">
            <span>Curry Rice</span>
            <img src="./images/Arrow 1.png" alt="Arrow">
          </div>
          <div>
            <img src="./images/curry.png" alt="curry">
            <span>Curry Rice</span>
            <img src="./images/Arrow 1.png" alt="Arrow">
          </div>
        </div>
        <div class="foodproduct">
          <div>
            <img src="./images/curry.png" alt="curry">
            <span>Curry Rice</span>
            <img src="./images/Arrow 1.png" alt="Arrow">
          </div>
          <div>
            <img src="./images/curry.png" alt="curry">
            <span>Curry Rice</span>
            <img src="./images/Arrow 1.png" alt="Arrow">
          </div>
        </div>
        <div class="foodproduct">
          <div>
            <img src="./images/curry.png" alt="curry">
            <span>Curry Rice</span>
            <img src="./images/Arrow 1.png" alt="Arrow">
          </div>
          <div>
            <img src="./images/curry.png" alt="curry">
            <span>Curry Rice</span>
            <img src="./images/Arrow 1.png" alt="Arrow">
          </div>
        </div>
        <div class="foodproduct">
          <div>
            <img src="./images/curry.png" alt="curry">
            <span>Curry Rice</span>
            <img src="./images/Arrow 1.png" alt="Arrow">
          </div>
          <div>
            <img src="./images/curry.png" alt="curry">
            <span>Curry Rice</span>
            <img src="./images/Arrow 1.png" alt="Arrow">
          </div>
        </div>
      </div>
    </div>
    <div class="log2 log">
      <h2>Popular Orders</h2>
      <div>
        <div class="foodproduct">
          <div>
            <img src="./images/curry.png" alt="curry">
            <span>Curry Rice</span>
            <img src="./images/Arrow 1.png" alt="Arrow">
          </div>
          <div>
            <img src="./images/curry.png" alt="curry">
            <span>Curry Rice</span>
            <img src="./images/Arrow 1.png" alt="Arrow">
          </div>
        </div>
        <div class="foodproduct">
          <div>
            <img src="./images/curry.png" alt="curry">
            <span>Curry Rice</span>
            <img src="./images/Arrow 1.png" alt="Arrow">
          </div>
          <div>
            <img src="./images/curry.png" alt="curry">
            <span>Curry Rice</span>
            <img src="./images/Arrow 1.png" alt="Arrow">
          </div>
        </div>
        <div class="foodproduct">
          <div>
            <img src="./images/curry.png" alt="curry">
            <span>Curry Rice</span>
            <img src="./images/Arrow 1.png" alt="Arrow">
          </div>
          <div>
            <img src="./images/curry.png" alt="curry">
            <span>Curry Rice</span>
            <img src="./images/Arrow 1.png" alt="Arrow">
          </div>
        </div>
        <div class="foodproduct">
          <div>
            <img src="./images/curry.png" alt="curry">
            <span>Curry Rice</span>
            <img src="./images/Arrow 1.png" alt="Arrow">
          </div>
          <div>
            <img src="./images/curry.png" alt="curry">
            <span>Curry Rice</span>
            <img src="./images/Arrow 1.png" alt="Arrow">
          </div>
        </div>
      </div>
    </div>
    </div>

  </div>
`;
}