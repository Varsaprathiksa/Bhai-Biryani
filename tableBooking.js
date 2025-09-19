
let booktabFinished = false;
function tableBookingFn() {

  
console.log("booktabFinished = "+booktabFinished);

      if (islogIn) {
    console.log("Running tableBooking function for logged-in user.");
  } else {
    alert("Access denied. Please log in.");
    return mainPageFunction();
  }

    
    const contentArea3 = document.getElementById("forContentArea");
    contentArea3.innerHTML = "";

    const bookTablePage = document.createElement("div");
    bookTablePage.id = "bookTablePg";
    contentArea3.appendChild(bookTablePage);

    const bukTab_div = document.querySelector("#bookTablePg");
    bukTab_div.innerHTML = `
    <div id="userProfile" class="container userProfile">
      <img src="./images/userProfile.png" alt="userProfile" id="usrProf-img" class="me-5">
      <div>
        <h2 id="usrnmNprof">User Name</h2>
        <a href="">Edit Profile<i class="fa fa-edit" style="font-size:24px"></i></a>
      </div>
    </div>
    
    <div class="container search-div">
      <input type="text" id="searchInput" placeholder="Enter Store Location" />
      <button id="searchBtn"><img src="./images/Search.png" alt="Search" class="search-img"></button>
      <div id="searchResult"></div>
    </div>


<div id="outletContainer" class="container px-5">
  <!-- Example outlet cards -->
  <div class="outletCard">
    <div class="flex1">
          <img src="./images/logo.png" alt="logo">
          <div>
          <span>Bhai</span>
          <span>Biryani</span>
          </div>
    </div>
    <div class="flex2">
      <h5 class="getSearch" data-city="Chennai">Bhai Biryani - Chennai</h5>
      <p>10 am to 5 pm</p>
      <button id="booking" onclick="makeReservation('chennai')">Book a Table</button>
      <button id="getDirection">Get Direction</button>
    </div>
  </div>
  <div class="outletCard">
    <div class="flex1">
          <img src="./images/logo.png" alt="logo">
          <div>
          <span>Bhai</span>
          <span>Biryani</span>
          </div>
    </div>
    <div class="flex2">
      <h5 class="getSearch" data-city="Madurai">Bhai Biryani - Madurai</h5>
      <p>10 am to 5 pm</p>
      <button id="booking" onclick="makeReservation('madurai')">Book a Table</button>
      <button id="getDirection">Get Direction</button>
    </div>
  </div>
  <div class="outletCard">
    <div class="flex1">
          <img src="./images/logo.png" alt="logo">
          <div>
          <span>Bhai</span>
          <span>Biryani</span>
          </div>
    </div>
    <div class="flex2">
      <h5 class="getSearch" data-city="Tambaram">Bhai Biryani - Tambaram</h5>
      <p>10 am to 5 pm</p>
      <button id="booking" onclick="makeReservation('tambaram')">Book a Table</button>
      <button id="getDirection">Get Direction</button>
    </div>
  </div>
  <div class="outletCard">
    <div class="flex1">
          <img src="./images/logo.png" alt="logo">
          <div>
          <span>Bhai</span>
          <span>Biryani</span>
          </div>
    </div>
    <div class="flex2">
      <h5 class="getSearch" data-city="Amritsar">Bhai Biryani - Amritsar</h5>
      <p>10 am to 5 pm</p>
      <button id="booking" onclick="makeReservation('amritsar')">Book a Table</button>
      <button id="getDirection">Get Direction</button>
    </div>
  </div>
  <div class="outletCard">
    <div class="flex1">
          <img src="./images/logo.png" alt="logo">
          <div>
          <span>Bhai</span>
          <span>Biryani</span>
          </div>
    </div>
    <div class="flex2">
      <h5 class="getSearch" data-city="Agra">Bhai Biryani - Agra</h5>
      <p>10 am to 5 pm</p>
      <button id="booking" onclick="makeReservation('agra')">Book a Table</button>
      <button id="getDirection">Get Direction</button>
    </div>
  </div>
  <div class="outletCard">
    <div class="flex1">
          <img src="./images/logo.png" alt="logo">
          <div>
          <span>Bhai</span>
          <span>Biryani</span>
          </div>
    </div>
    <div class="flex2">
      <h5 class="getSearch" data-city="Bhopal">Bhai Biryani - Bhopal</h5>
      <p>10 am to 5 pm</p>
      <button id="booking" onclick="makeReservation('bhopal')">Book a Table</button>
      <button id="getDirection">Get Direction</button>
    </div>
  </div>
  <div class="outletCard">
    <div class="flex1">
          <img src="./images/logo.png" alt="logo">
          <div>
          <span>Bhai</span>
          <span>Biryani</span>
          </div>
    </div>
    <div class="flex2">
      <h5 class="getSearch" data-city="Bhubaneswar">Bhai Biryani - Bhubaneswar</h5>
      <p>10 am to 5 pm</p>
      <button id="booking" onclick="makeReservation('bhubaneswar')">Book a Table</button>
      <button id="getDirection">Get Direction</button>
    </div>
  </div>
  <div class="outletCard">
    <div class="flex1">
          <img src="./images/logo.png" alt="logo">
          <div>
          <span>Bhai</span>
          <span>Biryani</span>
          </div>
    </div>
    <div class="flex2">
      <h5 class="getSearch" data-city="Chandigarh">Bhai Biryani - Chandigarh</h5>
      <p>10 am to 5 pm</p>
      <button id="booking" onclick="makeReservation('chandigarh')">Book a Table</button>
      <button id="getDirection">Get Direction</button>
    </div>
  </div>
  <div class="outletCard">
    <div class="flex1">
          <img src="./images/logo.png" alt="logo">
          <div>
          <span>Bhai</span>
          <span>Biryani</span>
          </div>
    </div>
    <div class="flex2">
      <h5 class="getSearch" data-city="Dhanbad">Bhai Biryani - Dhanbad</h5>
      <p>10 am to 5 pm</p>
      <button id="booking" onclick="makeReservation('dhanbad')">Book a Table</button>
      <button id="getDirection">Get Direction</button>
    </div>
  </div>
  <div class="outletCard">
    <div class="flex1">
          <img src="./images/logo.png" alt="logo">
          <div>
          <span>Bhai</span>
          <span>Biryani</span>
          </div>
    </div>
    <div class="flex2">
      <h5 class="getSearch" data-city="Durgapur">Bhai Biryani - Durgapur</h5>
      <p>10 am to 5 pm</p>
      <button id="booking" onclick="makeReservation('durgapur')">Book a Table</button>
      <button id="getDirection">Get Direction</button>
    </div>
  </div>
  <div class="outletCard">
    <div class="flex1">
          <img src="./images/logo.png" alt="logo">
          <div>
          <span>Bhai</span>
          <span>Biryani</span>
          </div>
    </div>
    <div class="flex2">
      <h5 class="getSearch" data-city="Dehradun">Bhai Biryani - Dehradun</h5>
      <p>10 am to 5 pm</p>
      <button id="booking" onclick="makeReservation('dehradun')">Book a Table</button>
      <button id="getDirection">Get Direction</button>
    </div>
  </div>
  <div class="outletCard">
    <div class="flex1">
          <img src="./images/logo.png" alt="logo">
          <div>
          <span>Bhai</span>
          <span>Biryani</span>
          </div>
    </div>
    <div class="flex2">
      <h5 class="getSearch" data-city="Goa">Bhai Biryani - Goa</h5>
      <p>10 am to 5 pm</p>
      <button id="booking"  onclick="makeReservation('goa')">Book a Table</button>
      <button id="getDirection">Get Direction</button>
    </div>
  </div>
  <div class="outletCard">
    <div class="flex1">
          <img src="./images/logo.png" alt="logo">
          <div>
          <span>Bhai</span>
          <span>Biryani</span>
          </div>
    </div>
    <div class="flex2">
      <h5 class="getSearch" data-city="Hyderabad">Bhai Biryani - Hyderabad</h5>
      <p>10 am to 5 pm</p>
      <button id="booking" onclick="makeReservation('hyderabad')">Book a Table</button>
      <button id="getDirection">Get Direction</button>
    </div>
  </div>
  <div class="outletCard">
    <div class="flex1">
          <img src="./images/logo.png" alt="logo">
          <div>
          <span>Bhai</span>
          <span>Biryani</span>
          </div>
    </div>
    <div class="flex2">
      <h5 class="getSearch" data-city="Guwahati">Bhai Biryani - Guwahati</h5>
      <p>10 am to 5 pm</p>
      <button id="booking" onclick="makeReservation('guwahati')">Book a Table</button>
      <button id="getDirection">Get Direction</button>
    </div>
  </div>
  <div class="outletCard">
    <div class="flex1">
          <img src="./images/logo.png" alt="logo">
          <div>
          <span>Bhai</span>
          <span>Biryani</span>
          </div>
    </div>
    <div class="flex2">
      <h5 class="getSearch" data-city="Gwalior">Bhai Biryani - Gwalior</h5>
      <p>10 am to 5 pm</p>
      <button id="booking" onclick="makeReservation('gwalior')">Book a Table</button>
      <button id="getDirection">Get Direction</button>
    </div>
  </div>
  <div class="outletCard">
    <div class="flex1">
          <img src="./images/logo.png" alt="logo">
          <div>
          <span>Bhai</span>
          <span>Biryani</span>
          </div>
    </div>
    <div class="flex2">
      <h5 class="getSearch" data-city="Noida">Bhai Biryani - Noida</h5>
      <p>10 am to 5 pm</p>
      <button id="booking" onclick="makeReservation('noida')">Book a Table</button>
      <button id="getDirection">Get Direction</button>
    </div>
  </div>
  <div class="outletCard">
    <div class="flex1">
          <img src="./images/logo.png" alt="logo">
          <div>
          <span>Bhai</span>
          <span>Biryani</span>
          </div>
    </div>
    <div class="flex2">
      <h5 class="getSearch" data-city="Gorakhpur">Bhai Biryani - Gorakhpur</h5>
      <p>10 am to 5 pm</p>
      <button id="booking" onclick="makeReservation('gorakhpur')">Book a Table</button>
      <button id="getDirection">Get Direction</button>
    </div>
  </div>
  <div class="outletCard">
    <div class="flex1">
          <img src="./images/logo.png" alt="logo">
          <div>
          <span>Bhai</span>
          <span>Biryani</span>
          </div>
    </div>
    <div class="flex2">
      <h5 class="getSearch" data-city="Ghaziabad">Bhai Biryani - Ghaziabad</h5>
      <p>10 am to 5 pm</p>
      <button id="booking" onclick="makeReservation('ghaziabad')">Book a Table</button>
      <button id="getDirection">Get Direction</button>
    </div>
  </div>

</div>
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


`;

  const footerEID = document.getElementById("footerEmail");
  footerEID.value = userState.emailId;
  footerEID.readOnly = true;

  const  fbackORqn = document.getElementById("footerForm")
fbackORqn.addEventListener("submit", function (event) {
      event.preventDefault(); 
      console.log("form submitted")
      feebackORquesstion(userState.username);
    });
  
    
      const arg_to_bktb = document.getElementById("usrnmNprof");
      arg_to_bktb.innerHTML = `${userState.username}`;

//CHECK NOTES: 24/07/25     
      document.getElementById("searchBtn").addEventListener("click", () => {
  const query = document.getElementById("searchInput").value.trim().toLowerCase();
  const outlets = document.querySelectorAll(".getSearch");

  let found = false;
   //like finding vowels aeiou in a word
//at first i used objects which has keys as 1,2,3 and values as chennai madurai, etc and got userinput and turned it to lowercase and chek using includes and if matches i want the value of the key to be sent as an argument to the makereservation fucntion but it turned out to be a very huge process WHICH I TESTED IN: testin.js and there was more than 18 places and had no time at all so i gave edge my idea and asked for easiest way it said about getAttribute.
// The getAttribute() method in JavaScript is used to retrieve the value of an attribute
  outlets.forEach(outlet => {
    const city = outlet.getAttribute("data-city").toLowerCase();
    if (city.includes(query)) {
      //now i want the first letter to be turned to upper case bcz it's gonna be appeared in our page... so this method is well known already
      makeReservation(city.charAt(0).toUpperCase() + city.slice(1).toLowerCase())
      found = true;
    } 
    // else {
    //   alert("No matching outlet found for: " + query);
    // }// at first i give the alert here but the alert stays on the page even if i click ok it didn't slide back so i searched for
    // it told: You're looping through every .getSearch outlet, and for each one that doesn't match, you're firing an alert. So if there are 5 outlets and none match, you'll get 5 alerts in a row—even if you click “OK,” the next one pops up immediately. That’s why it feels like the alert “stays” on the page.
    // i checked that it did what that said... when click multiple okays and the one got clicked and moved on to the function when it found the match.
  });

  // You only want to show the alert once, after checking all outlets and confirming that none matched. So move the alert outside the loop, like this:

  if (!found) {
    alert("No matching outlet found for: " + query);
  }
});



}

function makeReservation(reservingCity) {
  const contentArea4 = document.getElementById("forContentArea");
  contentArea4.innerHTML = "";
  const reserveTable = document.createElement("div");
  reserveTable.id = "reserveTablePg";
  contentArea4.appendChild(reserveTable);

  const revTabDiv = document.querySelector("#reserveTablePg");
  revTabDiv.innerHTML = `
  
  <h2 class="container text-light">Bhai Biryani Table Booking</h2>
  <h3 class="container text-light">Reserving Table at ${reservingCity.charAt(0).toUpperCase()+reservingCity.slice(1).toLowerCase()}</h3>

<div id="legend" class="container">
  <span class="legend available"></span> Available
  <span class="legend booked" style="margin-left: 40px;"></span> Booked
  <span class="legend selected" style="margin-left: 40px;"></span> Selected
</div> 

<div class="container reserve-table-wrapped">
 <div id="paymentSection">
  <div class="inside-payment">
   <div class="paymement-flex-wrapped">
    <div>
     <h3>Selected Table: <span id="seletedtable"></span></h3>
     <p>Seat IDs: <span id="seatIDs">None</span></p>
     <h4>User Name: <span id="nameofUser">${userState.username}</span></h4>
     <p>Amount: ₹<span id="totalAmount">0</span></p>
    </div>
      <div class="paymement-flex1">
       <img src="./images/logo.png" alt="logo">
        <div>
          <span>Bhai</span>
          <span>Biryani</span>
        </div>
      </div>
  </div>
  <button id="payBtn">Make a Payment</button>
 </div>
</div>

<div class="text-center">
   <div class="table-container">

 <div class="square-table">
<div class="table" id="table1" whole-table="table1">
  <div class="seat" data-id="1" data-table="table1"></div>
  <div class="seat" data-id="2" data-table="table1"></div>
  <div class="table-label">TABLE 1</div>
</div>

<div class="table" id="table2" whole-table="table2">
  <div class="seat" data-id="3" data-table="table2"></div>
  <div class="seat" data-id="4" data-table="table2"></div>
  <div class="table-label">TABLE 2</div>
</div>

<div class="table" id="table3" whole-table="table3">
  <div class="seat" data-id="5" data-table="table3"></div>
  <div class="seat" data-id="6" data-table="table3"></div>
  <div class="seat" data-id="7" data-table="table3"></div>
  <div class="table-label">TABLE 3</div>
</div>

<div class="table" id="table4" whole-table="table4">
  <div class="seat" data-id="8" data-table="table4"></div>
  <div class="seat" data-id="9" data-table="table4"></div>
  <div class="seat" data-id="10" data-table="table4"></div>
  <div class="seat" data-id="11" data-table="table4"></div>
  <div class="table-label">TABLE 4</div>
</div>

<div class="table" id="table5" whole-table="table5">
  <div class="seat" data-id="12" data-table="table5"></div>
  <div class="seat" data-id="13" data-table="table5"></div>
  <div class="seat" data-id="14" data-table="table5"></div>
  <div class="seat" data-id="15" data-table="table5"></div>
  <div class="seat" data-id="16" data-table="table5"></div>
  <div class="seat" data-id="17" data-table="table5"></div>
  <div class="table-label">TABLE 5</div>
</div>

<div class="table booked" id="table6" whole-table="table6">
  <div class="seat booked" data-id="18" data-table="table6"></div>
  <div class="seat booked" data-id="19" data-table="table6"></div>
  <div class="seat booked" data-id="20" data-table="table6"></div>
  <div class="seat booked" data-id="21" data-table="table6"></div>
  <div class="seat booked" data-id="22" data-table="table6"></div>
  <div class="seat booked" data-id="23" data-table="table6"></div>
  <div class="seat booked" data-id="24" data-table="table6"></div>
  <div class="table-label">TABLE 6</div>
</div>

<div class="table booked" id="table7" whole-table="table7">
  <div class="seat booked" data-id="25" data-table="table7"></div>
  <div class="seat booked" data-id="26" data-table="table7"></div>
  <div class="seat booked" data-id="27" data-table="table7"></div>
  <div class="seat booked" data-id="28" data-table="table7"></div>
  <div class="seat booked" data-id="29" data-table="table7"></div>
  <div class="seat booked" data-id="30" data-table="table7"></div>
  <div class="seat booked" data-id="31" data-table="table7"></div>
  <div class="seat booked" data-id="32" data-table="table7"></div>
  <div class="table-label">TABLE 7</div>
</div>

<div class="table booked" id="table8" whole-table="table8">
  <div class="seat booked" data-id="33" data-table="table8"></div>
  <div class="seat booked" data-id="34" data-table="table8"></div>
  <div class="seat booked" data-id="35" data-table="table8"></div>
  <div class="seat booked" data-id="36" data-table="table8"></div>
  <div class="seat booked" data-id="37" data-table="table8"></div>
  <div class="seat booked" data-id="38" data-table="table8"></div>
  <div class="seat booked" data-id="39" data-table="table8"></div>
  <div class="seat booked" data-id="40" data-table="table8"></div>
  <div class="table-label">TABLE 8</div>
</div>


</div>

<div class="round-table">

  <div class="table" id="table9" whole-table="table9">
    <div class="seat" data-id="41" data-table="table9"></div>
    <div class="seat" data-id="42" data-table="table9"></div>
    <div class="table-label">ROUND TABLE 1</div>
  </div>

  <div class="table" id="table10" whole-table="table10">
    <div class="seat" data-id="43" data-table="table10"></div>
    <div class="seat" data-id="44" data-table="table10"></div>
    <div class="seat" data-id="45" data-table="table10"></div>
    <div class="seat" data-id="46" data-table="table10"></div>
    <div class="table-label">ROUND TABLE 2</div>
  </div>

  <div class="table booked" id="table11" whole-table="table11">
    <div class="seat booked" data-id="47" data-table="table11"></div>
    <div class="seat booked" data-id="48" data-table="table11"></div>
    <div class="seat booked" data-id="49" data-table="table11"></div>
    <div class="seat booked" data-id="50" data-table="table11"></div>
    <div class="table-label">ROUND TABLE 3</div>
  </div>

  <div class="table" id="table12" whole-table="table12">
    <div class="seat" data-id="51" data-table="table12"></div>
    <div class="seat" data-id="52" data-table="table12"></div>
    <div class="seat" data-id="53" data-table="table12"></div>
    <div class="seat" data-id="54" data-table="table12"></div>
    <div class="seat" data-id="55" data-table="table12"></div>
    <div class="seat" data-id="56" data-table="table12"></div>
    <div class="seat" data-id="57" data-table="table12"></div>
    <div class="seat" data-id="58" data-table="table12"></div>
    <div class="table-label">ROUND TABLE 4</div>
  </div>

</div>

</div>
<button id="confirmBtn">Confirm Reservation</button>
</div>

</div>`;

//since i found a new thing called getAttribute unquestionably im gonna use it everywhere
//booking table is quite a task, beyond any doubt i for sure need help. 
// i had idea about getting all non selected and loop it through for each and to use add and remove class lists like asusual but i didnt know how to select only not selecteds.. so when i googled i found :not --- very beneficial. i wonder.

const seats = document.querySelectorAll(".seat:not(.booked)");
const confirmBtn = document.getElementById("confirmBtn");
const seatIDsDisplay = document.getElementById("seatIDs");
const totalAmountDisplay = document.getElementById("totalAmount");
const selected_table = document.getElementById("seletedtable");
const oneclkTable =  document.querySelectorAll(".table:not(.booked)");

let selectedTables = [];
let selectedSeats = [];

seats.forEach(seat => {
  seat.addEventListener("click", () => {
    const id = seat.getAttribute("data-id");
    const tableId = seat.getAttribute("data-table");
    const table = document.getElementById(tableId); //whole div 

    if (seat.classList.contains("selected")) {
      seat.classList.remove("selected");
      selectedSeats = selectedSeats.filter(s => s !== id);
      // Keep every seat ID s that is not equal to the one just clicked (id)
      selectedSeats.pop(id+"- "+tableId.charAt(0).toUpperCase()+tableId.slice(1).toLowerCase());
      // if i didn't give this it pushes id even if deselect the id.
    } else {
      seat.classList.add("selected");
      selectedSeats.push(id+"- "+tableId.charAt(0).toUpperCase()+tableId.slice(1).toLowerCase());
      // selectedTables.push(tableId); //o/p: table1, table1, table2 for every seat it adds tablenumber
    }
    console.log(selectedSeats)
    // Check if all seats of the table are selected,If all seats in a table are selected, mark the table as booked.
    const tableSeats = table.querySelectorAll(".seat:not(.booked)");
    let allSelected = true;
    for (const seat of tableSeats) {
      if (!seat.classList.contains("selected")) {
      allSelected = false;
      break;}}
   console.log("allSelected = "+allSelected)
    if(allSelected){
      table.classList.add("booked");
      // selectedTables.push(tableId);
    } else{
      table.classList.remove("booked");
    }

    let atleastOne = false;
   for (const seat of tableSeats) {
   if (seat.classList.contains("selected")) {
    atleastOne = true;
    break;}}
   if (atleastOne) {
   if(!selectedTables.includes(tableId.charAt(0).toUpperCase()+tableId.slice(1).toLowerCase())){
   selectedTables.push(tableId.charAt(0).toUpperCase()+tableId.slice(1).toLowerCase());}
   }else{selectedTables.pop(tableId.charAt(0).toUpperCase()+tableId.slice(1).toLowerCase());}
  console.log(selectedTables)
  });
});


confirmBtn.addEventListener("click", () => {
  if (selectedSeats.length === 0) {
    alert("Please select at least one seat.");
    return;
  }

  
      location.href = "#payBtn";
  
booktabFinished = true;
console.log("booktabFinished = "+booktabFinished)
// if(booktabFinished){
  // console.log("moving to menu");
  // fnforMenu();
// }

  selected_table.textContent = selectedTables.join(", ")
  const prefix = "20022";
  //initially i used padEnd but it didn't met my expectations. so with map:
  const formattedIDs = selectedSeats.map(id => prefix + id);
  seatIDsDisplay.textContent = formattedIDs.join(", ");

  totalAmountDisplay.textContent = selectedSeats.length * 100;


});
  document.getElementById("payBtn").addEventListener("click", () => {
    alert(`✅ Payment of ₹${totalAmountDisplay.textContent} successful!
    Reservation Confirmed for 🪑 ${seatIDsDisplay.textContent}`)
  })

//booking table tricked and taught me huge.
}


// const seats = document.querySelectorAll(".seat:not(.booked)");
// // This grabs all seat elements that have the class .seat but do not have the class .booked
// const confirmBtn = document.getElementById("confirmBtn");
// const seatIDsDisplay = document.getElementById("seatIDs");
// const totalAmountDisplay = document.getElementById("totalAmount");

// let selectedSeats = [];

// seats.forEach(seat => {
//   seat.addEventListener("click", () => {
//     const id = seat.getAttribute("data-id");

//     if (seat.classList.contains("selected")) {
//         // If already selected - unselect it
//       seat.classList.remove("selected");
//       selectedSeats = selectedSeats.filter(s => s !== id);
//     } else {
//         // If already selected - unselect it
//       seat.classList.add("selected");
//       selectedSeats.push(id);
//     }
//   });
// });

// confirmBtn.addEventListener("click", () => {
//   if (selectedSeats.length === 0) {
//     alert("Please select at least one seat.");
//     return;
//   }

//   seatIDsDisplay.textContent = selectedSeats.join(", ");
//   totalAmountDisplay.textContent = selectedSeats.length * 100;
// });



