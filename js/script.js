new WOW({
    animateClass: 'animate__animated'
}).init();


window.onload = function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY) {
            $('header').css('background-color', 'rgb(37, 37, 45)');

        } else {
            $('header').css('background', 'none');
        }
    });


$('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    centerMode: true,
    // centerPadding: '0',
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    dots: true,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                arrows: false,
                centerMode: true,
                // centerPadding: '0',
                slidesToShow: 1
            }
        }
    ]
});


$(document).ready(function () {
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile mfp-with-zoom mfp-no-margin',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        }
    });
});


let burger = $('.burger');

burger.on('click', function () {
    $('.menu').css('display', 'flex');
    burger.css('opacity', '0');
    burger.css('cursor', 'auto');
})
$('.close').on('click', function () {
    $('.menu').css('display', 'none');
    burger.css('opacity', '100');
    burger.css('cursor', 'pointer');
})


$('.show-more').on('click', function () {
    $('.projects-item-more').css('display', 'flex');
})


let technologies = $('.click');
let technologiesItem =$('.technologies-item');

technologies.eq(0).on('click', function () {
    technologiesItem.css('display', 'none');
    technologiesItem.eq(0).css('display', 'block');
})
technologies.eq(1).on('click', function () {
    technologiesItem.css('display', 'none');
    technologiesItem.eq(1).css('display', 'block');
})
technologies.eq(2).on('click', function () {
    technologiesItem.css('display', 'none');
    technologiesItem.eq(2).css('display', 'block');
})
technologies.eq(3).on('click', function () {
    technologiesItem.css('display', 'none');
    technologiesItem.eq(3).css('display', 'block');
})
technologies.eq(4).on('click', function () {
    technologiesItem.css('display', 'none');
    technologiesItem.eq(4).css('display', 'block');
})


$('.map .btn').on('click', function () {
    $('.popUp').css('display', 'flex');
})
$('.cancel').on('click', function () {
    $('.popUp').css('display', 'none');
})


let hasError = false;
let input = $('input');
$('#submit').click(function () {
    let name = $('#name');
    let phone = $('#phone');
    let checkbox = $('#checkbox');
    $('.error-message').hide();
    input.css('border', '1px solid white').css('margin-bottom', '20px');
    if (!name.val()) {
        name.next().show();
        name.css('border', '1px solid red').css('margin-bottom', '0');
        hasError = true;
    }
    if (!phone.val()) {
        phone.next().show();
        phone.css('border', '1px solid red').css('margin-bottom', '0');
        hasError = true;
    }

    $.ajax({
        method: "POST",
        url: "https://testologia.ru/checkout",
        data: {name: name.val(), phone: phone.val()}
    })
        .done(function (message) {
            if (name.val() && phone.val() && checkbox.is(':checked') && message.success === 1) {
                $('.form').css('display', 'none');
                $('.answer').css('display', 'flex');
                setTimeout(function () {
                    $('.form').css('display', 'block');
                    $('.answer').css('display', 'none');
                    $('input').val('');
                }, 3000)
            }
            if (name.val() && phone.val() && message.success === 0 || !checkbox.is(':checked')) {
                alert('Возникла ошибка, попробуйте еще раз');
            }
        });
});


$('#popUp-submit').click(function () {
    let name1 = $('#popUp-name');
    let phone1 = $('#popUp-phone');
    let checkbox1 = $('#popUp-checkbox');
    $('.error-message').hide();
    input.css('border', '1px solid white').css('margin-bottom', '20px');

    if (!name1.val()) {
        name1.next().show();
        name1.css('border', '1px solid red').css('margin-bottom', '0');
        hasError = true;
    }
    if (!phone1.val()) {
        phone1.next().show();
        phone1.css('border', '1px solid red').css('margin-bottom', '0');
        hasError = true;
    }
    if (!hasError) {
        //ajax
    }

    $.ajax({
        method: "POST",
        url: "https://testologia.ru/checkout",
        data: {name: name1.val(), phone: phone1.val()}
    })
        .done(function (message) {
            if (name1.val() && phone1.val() && checkbox1.is(':checked') && message.success === 1) {
                $('.popUp-form').css('display', 'none');
                $('.popUp-answer').css('display', 'flex');
                setTimeout(function () {
                    $('.popUp-form').css('display', 'block');
                    $('.popUp-answer').css('display', 'none');
                    $('.popUp').css('display', 'none');
                    $('input').val('');
                }, 3000)
            }
            if (name1.val() && phone1.val() && message.success === 0 || !checkbox1.is(':checked')) {
                alert('Возникла ошибка, попробуйте еще раз');
            }
        });
});
}





