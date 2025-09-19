const theOnlyDiv = document.getElementById("wholeMainDiv");

document.addEventListener("DOMContentLoaded", forNavbar("Login"));

  console.log(theOnlyDiv)

let islogIn = false;
const userState = {
  isLoggedIn: false,
  username: "",
  emailId: "",
  callNum:""
};
//like u did in java Bank System
function renderNavbar(userName,emailid,mobnum,) {
  userState.isLoggedIn = true; 
  userState.username = userName;
  userState.emailId = emailid;
  userState.callNum = mobnum;
  forNavbar(userName);
  const loginBtn = document.getElementById("login");
  loginBtn.onclick = function () {
    showUserProfilepopup(); 
  };
}
function showUserProfilepopup() {
  console.log("show profile called")
  // alert("You are already Logged In")
  console.log("Logged in")
   let existingPopup = document.getElementById("showProfile");
  if (existingPopup) {
    existingPopup.remove();
  }
    let shoPro_btn1 = document.createElement("button");
    shoPro_btn1.id = "shoPro_btn1";
    shoPro_btn1.innerText = "OK!";
    shoPro_btn1.onclick = showProfile;

    let shoPro_btn2 = document.createElement("button")
    shoPro_btn2.id = "shoPro_btn2";
    shoPro_btn2.innerText = "Cancel"
    shoPro_btn2.onclick = cancelclick;
    
    let profile_shower = document.createElement("div");
    profile_shower.id = "showProfile";
    profile_shower.textContent = "You are Already Logged In! Click OK to View Profile"
    // profile_shower.style.top = "2%";
    profile_shower.appendChild(shoPro_btn1);
    profile_shower.appendChild(shoPro_btn2);
    document.body.appendChild(profile_shower);

    setTimeout(() => {
    profile_shower.style.top = "2%";
  }, 10);

}
function cancelclick(){
    let popup = document.getElementById("showProfile");
    if(popup){
    popup.style.top = "-100%";
  }
}

function showProfile() {
  console.log("Showing user profile...");

  const user = {
    name: userState.username,
    email: userState.emailId,
    mobileNum: userState.callNum
  };
  cancelclick();

  const profileView = document.createElement("div");
  profileView.id = "userProfileDetails";
  profileView.innerHTML = `
    <h3>👤 Profile Details</h3>
    <p><strong>Name:</strong> ${user.name}</p>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Contact:</strong> ${user.mobileNum}</p>
    <button onclick="document.getElementById('userProfileDetails').remove()">Close</button>
  `;
  document.body.appendChild(profileView);
  setTimeout(() => {
    profileView.style.top = "2%";
  }, 1000);
}

function forNavbar(Login){

  const create_navDiv = document.createElement("div");
  create_navDiv.id = "forNavbar";
  theOnlyDiv.appendChild(create_navDiv);
    const navDiv = document.querySelector("#forNavbar");
    navDiv.innerHTML = 
    `<nav class="navbar navbar-expand-xl ">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src="./images/logo.png" alt="logo" class="logo" onclick = "mainPageFunction()" id="home">
          </a>
          <div class="nearLogo">
          <a class="navbar-brand" href="#" onclick = "mainPageFunction()">
            Bhai
          </a>
          <a class="navbar-brand" href="#" onclick = "mainPageFunction()">
            Biryani
          </a>
          </div>
          <div class="orderforTop">
            <p>Location</p>
            <button onclick="fnforMenu()">&#x1F554; Order Now</button>
          </div>
          <div class="deliveryforTop">
            
            <span>&#128757; Delivery</span>
          </div>
          <button class="navbar-toggler navbar-dark mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
             <ul class="navbar-nav">
             <li class="nav-item ">
                    <a class="nav-link" href="#" id="search" onclick="fnforSearch()">Search</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" id="outlets" onclick="exposeOrder()">View Orders</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#div4Menupage" id="menu" onclick="fnforMenu()">Menu</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" id="bookTable" onclick="tableBookingFn()">Book a Table</a>
                </li>
                <li class="nav-item login">
                    <a class="nav-link" href="#" id="login">
                        
                        </a>
                </li>
            </ul>
          </div>
        </div>
      </nav>`;
      const givelogin_Argument = document.getElementById("login");
      givelogin_Argument.innerHTML = `<i class="material-icons">person</i> ${Login}`;
      
  console.log(theOnlyDiv);
  console.log(create_navDiv);
  console.log(navDiv);
      
  // givelogin_Argument.addEventListener("click", function (event) {
  //     event.preventDefault(); 
  //     forLogin();
  //   });
}


const contentArea = document.createElement("div");
  contentArea.id = "forContentArea";
  theOnlyDiv.appendChild(contentArea);
  console.log(contentArea)

    const link = document.getElementById("login");
    link.addEventListener("click", function (event) {
      event.preventDefault(); 
      forLogin();
    });

    let storedPhNum = "";
    let genratedOTP = "";
     //i had to do this for further use bcz i couldnt use these as it was stored inside fn
    let currentPhase = "login";
    //i did this bcz while being at otp page i clicked login again, the login page loaded again adn got appended with the existed, so to avoid that i need to give a condition that if im at login phase u shouldnt trigger login again. so im globally sayin my current phase is login so u can trigger login and i updated my current phase as otp in opt procces so now current phase is not login and now i cant access login. so once i logged in i can never access login unless untill i refresh the psge


function forLogin() {
  if (currentPhase !== "login") {
    console.log("Login already processed. Skipping...");
    return;
  }
  
  console.log("forlogin called");

  const contentArea1 = document.getElementById("forContentArea");
  console.log(contentArea1);
  document.querySelector("#div4MainPage").innerHTML = "";




  const create_loginDiv = document.createElement("div");
  create_loginDiv.id = "forLogin";
  contentArea1.appendChild(create_loginDiv);
  console.log(theOnlyDiv);
  console.log(create_loginDiv);
      // document.getElementById("div4Menupage").style.display = "none";
    // document.getElementById("forLogin").style.display = "block";
    const loginDiv = document.getElementById("forLogin");
    console.log(loginDiv);
    // const loginTarget = ensureLoginContentExists();
    loginDiv.innerHTML = ` <div class="auth-box container w-75 my-5">
    <span class="close-btn"><a href="">&times;</a></span>
    <h2>Sign In/Sign Up</h2>
    <form>
      <div class="mb-3">
        <label for="mobile" class="form-label">Please enter your mobile number</label>
        <input type="tel" class="form-control" id="mobile" name="mobile" placeholder="Enter here" pattern="[0-9]{10}" maxlength="10" minlength="10" autofocus required>
      </div>
      <button type="submit" class="btn btn-next" id="movetoOTP" onclick = "processOTP(event)">NEXT</button>
    </form>
  </div>`;
  document.getElementById("mobile").focus();

 
}

function processOTP(event){
  event.preventDefault();
   // Update phase
  currentPhase = "otp";
  console.log(currentPhase);
    console.log("otp function triggered");

  const phNum = document.getElementById("mobile").value.trim();
  storedPhNum = document.getElementById("mobile").value.trim(); //this is bcz i coldnt use the phnum in resend otp so i saved it globally for further access.

  //at first i jsut gave phnum!=null,  because i thought that if user doesnt enter any values it becomes null. but it turned out that even if i click without entering it gives otp. Check NOTES: 5/7/25 to know more about null.
  // null → The student didn’t submit the form at all.
  // "" → The student submitted the form but left the name field blank. so that when u click next without giving !="" it moves on to the next
  //Both are “empty,” but one is absence, the other is presence with emptiness.
  if(phNum!=null && phNum!=""){
//refer the otp Task u already did:
var n1 = Math.floor(Math.random(1)*9+1);
var n2 = Math.floor(Math.random()*9+1);
var n3 = Math.floor(Math.random()*9+1);
var n4 = Math.floor(Math.random()*9+1);
var n5 = Math.floor(Math.random()*9+1);
var n6 = Math.floor(Math.random(1)*9+1);

var genratedOTP = String(n1) + String(n2) + String(n3) + String(n4) + String(n5) + String(n6);
console.log(genratedOTP)
var otpAlert = Number(genratedOTP);
console.log(otpAlert)
alert("your OTP is "+ otpAlert);

  document.getElementById("forLogin").innerHTML = "";

  const create_otpSection = document.createElement("div");
  create_otpSection.id = "otpSection";
  theOnlyDiv.appendChild(create_otpSection);
  console.log(theOnlyDiv);
  console.log(create_otpSection)
  const otp_section = document.getElementById("otpSection");
  console.log(otp_section)
  otp_section.innerHTML = 
  `    <div class="container d-flex justify-content-center align-items-center">
    <div class="card p-4 shadow-sm  otpDiv">
      <h4 class="mb-3"><span style="font-size: 2rem; font-weight: bold;">&lt;</span> OTP Verification</h4>
      <p class="text-center fs-4">Please enter the 6-digit verification code sent to</p>
      <p class="text-center fs-4" id="show-phnum"><strong> </strong></p> 
      <form action="" class="otpForm">
      <div class="d-flex justify-content-center otp-box my-5">
        <input type="tel" pattern="[0-9]{1}" maxlength="1" class="form-control" id="otp1" autofocus required/>
        <input type="tel" pattern="[0-9]{1}" maxlength="1" class="form-control" id="otp2" required/>
        <input type="tel" pattern="[0-9]{1}" maxlength="1" class="form-control" id="otp3" required/>
        <input type="tel" pattern="[0-9]{1}" maxlength="1" class="form-control" id="otp4" required/>
        <input type="tel" pattern="[0-9]{1}" maxlength="1" class="form-control" id="otp5" required/>
        <input type="tel" pattern="[0-9]{1}" maxlength="1" class="form-control" id="otp6" required/>
      </div>

      <p class="text-center mb-3">
        Did not receive the OTP? <a href="#" class="resend-link" id="resendOTP">Resend OTP?</a>
      </p>

      <div class="d-grid">
        <button type="submit" class="btn verify-btn" id="otpVerificationBtn">Verify and Proceed</button>
      </div>
      </form>
    </div>
  </div>`;
  document.getElementById("otp1").focus();

  const inputs = document.querySelectorAll('.otp-box input');
   inputs.forEach((input, index) => { input.addEventListener('input', () => { 
    if (input.value.length === 1 && index < inputs.length - 1) { 
      inputs[index + 1].focus(); } }); });
      
    //addeventllistener can listen input. sir suggested "Change", but i gave change, but id didn't worked it will work only when input LOSES FOCUS and value changed but i wnat the focus to do work when i give input so if i give input it works when user types in that input field. check NOTES: 5/7/25.... it says give input for otp or input validations so go with input

  const otpResend = document.getElementById("resendOTP");
otpResend.addEventListener("click", function (event) {
      event.preventDefault(); 
      resendtheOTP();
    });

  const showNum = document.getElementById("show-phnum");
  showNum.textContent = "+91 "+phNum.slice(0,3)+"*****"+phNum[phNum.length-2]+phNum[phNum.length-1];

  document.querySelector(".otpForm").addEventListener("submit", function(e) {
  e.preventDefault(); 

  const userEnteredOTP = 
    document.getElementById("otp1").value +
    document.getElementById("otp2").value +
    document.getElementById("otp3").value +
    document.getElementById("otp4").value +
    document.getElementById("otp5").value +
    document.getElementById("otp6").value;

  if (userEnteredOTP === genratedOTP) {
    console.log("Same GOOD");
    forFinalLoginForm(event);
  } else {
    console.log("wrong");
    alert("❌ Incorrect OTP. Please try again.");
    resendtheOTP();
  }
});
  }
}


function resendtheOTP(){
var n1 = Math.floor(Math.random(1)*9+1);
var n2 = Math.floor(Math.random()*9+1);
var n3 = Math.floor(Math.random()*9+1);
var n4 = Math.floor(Math.random()*9+1);
var n5 = Math.floor(Math.random()*9+1);
var n6 = Math.floor(Math.random(1)*9+1);

var genratedOTP = String(n1) + String(n2) + String(n3) + String(n4) + String(n5) + String(n6);
console.log(genratedOTP)
var otpAlert = Number(genratedOTP);
console.log(otpAlert)
alert("your OTP is "+ otpAlert);

  document.getElementById("otpSection").innerHTML = "";

  const create_otpSection = document.createElement("div");
  create_otpSection.id = "otpSection";
  theOnlyDiv.appendChild(create_otpSection);
  console.log(theOnlyDiv);
  console.log(create_otpSection)
  const otp_section = document.getElementById("otpSection");
  console.log(otp_section)
  otp_section.innerHTML = 
  `    <div class="container d-flex justify-content-center align-items-center">
    <div class="card p-4 shadow-sm  otpDiv">
      <h4 class="mb-3"><span style="font-size: 2rem; font-weight: bold;">&lt;</span> OTP Verification</h4>
      <p class="text-center fs-4">Please enter the 6-digit verification code sent to</p>
      <p class="text-center fs-4" id="show-phnum"><strong> </strong></p> 
      <form action="" class="otpForm">
      <div class="d-flex justify-content-center otp-box my-5">
        <input type="tel" pattern="[0-9]{1}" maxlength="1"class="form-control" id="otp1" autofocus required/>
        <input type="tel" pattern="[0-9]{1}" maxlength="1" class="form-control" id="otp2" required/>
        <input type="tel" pattern="[0-9]{1}" maxlength="1" class="form-control" id="otp3" required/>
        <input type="tel" pattern="[0-9]{1}" maxlength="1" class="form-control" id="otp4" required/>
        <input type="tel" pattern="[0-9]{1}" maxlength="1" class="form-control" id="otp5" required/>
        <input type="tel" pattern="[0-9]{1}" maxlength="1" class="form-control" id="otp6" required/>
      </div>

      <p class="text-center mb-3">
        Did not receive the OTP? <a href="#" class="resend-link" id="resendOTP">Resend OTP?</a>
      </p>

      <div class="d-grid">
        <button type="submit" class="btn verify-btn" id="otpVerificationBtn">Verify and Proceed</button>
      </div>
      </form>
    </div>
  </div>`;

  //i gave  maxlength="1" bcz when accidentallly typed a extra num int the input, it got typed like the input didnt actually deny it. so that i... 
  
  document.getElementById("otp1").focus();

    const inputs = document.querySelectorAll('.otp-box input');
   inputs.forEach((input, index) => { input.addEventListener('input', () => { 
    if (input.value.length === 1 && index < inputs.length - 1) { 
      inputs[index + 1].focus(); } }); });

  const otpResend = document.getElementById("resendOTP");
otpResend.addEventListener("click", function (event) {
      event.preventDefault(); 
      resendtheOTP();
    });
  const showNum = document.getElementById("show-phnum");
  showNum.textContent = "+91 "+storedPhNum.slice(0,3)+"*****"+storedPhNum[storedPhNum.length-2]+storedPhNum[storedPhNum.length-1];

  document.querySelector(".otpForm").addEventListener("submit", function(e) {
  e.preventDefault(); 

  const userEnteredOTP = 
    document.getElementById("otp1").value +
    document.getElementById("otp2").value +
    document.getElementById("otp3").value +
    document.getElementById("otp4").value +
    document.getElementById("otp5").value +
    document.getElementById("otp6").value;

  if (userEnteredOTP === genratedOTP) {
    console.log("Same GOOD");
    loginHandler(e); // i gave the forFinalLoginForm(event) already at the process otp, so when i gave it here agin it striked out the event and didnt perform so edge suggested me to store the function and to call that new fn name. and it worked.
  } else {
    console.log("wrong");
    alert("❌ Incorrect OTP. Please try again.");
    resendtheOTP();
  }
});
  }


const loginHandler = forFinalLoginForm;
function forFinalLoginForm(event){
  event.preventDefault();
  alert("✅ OTP Verified Successfully!🎉");
  document.getElementById("otpSection").innerHTML = "";
  console.log(theOnlyDiv);
  const create_AfterOtp = document.createElement("div");
  create_AfterOtp.id = "presentAfterOtp";
  console.log(create_AfterOtp);
  theOnlyDiv.appendChild(create_AfterOtp);
  const present_AfterOtp = document.getElementById("presentAfterOtp");
  console.log(present_AfterOtp);
  present_AfterOtp.innerHTML = `
<div class="container my-5">
  <div class="row justify-content-center">
    <div class="col-md-6 col-sm-10">
      <div class="card p-4 shadow-sm">
        <h4 class="mb-4">Basic Details</h4>

        <form id="finalLoginForm">
          <div class="mb-3">
            <label for="username" class="form-label">Name</label>
            <input type="text" id="username" name="username" class="form-control" placeholder="Enter your name" autofocus required>
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">Email ID</label>
            <input type="email" id="email" name="email" class="form-control" placeholder="Enter your email" required>
          </div>

          <p class="text-muted small">We will be sending bills to this email.</p>

          <button type="submit" class="btn btn-warning w-100 fw-bold" id="loginFinished">Verify and Proceed</button>

          <p class="text-center mt-3 small text-muted">
            By clicking on Continue you are agreeing our 
            <a href="#" class="text-primary text-decoration-none">Terms & Condition</a>
          </p>
        </form>
      </div>
    </div>
  </div>
</div>`;
document.getElementById("username").focus();

 const finalForm = document.getElementById("finalLoginForm");
//   finalForm.addEventListener("submit", function (e) {
//     e.preventDefault();
//     const using_Username = document.getElementById("username").value;
//     forNavbar(using_Username + " 💚");
//     present_AfterOtp.innerHTML="";
//     mainPageFunction();
//     isLoggedIn = true;  
//     tableBookingFn(using_Username+ " 💚")  
// if i giv tableBookingFn() 1st, it runs first, injecting the Book Table content into #forContentArea. But then mainPageFunction() runs and likely overwrites that same content area, replacing it with the homepage layout. So the Book Table content disappears immediately.
//   });

// finalForm.addEventListener("submit", function (e) {
//   e.preventDefault();

//   const using_Username = document.getElementById("username").value;
//   userState.isLoggedIn = true;
//   userState.username = using_Username + " 💚";

//   forNavbar(userState.username); // show updated navbar
//   present_AfterOtp.innerHTML = "";

//   mainPageFunction(); // show home page immediately
  
//     isLoggedIn = true; 
//   console.log("isLoggedIn value:", isLoggedIn);
// });

finalForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const using_Username = document.getElementById("username").value.trim();
  const using_email = document.getElementById("email").value.trim();
  renderNavbar(using_Username + " 💫",using_email,storedPhNum); 

  present_AfterOtp.innerHTML = "";
  mainPageFunction();
  islogIn = true;
  console.log("islogIn= "+islogIn);

});

}
