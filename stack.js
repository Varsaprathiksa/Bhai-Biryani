

// document.getElementById("newforBillCalculator").innerHTML = ``;


//    const billinBTN = document.getElementById("billinDetails");
//   if (billinBTN) {
//     console.log("biln btn exists")
    
// console.log("loyaltyToggle:", document.getElementById("loyaltyToggle"));
//     billinBTN.addEventListener("click", function (event) {
//       event.preventDefault();
//       calculateTotal();
//       location.href = "#navigatebilnDetails";
//     });
//   }
//   else{console.log("biln btn doesnt exists")}


// const loyaltyToggle = document.getElementById('loyaltyToggle');
// const donationToggle = document.getElementById('donationToggle');
// const subtotalLast = document.getElementById('subtotalinfinite');
// const cgstLast= document.getElementById('cgst');
// const sgstLast = document.getElementById('sgst');
// const totalLast = document.getElementById('total');

// function calculateTotal() {
//   console.log("calculateTotal called");
//   let subtotalfinal = getTotal();
//   let delivery = 39;
//   let packing = 25;
//   let donation = donationToggle.checked ? 2 : 0; //should be added
//   let discount = loyaltyToggle.checked ? 100 : 0; //should be subtracted
// console.log("loyaltyToggle:", document.getElementById("loyaltyToggle")); 

//   let taxedAmount = subtotalfinal - discount;
//   let cgst = +(taxedAmount * 0.025).toFixed(2); //gst 2.5% = 2.5/100 = 0.025
//   let sgst = +(taxedAmount * 0.025).toFixed(2);

//   let total = taxedAmount + delivery + packing + cgst + sgst + donation;

//   subtotalLast.textContent = taxedAmount;
//   cgstLast.textContent = cgst;
//   sgstLast.textContent = sgst;
//   totalLast.textContent = total.toFixed(2);
// }

// loyaltyToggle.addEventListener('change', calculateTotal);
// donationToggle.addEventListener('change', calculateTotal);

// Initial calculation
// calculateTotal();

// document.addEventListener("DOMContentLoaded", () => {
//   const triggerBtn = document.getElementById("billinDetails"); // or whatever button you want
//   if (triggerBtn) {
//     triggerBtn.addEventListener("click", () => {
//        calculateTotal()
//        bindBillingListeners() ;
//     });
//   }
// });
// function setupBillingIfAvailable() {
//   const billingSection = document.getElementById("newforBillCalculator");
//   if (billingSection) {
//     bindBillingListeners();
//     calculateTotal();
//   } else {
//     console.warn("Billing section not found yet. Retrying...");
//     setTimeout(setupBillingIfAvailable, 500); // Retry after 500ms
//   }
// }


// function renderBillingSection() {
//   document.getElementById("navigateOrderSummary").innerHTML = `
//     <!-- your full billing HTML here -->
//   `;

  // Wait for DOM to update before running calculateTotal

//  setTimeout(() => {
//   bindBillingListeners(); // attach checkbox listeners
//   calculateTotal();       // run initial calculation
// }, 0);
  
// }

// function calculateTotal() {
//   const loyaltyToggle = document.getElementById('loyaltyToggle');
//   const donationToggle = document.getElementById('donationToggle');

//   const useLoyalty = loyaltyToggle?.checked || false;
//   const donate = donationToggle?.checked || false;

//   // const subtotalEl = document.getElementById('subtotalinfinite');
//   const subtotalEl = document.getElementById('subtotalinfinite') ?? document.querySelector('[data-subtotal]');

//   const cgstEl = document.getElementById('cgst');
//   const sgstEl = document.getElementById('sgst');
//   const totalEl = document.getElementById('total');

//   if (!subtotalEl || !cgstEl || !sgstEl || !totalEl) {
//     console.warn("Billing elements not found in DOM.");
//     return;
//   }

//   let subtotal = getTotal(); // your cart total logic
//   let delivery = 39;
//   let packing = 25;
//   let discount = useLoyalty ? 100 : 0;
//   let donationAmount = donate ? 2 : 0;

//   let taxedAmount = subtotal - discount;
//   let cgst = +(taxedAmount * 0.025).toFixed(2);
//   let sgst = +(taxedAmount * 0.025).toFixed(2);
//   let total = taxedAmount + delivery + packing + cgst + sgst + donationAmount;

//   subtotalEl.textContent = taxedAmount;
//   cgstEl.textContent = cgst;
//   sgstEl.textContent = sgst;
//   totalEl.textContent = total.toFixed(2);
// }

// function bindBillingListeners() {
//   const loyaltyToggle = document.getElementById('loyaltyToggle');
//   const donationToggle = document.getElementById('donationToggle');

//   if (loyaltyToggle) {
//     loyaltyToggle.addEventListener('change', calculateTotal);
//   }
//   if (donationToggle) {
//     donationToggle.addEventListener('change', calculateTotal);
//   }
// }


// function calculateTotal() {
//   const loyaltyToggle = document.getElementById('loyaltyToggle');
//   const donationToggle = document.getElementById('donationToggle');

//   const useLoyalty = loyaltyToggle?.checked || false;
//   const donate = donationToggle?.checked || false;

//   let subtotal = getTotal();
//   let delivery = 39;
//   let packing = 25;
//   let discount = useLoyalty ? 100 : 0;
//   let donation = donate ? 2 : 0;

//   let taxedAmount = subtotal - discount;
//   let cgst = +(taxedAmount * 0.025).toFixed(2);
//   let sgst = +(taxedAmount * 0.025).toFixed(2);
//   let total = taxedAmount + delivery + packing + cgst + sgst + donation;

//   const subtotalLast = document.getElementById('subtotalinfinite').innerText;
//   const cgstLast = document.getElementById('cgst').innerText;
//   const sgstLast = document.getElementById('sgst').innerText;
//   const totalLast = document.getElementById('total').innerText;

  
//   if (subtotalLast && cgstLast && sgstLast && totalLast) {
//     subtotalLast.textContent = taxedAmount;
//     cgstLast.textContent = cgst;
//     sgstLast.textContent = sgst;
//     totalLast.textContent = total.toFixed(2);
//   } else {
//     console.warn("Billing elements not found in DOM.");
//   }


// }
// someContainer.insertAdjacentHTML("beforeend", `
//   <li>Sub Total: ₹<span id="subtotalinfinite">0</span></li>
// `);
// const subtotalEl = document.getElementById("subtotalinfinite");


// setTimeout(() => {
//   const subtotalEl = document.getElementById("subtotalinfinite");
// const subtotalLast = document.getElementById('subtotalinfinite');
// const cgstLast= document.getElementById('cgst');
// const sgstLast = document.getElementById('sgst');
// const totalLast = document.getElementById('total');
//   console.log("Now it's found:", subtotalLast);
//   console.log("Now it's found:", cgstLast);
//   console.log("Now it's found:", sgstLast);
//   console.log("Now it's found:",totalLast );
// }, 0);

// const loyaltyToggle = document.getElementById('loyaltyToggle');
// const donationToggle = document.getElementById('donationToggle');

//   const useLoyalty = loyaltyToggle?.checked || false;
//   const donate = donationToggle?.checked || false;

// function bindBillingListeners() {
//   const loyaltyToggle = document.getElementById('loyaltyToggle');
//   const donationToggle = document.getElementById('donationToggle');

//   if (loyaltyToggle) {
//     loyaltyToggle.addEventListener('change', calculateTotal);
//   }
//   if (donationToggle) {
//     donationToggle.addEventListener('change', calculateTotal);
//   }
// }

// const subtotalLast = document.getElementById('subtotalinfinite');
// const cgstLast= document.getElementById('cgst');
// const sgstLast = document.getElementById('sgst');
// const totalLast = document.getElementById('total');

// function calculateTotal() {
//   let subtotal = getTotal();
//   let delivery = 39;
//   let packing = 25;
//   let donation = donationToggle.checked ? 2 : 0; //should be added
//   let discount = loyaltyToggle.checked ? 100 : 0; //should be subtracted

//   let taxedAmount = subtotal - discount;
//   let cgst = +(taxedAmount * 0.025).toFixed(2); //gst 2.5% = 2.5/100 = 0.025
//   let sgst = +(taxedAmount * 0.025).toFixed(2);

//   let total = taxedAmount + delivery + packing + cgst + sgst + donation;

//   subtotalLast.textContent = taxedAmount;
//   cgstLast.textContent = cgst;
//   sgstLast.textContent = sgst;
//   totalLast.textContent = total.toFixed(2);
// }


// loyaltyToggle.addEventListener('change', calculateTotal);
// donationToggle.addEventListener('change', calculateTotal);

// // Initial calculation
// calculateTotal();

// try {
//   calculateTotal();
// } catch (err) {
//   console.error("Error in calculateTotal:", err);
// }
