window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

const options = {
  bottom: '23px', // default: '32px'
  right: '32px', // default: '32px'
  left: 'unset', // default: 'unset'
  time: '0.3s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: true, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();

function myFunction() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
function myFunction2() {
  let dots2 = document.getElementById("dots2");
  let moreText2 = document.getElementById("more2");
  let btnText2 = document.getElementById("myBtn2");

  if (dots2.style.display === "none") {
    dots2.style.display = "inline";
    btnText2.innerHTML = "Read more";
    moreText2.style.display = "none";
  } else {
    dots2.style.display = "none";
    btnText2.innerHTML = "Read less";
    moreText2.style.display = "inline";
  }
}
function myFunction3() {
  let dots3 = document.getElementById("dots3");
  let moreText3 = document.getElementById("more3");
  let btnText3 = document.getElementById("myBtn3");

  if (dots3.style.display === "none") {
    dots3.style.display = "inline";
    btnText3.innerHTML = "Read more";
    moreText3.style.display = "none";
  } else {
    dots3.style.display = "none";
    btnText3.innerHTML = "Read less";
    moreText3.style.display = "inline";
  }
}
function myFunction4() {
  let dots4 = document.getElementById("dots4");
  let moreText4 = document.getElementById("more4");
  let btnText4 = document.getElementById("myBtn4");

  if (dots4.style.display === "none") {
    dots4.style.display = "inline";
    btnText4.innerHTML = "Read more";
    moreText4.style.display = "none";
  } else {
    dots4.style.display = "none";
    btnText4.innerHTML = "Read less";
    moreText4.style.display = "inline";
  }
}

let kuchyne = document.getElementById('kuchyne');
let images = ['img/feijoada.jpg', 'img/plzen.jpg','img/cachaça.jpg','img/kava.jpg','img/guarana.jpg'];
setInterval(function(){
  let random = Math.floor(Math.random() *5);
  kuchyne.src = images[random];
}, 9000);

let karneval = document.getElementById('karneval');
let images2 = ['img/karneval.jpg','img/karneval2.jpg','img/karneval3.jpg','img/karneval4.jpg','img/karneval5.jpg'];
setInterval(function(){
  let random2 = Math.floor(Math.random() *5);
  karneval.src = images2[random2];
}, 8000);

let fotbal = document.getElementById('fotbal');
let images3 = ['img/fotbal.jpg','img/futsal.jpg','img/olympic.jpg','img/fotbal4.jpg','img/jachting.jpg'];
setInterval(function(){
  let random3 = Math.floor(Math.random() *5);
  fotbal.src = images3[random3];
}, 10000);

let ekonomika = document.getElementById('ekonomika');
let images4 = ['img/ekonomika.jpg','img/mince.jpg','img/penize.jpg'];
setInterval(function(){
  let random4 = Math.floor(Math.random() *3);
  ekonomika.src = images4[random4];
}, 12000);
