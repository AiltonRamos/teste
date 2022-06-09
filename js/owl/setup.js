/*Carrossel simples Basic*/
$('.owl-carousel').owlCarousel({
    loop:true, /*No true consegue navegar de forma infinita, no false só vai para 1 lado*/
    margin:10, /*Alterar a margin entre um e outro */
    nav:true, /*Ícone de navegação */
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{/*Quando a tela tiver com 1000px ou mais, coloque até 5 elementos na tela */
            items:5
        }
    }
})