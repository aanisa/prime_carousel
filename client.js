var count = 0;
var squareTabs = 20;
var squareArray = [];



$(document).ready(function() {
    squareSelection();
    // setInterval(buttonClick, 1000);
    buttons();
    buttonClick();

});


// SQUARE TABS
function squareSelection() {
    for (var i = 0; i < squareTabs; i++) {
        $(".container").append("<div class='tab'></div>");
        var $el = $('.container').children().last();
        $el.data("id", i);
        squareArray.push($el);
    }
    // $('.tab').on("click", function() {
    //   appendDom();
}

//PEOPLE ARRAY
function appendDom() {
    for (var i = 0; i < peopleArray.length; i++) {
        $('.container').append('<div></div>');
        var $el = $('.container').children().last();
        $el.append('</p>' + peopleArray[i].name + '</p>');
        $el.append('</p>' + peopleArray[i].shoutout + '</p>');
    }
}


//BUTTONS
function buttons() {
    $('.container').append('<div id="prev"><button>Prev</button></div>',
        '<div id="next"><button>Next</button></div>');
}

function buttonClick() {
  $('#next').on('click', 'button', function() {
    timingNext();
    });
  $('#prev').on('click', 'button', function() {
    timingPrev();
  });
}


//HIGHLIGHT TIMING
function timingNext() {
    count++;
    if (count == squareTabs) {
        count = 0;
    }
    highlightSquares();
}

function timingPrev() {
    count--;
    if (count == squareTabs) {
        count = 0;
    }
    highlightSquares();
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
