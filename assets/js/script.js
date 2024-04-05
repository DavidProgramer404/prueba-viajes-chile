document.addEventListener("DOMContentLoaded", function () {
    // Agregar evento de clic a los botones de control del carrusel
    var carouselControls = document.querySelectorAll('.carousel-control-prev, .carousel-control-next');

    carouselControls.forEach(function (control) {
        control.addEventListener('click', function (event) {
            event.preventDefault();
            var direction = this.getAttribute('data-slide');
            var activeItem = document.querySelector('#rotating_photos .carousel-inner .carousel-item.active');

            if (direction === 'prev') {
                var prevItem = activeItem.previousElementSibling || document.querySelector('#rotating_photos .carousel-inner .carousel-item:last-child');
                activeItem.classList.remove('active');
                prevItem.classList.add('active');
            } else if (direction === 'next') {
                var nextItem = activeItem.nextElementSibling || document.querySelector('#rotating_photos .carousel-inner .carousel-item:first-child');
                activeItem.classList.remove('active');
                nextItem.classList.add('active');
            }

            // Agregar animación de desplazamiento suave
            document.querySelector('#rotating_photos .carousel-inner').classList.add('carousel-animation');
            setTimeout(function() {
                document.querySelector('#rotating_photos .carousel-inner').classList.remove('carousel-animation');
            }, 300); // Ajusta la duración de la animación según tus necesidades
        });
    });

    // Agregar smooth scroll a los enlaces del menú
    $("a.nav-link").on('click', function (event) {
        // Asegurarse de que this.hash tenga un valor antes de anular el comportamiento predeterminado
        if (this.hash !== "") {
            // Prevenir el comportamiento de clic de anclaje predeterminado
            event.preventDefault();

            // Guardar hash
            var hash = this.hash;

            // Usar método animate() de jQuery para agregar el desplazamiento suave
            // La animación tomará 800 milisegundos
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                // Agregar hash (#) a la URL cuando haya terminado de desplazarse (comportamiento predeterminado del clic)
                window.location.hash = hash;
            });
        } // Fin del if
    });

    // Resto del código jQuery
    $(function () {
        // Tooltip y Popover de Bootstrap
        $('[data-toggle="tooltip"]').tooltip();
        $('[data-toggle="popover"]').popover();

        // Cambio de color de la barra de navegación al hacer scroll
        $(window).scroll(function () {
            var navegador = $(".navbar");
            if ($(this).scrollTop() > 100) {
                navegador.css("background", "#328998");
            } else {
                navegador.css("background", "none");
            }
        });

        // Cambio de color de las tarjetas al pasar el mouse
        $(".card").hover(
            function () {
                $(this).css("color", "black");
            },
            function () {
                $(this).css("color", "black");
            }
        );

        // Cambio de color de las tarjetas específicas al pasar el mouse
        $(".card1, .card2, .card3, .card4").mouseover(function () {
            $(this).find(".card-title, .card-text").css("color", "#000000");
        }).mouseleave(function () {
            $(this).find(".card-title, .card-text").css("color", "#fff000");
        });
    });
});
