var count = 0;
var squareTabs = 20;
var squareArray = [];



$(document).ready(function() {
    squareSelection();
    setInterval(timing, 1000);
});



//HIGHLIGHT TIMING
function timing() {
    count++;
    if (count == squareTabs) {
        count = 0;
    }
    highlightTabs();
}

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
    highlightTabs();
}
//HIGHLIGHT
function highlightTabs() {
    for (var i = 0; i < squareArray.length; i++) {
        $(squareArray[i]).removeClass("highlight");
        if (squareArray[i].data("id") == count) {
            squareArray[i].addClass("highlight");
        }
    }
}

//BUTTONS
function buttons() {
    $('.container').append('<div><button>Prev</button></div>',
        '<div><button>Next</button></div>');
    $('.button').on('click', 'button', function() {});
    highlightTabs();
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
