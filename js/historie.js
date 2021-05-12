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
  const heroes = [
    {
       "name":"Pelé",
       "birth":"23.10.1940",
       "death":"Alive",
       "biography":"Pelé, vlastním jménem Edson Arantes do Nascimento portugalsky s brazilským přízvukem: [pelé | édžsn arančés če nasemejnto] (* 23. října 1940 Três Corações) je bývalý brazilský fotbalista, který je často označován jako nejlepší fotbalista všech dob. V roce 1970 se stal prvním hráčem, který získal tři tituly mistra světa. Za svou kariéru vstřelil 1284 gólů, jubilejní tisící zaznamenal 19. listopadu 1969.",
       "portraits":[
          "pele.jpg",
          "pele2.jpg",
          "pele3.jpg"
       ], 
    },
  {
    "name":"Emerson Fittipaldi",
    "birth":"12.12.1946",
    "death":"Alive",
    "biography":"je bývalý brazilský automobilový závodník. Jako pilot Formule 1 je dvojnásobným mistrem světa z let 1972 a 1974, dokázal také dvakrát vyhrát titul v sérii CART a v závodě Indianapolis 500.",
    "portraits":[
       "zavodnik.jpg",
       "zavodnik2.jpg",
       "zavodnik3.jpg"
    ], 
 },
 {
  "name":"Gilberto Gil",
  "birth":"26.6.1942",
  "death":"Alive",
  "biography":"Je brazilský zpěvák, kytarista, skladatel, textař a politik. Nejlépe znám díky svým nahrávkám ve stylu tropicalismo z konce 60. let, například Domingo No Parque. Mnoho jeho skladeb nahráli Elis Regina, Gal Costa, Maria Bethânia a další umělci. Na konci 80. let 20. století vstoupil do brazilské Strany zelených. V letech 2003—2008 byl ministrem kultury ve vládě prezidenta Luly da Silva. Po pěti letech však podal demisi, aby se mohl opět plně věnovat hudbě.",
  "portraits":[
     "zpevak.jpg",
     "zpevak2.jpg",
     "zpevak3.jpg"
  ], 
},
{
  "name":"Alberto Santos-Dumont",
  "birth":"20.7.1873",
  "death":"23.7.1932",
  "biography":"Byl významný letecký průkopník a konstruktér. Sestrojil první skutečně řiditelnou vzducholoď na světě. Provedl první ověřený let letounu těžšího vzduchu v Evropě. Narodil se a zemřel v Brazílii, ale své konstrukce uskutečnil především ve Francii. Je po něm pojmenován měsíční kráter Santos-Dumont a letiště Aeroporto Santos Dumont v Rio de Janeiru.",
  "portraits":[
     "konstrukter1.jpg",
     "konstrukter2.jpg",
     "konstrukter3.jpg"
  ], 
},
{
"name":"Tiradentes",
"birth":"12.11.1746",
"death":"21.4.1792",
"biography":"Byl brazilský lékař, voják, podnikatel a politik, vůdce protikoloniálního povstání nazvaného Inconfidência Mineira. Tiradentes je v Brazílii uctíván jako národní hrdina, výročí jeho popravy bylo po svržení monarchie v roce 1889 vyhlášeno státním svátkem, stal se námětem mnoha obrazů i filmu, který v roce 1948 natočila režisérka Carmen Santosová. Je vyobrazen na minci v hodnotě 5 centavos, v řadě měst stojí jeho sochy, jmenují se po něm fotbalové kluby, ulice, náměstí i město Tiradentes (Minas Gerais).",
"portraits":[
   "tiradentes.jpg",
   "tiradentes2.jpg",
   "tiradentes3.jpg"
], 
},
{
  "name":"Adriana Lima",
  "birth":"12.6.1981",
  "death":"Alive",
  "biography":"Je brazilská topmodelka a herečka. Její celé jméno je Adriana Francesca Lima. Narodila se jako jedináček. Svůj první úspěch slavila v 15 letech. Poprvé byla objevena ve 13 letech v nákupním centru při nakupování. Proslavila se zejména prací pro značku spodního prádla Victoria's Secret. Objevila se i ve filmu The Follow z roku 2001. Do manželství Adriana vstoupila v roce 2009 a to se srbským hráčem basketbalu Markem Jarićem. Spolu se jim narodily dvě dcery.",
  "portraits":[
     "modelka.jpg",
     "modelka2.jpg",
     "modelka3.jpg"
  ], 
  },
  {
    "name":"Paulo Coelho",
    "birth":"24.8.1947",
    "death":"Alive",
    "biography":"Je populární brazilský spisovatel. V roce 1995 francouzský ministr kultury jmenoval Coelha rytířem Řádu umění a literatury. V roce 1999 byl oceněn prestižní cenou Crystal Award (uděluje ji Světové ekonomické fórum) a téhož roku mu francouzská vláda udělila řád Čestné legie.",
    "portraits":[
       "spisovatel.jpg",
       "spisovatel2.jpg",
       "spisovatel3.jpg"
    ], 
    },
    {
      "name":"Kelly Key",
      "birth":"3.3.1983",
      "death":"Alive",
      "biography":"Je brazilská popová zpěvačka, skladatelka a televizní moderátorka. Key vydala své první album s vlastním názvem v roce 2001 ve věku 17 let. Jejím prvním singlem byla píseň „Escondido“. Píseň získala hodně airplay díky svému tehdejšímu příteli, brazilskému funkovému zpěvákovi Latino , s nímž chodila roky, a nemorálním textům. Její velkým průlomem byla píseň „Baba“, která byla největším hitem v zemi v letech 2001 a 2002.",
      "portraits":[
         "zpevacka.jpg",
         "zpevacka2.jpg",
         "zpevacka3.jpeg"
      ], 
      },
  ];
  $(function(){

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
                $(".gallery").append(`<div class="col-sm-4"><img src="../img/${hero.portraits[i]}" alt="" class="img-fluid"></div>`);        
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
      })