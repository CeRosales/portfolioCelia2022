
const container__menu = document.querySelector('.container__menu')
const typed = new Typed('.typed',{
    strings: [
        '<i class="section1__datos">empecé a diseñar con 11 años</i>', 
         '<i class="section1__datos>me casaría con Webflow</i>',
         '<i class="section1__datos">Bubble también es mi amor platónico</i>',
        '<i class="section1__datos">soy la humana de Lili & Bu 🐈 🐈‍⬛</i>',
    ],
    typeSpeed: 100,
    startDelay: 300,
    backSpeed: 100,
    backDelay: 1500,
    loop:true,
    loopCount: false,
});