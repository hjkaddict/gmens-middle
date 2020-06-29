///////
var loggedin = false;
function getIDPW() {
    var pw = document.getElementById("myPW").value;
    if (pw === 'gmens') {
        loggedin = true;
        $(".sectionContentContainer-full .container").fadeOut("slow");
        $(".sectionContentContainer-full .container").fadeOut("slow", function () {
            if ($(window).width() > 768) {
                $(".dataContainer").fadeIn("slow");
            }
            $(".dataContainer").css("display", "flex")
                .fadeIn("slow");
        });

    }
}

///////
$(function () {
    $('.kren div').click(function () {
        var lang = $(this).attr('class');
        if (lang === 'en') {
            $('.en').css("color", "black");
            $('.kr').css("color", "lightgray");

        } else if (lang === 'kr') {
            $('.en').css("color", "lightgray");
            $('.kr').css("color", "black");
        }
        $('.lang').each(function (index, element) {
            $(this).html(arrLang[lang][$(this).attr('key')])
        })
    })
    $('.kren div.kr').trigger("click") // select the language when loads
})

//////

$(function () {
    $("#hamMenu").click(function () {
        $("#headerMobile").css("width", "300px");
        $('#headerMobile .closebtn').css("right", "10px");
    })

    $("#headerMobile .closebtn").click(function () {
        $("#headerMobile").css("width", "0");
        $('#headerMobile .closebtn').css("right", "-50px");
    })
})
//////

//////


$(function () {
    $('#aboutus-history').click(function () {
        $('.aboutusHistory').css("display", "block");
        $('.aboutusGreetings').css("display", "none");
        $('#aboutus-greetings').css('color', 'gray');
        $('#aboutus-history').css('color', 'black');
    })
    $('#aboutus-greetings').click(function () {
        $('.aboutusGreetings').css("display", "block");
        $('.aboutusHistory').css("display", "none");
        $('#aboutus-greetings').css('color', 'black');
        $('#aboutus-history').css('color', 'gray');
    })
})

//////
$(function () {
    for (let i = 1; i <= 50; i++) {
        $('<img>', {
            src: "img/data/data " + i + ".jpeg",
            id: "dataID" + i
        }).appendTo('#dataContent');
    }
})

//scroll to jpeg data
$(function () {
    $(".dataListContainer ul li").click(function (e) {
        e.preventDefault()

        var pos = $("#dataID1").offset().top + $('.dataContent').scrollTop();
        $('.dataContent').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top + $('.dataContent').scrollTop() + 50
            }, 200)
    })
})

//////
$(function () {
    $(".dataContent").on('scroll', function () {
        var topPos = $('.dataContent').scrollTop();

        if (topPos < $($("#list1-1").attr('href')).offset().top + topPos) {
            $("#list1").css("color", "black").siblings('').css('color', 'gray');

        }

        else if (topPos < $($("#list1-2").attr('href')).offset().top + topPos) {
            $("#list1-1").css("color", "black").siblings('').css('color', 'gray');
        }
        else if (topPos < $($("#list1-3").attr('href')).offset().top + topPos) {
            $("#list1-2").css("color", "black").siblings('').css('color', 'gray');
        }
        else if (topPos < $($("#list1-4").attr('href')).offset().top + topPos) {
            $("#list1-3").css("color", "black").siblings('').css('color', 'gray');
        }
        else if (topPos < $($("#list2").attr('href')).offset().top + topPos) {
            $("#list1-4").css("color", "black").siblings('').css('color', 'gray');
        }
        else if (topPos < $($("#list3").attr('href')).offset().top + topPos) {
            $("#list2").css("color", "black").siblings('').css('color', 'gray');
        }
        else if (topPos < $($("#list4").attr('href')).offset().top + topPos) {
            $("#list3").css("color", "black").siblings('').css('color', 'gray');
        }
        else if (topPos < $($("#list5").attr('href')).offset().top + topPos) {
            $("#list4").css("color", "black").siblings('').css('color', 'gray');
        }
        else if (topPos < $($("#list6").attr('href')).offset().top + topPos) {
            $("#list5").css("color", "black").siblings('').css('color', 'gray');
        }
        else if (topPos < $($("#list7").attr('href')).offset().top + topPos) {
            $("#list6").css("color", "black").siblings('').css('color', 'gray');
        }
        else if (topPos < $($("#list7-2").attr('href')).offset().top + topPos) {
            $("#list7-1").css("color", "black").siblings('').css('color', 'gray');
        }
        else if (topPos < $($("#list7-3").attr('href')).offset().top + topPos) {
            $("#list7-2").css("color", "black").siblings('').css('color', 'gray');
        }
        else if (topPos < $($("#list7-4").attr('href')).offset().top + topPos) {
            $("#list7-3").css("color", "black").siblings('').css('color', 'gray');
        }
        else if (topPos < $($("#list7-5").attr('href')).offset().top + topPos) {
            $("#list7-4").css("color", "black").siblings('').css('color', 'gray');
        }
        else if (topPos < $($("#list7-6").attr('href')).offset().top + topPos) {
            $("#list7-5").css("color", "black").siblings('').css('color', 'gray');
        }
        else if (topPos < $($("#list7-7").attr('href')).offset().top + topPos) {
            $("#list7-6").css("color", "black").siblings('').css('color', 'gray');
        }
        else if (topPos < $($("#list7-8").attr('href')).offset().top + topPos) {
            $("#list7-7").css("color", "black").siblings('').css('color', 'gray');
        }
        else if (topPos < $($("#list7-9").attr('href')).offset().top + topPos) {
            $("#list7-8").css("color", "black").siblings('').css('color', 'gray');
        } else {
            $("#list7-9").css("color", "black").siblings('').css('color', 'gray');
        }
    });
})

///////////////
$(function () {
    $(":radio[name=agreement]").change(function () {
        if (this.value === 'yes') {

            $('.requestAgreement').fadeOut(function () {
                if ($(window).width() > 768) {
                    $('.requestContainer').fadeIn();
                } else {
                    $('.requestContainerMobile').fadeIn();
                }
            })
        } else {
            $('.requestContainer').fadeOut();
            $('.requestAgreement').fadeIn();
            $('.requestContainerMobile').fadeOut();
        }
    });
})

/////////////
$(function () {
    $('.serviceSectionMenu li').click(function () {
        $(this).css("background", "black");
        $(this).css("color", "white");
        $(this).siblings().css("background", "white");
        $(this).siblings().css("color", "gray");

        var attr = $(this).attr('key');
        $("#map-" + attr).siblings().fadeOut('fast');
        $("#map-" + attr).fadeIn('fast');

        if (attr === 'service-1') {
            if ($(window).width() <= 768) {
                $(".movingMap img").css("left", "-180px");
                $(".movingMap img").css("top", "-150px");
            } else if ($(window).width() <= 1400) {
                $(".movingMap img").css("left", "-300px");
                $(".movingMap img").css("top", "-300px");
            } else {
                $(".movingMap img").css("left", "-100px");
                $(".movingMap img").css("top", "-300px");
            }

            $(".serviceContent-1").css("top", "0");
        } else {
            $(".serviceContent-1").css("top", "-200%");
        }

        if (attr === 'service-2') {
            if ($(window).width() <= 768) {
                $(".movingMap img").css("left", "-700px");
                $(".movingMap img").css("top", "-250px");
            } else if ($(window).width() <= 1400) {
                $(".movingMap img").css("left", "-800px");
                $(".movingMap img").css("top", "-450px");
            } else {
                $(".movingMap img").css("left", "-500px");
                $(".movingMap img").css("top", "-450px");
            }
            $(".serviceContent-2").css("top", "0");
        } else {
            $(".serviceContent-2").css("top", "-200%");
        }

        if (attr === 'service-3') {
            if ($(window).width() <= 768) {
                $(".movingMap img").css("left", "-300px");
                $(".movingMap img").css("top", "-300px");
            } else if ($(window).width() <= 1400) {
                $(".movingMap img").css("left", "-300px");
                $(".movingMap img").css("top", "-600px");
            } else {
                $(".movingMap img").css("left", "-300px");
                $(".movingMap img").css("top", "-600px");
            }


            $(".serviceContent-3").css("top", "0");
        } else {
            $(".serviceContent-3").css("top", "-200%");
        }
        if (attr === 'service-4') {
            if ($(window).width() <= 768) {
                $(".movingMap img").css("left", "-150px");
                $(".movingMap img").css("top", "-480px");
            } else if ($(window).width() <= 1400) {
                $(".movingMap img").css("left", "-100px");
                $(".movingMap img").css("top", "-880px");
            } else {
                $(".movingMap img").css("left", "-100px");
                $(".movingMap img").css("top", "-880px");
            }
            $(".serviceContent-4").css("top", "0");
        } else {
            $(".serviceContent-4").css("top", "-200%");
        }

        if (attr === 'service-5') {
            if ($(window).width() <= 768) {
                $(".movingMap img").css("left", "-700px");
                $(".movingMap img").css("top", "-450px");
            } else if ($(window).width() <= 1400) {
                $(".movingMap img").css("left", "-900px");
                $(".movingMap img").css("top", "-800px");
            } else {
                $(".movingMap img").css("left", "-550px");
                $(".movingMap img").css("top", "-800px");
            }

            $(".serviceContent-5").css("top", "0");
        } else {
            $(".serviceContent-5").css("top", "-200%");
        }

        if (attr === 'service-6') {
            if ($(window).width() <= 768) {
                $(".movingMap img").css("left", "-600px");
                $(".movingMap img").css("top", "-470px");
            } else if ($(window).width() <= 1400) {
                $(".movingMap img").css("left", "-600px");
                $(".movingMap img").css("top", "-870px");
            } else {
                $(".movingMap img").css("left", "-300px");
                $(".movingMap img").css("top", "-870px");
            }
            $(".serviceContent-6").css("top", "0");
        } else {
            $(".serviceContent-6").css("top", "-200%");
        }

    })
})