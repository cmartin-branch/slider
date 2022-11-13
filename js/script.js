// api url
const api_url =
      "https://fakestoreapi.com/products?limit=6";

// Defining async function
async function getapi(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    console.log(Object.entries(data));
    console.log(Object.values(data)[1]);
    if (response) {
    //    hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
// function hideloader() {
//     document.getElementById('loading').style.display = 'none';
// }
// Function to define innerHTML for HTML table
function show(data) {
    let tab = "";

    // Loop to access all rows
    for (let r of Object.values(data)) {
        tab += `<div class="box">
    	<!--img-box---------->
    	<div class="slide-img">
    	<img alt="1" src="${r.image}">
    	<!--overlayer---------->
    	<div class="overlay">
    	<!--buy-btn------>
    	<a href="#" class="buy-btn">Buy Now</a>
    	</div>
    	</div>
    	<!--detail-box--------->
    	<div class="detail-box">
    	<!--type-------->
    	<div class="type">
    	<a href="#">${r.title}</a>
    	<span>New Arrival</span>
    	</div>
    	<!--price-------->
    	<a href="#" class="price">${r.price}</a>

    	</div>

    	</div>
    `;
    }
    // Setting innerHTML as tab variable
    console.log(tab);
    document.getElementById("recommendations").innerHTML = tab;
    $(document).ready(function(){
      $('.your-class').slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1
      });
    });
}
