const navBar = document.getElementById("navbar");
const navBtn = document.getElementById("nav-btn");
const navClose = document.getElementById("nav-close");
const overlayDiv = document.querySelector(".overlay");
const imgs=document.querySelectorAll("img")


const url = document.URL;

navBtn.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target.classList.contains("fa-bars")) {
    navBar.classList.add("shownav", "overlays");
    document.body.classList.add("stop-scrolling")
    overlayDiv.classList.remove("hidden");
    console.log("water");
  }
});

navClose.addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-times")) {
    navBar.classList.remove("shownav");
    document.body.classList.remove("stop-scrolling")
    overlayDiv.classList.add("hidden");

  }
});

const services = document.querySelector(".services");
const service = document.querySelectorAll(".service");
const orderList = document.querySelector(".ordered_list");
const list = document.querySelectorAll(".list");
const serviceText = document.querySelector(".service-text");
const serviceImgCon = document.querySelectorAll(".service-image-container")


const product = document.querySelector(".product");
const productInventory = document.querySelector(".products-inventory");
service.forEach(function (ser, i) {
  const tab = (ser.dataset.tab = i + 1);
  console.log(tab);
  console.log(service[i]);
  if (document.body.contains(product) && document.body.contains(services)) {
    service[i].style.background = `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),url(./gspic/gift-service-pic-${i + 1}.jpg) center/cover no-repeat`;
    service[i].style.background = "cover";
    service[i].loading="lazy"
  }
});
serviceImgCon.forEach(function (ol, i) {
  if (url.includes("services")) {
    const img = document.createElement("img");
    img.src = `./gspic/gift-service-pic-${i + 1}.jpg`;
    img.loading="lazy"
    img.classList.add("image");

    serviceImgCon[i].append(img);
  }
});
// service.forEach(function(single){
//   if(single.style.width='50%'){
//     const stuff=document.querySelectorAll(".about-image-container")
//     stuff.forEach(function(each){
//       each.style.width="25rem"
//     })
//   }
// })

// list.forEach(function (ol, i) {
//   if (url.includes("services")) {
//     const img = document.createElement("img");
//     img.src = `/gspic/gift-service-pic-${i + 1}.jpg`;
//     img.classList.add("image");

//     list[i].append(img);
//   }
// });

// PRODUCT SIDE
const width = window.innerWidth;
console.log(width);

// window.addEventListener("resize", function () {
//   if (url.includes("index") && width > 992) {
//     product.parentElement.removeChild(product.parentElement.lastElementChild);
//   }
// });

// const resizeGuy = function () {
//   if (url.includes("index") && width > 992) {
//     product.parentElement.removeChild(product.parentElement.lastElementChild);
//   }
// };

  // this.location.reload();
hild(product.parentElement.lastElementChild);
//   }
// };

  // this.location.reload();
