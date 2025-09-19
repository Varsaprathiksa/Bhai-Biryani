
document.addEventListener("DOMContentLoaded", mainPageFunction);
// document.addEventListener("DOMContentLoaded", () => {
//   mainPageFunction;
// });

function mainPageFunction() {

    const contentArea2 = document.getElementById("forContentArea");
    contentArea2.innerHTML = "";
    console.log(contentArea2);
    const forMainPage = document.createElement("div");
    forMainPage.id = "div4MainPage";
    contentArea2.appendChild(forMainPage);
    console.log(forMainPage)
    // document.getElementById("forLogin").style.display = "none";
    const mainPgDiv = document.querySelector("#div4MainPage");
    mainPgDiv.innerHTML = `
    <div class="container top-flex">
      <div class="container left-div">
        <h1>Royal <br> Biryani Bliss</h1>
        <p>Savor the rich aroma, bold spices, and melt-in-your-mouth goodness of our authentic, handcrafted biryani!</p>
        <div class="div1">
        <a class="a1" href="">></a>
        <a class="a2" href="">Order Now</a>
        <div class="div1 mx-4" id="biryaniName">Mutton Biryani</div>
        <div class="div2" id="biryaniRate">Rs.500</div>
        </div>
        <div class="div2">
          <div class="div1">
            <div class="div1"><i class="fa fa-truck" style="font-size:48px;color:rgba(255, 255, 255, 0.5)"></i></div>
            <div class="div2">Freshly Made</div>
          </div>
          <div class="div2">
            <div class="div1"><i class="fa fa-truck" style="font-size:48px;color:rgba(255, 255, 255, 0.5)"></i></div>
            <div class="div2">Authentic Flavors</div>
          </div>
          <div class="div3">
            <div class="div1"><i class="fa fa-truck" style="font-size:48px;color:rgba(255, 255, 255, 0.5)"></i></div>
            <div class="div2">Fast Delivery</div>
          </div>
        </div>
      </div>


      <div class="container right-div">
        <div class="mainImage-wrapper" id="mainImage-wrapper">
          <img src="./images/thumbnail.png" alt="biryani" class="main-image" id="main-image">
          <img src="./images/thumbnail.png" alt="biryani" class="main-image" id="main-image">
          <img src="./images/thumbnail.png" alt="biryani" class="main-image" id="main-image">
          <img src="./images/thumbnail.png" alt="biryani" class="main-image" id="main-image">
          <img src="./images/thumbnail.png" alt="biryani" class="main-image" id="main-image">
        </div>
        <div class="thumbnails mx-5">
          <div class="thumb-div" onclick="changeimage(0)"><img src="./images/Food hero.png" alt="biryani thumbnail" class="thumb">
          <div class="hover-thumb"></div></div>
          <div class="thumb-div" onclick="changeimage(1)"><img src="./images/Food hero.png" alt="biryani thumbnail" class="thumb">
          <div class="hover-thumb"></div></div>
          <div class="thumb-div" onclick="changeimage(2)"><img src="./images/Food hero.png" alt="biryani thumbnail" class="thumb">
          <div class="hover-thumb"></div></div>
          <div class="thumb-div" onclick="changeimage(3)"><img src="./images/Food hero.png" alt="biryani thumbnail" class="thumb">
          <div class="hover-thumb"></div></div>
          <div class="thumb-div" onclick="changeimage(4)"><img src="./images/Food hero.png" alt="biryani thumbnail" class="thumb">
          <div class="hover-thumb"></div></div>
        </div>
      </div>
    </div>
    
    <div class="container invisibleImgSection">
      <h1>A Taste That Tells a Story</h1>
      <div class="invisible-grid my-5">
        <div class="grid1 ">
          From the royal kitchens of the Mughals to the bustling streets of Hyderabad, our biryani carries a legacy of flavor and culture. Made with age-old recipes and premium ingredients, every serving is a tribute to authenticity.
        </div>
        <div class="grid2">
          <table>
            <tr>
              <td><img src="./images/tableimg2.png" alt="salad" class="table-img"></td>
              <td><img src="./images/tableimg1.png" alt="chicken65" class="table-img"></td>
              <td><img src="./images/tableimg5.png" alt="paneer rice" class="table-img"></td>
              <td><img src="./images/tableimg3.png" alt="chicken biryani" class="table-img"></td>
            </tr>
            <tr>
              <td><img src="./images/tableimg4.png" alt="mutton biryani" class="table-img"></td>
              <td><img src="./images/tableimg3.png" alt="chicken biryani" class="table-img"></td>
              <td><img src="./images/tableimg2.png" alt="salad" class="table-img"></td>
              <td><img src="./images/tableimg1.png" alt="chicken65" class="table-img"></td>
            </tr>
            <tr>
              <td><img src="./images/tableimg5.png" alt="paneer rice" class="table-img"></td>
              <td><img src="./images/tableimg1.png" alt="chicken65" class="table-img"></td>
              <td><img src="./images/tableimg4.png" alt="mutton biryani" class="table-img"></td>
              <td><img src="./images/tableimg3.png" alt="chicken biryani" class="table-img"></td>
            </tr>
            <tr>
              <td><img src="./images/tableimg3.png" alt="chicken biryani" class="table-img"></td>
              <td><img src="./images/tableimg2.png" alt="salad" class="table-img"></td>
              <td><img src="./images/tableimg1.png" alt="chicken65" class="table-img"></td>
              <td><img src="./images/tableimg5.png" alt="paneer rice" class="table-img"></td>
            </tr>
          </table>
        </div>
      </div> 
    </div>
    <!-- end of the invisibleImgSection -->

    <div class="container text-center biryani-special">
      <h1>What Makes Our Biryani Special?</h1>
      <div>We are Famous <br> in Spice</div>
    </div>

    <!-- end of biryani special -->

        <div class="signature-food">
      <h1>Signature Food Loved by Thousands</h1>

      <div class="sigFood-container">
        <div class="list-on-left">
          <ul>
            <li id="opt-0" onclick="changeSigFoodimage(1,0)" >
            <img src="./images/slantingB.png" alt="slantingBiryani">Biryani</li>
            <li id="opt-1" onclick="changeSigFoodimage(2,0)" >
              <img src="./images/slantingB.png" alt="slantingBiryani">Fried Rice</li>
            <li id="opt-2" onclick="changeSigFoodimage(3,0)" >
              <img src="./images/slantingB.png" alt="slantingBiryani">Fries</li>
            <li id="opt-3" onclick="changeSigFoodimage(4,0)" >
              <img src="./images/slantingB.png" alt="slantingBiryani">Combo</li>
          </ul>
          <div id="selector-bar"></div>
        </div>

        <div class="forBar">
        <div class="center-bar">
          <div class="slider" id="slider"></div>
        </div>
        </div>

        <div class="move-sigfood-wrapper">
        <div id="moving-sigFood">
        <div class="dish-on-right">
          <h2 id="sigfood-Name">Hyderabadi Dum Biryani</h2>
          <p id="sigfood-Des">A fragrant mix of basmati rice, marinated meat, and saffron, slow-cooked to perfection in traditional dum style.</p>
          <div class="nxtArrow-div">
            <div class="div1">
              <a class="a1" href="">></a>
              <a class="a2" href="">Order Now</a>
            </div>
            <div class="nxtArrow">
              <button id="btn1" onclick="changeSigFoodimageMain(0)">&lt;</button>
              <button id="btn2" onclick="changeSigFoodimageMain(1)">&gt;</button>
            </div>
          </div>
          <img src="./images/lucknowDumB.png" alt="lucknowDumBiryani" id="sigfood-Img">
        </div>

        <div class="dish-on-right">
          <h2 id="sigfood-Name-a">lucknowi Dum Biryani</h2>
          <p id="sigfood-Des-a">A fragrant mix of basmati rice, marinated meat, and saffron, slow-cooked to perfection in traditional dum style.</p>
          <div class="nxtArrow-div">
            <div class="div1">
              <a class="a1" href="">></a>
              <a class="a2" href="">Order Now</a>
            </div>
            <div class="nxtArrow">
              <button id="btn1-a" onclick="changeSigFoodimageMain(0)">&lt;</button>
              <button id="btn2-a" onclick="changeSigFoodimageMain(1)">&gt;</button>
            </div>
          </div>
          <img src="./images/lucknowDumB.png" alt="lucknowDumBiryani" id="sigfood-Img-a">>
        </div>

        </div>
        </div>

      </div>

    </div>
    <!-- end of signature dish -->

    <div class="cust-review">
      <h1>What Our Customers Say</h1>

<div class="divfor-review">
  <div class="scroll-track ">
    <div class="scroll-content ">
      <div class="card review-card">
        <div class="card-body">
          <p>"Absolutely the best biryani! The flavors are authentic, and the portions are generous."</p>
          <p class="fw-bold">~ Aarav M.</p>
          <div class="stars">⭐⭐⭐⭐⭐</div>
        </div>
      </div>
    </div>

    <div class="scroll-content ">
      <div class="card review-card">
        <div class="card-body">
          <p>"Absolutely the best biryani! The flavors are authentic, and the portions are generous."</p>
          <p class="fw-bold">~ Aarav M.</p>
          <div class="stars">⭐⭐⭐⭐⭐</div>
        </div>
      </div>
    </div>

    <div class="scroll-content ">
      <div class="card review-card">
        <div class="card-body">
          <p>"Absolutely the best biryani! The flavors are authentic, and the portions are generous."</p>
          <p class="fw-bold">~ Aarav M.</p>
          <div class="stars">⭐⭐⭐⭐⭐</div>
        </div>
      </div>
    </div>

    <div class="scroll-content">
      <div class="card review-card">
        <div class="card-body">
          <p>"Absolutely the best biryani! The flavors are authentic, and the portions are generous."</p>
          <p class="fw-bold">~ Aarav M.</p>
          <div class="stars">⭐⭐⭐⭐⭐</div>
        </div>
      </div>
    </div>

  </div>
</div>


    </div>
<!-- end of review -->

<div class="mandhi-section">
  <div class="mandhi-div-wrapper">
  <div class="mandhi-text-section">
    <h1>A Feast of Flavors!</h1>
    <h2>MANDHI</h2>
    <p>A flavorful Yemeni-style rice dish with tender, slow-cooked meat, aromatic spices, and a smoky essence, served with tangy sauces</p>
    <div>
        <a class="a1" href="">></a>
        <a class="a2" href="">Order Now</a>
    </div>
  </div>
  </div>
  <div class="not-a-image-section">
  </div>
    <img src="./images/mandhi.png" alt="mandhi">
</div>

<div class="container py-5 faq-cont">
  <div class="faq-left-side">
    <h1 class="mb-4">FAQs</h1>
    <p>For any further inquiries about our menu, orders, or catering services, please feel free to get in touch with us</p>
    <div><a href="">bhaibiryani03@gmail.com</a></div>
  </div>
  <div class="accordion" id="faqAccordion">
    
    <!-- FAQ Item 1 -->
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
          How can I place an order?
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
           data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          You can place an order via our website or by contacting us directly through email or phone.
        </div>
      </div>
    </div>

    <!-- FAQ Item 2 -->
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Do you offer home delivery?
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
           data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          Yes, we offer home delivery across select locations. Delivery charges may apply.
        </div>
      </div>
    </div>

        <!-- FAQ Item 3 -->
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Can I customize my biryani?
        </button>
      </h2>
      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
           data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          Absolutely! You can customize your biryani to suit your taste preferences. Whether you want it extra spicy, less oily, vegetarian, or loaded with your favorite toppings like boiled eggs, paneer, or extra meat — we’re happy to tailor it for you.
        </div>
      </div>
    </div>

        <!-- FAQ Item 4 -->
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingFour">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
          Do you have family packs or bulk orders?
        </button>
      </h2>
      <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
           data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          Yes, we do! 🎉 Whether you're planning a cozy family dinner or a large gathering, we offer family packs and bulk order options designed to serve groups of all sizes. These packs come with generous portions, customizable spice levels, and add-ons like raita, salan, and dessert — perfect for parties, office lunches, or festive events.
        </div>
      </div>
    </div>

        <!-- FAQ Item 5 -->
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingFive">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
          What payment options do you accept?
        </button>
      </h2>
      <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
           data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          We accept a variety of payment methods to keep things smooth and convenient for you:

<br>💳 Digital Payments: UPI (Google Pay, PhonePe, Paytm), credit cards, debit cards, and net banking. <br>💵 Cash on Delivery: Prefer handing over cash? No problem — we’ve got you covered. <br>📱 Wallets & QR Scan: For quick mobile payments, just scan and pay at checkout.
        </div>
      </div>
    </div>

        <!-- FAQ Item 6 -->
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingSix">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
          How can I contact customer support?
        </button>
      </h2>
      <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix"
           data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          You can reach our customer support team quickly and easily:

<br>📧 Email: Drop us a message at bhabiryani03@gmail.com — whether it’s a question, feedback, or issue, we’ll respond promptly. <br>📞 Phone Support: If available, you can call our helpline during business hours for real-time assistance. <br>💬 Live Chat (if offered): Some platforms may also have a chat option for instant help while browsing or ordering.
        </div>
      </div>
    </div>

        <!-- FAQ Item 7 -->
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingSeven">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
          How can I place an order?
        </button>
      </h2>
      <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven"
           data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          Placing an order is super simple and designed to be hassle-free:

<br>🛒 Online Ordering: Visit our website or ordering platform, browse the menu, select your favorite biryani, customize it if needed, and proceed to checkout.

<br>📱 Direct Contact: Prefer a personal touch? Just email us at bhabiryani03@gmail.com with your order details, quantity, and delivery address. We’ll confirm and get cooking!

<br>📦 Bulk or Catering Orders: For large events or family packs, reach out via email or phone — we’ll help you plan the perfect biryani spread.

<br>Once your order is placed, you’ll receive a confirmation and estimated delivery time. Easy, flavorful, and just a few clicks away 🍽️
        </div>
      </div>
    </div>

  </div>
</div>
<!-- faq container ends -->

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
  
}

const imageNames = [
    "Mutton Biryani",
    "Chicken Biryani",
    "Kola Biryani",
    "Egg Biryani",
    "Fish Biryani"
]
const imageRates = [
    "Rs.500",
    "Rs.400",
    "Rs.600",
    "Rs.250",
    "Rs.450"
]
function changeimage(index){
    const thisIs_MainImg = document.getElementById("mainImage-wrapper");
    
    // thisIs_MainImg.src = imagePaths[index];
    thisIs_MainImg.style.transform = `translateX(-${index * 100}%)`;
    // moves the entire image wrapper horizontally 
    // Slide the wrapper to the left by index × 100% of its width. 100% for 1 image to hide, if 2nd image 200% will be needed and so on & minus- to left
    // +50% moves right, -50% moves to left
    // x50% moves right, X-50% to left and y50% moves to bottom, y-50% moves to top
    //reference:w3schools with img example

    const biryaniName = document.getElementById("biryaniName");
    biryaniName.innerText = imageNames[index];
    const biryaniRate = document.getElementById("biryaniRate");
    biryaniRate.innerText = imageRates[index]
}
function changeSigFoodimageMain(index){
    const move_sigFood = document.getElementById("moving-sigFood");
    move_sigFood.style.transform = `translateX(-${index * 122}%)`;
}

const signature_Food = {
  1: [
    {
      name: "Hyderabadi Dum Biryani",
      description: "A fragrant mix of basmati rice, marinated meat, and saffron, slow-cooked to perfection in traditional dum style.",
      image: "./images/lucknowDumB.png"
    },
    {
      name: "Lucknowi Dum Biryani",
      description: "A fragrant mix of basmati rice, marinated meat, and saffron, slow-cooked to perfection in traditional dum style.",
      image: "./images/lucknowDumB.png"}
  ],
  2: [
    {
      name: "Paneer Fried Rice",
      description: "Stir-fried rice with vegetables and spices, served hot and crispy.",image: "./images/halfKGpaneerHydDum.png"
    },
    {
      name: "Veg Fried Rice",
      description: "Stir-fried rice with vegetables and spices, served hot and crispy.",image: "./images/lucknowDumB.png"
    }
  ],
  3: [
    {
      name: "Potato Fries",
      description: "Golden, crispy potato fries served with tangy dips.",
      image: "./images/lucknowDumB.png"
    },
    {
      name: "Chicken Fries",
      description: "Golden, crispy potato fries served with tangy dips.",
      image: "./images/lucknowDumB.png"
    }
  ],
  4: [
    {
    name: "Biryani Combo",
    description: "A hearty combo of biryani, fries, and dessert for the ultimate feast.",
    image: "./images/lucknowDumB.png"
  },
    {
    name: "Chicken Combo",
    description: "A hearty combo of biryani, fries, and dessert for the ultimate feast.",
    image: "./images/lucknowDumB.png"
  }
  ]
}
//idea gathered from sir's promise method task(refer there)
function changeSigFoodimage(useKey,index) {
        const sigDish = signature_Food[useKey][index];
        if(index===0){
          document.getElementById("sigfood-Name").textContent = sigDish.name;
          document.getElementById("sigfood-Des").textContent = sigDish.description;
          document.getElementById("sigfood-Img").src = sigDish.image;
          document.getElementById("sigfood-Img").alt = sigDish.name;
        }
        else if(index===1){
              document.getElementById("sigfood-Name-a").textContent = sigDish.name;
              document.getElementById("sigfood-Des-a").textContent = sigDish.description;
              document.getElementById("sigfood-Img-a").src = sigDish.image;
              document.getElementById("sigfood-Img-a").alt = sigDish.name;
        }
    
document.getElementById("btn1").onclick = function() {
  if (index > 0) {
    changeSigFoodimage(useKey, index - 1);
  }
};
// 1,0 if i click btn1 now- nothing will happen
// 1,1 if now, i=1>0, so onclick fn(1,0)- image returns but (1,1) will only happen if i click btn2, bcz i cant call function(1,1)

document.getElementById("btn2").onclick = function() {
  if (index < signature_Food[useKey].length - 1) {
    changeSigFoodimage(useKey, index + 1);
  }
};
// for btn2 (1,0) works as ind=0<(1.len is)2-1=1 ->0<1 true. so fn will be (1,1)... so when click btn2 the fn changes to (1,0+1)   
document.getElementById("btn1-a").onclick = function() {
  if (index > 0) {
    changeSigFoodimage(useKey, index - 1);
  }
};
document.getElementById("btn2-a").onclick = function() {
  if (index < signature_Food[useKey].length - 1) {
    changeSigFoodimage(useKey, index + 1);
  }
};
        const move_sigFood = document.getElementById("moving-sigFood");
        move_sigFood.style.transform = `translateX(-${index * 122}%)`;

          const selectorBar = document.getElementById("selector-bar");
          const selectedOption = document.getElementById(`opt-${useKey-1}`);
          const moveSlider = document.getElementById("slider");

          const allOptions = document.querySelectorAll(".list-on-left ul li");
          allOptions.forEach(option => {
            option.style.color = "white";
            option.style.fontWeight = "400";
          });

          selectorBar.style.opacity = 1;
          // offsetTop(propertty) is the distance in pixels from the top of the parent container to the top of the selected <li> element.It returns the number of pixels between the top edge of the element and the top edge of its offset parent.If opt-2 is 60 pixels below the top of its parent <ul>, returns 60px.
          selectorBar.style.top = selectedOption.offsetTop + "px";
          //this sets where the top of the selector bar should be. 
          moveSlider.style.top = selectedOption.offsetTop + "px";
          selectedOption.style.color = "#880203";
          selectedOption.style.fontWeight = "600";
}

// If your form is submitting or refreshing the page before prompt() runs, it will cancel the script.though i give preventdefault, event.preventDefault() stops the browser’s default behavior (like submitting a form or following a link), but it does not guarantee that your script runs after the DOM is ready.So even if you prevent the form from submitting, your script might still fail if it tries to access DOM elements before they exist — like trying to grab #footerForm before it’s rendered.May be the script runs before the DOM is ready, to ensure that Script Runs After DOM Loads give:
// document.addEventListener("DOMContentLoaded", () => {
// const  fbackORqn = document.getElementById("footerForm")
// fbackORqn.addEventListener("submit", function (event) {
//       event.preventDefault(); 
//       console.log("form submitted")
//       feebackORquesstion(userState.username);
//     });
//   }); givin this outside the mainpagefunction needs all these yet... we are calling the mainpgfun in login fn so once logged it reloads page 

function feebackORquesstion(promptname){

  if (islogIn) {
    console.log("Running function for logged-in user.");
  } else {
    alert("Access denied. Please log in.");
    return forLogin();
  }

  let queriesFB =  prompt(`Dear ${promptname}, We’d love to hear from you — feel free to share your queries, feedback, or suggestions below!`);

  // prompt() returns an empty string ("") when the user clicks OK without typing anything. That still counts as “not null,” so your condition passes.to ensure the input is not empty or just whitespace:

  if(queriesFB !== null && queriesFB.trim() !== ""){
    console.log("prompt is not null")
    let afterfeeback = document.createElement("div");
    afterfeeback.id = "afterfbqn";
    afterfeeback.textContent = `"Got it! 🎯 Thanks for dropping your thoughts — we’re on it and excited to make things awesome!🎉"`
    document.body.appendChild(afterfeeback);

afterfeeback.style.position = "fixed";
afterfeeback.style.left = "50%";
afterfeeback.style.transform = "translateX(-50%)";
afterfeeback.style.backgroundColor = "#fff";
afterfeeback.style.padding = "10px 20px";
afterfeeback.style.borderRadius = "10px";
afterfeeback.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
afterfeeback.style.transition = "all 0.5s ease";
afterfeeback.style.top = "-100%"; 

    setTimeout(() => {
    afterfeeback.style.top = "2%";
  }, 10);

  setTimeout(() => {
  afterfeeback.style.top = "-100%"; 
}, 5000);

  }
  else{console.log("prompt is null")}


}



// try {
//   mainPageFunction();
// } catch (e) {
//   console.error("Main function error:", e);
// }