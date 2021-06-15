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
    autoMatchOsTheme: true, // default: true
}
  
  const darkmode = new Darkmode(options);
  darkmode.showWidget();

  function city(mesta){ 
    
    let kraje = '';
$("#map path").on('mouseover', function(){
    kraje = $(this).css('fill');
    $(this).css('fill','rgb(95, 94, 94)');
    $(this).popover({
      'trigger':'click',
      'placement': 'right',
      'offset': '10%, -40,',
      'title': $(this).find('title').text()
    })
})

  $("#map path").on('mouseout', function(){
    $(this).css('fill', kraje);
  });
    $("#map rect").on('click', function(){
      /* do proměnné id se uloží identifikátor daného objektu - města */
      let id = $(this).attr('id');
      $("#map rect").css('fill', 'rgb(107, 220, 255)');
      $(this).css('fill', 'black');
      let jedu = mesta.find(item => {return item.id == id});
      /* během efektu zprůhlednění (1 s.) se pomocí callback funkce vyplní blok #info příslušnými daty o vybraném městě  */
      $('#info').fadeOut(1000, function() {$('#info').html(`<div id="nazev" class="col-12 my-3"><h2>${jedu.city} <small class="text-small">${new Intl.NumberFormat('cs-CS').format(jedu.peoples)} obv.</small></h2></div><div class="col-3"><img src="../img/${jedu.photo}"></div><div class="col-9 mx-auto" id="text">${jedu.text}</div>`)});
      $('#info').fadeIn(1000);
  });  
}
  fetch('../historie/map.json')
  .then(response => {
     console.log(response);
     return response.json()
  })
  .then(json => {
     console.log(json);
     city(json);
  })
  .catch(function (error) {
     console.error('Chyba: \n', error);
  });