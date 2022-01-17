// product data store in arr of object bellow
var productData = [
  {
    img: "https://static.oxinis.com/healthmug/image/product/411-2-200.jpg",
    nam: "Evion Capsule (400mg) (10caps)",
    detail:
      "Assists in managing the levels of Vitamin E in the body, contains anti-oxidants",
    logo: "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKhsLXBmJvoDmYBorqmDgfjZs-y4Mn5xNGyg&usqp=CAU",
    price: "300",
    discount: "40",
    actualprice: "399",
    cat: "Medicines",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/1365-1-200.jpg",
    nam: "Skinlite cream (15g)",
    detail: null,
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "49",
    discount: "40",
    actualprice: "210",
    cat: "Medicines",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/61158-1-200.jpg",
    nam: "Skinlite cream (15g)",
    detail: null,
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "49",
    discount: "40",
    actualprice: "210",
    cat: "Medicines",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/878-1-200.jpg",
    nam: "SBL Calcarea Fluoricum 6X (25g)",
    detail:
      "Helps to counter Vitamin B deficiency, and assists in promoting a healthy nervous system",
    logo: "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKhsLXBmJvoDmYBorqmDgfjZs-y4Mn5xNGyg&usqp=CAU",
    price: "29",
    discount: "40",
    actualprice: "34",
    cat: "Medicines",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/6308-1-200.jpg",
    nam: "Willmar Schwabe India Berberis Aquifolium 1X (Q) (30ml)",
    detail:
      "Useful in seasonal cold and viral flu, reduces bloating and helps in digestive process",
    logo: "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKhsLXBmJvoDmYBorqmDgfjZs-y4Mn5xNGyg&usqp=CAU",
    price: "200",
    discount: "40",
    actualprice: "300",
    cat: "Medicines",
    s1: "fas fa-star",
    s2: "fas fa-star-half-alt",
    s3: "far fa-star",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/633-1-200.jpg",
    nam: "SBL Nux Vomica 200 CH (30ml)",
    detail:
      "Useful in seasonal cold and viral flu, reduces bloating and helps in digestive process",
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "130",
    discount: "40",
    actualprice: "153",
    cat: "Medicines",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/1549-1-200.jpg",
    nam: "Candid Cream (50g)",
    detail:
      "Useful in seasonal cold and viral flu, reduces bloating and helps in digestive process",
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "130",
    discount: "40",
    actualprice: "153",
    cat: "Medicines",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/3050-3-200.jpg",
    nam: "Candid Cream (50g)",
    detail:
      "Useful in seasonal cold and viral flu, reduces bloating and helps in digestive process",
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "130",
    discount: "40",
    actualprice: "153",
    cat: "Medicines",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/540-2-200.jpg",
    nam: "Clear Gel (20g)",
    detail: null,
    logo: "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKhsLXBmJvoDmYBorqmDgfjZs-y4Mn5xNGyg&usqp=CAU",
    price: "98",
    cat: "Dilutions",
    discount: "50",
    actualprice: "148",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/61167-1-200.jpg",
    nam: "Clear Gel (20g)",
    detail: null,
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "98",
    cat: "Dilutions",
    discount: "50",
    actualprice: "148",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/622-1-200.jpg",
    nam: "Clear Gel (20g)",
    detail: null,
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "98",
    cat: "Dilutions",
    discount: "50",
    actualprice: "148",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/622-1-200.jpg",
    nam: "Clear Gel (20g)",
    detail: null,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKhsLXBmJvoDmYBorqmDgfjZs-y4Mn5xNGyg&usqp=CAU",
    price: "98",
    cat: "Dilutions",
    discount: "50",
    actualprice: "148",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/622-1-200.jpg",
    nam: "Clear Gel (20g)",
    detail: null,
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "98",
    cat: "Dilutions",
    discount: "50",
    actualprice: "148",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/127856-1-200.jpg",
    nam: "Salicylic Acid I.P. (20g)",
    detail: "Salicylic Acid for better skin and Keratolytictherapy",
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "169",
    discount: "30",
    actualprice: "200",
    cat: "Mother Tinctures",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star",
    s4: "fas fa-star",
    s5: "fas fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/7603-1-200.jpg",
    nam: "Refresh Tears Eye Drop (10ml)",
    detail:
      "Helps in relieving pain and provides comfort in dry eyes by producing artificial tears",
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "90",
    cat: "Mother Tinctures",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/11537-1-200.jpg",
    nam: "Isotine Eye Drops (10ml)",
    detail: null,
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "200",
    discount: "30",
    cat: "Dilutions",
    actualprice: "399",
    cat: "Mother Tinctures",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/7723-1-200.jpg",
    nam: "Silverex Ionic Gel (10g)",
    detail: null,
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "90",
    cat: "Mother Tinctures",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
    s5: "far fa-star",
  },

  {
    img: "https://static.oxinis.com/healthmug/image/product/92785-1-200.jpg",
    nam: "Soframycin Skin Cream (30g)",
    detail: null,
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "189",
    discount: "40",
    actualprice: "250",
    cat: "Biochemic Tablets",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star",
    s4: "fas fa-star",
    s5: "fas fa-star-half-alt",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/137284-1-200.jpg",
    nam: "Volini Gel (4g)",
    detail: null,
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "70",
    discount: "40",
    actualprice: "100",
    cat: "Biochemic Tablets",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star",
    s4: "fas fa-star",
    s5: "fas fa-star-half-alt",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/121505-1-200.jpg",
    nam: "Cliface Gel (20g)",
    detail: null,
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "100",
    discount: "40",
    actualprice: "150",
    cat: "Biochemic Tablets",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star",
    s4: "fas fa-star",
    s5: "fas fa-star-half-alt",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/92785-1-200.jpg",
    nam: "Soframycin Skin Cream (30g)",
    detail: null,
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "189",
    discount: "40",
    actualprice: "250",
    cat: "Biochemic Tablets",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star",
    s4: "fas fa-star",
    s5: "fas fa-star-half-alt",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/137284-1-200.jpg",
    nam: "Volini Gel (4g)",
    detail: null,
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "70",
    discount: "40",
    actualprice: "100",
    cat: "Biochemic Tablets",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star",
    s4: "fas fa-star",
    s5: "fas fa-star-half-alt",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/121505-1-200.jpg",
    nam: "Cliface Gel (20g)",
    detail: null,
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "100",
    discount: "40",
    actualprice: "150",
    cat: "Biochemic Tablets",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star",
    s4: "fas fa-star",
    s5: "fas fa-star-half-alt",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/92570-1-200.jpg",
    nam: "Combiflam Icy Hot Fast Pain Relief Gel (30g)",
    detail: null,
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "477",
    discount: "40",
    actualprice: "522",
    cat: "Biochemic Tablets",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star",
    s4: "fas fa-star",
    s5: "fas fa-star-half-alt",
  },
];

//                 map productData and append in to div bellow
function display(productData) {
  document.querySelector(".items").textContent = "";
  productData.map(function (ele, index) {
    var mainD = document.createElement("div");
    mainD.setAttribute("class", "itm"); //main div for item img and details

    var d1 = document.createElement("div"); //img
    var img = document.createElement("img");
    img.setAttribute("src", ele.img);
    d1.append(img);

    var d2 = document.createElement("div");
    var name = document.createElement("p");
    name.setAttribute("id", "iname"); //name of product
    name.textContent = ele.nam;
    var detail = document.createElement("p");
    detail.textContent = ele.detail;
    d2.prepend(name, detail);

    var d3 = document.createElement("div"); // img for review stras img (still ppending)
    var stardiv1 = document.createElement("i");
    var stardiv2 = document.createElement("i");
    var stardiv3 = document.createElement("i");
    var stardiv4 = document.createElement("i");
    var stardiv5 = document.createElement("i");
    stardiv1.setAttribute("class", ele.s1);
    stardiv2.setAttribute("class", ele.s2);
    stardiv3.setAttribute("class", ele.s3);
    stardiv4.setAttribute("class", ele.s4);
    stardiv5.setAttribute("class", ele.s5);
    d3.append(stardiv1, stardiv2, stardiv3, stardiv4, stardiv5);

    var d4 = document.createElement("div");
    var logo = document.createElement("img");
    logo.setAttribute("src", ele.logo);
    logo.setAttribute("src", ele.logo);
    d4.append(logo);

    var d5 = document.createElement("div");
    var price = document.createElement("p");
    price.setAttribute("id", "price");
    price.textContent = ele.price;
    var rupeeLogo = document.createElement("span");
    rupeeLogo.textContent = "₹";
    rupeeLogo.style.fontSize = "20px";
    var rupeeLogo1 = document.createElement("span");
    rupeeLogo1.textContent = "₹";
    rupeeLogo1.style.fontSize = "20px";
    rupeeLogo1.style.color = "#b7b7b7";
    var actualPrice = document.createElement("span");
    actualPrice.textContent = ele.actualprice;
    actualPrice.style.fontSize = "20px";
    actualPrice.style.color = "#b7b7b7";
    actualPrice.style.marginRight = "15px";
    actualPrice.style.textDecoration = "line-through";

    d5.append(rupeeLogo1, actualPrice, rupeeLogo, price);

    var d6 = document.createElement("div"); // add to cart logo
    var cartLogo = document.createElement("i");
    cartLogo.setAttribute("class", "fas fa-cart-plus");
    cartLogo.style.fontSize = "20px";
    d6.append(cartLogo);

    mainD.append(d1, d2, d3, d4, d5, d6);
    document.querySelector(".items").append(mainD);
  });
  // var numberofitem = document.createElement("div");
  // numberofitem.textContent = productData.length;
  // console.log(numberofitem);
  // document.querySelector(".products>div:nth-child(4)>div:nth-child(1)").append(numberofitem)
}
// document.querySelector(".products>div:nth-child(4)>div:nth-child(1)").textContent= "";
display(productData);
//sorting bellow
// sort by name
document.querySelector(".sbyName").addEventListener("click", sortbyname);

function sortbyname() {
  productData.sort(function (a, b) {
    if (a.nam > b.nam) return -1;
    if (a.nam < b.nam) return -1;
    return 0;
  });
  display(productData);
  // console.log(productData)
}

// sort by price   --1
document.querySelector(".LtoH").addEventListener("click", sortbyLtoH);

function sortbyLtoH() {
  productData.sort(function (a, b) {
    return Number(a.price) - Number(b.price);
  });
  display(productData);

  // console.log(productData)
}

// sort by price   --2

document.querySelector(".HtoL").addEventListener("click", sortbyHtoL);

function sortbyHtoL() {
  productData.sort(function (a, b) {
    return Number(b.price) - Number(a.price);
  });
  display(productData);

  // console.log(productData)
}

document.querySelector(".bayurveda1").addEventListener("click", filterby1);
function filterby1() {
  var filtitem = productData.filter(function (ele) {
    return ele.cat == "Medicines";
  });
  console.log(filtitem);
  display(filtitem);
}

document.querySelector(".bayurveda2").addEventListener("click", filterby2);
function filterby2() {
  var filtitem = productData.filter(function (ele) {
    return ele.cat == "Dilutions";
  });
  console.log(filtitem);
  display(filtitem);
}

document.querySelector(".bayurveda3").addEventListener("click", filterby3);
function filterby3() {
  var filtitem = productData.filter(function (ele) {
    return ele.cat == "Mother Tinctures";
  });
  console.log(filtitem);
  display(filtitem);
}

document.querySelector(".bayurveda4").addEventListener("click", filterby4);
function filterby4() {
  var filtitem = productData.filter(function (ele) {
    return ele.cat == "Biochemic Tablets";
  });
  //   console.log(filtitem);
  display(filtitem);
}

//by price filter
//bellow 200
document.querySelector(".b200").addEventListener("click", filtby200);
function filtby200() {
  var filtbyprice = productData.filter(function (ele) {
    return Number(ele.price) <= 100;
  });
  console.log(filtbyprice);
  display(filtbyprice);
}

//bellow 500 and abow 200
document.querySelector(".b500").addEventListener("click", filtby500);
function filtby500() {
  var filtbyprice = productData.filter(function (ele) {
    return Number(ele.price) <= 500 && Number(ele.price) >= 201;
  });
  console.log(filtbyprice);
  display(filtbyprice);
}

document.querySelector("#return").addEventListener("click", function () {
  window.location.href = "index.html";
});
