$(document).ready( function(){
    // --- добавляем класс активным ссылкам
    $('.menu .menu__list li a').each(function () {
        if (this.href == location.href) $(this).parent().addClass('active-link');
    });

    // --- отслеживаем событие скролинга для появления кнопки прокрутки
    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 200) {
            $('.button').fadeIn();
        } else {
            $('.button').fadeOut();
        }
    });

    // --- прокрутка страницы вверх по клику на кнопку
    $(document).on('click', '.button', function() {
        var header = document.getElementsByTagName('header')[0];
        window.scrollTo({
            top: header.getBoundingClientRect().top,
            left: 0,
            behavior: 'smooth'
        });
    });

});






