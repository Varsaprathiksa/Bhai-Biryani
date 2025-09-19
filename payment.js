function makePaymentfn(){

  if (islogIn) {
    console.log("Running makePayment function for logged-in user.");
  } else {
    alert("Tap to log in and unlock your delicious checkout 🍲🔓💳");
    return mainPageFunction();
  }
  
  document.getElementById("paymentmakinDiv").style.display = "flex";

  const payUser = {
    name: userState.username,
    email: userState.emailId,
    mobileNum: userState.callNum
  }
  console.log(userState.username);
  console.log(userState.emailId);
  console.log(userState.callNum);

  document.getElementById("payName").textContent = payUser.name;
  document.getElementById("payEmail").textContent = payUser.email;
  document.getElementById("payPhone").textContent = payUser.mobileNum;

  document.getElementById("paymentCartSummary").innerHTML = document.querySelector(".cart-information").innerHTML;
  document.getElementById("paymentTotal").innerHTML = document.getElementById("makepaymentbillin").innerHTML;
}

function disposePayment() {
      document.getElementById("paymentmakinDiv").style.display = "none";
}

function processPayment() {
    const street = document.getElementById("userStreet").value.trim();
  const city = document.getElementById("userCity").value.trim();
  const pincode = document.getElementById("userPincode").value.trim();

  if (!street || !city || !pincode) {
    alert("🚨 Please fill in all address fields.");
    return;
  }

  const fullAddress = `${street}, ${city}, ${pincode}`;
  const grandTotal = document.getElementById("total").textContent;

    alert(`✅ Payment of ₹${grandTotal} successful! 
       Delivering to: ${fullAddress}`);

     disposePayment()
}