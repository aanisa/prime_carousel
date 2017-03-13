var index = 0;
var circles = peopleArray.length;
var circleArray = [];
var shoutoutArray = [];

$(document).ready(function() {
    appendDom();
    buttons();
    buttonClick();
});


function appendDom() {
    for (var i = 0; i < circles; i++) {
        $(".container").append("<div class='circle'></div>");
        var $cr = $('.container').children().last();
        $cr.data("circleIndex", i);
        circleArray.push($cr);


        $('.info').append('<div></div>');
        var $pl = $('.info').children().last();
        $pl.append('<p class="name">' + peopleArray[i].name + '<p>',
            '<p class="shout">' + peopleArray[i].shoutout + '<p>');
        $pl.data("person", i);
        shoutoutArray.push($pl);
        // peopleArray[i] = $pl; Can do this instead of pushing into a newarray
        //storing the entire array into the element
    }

    highlightCircles();
}


function buttons() {
    $('.container').append('<div class="prev"><button>Prev</button></div>',
        '<div class="next"><button>Next</button></div>');
}

function buttonClick() {
    $('.next').on('click', function() {
        $('.info').fadeOut(2000, function() {
            index++;
            if (index >= circles) {
                index = 0;
            }
            highlightCircles();
            $('.info').fadeIn(2000);
        });

    });
    $('.prev').on('click', function() {
        $('.info').fadeOut(2000, function() {
            index--;
            if (index < 0) {
                index = circles - 1;
            }
            highlightCircles();
            $('.info').fadeIn(2000);
        });
    });

    $('.circle').on("click", function() {
        index = parseInt($(this).data("circleIndex"));
        highlightCircles();
    });
}

function highlightCircles() {
    for (var i = 0; i < shoutoutArray.length; i++) {
        if (circleArray[i].data("circleIndex") == index) {
            $(circleArray[i]).addClass("highlight");
            shoutoutArray[i].show();
        } else if (circleArray[i].data("circleIndex") != index) {
            $(circleArray[i]).removeClass("highlight");
            shoutoutArray[i].hide();
        }
    }
    $('.page').text("Chiyak: " + (index + 1) + "/" + peopleArray.length);
}
