// const loginContent = document.getElementById("forLogin");
// if (loginContent) {
//     loginContent.innerHTML = "Login page content here";
// } else {
//     console.warn("Login content area not found");    
// }
// const bookTableContent = document.getElementById("bookTablePg")
// if (bookTableContent) {
//     bookTableContent.innerHTML = "Login page content here";
// } else {
//     console.warn("booktable content area not found");
// }
// const menu = document.getElementById("div4Menupage");
// if (menu) {
//     console.log("ah found")
//   menu.innerHTML = "Welcome!";
// } else {
//   console.warn("menuContent element not found");
// }....i checked these bcz im unable to get login open in menu page 

function fnforMenu(){
    console.log("menu entered")
    console.log(document.getElementById("forContentArea"));

    const menuContentArea = document.getElementById("forContentArea");
    menuContentArea.innerHTML = "";

    // document.getElementById("bookTablePg").innerHTML = "";
    // document.getElementById("forContentArea").innerHTML = "";

    console.log(theOnlyDiv)
    console.log(menuContentArea);
    const forMenuPage = document.createElement("div");
    forMenuPage.id = "div4Menupage";
    menuContentArea.appendChild(forMenuPage);
    console.log(forMenuPage);


    const menupgDiv = document.getElementById("div4Menupage")
    menupgDiv.innerHTML = `<div>
     <div class="image-carousel">
      <img src="./images/banner.png" alt="banner">
     </div>

     <div class="container offer-section">
      <h2>Offers</h2>
      <div class="flex-flat">
        <a href=""><img src="./images/flat1.png" alt="flat1"></a>
        <a href=""><img src="./images/flat2.png" alt="flat2"></a>
        <a href=""><img src="./images/flat1.png" alt="flat1"></a>
        <a href=""><img src="./images/flat2.png" alt="flat2"></a>
      </div>
     </div>

     <div class="container categories">
      <h2>Categories</h2>
      <div class="catalogue">
        <div><img src="./images/lunchCombo.png" alt="lunchCombo">
          <h6>Lunch Combo Starting @299</h6></div>
        <div><img src="./images/hyderabadiB.png" alt="hyderabadiB">
          <h6>Hyderabadi Biryani</h6></div>
        <div><img src="./images/everydayBCombo.png" alt="everydayBCombo">
          <h6>Everyday Biryani Combos</h6></div>
        <div><img src="./images/kebab.png" alt="kebab">
          <h6>Kebabs</h6></div>
      </div>
     </div>

     <div class=" container lunch-combo">
      <h2>Lunch Combos starting @299</h2>
      <div>
        <div class="combo1 combo">
          <img src="./images/dalMakhani.png" alt="dalMakhani">
          <h4>Dal Makhani [400gms] + 4 Rumali Roti + [1pc] Gulab Jamun</h4>
          <p>504 People ordered in the last week</p>
          <div>
            <span class="rupee">₹299</span>
            <button onclick="openOrderModal(1)">Add +</button>
          </div>
        </div>
        <div class="combo2 combo">
          <img src="./images/paneerNawabi.png" alt="paneerNawabi">
          <h4>Paneer Nawabi [500gms] + 4 Rumali Roti + [1pc] Gulab Jamun</h4>
          <p>505 People ordered in the last week</p>
          <div>
            <span class="rupee">₹329</span>
            <button onclick="openOrderModal(2)">Add +</button>
          </div>
        </div>
      </div>
     </div>

     <div class=" container lunch-combo hyder-biryani">
      <h2>Hyderabadi Biryani</h2>
      <div>
        <div class="hyder-combo combo">
          <img src="./images/vegDumHalfkg.png" alt="vegDumHalfkg">
          <h4>Veg Hyderabadi Biryani [1/2 Kg]</h4>
          <p class="content">Serves 1-2 Fresh vegetables are marinated in a mixture of freshly ground BBK spices & layered with long grain basmati rice in the handi and slow cooked</p>
          <p>1504 People ordered in the last week</p>
          <p class="usecode">Get Rs 120 OFF | Use code: BBK120</p>
          <div>
            <span class="rupee">₹389</span>
            <button onclick="openOrderModal(3)">Add +</button>
          </div>
        </div>
        <div class="hyder-combo combo">
          <img src="./images/vegDum1kg.png" alt="vegDum1kg">
          <h4>Veg Hyderabadi Dum Biryani [1Kg]</h4>
          <p class="content">Serves 2-3 Available in 1/2 kg and 1kg. Fresh vegetables are marinated in a mixture of freshly ground BBK spices & layered with long grain basmati rice.</p>
          <p>2906 People ordered in the last week</p>
          <p class="usecode">Get Rs 120 OFF | Use code: BBK120</p>
          <div>
            <span class="rupee">₹699</span>
            <button onclick="openOrderModal(4)">Add +</button>
          </div>
        </div>
        <div class="hyder-combo combo">
          <img src="./images/halfKGpaneerHydDum.png" alt="halfKGpaneerHydDum" id="paneer1kg">
          <h4>Paneer Hyderabadi Dum [1/2 Kg]</h4>
          <p class="content">Serves 1-2 (Contains 8-10 pieces of paneer) Fresh paneer pieces marinated in freshly ground BBK spices and layered with premium long grain rice.</p>
          <p>4136 People ordered in the last week</p>
          <p class="usecode">Get Rs 120 OFF | Use code: BBK120</p>
          <div>
            <span class="rupee">₹429</span>
            <button onclick="openOrderModal(5)">Add +</button>
          </div>
        </div>
        <div class="hyder-combo combo">
          <img src="./images/1kgPaneerHydDumB.png" alt="1kgPaneerHydDumB" id="paneer1kg">
          <h4> [1Kg] Paneer Hyderabadi Dum </h4>
          <p class="content">Serves 2-3 Fresh paneer pieces marinated in freshly ground BBK spices and layered with premium long grain rice & dum cooked in a sealed handi.</p>
          <p>924 People ordered in the last week</p>
          <p class="usecode">Get Rs 120 OFF | Use code: BBK120</p>
          <div>
            <span class="rupee">₹759</span>
            <button onclick="openOrderModal(6)">Add +</button>
          </div>
        </div>
      </div>
     </div>

     <div class=" container lunch-combo">
      <h2>Everyday Biryani Combos</h2>
      <div>
        <div class="hyder-combo combo">
          <img src="./images/vegBcombo.png" alt="dalMakhani">
          <h4>Veg Biryani Combo</h4>
          <p class="content">Veg Hyderabadi Biryani [1/2 Kg] + Choice of Veg Galouti Kebab / Crispy Corn Sticks + 2 Thums Up [250 ml]</p>
          <p>548 People ordered in the last week</p>
          <div>
            <span class="rupee">₹729</span>
            <button onclick="openOrderModal(7)">Add +</button>
          </div>
        </div>
        <div class="hyder-combo combo">
          <img src="./images/paneerBcombo.png" alt="paneerNawabi">
          <h4>Paneer Biryani Combo</h4>
          <p class="content">Paneer Hyderabadi Biryani [1/2 Kg] + Choice of Veg Galouti Kebab / Crispy Corn Sticks + 2 Thums Up [250 ml]</p>
          <p>562 People ordered in the last week</p>
          <div>
            <span class="rupee">₹738</span>
            <button onclick="openOrderModal(8)">Add +</button>
          </div>
        </div>
      </div>
     </div>

     <div class=" container lunch-combo hyder-biryani">
      <h2>Kebabs</h2>
      <div>
        <div class="hyder-combo combo">
          <img src="./images/vegplat.png" alt="vegplatter">
          <h4>Veg Platter + 2 x Rumali Roti</h4>
          <p class="content">Includes: 4 pcs Veg Galouti, 4 pcs Kaju Seekh, 3 pcs Crispy Corn Stick, 4 pcs Kasturi Paneer. Served with spicy dip, mint chutney & onion salad. + 2 Rumali Roti</p>
          <p>567 People ordered in the last week</p>
          <p class="usecode">Get Rs 120 OFF | Use code: BBK120</p>
          <div>
            <span class="rupee">₹649</span>
            <button onclick="openOrderModal(9)">Add +</button>
          </div>
        </div>
        <div class="hyder-combo combo">
          <img src="./images/cornStick6pcs.png" alt="crispyCornSticks">
          <h4>Crispy Corn Stick [6 pcs]</h4>
          <p class="content">Includes: 4 pcs Veg Galouti, 4 pcs Kaju Seekh, 3 pcs Crispy Corn Stick, 4 pcs Kasturi Paneer. Served with spicy dip, mint chutney & onion salad. + 2 Rumali Roti</p>
          <p>567 People ordered in the last week</p>
          <p class="usecode">Get Rs 120 OFF | Use code: BBK120</p>
          <div>
            <span class="rupee">₹649</span>
            <button onclick="openOrderModal(10)">Add +</button>
          </div>
        </div>
        <div class="hyder-combo combo">
          <img src="./images/galouti.png" alt="galouti">
          <h4>Veg Galouti Kebab [6 pcs]</h4>
          <p class="content">A Lucknowi specialty made by marinating finely ground fresh vegetables with exotic spices. Served with laccha pyaaz and mint chutney.</p>
          <p>1112 People ordered in the last week</p>
          <p class="usecode">Get Rs 120 OFF | Use code: BBK120</p>
          <div>
            <span class="rupee">₹329</span>
            <button onclick="openOrderModal(11)">Add +</button>
          </div>
        </div>
        <div class="hyder-combo combo">
          <img src="./images/vegkajukebab.png" alt="vegKajuSeekh">
          <h4> Veg Kaju Seekh [250 gms] </h4>
          <p class="content">Includes: 250 gms of Veg Kaju Seekh</p>
          <p>818 People ordered in the last week</p>
          <p class="usecode">Get Rs 120 OFF | Use code: BBK120</p>
          <div>
            <span class="rupee">₹339</span>
            <button onclick="openOrderModal(12)">Add +</button>
          </div>
        </div>
      </div>
     </div>

     <div class="container biryani-by-kilo">
      <h2>Biryani By Kilo - Cities We are Serving</h2>
      <table class="city-table">
        <tr>
          <td>Amritsar</td>
          <td>Agra</td>
          <td>Bhopal</td>
          <td>Bhubaneswar</td>
        </tr>
        <tr>
          <td>Chandigarh</td>
          <td>Dhanbad</td>
          <td>Durgapur</td>
          <td>Dehradun</td>
        </tr>
        <tr>
          <td>Gurgaon</td>
          <td>Ghaziabad</td>
          <td>Greater Noida</td>
          <td>Guwahati</td>
        </tr>
        <tr>
          <td>Gorakhpur</td>
          <td>Gwalior</td>
          <td>Goa</td>
          <td>Hyderabad</td>
        </tr>
      </table>
     </div>


<footer class="bg-light text-dark pt-5 pb-1">
  <div class="mx-4">
    <div class="row">

      <!-- Logo & Tagline -->
      <div class="col-md-4 mx-3 mb-4">
        <!-- <h4 class="fw-bold">Bhai Biryani</h4> -->
         <div class="foot-logo-div">
          <a href="#"><img src="./images/logo.png" alt="logo" class="logo1" onclick = "mainPageFunction()"></a>
          <div class="nearLogo1">
          <a href="#" onclick = "mainPageFunction()">Bhai</a>
          <a class="footer-brand" href="#" onclick = "mainPageFunction()">Biryani</a>
          </div>
         </div>
        <p>Authentic flavors, rich spices, and the best biryani in town!<br>
           Experience the taste of tradition with every bite.</p>
        <div class="d-flex foot-icons">
          <a href="#" class=""><i class="bi bi-instagram fs-4"></i> Instagram</a>
          <a href="#" class=""><i class="bi bi-facebook fs-4"></i> Facebook</a>
          <a href="#" class=""><i class="bi bi-youtube fs-4"></i> Youtube</a>
        </div>
      </div>

      <!-- About -->
      <div class="col-lg-1 mx-2 mb-4">
        <h5 class="fw-bold">About</h5>
        <ul class="list-unstyled footer-ul">
          <li><a href="#" class="text-decoration-none">About Us</a></li>
          <li><a href="#" class="text-decoration-none">Our Specialties</a></li>
          <li><a href="#" class="text-decoration-none">News</a></li>
          <li><a href="#" class="text-decoration-none">Menu</a></li>
        </ul>
      </div>

      <!-- Company -->
      <div class="col-xl-1 mx-2 mb-4">
        <h5 class="fw-bold">Company</h5>
        <ul class="list-unstyled footer-ul">
          <li><a href="#" class="text-decoration-none">Why Bhai Biryani?</a></li>
          <li><a href="#" class=" text-decoration-none">Partner With Us</a></li>
          <li><a href="#" class="text-decoration-none">FAQ</a></li>
          <li><a href="#" class="text-decoration-none">Blog</a></li>
        </ul>
      </div>

      <!-- Support -->
      <div class="col-xl-1 mx-2 mb-4">
        <h5 class="fw-bold">Support</h5>
        <ul class="list-unstyled footer-ul">
          <li><a href="#" class=" text-decoration-none">Support Center</a></li>
          <li><a href="#" class="text-decoration-none">Feedback</a></li>
          <li><a href="#" class="text-decoration-none">Contact Us</a></li>
          <li><a href="#" class="text-decoration-none">Accessibility</a></li>
        </ul>
      </div>

      <!-- Branches -->
      <div class="col-xl-1 mx-2 mb-4">
        <h5 class="fw-bold">Branches</h5>
        <ul class="list-unstyled footer-ul">
          <li><a href="#" class="text-decoration-none">Chennai</a></li>
          <li><a href="#" class="text-decoration-none">Coimbatore</a></li>
          <li><a href="#" class="text-decoration-none">Madurai</a></li>
          <li><a href="#" class=" text-decoration-none">Trichy</a></li>
        </ul>
      </div>

      <!-- get in touch -->
      <div class="col-md-3 mx-2 mb-4">
        <h5 class="fw-bold">Get in Touch</h5>
        <p class="mb-2">Have questions or feedback? We'd love to hear from you!</p>
        <form id="footerForm">
          <input type="email" id="footerEmail" class="form-control me-2 mb-2 rounded-pill" placeholder="login to submit">
          <button type="submit" class="btn btn-warning rounded-pill">Submit</button>
        </form>
      </div>

    </div>
      
    <!-- </div> -->
  </div>
</footer>

</div>

<div id="orderModal" class="order-modal">
  <div class="order-content">
    <span class="close-btn" onclick="closeOrderModal()">×</span>
    <div  class="order-content-right">
    <img src="./images/vegBcombo.png" alt="vegBcombo" id="mealImage">
    <div>
      <p id="mealTitle">Veg Biryani Combo </p>
      <p>₹ <span id="amountofMaindish">729</span></p>
    </div>
    <p id="mealDescription">Veg Hyderabadi Biryani (1/2 Kg) + 4 pcs Veg Kebab + 1 Coke (250 ml)</p>
    <p><span>35 min preparation</span>
    <span>548 People ordered in the last week</span>
    <span>Serve for 1-2</span></p>
    </div>

  <div class="oc-left-div">
    <div class="order-content-left form-check">
    <div class="section">
      <div>Choose your Rice</div>
      <div class="choose-rice-flex" style="border: none;">
      <div> Basmati Rice</div>
      <div><label class="form-check-label"> <input type="radio" name="typeofRice" class="rice-input form-check-input" value="Basmati Rice"></label></div>
      </div>
      <div class="choose-rice-flex" style="border: none;">
        <div> Seeraga Samba Rice</div>
        <div><label class="form-check-label"> <input type="radio" name="typeofRice" class="rice-input form-check-input" value="Seerag Samba Rice"></label></div>
      </div>
      <div class="choose-rice-flex" style="border: none;">
        <div> None</div>
        <div><label class="form-check-label"> <input type="radio" name="typeofRice" class="rice-input form-check-input" value="none"></label></div>
      </div>
    </div>

    <div class="section">
      <div>Choose your accompaniment</div>
      <div class="choose-rice-flex">
      <div> <img src="./images/raitha.png" alt="raitha"> Raita</div>
      <div><label class="form-check-label"> ₹20<input type="radio" name="accomp" value="Raita" class="rice-input form-check-input"></label></div>
      </div>
      <div class="choose-rice-flex">
      <div><img src="./images/salna.png" alt="salna"> Salna</div>
      <div><label class="form-check-label"> ₹80<input type="radio" name="accomp" value="Salna" class="rice-input form-check-input"></label></div>
      </div>
      <div class="choose-rice-flex">
      <div> I love to have without adding anything :)</div>
      <div><label class="form-check-label"> ₹0<input type="radio" name="accomp" value="none" class="rice-input form-check-input"></label></div>
      </div>
    </div>

    <div class="section">
      <div>Choose your Beverages(1/1)</div>
      <div class="choose-rice-flex">
      <div>🍹 Guava Goodness</div>
      <div><label class="form-check-label"> ₹69<input type="radio" name="beverages" value="Guava Goodness" class="rice-input form-check-input"></label></div>
      </div>
      <div class="choose-rice-flex">
      <div>🍹 Peach Passion</div>
      <div><label class="form-check-label"> ₹69<input type="radio" name="beverages" value="Peach Passion" class="rice-input form-check-input"></label></div>
      </div>
      <div class="choose-rice-flex">
      <div>🍹 Merry Mango</div>
      <div><label class="form-check-label"> ₹69<input type="radio" name="beverages" value="Merry Mango" class="rice-input form-check-input"></label></div>
      </div>
      <div class="choose-rice-flex">
      <div>🍹 Sunshine Sarbath</div>
      <div><label class="form-check-label"> ₹69<input type="radio" name="beverages" value="Sunshine Sarbath" class="rice-input form-check-input"></label></div>
      </div>
      <div class="choose-rice-flex">
        <div>🍹 Masala Cola</div>
        <div><label class="form-check-label"> ₹69<input type="radio" name="beverages" value="Masala Cola" class="rice-input form-check-input"></label></div>
      </div>
      <div class="choose-rice-flex">
          <div>🚫 None</div>
          <div><label class="form-check-label"> ₹0<input type="radio" name="beverages" value="none" class="rice-input form-check-input"></label></div>
      </div>
    </div>

    <div class="section">
      <div>Choose your Dessert(1/1)</div>
        <div class="choose-rice-flex">
          <div>🍮 Gulab Jamun 3 Pcs</div>
          <div><label class="form-check-label"> ₹89<input type="radio" name="dessert" value="Gulab Jamun" class="rice-input form-check-input"></label></div>
        </div>
        <div class="choose-rice-flex">
          <div>🍮 Bread Halwa</div>
          <div><label class="form-check-label"> ₹89<input type="radio" name="dessert" value="Bread Halwa" class="rice-input form-check-input"></label></div>
        </div>
        <div class="choose-rice-flex">
          <div>🚫 None</div>
          <div><label class="form-check-label"> ₹0<input type="radio" name="dessert" value="none" class="rice-input form-check-input"></label></div>
        </div>

      </div>
    </div>

    <div class="a2cartbutton">
      <div class="cart-button">
          <button onclick="spanFn2()">-</button>
          <span id="count">1</span>
          <button onclick="spanFn()">+</button>
      </div>
      <button onclick="addToCartDIV()" id="sub-total">
        Pay Rs.<span id="mealPrice">729</span>
      </button>
    </div>

    </div>
    
    

  </div>
  </div>
</div>

    <!--For Billing section --> 
    

<div class="order-displayer" id="navigateOrderSummary">
  <div id="newforBillCalculator"  class="py-4 mb-4 ordersummary-container">
    <span class="close-btn text-light" onclick="disposeOrder()">×</span>
    <h2 class="mb-4 text-center text-light">🛒 Your Order Summary</h2>

    <!-- Cart Items -->
    <div class="card mb-3">
      <div class="card-body">
        <h3 class="mt-5">🛒 Your Cart</h3>
        <ul id="cartList" class="list-group mb-3"></ul>
        <p><strong>Total: ₹<span id="cartTotal">0</span></strong></p>
        <button class="btn btn-danger ms-5 mt-1" onclick="clearCart()">Remove All Items</button>
        <button type="button" class="btn btn-success ms-5 mt-1" id="billinDetails">👀 Looks Delicious! 🍽️ Let’s Feast</button>
      </div>
    </div>

      
       <!-- Add-ons -->
    <div class="card mb-3">
      <div class="card-body">
        <h5>Add Anch Box</h5>
        <p class="text-muted">Extra 6-8 minutes of dum for restaurant-quality biryani! (Free)</p>
        <textarea class="form-control mb-2" placeholder="Add kitchen instructions..."></textarea>
        <button class="btn btn-outline-primary w-100" id="addAnchBox">Add</button>
      </div>
    </div>

    <!-- Loyalty & Donation -->
    <div class="card mb-3">
      <div class="card-body">
        <div class="form-check form-switch d-flex align-items-center">
          <input class="form-check-input" type="checkbox" id="loyaltyToggle">
          <label class="form-check-label ms-2" for="loyaltyToggle">Use 100 BBK Loyalty Points (₹100 off)</label>
        </div>
        <div class="form-check form-switch mt-2 d-flex align-items-center">
          <input class="form-check-input" type="checkbox" id="donationToggle">
          <label class="form-check-label ms-2" for="donationToggle">Donate ₹2 to Support Pedal-On</label>
        </div>
      </div>
    </div>

    <!-- Billing -->
    <div class="card" id="navigatebilnDetails">
      <div class="card-body">
        <h5>💳 Billing Details</h5>
        <ul class="list-group list-group-flush" id="makepaymentbillin">
          <li class="list-group-item">Sub Total: ₹<span id="subtotalinfinite">0</span></li>
          <li class="list-group-item">Delivery Charges: ₹39</li>
          <li class="list-group-item">Packing Charge: ₹25</li>
          <li class="list-group-item">CGST (2.5%): ₹<span id="cgst">0</span></li>
          <li class="list-group-item">SGST (2.5%): ₹<span id="sgst">0</span></li>
          <li class="list-group-item fw-bold">Total: ₹<span id="total">0</span></li>
        </ul>
        
        <button class="btn btn-outline-warning w-100 mt-1 fw-bold" onclick="makePaymentfn()"> 🔥🍽️ Fuel Your Cravings 😋🍲</button>
        <button class="btn btn-outline-secondary w-100 mt-1 mb-2 fw-bold" onclick="disposeOrder()"> 🍛💥 Crave more? Tap here! 🚀🍲</button>
      </div>
    </div>
    <!-- ends -->
  </div>    
</div>

<!-- payment Section -->

<div id="paymentmakinDiv">
<div class="container my-5 py-4" id="paymentSection">
  <span class="close-btn text-light" onclick="disposePayment()">×</span>
  <h2 class="text-center mb-4">🧾 Checkout & Payment</h2>

  <!-- User Info -->
  <div class="card mb-3">
    <div class="card-body">
      <h5>User Details</h5>
      <p><strong>Name:</strong> <span id="payName">Loading...</span></p>
      <p><strong>Email:</strong> <span id="payEmail">Loading...</span></p>
      <p><strong>Phone:</strong> <span id="payPhone">Loading...</span></p>
    </div>
  </div>

  <!-- Address Form -->
  <div class="card mb-3">
    <div class="card-body">
      <h5>Delivery Address</h5>
      <form id="addressForm">
        <input type="text" class="form-control mb-2" id="userStreet" placeholder="Street Address" required>
        <input type="text" class="form-control mb-2" id="userCity" placeholder="City" required>
        <input type="text" class="form-control mb-2" id="userPincode" placeholder="Pincode" required>
      </form>
    </div>
  </div>

  <!-- Cart Summary -->
  <div class="card mb-3">
    <div class="card-body">
      <h5>Your Cart</h5>
      <ul id="paymentCartSummary" class="list-group mb-3"></ul>
      <ul id="paymentTotal" class="list-group mb-3"></ul>
    </div>
  </div>

  <!-- Payment Button -->
  <div class="text-center mb-3">
    <button class="btn btn-success" onclick="processPayment()">💳 Pay Now</button>
  </div>

</div>
</div>



  
    
`;

const irritating = document.getElementById('subtotalinfinite');
const cgstLast= document.getElementById('cgst');
const sgstLast = document.getElementById('sgst');
const totalLast = document.getElementById('total');
  console.log("Now it's found:", irritating);
  console.log("Now it's found:", cgstLast);
  console.log("Now it's found:", sgstLast);
  console.log("Now it's found:",totalLast );

const loyaltyToggle = document.getElementById('loyaltyToggle');
const donationToggle = document.getElementById('donationToggle');

  

  const billinBTN =  document.getElementById("billinDetails");
billinBTN.addEventListener("click", function (event) {
      event.preventDefault(); 
      calculateTotal();
      location.href = "#navigatebilnDetails";
    });

    const anchBox = document.getElementById("addAnchBox");
anchBox.addEventListener("click", () => {
  anchBox.innerText = "✅ Choices Saved"
  anchBox.classList.remove("btn-outline-primary");
  anchBox.classList.add("btn-outline-success");
})



  const footerEID = document.getElementById("footerEmail");
  footerEID.value = userState.emailId;
  footerEID.readOnly = true;

  const  fbackORqn = document.getElementById("footerForm")
fbackORqn.addEventListener("submit", function (event) {
      event.preventDefault(); 
      console.log("form submitted")
      feebackORquesstion(userState.username);
    });

    const link = document.getElementById("login");
    link.addEventListener("click", function (event) {
      event.preventDefault(); 
      mainPageFunction();
      forLogin();
    });
  
    
}
  

console.log("Subtotal element:", document.getElementById('subtotalinfinite'));


const foodCategoriesOrder = {
  1: {
    foodImage : "./images/dalMakhani.png",
    foodName: "Lunch Combo1",
    foodRupee : "299",
    foodDescription : "Dal Makhani [400gms] + 4 Rumali Roti + [1pc] Gulab Jamun"
  },
  2: {
    foodImage : "./images/paneerNawabi.png",
    foodName: "Lunch Combo2",
    foodRupee : "329",
    foodDescription : "Paneer Nawabi [500gms] + 4 Rumali Roti + [1pc] Gulab Jamun"
  },
  3: {
    foodImage : "./images/vegDumHalfkg.png",
    foodName: "Veg Hyderabadi Biryani [1/2 Kg]",
    foodRupee : "389",
    foodDescription : "Fresh vegetables are marinated in a mixture of freshly ground BBK spices"
  },
  4: {
    foodImage : "./images/vegDum1kg.png",
    foodName: "Veg Hyderabadi Dum Biryani [1Kg]",
    foodRupee : "699",
    foodDescription : "Fresh vegetables are marinated in a mixture of freshly ground BBK spices"
  },
  5: {
    foodImage : "./images/halfKGpaneerHydDum.png",
    foodName: "Paneer Hyderabadi Dum [1/2 Kg]",
    foodRupee : "429",
    foodDescription : "Fresh paneer pieces (Contains 8-10 pieces of paneer) "
  },
  6: {
    foodImage : "./images/1kgPaneerHydDumB.png",
    foodName: "[1Kg] Paneer Hyderabadi Dum",
    foodRupee : "759",
    foodDescription : "Fresh paneer pieces (Contains 15-20 pieces of paneer) "
  },
  7: {
    foodImage : "./images/vegBcombo.png",
    foodName: "Veg Biryani Combo",
    foodRupee : "729",
    foodDescription : "Veg Hyderabadi Biryani [1/2 Kg] + Choice of Veg Galouti Kebab / Crispy Corn Sticks + 2 Thums Up [250 ml]"
  },
  8: {
    foodImage : "./images/paneerBcombo.png",
    foodName: "Paneer Biryani Combo",
    foodRupee : "738",
    foodDescription : "Paneer Hyderabadi Biryani [1/2 Kg] + Choice of Veg Galouti Kebab / Crispy Corn Sticks + 2 Thums Up [250 ml]"
  },
  9: {
    foodImage : "./images/vegplat.png",
    foodName: "Veg Platter + 2 x Rumali Roti",
    foodRupee : "649",
    foodDescription : "Includes: 4 pcs Veg Galouti, 4 pcs Kaju Seekh, 3 pcs Crispy Corn Stick, 4 pcs Kasturi Paneer. Served with spicy dip, mint chutney & onion salad. + 2 Rumali Roti"
  },
  10: {
    foodImage : "./images/cornStick6pcs.png",
    foodName: "Crispy Corn Stick [6 pcs]",
    foodRupee : "649",
    foodDescription : "Includes: 4 pcs Veg Galouti, 4 pcs Kaju Seekh, 3 pcs Crispy Corn Stick, 4 pcs Kasturi Paneer. Served with spicy dip, mint chutney & onion salad. + 2 Rumali Roti"
  },
  11: {
    foodImage : "./images/galouti.png",
    foodName: "Veg Galouti Kebab [6 pcs]",
    foodRupee : "329",
    foodDescription : "A Lucknowi specialty made by marinating finely ground fresh vegetables with exotic spices. Served with laccha pyaaz and mint chutney."
  },
  12: {
    foodImage : "./images/vegkajukebab.png",
    foodName: "Veg Kaju Seekh [250 gms]",
    foodRupee : "339",
    foodDescription : "Includes: 250 gms of Veg Kaju Seekh"
  }
}

let finalCart = [];

let currentOrderKey = null;
function openOrderModal(useorderKey) {
  currentOrderKey = useorderKey; 
  document.getElementById("orderModal").style.display = "flex";
  const ordernMeal = foodCategoriesOrder[useorderKey];
  document.getElementById("mealImage").src = ordernMeal.foodImage;
  document.getElementById("mealImage").alt = ordernMeal.foodName;
  document.getElementById("mealTitle").innerText = ordernMeal.foodName;
  document.getElementById("amountofMaindish").innerText = ordernMeal.foodRupee;
  document.getElementById("mealPrice").innerText = ordernMeal.foodRupee;
  document.getElementById("mealDescription").innerText = ordernMeal.foodDescription;
}
function closeOrderModal() {
  console.log("function closed")
  document.getElementById("orderModal").style.display = "none";
  clearAllRadios();
  add.reset();
  //when i give add.reset the counter values become 1. when i close and reopen this modal the reopened modal should consists it's own rate of food, so to do that i have to clear the previously existed rate or calculated price of food.. so clear the innertext when it closes adn it probably add the new innertex when u open the openmodal.
  document.getElementById("mealPrice").innerText = "";
// and another prolem now i got is the value changed but the counter carried the previously opened count, so just adding reset counter doesn't mean the count will change u have to chnange the count by doin the same like u did for food rate 
  document.getElementById('count').innerHTML = add.itemsadd();

}

function addToCartDIV() {
// let quantitySelected = document.getElementById("biryaniRice").checked;
// if (quantitySelected) {
//   console.log("rice is selected!");
// } else {
//   alert("Rice is not selected.");
//} //this method of accessing becamr a FAILURE bcz You’ve used id="biryaniRice" for both rice options. That’s invalid HTML — id must be unique across the entire document.u have to give seperate ids for every input. but i cant give seperate ids for every radio button... i have too many options so i searched for a way to access selected radio buttons which is the below method:

 let riceVariety = document.querySelector('input[name="typeofRice"]:checked')?.value;
 //Check Notes: 5/7/25===as i previously said queryselector is really handy. we dont need queryselector all here bcz we can only click one among radio buttons. wae just gonna select only one. so we just need the selected one. 
//  Try to get the .value of the selected radio button.
//instead of giving if else... it suggested ternary method so im goin with it.
// But only if document.querySelector(...) doesnt return null.With ?., it safely returns value and store it in riceVariety or undefined
// TERNARY== condition ? exp1 : exp2  check Notes: 22/7/25

  // the keys are the values given in radio inputs
const dessertPrices = {
  "Gulab Jamun": 89,
  "Bread Halwa": 89,
  "none" : 0
};
let checkedDessert = document.querySelector('input[name="dessert"]:checked')?.value;
let checkedDessertPrice = dessertPrices[checkedDessert];
// alert(`You selected Dessert ${checkedDessert.value}. Price: Rs.${checkedDessertPrice}`);

const accompPrices = {
  "Raita" : 20,
  "Salna" : 80,
  "none" : 0
}
let checkedAccomp = document.querySelector('input[name="accomp"]:checked')?.value;
let ckAccPrice = accompPrices[checkedAccomp];
// alert(`You selected accompaniment: ${checkedAccomp}. Price: Rs.${ckAccPrice}`);
const beveragePrices = {
  "Guava Goodness" : 69,
  "Peach Passion" : 69,
  "Merry Mango" : 69,
  "Sunshine Sarbath" : 69,
  "Masala Cola" : 69,
  "none" : 0
};
let checkedBeverage = document.querySelector('input[name="beverages"]:checked')?.value;
let ckBevPrice = beveragePrices[checkedBeverage];
// alert(`You selected Beverage: ${checkedBeverage}. Price: Rs.${ckBevPrice}`);

if (!riceVariety || !checkedAccomp || !checkedDessert || !checkedBeverage) {
    alert("⚠️ One choice per row — make it count!");
    return;
  }
  // alert(riceVariety)
if(riceVariety && checkedAccomp && checkedDessert && checkedBeverage){
  addedAddOns = ckAccPrice+ckBevPrice+checkedDessertPrice;
  console.log("addedAddOns= " + addedAddOns);
  spanFn(parseInt(addedAddOns));
  spanFn2(parseInt(addedAddOns));
}

let displayAddOns = document.createElement("div");
displayAddOns.id = "addONs";
const peekButton = document.createElement("a");
peekButton.id = "peeked";
// peekButton.href = "#navigateOrderSummary"
peekButton.innerText = "👀 View Orders";
peekButton.style.textDecoration = "none";
peekButton.style.backgroundColor = "#b0e0e6";
peekButton.style.color = "black";
peekButton.style.padding = "2px 10px";
peekButton.style.marginTop = "10px";
peekButton.style.borderRadius = "6px";
peekButton.style.cursor = "pointer";
peekButton.style.zIndex = "1000000000";

    displayAddOns.innerHTML= `
    <h5>Peek at Your Flavorful Picks:</h5>
    <p><strong>Kind of Rice 🍚: </strong> ${riceVariety}.</p>
    <p><strong>Accompaniment ✨: </strong> ${checkedAccomp}. Price: Rs.${ckAccPrice}</p>
    <p><strong>Beverage 🍹: </strong> ${checkedBeverage}. Price: Rs.${ckBevPrice}</p>
    <p><strong>Dessert 🍮: </strong> ${checkedDessert}. Price: Rs.${checkedDessertPrice}</p>`;

displayAddOns.appendChild(peekButton);
document.body.appendChild(displayAddOns);

displayAddOns.style.position = "fixed";
displayAddOns.style.left = "50%";
displayAddOns.style.transform = "translateX(-50%)";
displayAddOns.style.backgroundColor = "#ff6347";
displayAddOns.style.color = "white";
displayAddOns.style.padding = "10px 20px";
displayAddOns.style.borderRadius = "10px";
displayAddOns.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
displayAddOns.style.transition = "all 0.5s ease";
displayAddOns.style.top = "-500px"; 
displayAddOns.style.zIndex = "999999"

    setTimeout(() => {
    displayAddOns.style.top = "20px";
  }, 1000);

  
  setTimeout(() => {
  displayAddOns.style.top = "-500px"; 
}, 5000);

// //   closeOrderModal();
// peekButton.addEventListener("click", () => {
//   console.log("Before hiding:",displayAddOns.style.top);
//   displayAddOns.style.top = "-500px";
//   setTimeout(() => {
//   displayAddOns.remove(); if i didnt remove it shows the previously stored datas
// }, 600); 

// });

peekButton.addEventListener("click", () => {
  console.log("Before hiding: opening ordersummary");
  exposeOrder()
});

const quantity = add.itemsadd();
const amount = parseInt(document.getElementById("amountofMaindish").innerText);
const mealTitle = document.getElementById("mealTitle").innerText;

addToFinalCart({
  name: mealTitle,
  basePrice: amount,
  rice: riceVariety,
  accomp: checkedAccomp,
  beverage: checkedBeverage,
  dessert: checkedDessert,
  addOnPrice: addedAddOns,
  qty: quantity,
  total: (amount * quantity) + addedAddOns
});

closeOrderModal();

}

function addToFinalCart(item) {
  const existing = finalCart.find(i =>
    i.name === item.name &&
    i.rice === item.rice &&
    i.accomp === item.accomp &&
    i.beverage === item.beverage &&
    i.dessert === item.dessert
  ); //i inserted this fn bcz when reselect the same item, instead of becoming 1+1=2, the quantity becomes 1-already existed qty and another 1-currently added qty of same item

  if (existing) {
    existing.qty += item.qty;
    existing.total += item.total;
  } else {
    finalCart.push(item);
  }

  renderCart();
}

// CHECK NOTES: 24/7/25
function renderCart() {
  const cartList = document.getElementById("cartList");
  cartList.innerHTML = "";
  finalCart.forEach((item, index) => { //current value, (its)current index
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
    <div class="cart-information">
      <strong>${item.name}</strong> (₹${item.basePrice} x ${item.qty})<br>
      🍚 Rice: ${item.rice} | ✨ Accomp: ${item.accomp} | 🍹 Bev: ${item.beverage} | 🍮 Dessert: ${item.dessert}<br>
      ➕ Add-ons: ₹${item.addOnPrice} | 💰 Total: ₹${item.total}
      </div>
      <div class="mt-2 text-end">
      <button class="btn btn-sm btn-outline-danger mx-3" onclick="removeItem(${index})">Remove</button>
      </div>
    `;

    cartList.appendChild(li);
  });
  document.getElementById("cartTotal").textContent = getTotal();
}
console.log(finalCart);
//CHECK NOTES:27/06/25
function removeItem(index) {
  finalCart.splice(index, 1);//remove 1 element starting from that index
  renderCart();
}
console.log(finalCart);
function clearCart() {
  finalCart = [];
  renderCart();
}
console.log(finalCart);
//CHECK NOTES:01/08/25
function getTotal() {
  return finalCart.reduce((sum, item) => sum + item.total, 0);
//   const data = [1,2,3,4]
// var sum = data.reduce((accumulator, current Value)=>accumulator+current Value,default value)
}


// riceVariety = false;
// checkedAccomp = false;
// checkedBeverage = false;
// checkedDessert = false;
// console.log("riceVariety=", riceVariety);
// console.log("checkedAccomp=", checkedAccomp);
// console.log("checkedbeve=", checkedBeverage);
// console.log("checkedDessert=", checkedDessert);
// function getSelectedradioValues() {
//   let typeofRice = getSelectedradio("typeofRice");
//   let accomp = getSelectedradio("accomp");
//   let beverages = getSelectedradio("beverages");
//   let dessert = getSelectedradio("dessert");

//   console.log("Rice:", typeofRice);
//   console.log("Accompaniment:", accomp);
//   console.log("Dessert:", dessert);
//   console.log("Beverages:", beverages);
// }



//refer the adddtocart task u previously did to sofa:
function addtoCart(){
    let counter = 1;
  return{ 
    function1() {
    counter++;
    return counter;
  },
  itemsadd() {
    return counter;
  },
  function2(){
    if(counter>1){
      counter--;
    }
    return counter;
  },
  itemssub(){
    return counter;
  },
  reset() {
      counter = 1;
      return counter;
    }
}
}
const add = addtoCart();
function spanFn(addedradioitems){
   document.getElementById('count').innerHTML = add.function1();
   let amount = parseInt(document.getElementById("amountofMaindish").innerText);
   document.getElementById('mealPrice').innerHTML = `
    <b>${(add.itemsadd()*amount)+(addedradioitems || 0)}<b> for ${add.itemsadd()}`

}
function spanFn2(addedradioitems){
    document.getElementById('count').innerHTML = add.function2();
    let amount = parseInt(document.getElementById("amountofMaindish").innerText);
    document.getElementById('mealPrice').innerHTML = `
    <b>${(add.itemsadd()*amount)+(addedradioitems || 0)}<b> for ${add.itemssub()}`
      
}
function clearAllRadios() {
  let allRadios = document.querySelectorAll('input[type="radio"]');
  allRadios.forEach(radio => radio.checked = false);
  console.log("radios got Cleared")
}


function exposeOrder(){
  console.log("order opened")
    const billSection = document.getElementById("newforBillCalculator");
  if (!billSection) {
    alert("⚠️ Hungry? Add something tasty on menu to unlock 🔓 your cart🛒");
    return fnforMenu();
  }
  console.log("✅ Billing section found. Opening...");
  document.getElementById("navigateOrderSummary").style.display = "flex";
}

function disposeOrder(){
  console.log("order closed")
  document.getElementById("navigateOrderSummary").style.display = "none";
}


function calculateTotal() {

  //whithout this my toggles kept throwing errors persistently...checked === true
  document.getElementById('loyaltyToggle')?.checked || false;
document.getElementById('donationToggle')?.checked || false;
  if (document.getElementById('loyaltyToggle')) {
    document.getElementById('loyaltyToggle').addEventListener('change', calculateTotal);
  }
  if (document.getElementById('donationToggle')) {
    document.getElementById('donationToggle').addEventListener('change', calculateTotal);
  }

  let subtotal = getTotal();
  let delivery = 39;
  let packing = 25;
  // i already know this toggle from W3Schools i re-refered and got it from bootsrap
  let donation = donationToggle.checked ? 2 : 0; //should be added
  let discount = loyaltyToggle.checked ? 100 : 0; //should be subtracted

  let taxedAmount = subtotal - discount;
  console.log(taxedAmount);
  let cgst = +(taxedAmount * 0.025).toFixed(2); //gst 2.5% = 2.5/100 = 0.025
  let sgst = +(taxedAmount * 0.025).toFixed(2);

  //Primarily it gave me a output like .00000000000003.. i want that out. so got toFixed.

  let total = taxedAmount + delivery + packing + cgst + sgst + donation;

 document.getElementById('subtotalinfinite').textContent = taxedAmount;
  document.getElementById('cgst').textContent = cgst;
  document.getElementById('sgst').textContent = sgst;
  document.getElementById('total').textContent = total.toFixed(2);
}
