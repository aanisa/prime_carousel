var count = 0;
var squareTabs = 20;
var squareArray = [];

$(document).ready(function() {
squareSelection();
buttons();
});


// SQUARE TABS
function squareSelection() {
    for (var i = 0; i < squareTabs; i++) {
        $(".container").append("<div class='tab'></div>");
        var $el = $('.container').children().last();
        squareArray.push($el);
        console.log(squareArray);
    }
    // $('.tab').on("click", function() {
    //   appendDom();
  }


//BUTTONS
function buttons() {
    $('.container').append('<div><button>Prev</button></div>',
        '<div><button>Next</button></div>');
    $('.button').on('click', 'button', function() {

    });
}

//COUNTER
function counter() {
    $('.tab').on("click", function() {
        console.log('count');
        // count++;
        // $(this).before().text('count' + count);
    });
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

//HIGHLIGHT
function highlight() {
}
