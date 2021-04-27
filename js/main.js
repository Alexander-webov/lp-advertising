$(document).ready(function () {
    $('.btn-modal').magnificPopup();

    // Элемент, куда вы хотите записать страницы
    let pages = $('.reviews__slider-counter');
    // Элемент слайдера
    let slider = $('.reviews__slider');
    slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        let i = (currentSlide ? currentSlide : 0) + 1;
        pages.html('0' + i + ' <span>0' + slick.slideCount + '</span>');
    });

    $('.reviews__slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        prevArrow: '<button class="btn__slider btn__slider-prev"><svg width="53" height="26" viewBox="0 0 53 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.9115 0.313477L17.4177 2.41444L6.7848 11.3279H53V14.2993H6.78514L17.4177 23.2125L14.9115 25.3135L0 12.8135L14.9115 0.313477Z"   fill="black"/></svg></button>',
        nextArrow: '<button class="btn__slider btn__slider-next"><svg width="53" height="26" viewBox="0 0 53 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M38.0885 0.313477L35.5823 2.41444L46.2152 11.3279H0V14.2993H46.2149L35.5823 23.2125L38.0885 25.3135L53 12.8135L38.0885 0.313477Z" fill="black"/></svg></button>',
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            },
        ]
    });



    var men = true;

    $("#sandwich").click(function () {
        if (men == false) {
            $(".menu").slideUp();
            men = !men;
        }
        else {
            $(".menu").slideDown();
            men = !men;
        }
    });

    $("#sandwich, .menu_item").click(function () {
        $("#sandwich").toggleClass("active");
    });


    $("#phone").mask("+7 (999) 999-99-99");
    $("#phone2").mask("+7 (999) 999-99-99");

    /*email*/
    //E-mail Ajax Send
    $(".main__feedback-form").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function () {
            alert("Спасибо за заявку!");
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });




});