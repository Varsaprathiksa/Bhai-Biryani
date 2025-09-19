// // function fn2ViewOrders(){
// //     console.log("View your Order Summary")
// //     console.log(document.getElementById("forContentArea"));

// //     const orderVContentArea = document.getElementById("forContentArea");
// //     orderVContentArea.innerHTML = "";
// //     console.log(theOnlyDiv)
// //     console.log(orderVContentArea);

// //     const toViewOrders = document.createElement("div");
// //     toViewOrders.id = "div4VorderPg";
// //     orderVContentArea.appendChild(toViewOrders);
// //     console.log(toViewOrders);

// //     const vOrderpgDiv = document.getElementById("div4VorderPg");
// //     vOrderpgDiv.innerHTML = `
// //     <div class="container py-4" id="viewOrderPage" style="display: none;">
// //     <h2 class="mb-4 text-center text-light">🛒 Your Order Summary</h2>

// //     <!-- Cart Items -->
// //     <div class="card mb-3">
// //       <div class="card-body">
// //         <h3 class="mt-5">🛒 Your Cart</h3>
// //         <ul id="cartList" class="list-group mb-3"></ul>
// //         <p><strong>Total: ₹<span id="cartTotal">0</span></strong></p>
// //         <button class="btn btn-danger" onclick="clearCart()">Remove All Items</button>
// //       </div>
// //     </div>

// //     <!-- Add-ons -->
// //     <div class="card mb-3">
// //       <div class="card-body">
// //         <h5>Add Anch Box</h5>
// //         <p class="text-muted">Extra 6-8 minutes of dum for restaurant-quality biryani! (Free)</p>
// //         <textarea class="form-control mb-2" placeholder="Add kitchen instructions..."></textarea>
// //         <button class="btn btn-outline-primary w-100">Add</button>
// //       </div>
// //     </div>

// //     <!-- Loyalty & Donation -->
// //     <div class="card mb-3">
// //       <div class="card-body">
// //         <div class="form-check form-switch">
// //           <input class="form-check-input" type="checkbox" id="loyaltyToggle">
// //           <label class="form-check-label" for="loyaltyToggle">Use 100 BBK Loyalty Points (₹100 off)</label>
// //         </div>
// //         <div class="form-check form-switch mt-2">
// //           <input class="form-check-input" type="checkbox" id="donationToggle">
// //           <label class="form-check-label" for="donationToggle">Donate ₹2 to Project Didi</label>
// //         </div>
// //       </div>
// //     </div>

// //     <!-- Billing -->
// //     <div class="card">
// //       <div class="card-body">
// //         <h5>💳 Billing Details</h5>
// //         <ul class="list-group list-group-flush">
// //           <li class="list-group-item">Sub Total: ₹<span id="subtotal"></span></li>
// //           <li class="list-group-item">Delivery Charges: ₹39</li>
// //           <li class="list-group-item">Packing Charge: ₹25</li>
// //           <li class="list-group-item">CGST (2.5%): ₹<span id="cgst">21.55</span></li>
// //           <li class="list-group-item">SGST (2.5%): ₹<span id="sgst">21.55</span></li>
// //           <li class="list-group-item fw-bold">Total: ₹<span id="total">904.1</span></li>
// //         </ul>
// //       </div>
// //     </div>
// //   </div>`;
// // }


//   const orderVContentArea = document.getElementById("forContentArea");
//     console.log(theOnlyDiv)
//     console.log(orderVContentArea);

//     const toViewOrders = document.createElement("div");
//     toViewOrders.id = "div4VorderPg";
//     toViewOrders.className = "view-section-different";
//     toViewOrders.style.display = "none";
//     orderVContentArea.appendChild(toViewOrders);
//     console.log(toViewOrders);

//     const vOrderpgDiv = document.getElementById("div4VorderPg");
//     vOrderpgDiv.innerHTML =`
//     <div class="container py-4" id="navigateOrderSummary">
//     <h2 class="mb-4 text-center text-light">🛒 Your Order Summary</h2>

//     <!-- Cart Items -->
//     <div class="card mb-3">
//       <div class="card-body">
//         <h3 class="mt-5">🛒 Your Cart</h3>
//         <ul id="cartList" class="list-group mb-3"></ul>
//         <p><strong>Total: ₹<span id="cartTotal">0</span></strong></p>
//         <button class="btn btn-danger ms-5 mt-1" onclick="clearCart()">Remove All Items</button>
//         <button type="button" class="btn btn-success ms-5 mt-1" id="billinDetails">👀 Looks Delicious! 🍽️ Let’s Feast</button>
//       </div>
//     </div>

//     <!-- Add-ons -->
//     <div class="card mb-3">
//       <div class="card-body">
//         <h5>Add Anch Box</h5>
//         <p class="text-muted">Extra 6-8 minutes of dum for restaurant-quality biryani! (Free)</p>
//         <textarea class="form-control mb-2" placeholder="Add kitchen instructions..."></textarea>
//         <button class="btn btn-outline-primary w-100">Add</button>
//       </div>
//     </div>

//     <!-- Loyalty & Donation -->
//     <div class="card mb-3">
//       <div class="card-body">
//         <div class="form-check form-switch d-flex align-items-center">
//           <input class="form-check-input" type="checkbox" id="loyaltyToggle">
//           <label class="form-check-label ms-2" for="loyaltyToggle">Use 100 BBK Loyalty Points (₹100 off)</label>
//         </div>
//         <div class="form-check form-switch mt-2 d-flex align-items-center">
//           <input class="form-check-input" type="checkbox" id="donationToggle">
//           <label class="form-check-label ms-2" for="donationToggle">Donate ₹2 to Project Didi</label>
//         </div>
//       </div>
//     </div>

//     <!-- Billing -->
//     <div class="card" id="navigatebilnDetails">
//       <div class="card-body">
//         <h5>💳 Billing Details</h5>
//         <ul class="list-group list-group-flush">
//           <li class="list-group-item">Sub Total: ₹<span id="subtotalinfinite">0</span></li>
//           <li class="list-group-item">Delivery Charges: ₹39</li>
//           <li class="list-group-item">Packing Charge: ₹25</li>
//           <li class="list-group-item">CGST (2.5%): ₹<span id="cgst">21.55</span></li>
//           <li class="list-group-item">SGST (2.5%): ₹<span id="sgst">21.55</span></li>
//           <li class="list-group-item fw-bold">Total: ₹<span id="total">0</span></li>
//         </ul>
        
//         <button class="btn btn-outline-warning w-100 mt-1 fw-bold"> 🔥🍽️ Fuel Your Cravings 😋🍲</button>
//       </div>
//     </div>
//   </div>`;

