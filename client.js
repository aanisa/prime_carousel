var count = 0;
var squares = peopleArray.length;
var squareArray = [];
var i = 0;

$(document).ready(function() {
    appendDom();

    buttons();
    buttonClick();
});


function appendDom() {
    for (var i = 0; i < squares; i++) {
        $(".container").append("<div class='square'></div>");
        var $sq = $('.container').children().last();
        $sq.data("id", i);
        squareArray.push($sq);

        $('.container').append('<div class="info"></div>');
        var $pl = $('.container').children().last();
        $pl.append('<h2>' + peopleArray[i].name + '<h2>',
                  '<h4>' + peopleArray[i].shoutout + '<h4>');
}
}



//BUTTONS
function buttons() {
    $('.container').append('<div id="prev"><button>Prev</button></div>',
        '<div id="next"><button>Next</button></div>');
}

function buttonClick() {
    $('#next').on('click', function() {
        timingNext();
        i++;
    });
    $('#prev').on('click', function() {
        timingPrev();
    });
}


//HIGHLIGHT TIMING
function timingNext() {
    count++;
    if (count == squares) {

    }
    appendDom();
}

function timingPrev() {
    count--;
    if (count == squares) {
        count = 0;
    }
    appendDom();
}

//HIGHLIGHT
function highlightSquares() {
    for (var i = 0; i < squareArray.length; i++) {
        $(squareArray[i]).removeClass("highlight");
        if (squareArray[i].data("id") == count) {
            squareArray[i].addClass("highlight");
        }
    }
}
