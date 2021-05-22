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
   
  function heroesBlock(heroes){

        heroes.forEach((hero)=>{
            $("#postavy .list-group").append(`<p class="action my-2 ">${hero.name}</p>`);
        });
    
        function fillPersonCard(person) {
            let hero = heroes.find(item => {return item.name === person});
            $(".card-header").html(`<i class="fas fa-star-of-life"></i> <b>${hero.birth}</b> - <i class="fas fa-cross"></i> <b>${hero.death}</b>`);
            $(".card-title").text(hero.name);
            $(".card-text").text(hero.biography);
            $(".gallery").empty();
            for (let i = 0; i < hero.portraits.length; i++) {
                $(".gallery").append(`<div class="col-sm-4 my-2"><img src="../img/${hero.portraits[i]}" alt="" class="img-fluid"></div>`);        
            }
        }
    
        $("#postavy li:first").addClass('active');
        fillPersonCard(heroes[0].name);
    
        $("#postavy p").on("click", function(){
            $("#postavy p").removeClass("active");
            $(this).addClass("active");        
            let person = $(this).text();
            $("#portret").slideUp(1000, function(){
                fillPersonCard(person);
            });
            $("#portret").slideDown(1000);
        });
      }
      fetch('../historie/data.json')
      .then(response => {
         console.log(response);
         return response.json()
      })
      .then(json => {
         console.log(json);
         heroesBlock(json);
      })
      .catch(function (error) {
         console.error('Chyba: \n', error);
      });
