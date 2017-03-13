var index = 0;
var squares = peopleArray.length;
var squareArray = [];
var shoutoutArray = [];

$(document).ready(function() {
    appendDom();
    buttons();
    buttonClick();
});


function appendDom() {
    for (var i = 0; i < squares; i++) {
        $(".container").append("<div class='square'></div>");
        var $sq = $('.container').children().last();
        $sq.data("square", i);
        squareArray.push($sq);


        $('.info').append('<div></div>');
        var $pl = $('.info').children().last();
        $pl.append('<p class="name">' + peopleArray[i].name + '<p>',
            '<p class="shout">' + peopleArray[i].shoutout + '<p>');
        $pl.data("person", i);
        shoutoutArray.push($pl);
        // peopleArray[i] = $pl; Can do this instead of pushig into a newarray
        //storing the entire array into the element
    }
    highlightSquares();
}


function buttons() {
    $('.container').append('<div class="prev"><button>Prev</button></div>',
        '<div class="next"><button>Next</button></div>');
}

function buttonClick() {
    $('.next').on('click', function() {
        $('.info').fadeOut(2000, function() {
            index++;
            if (index >= squares) {
                index = 0;
            }
            highlightSquares();
            $('.info').fadeIn(2000);
        });

    });
    $('.prev').on('click', function() {
        $('.info').fadeOut(2000, function() {
            index--;
            if (index < 0) {
                index = squares - 1;
            }
            highlightSquares();
            $('.info').fadeIn(2000);
        });
    });
}

function highlightSquares() {
    for (var i = 0; i < shoutoutArray.length; i++) {
        if (squareArray[i].data("square") == index) {
            $(squareArray[i]).addClass("highlight");
            shoutoutArray[i].show();
        } else if (squareArray[i].data("square") != index) {
            $(squareArray[i]).removeClass("highlight");
            shoutoutArray[i].hide();
        }
    }
    $('.page').text("Chiyak: " + (index + 1) + "/" + peopleArray.length);
}
