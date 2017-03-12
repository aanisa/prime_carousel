var count = 0;
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
        $pl.append('<h3>' + peopleArray[i].name + '<h3>',
                  '<h5>' + peopleArray[i].shoutout + '<h5>');
        $pl.data("person", i);
        shoutoutArray.push($pl);
}
highlightSquares();
}

//BUTTONS
function buttons() {
    $('.container').append('<div id="prev"><button>Prev</button></div>',
        '<div id="next"><button>Next</button></div>');
}

function buttonClick() {
    $('#next').on('click', function() {
      count++;
      if (count == squares) {
        count = 0;
      }
      highlightSquares();
    });
    $('#prev').on('click', function() {
      count--;
      if (count == squares) {
        count = 0;
      }
      highlightSquares();
    });
}

//HIGHLIGHT
function highlightSquares() {
    for (var i = 0; i < shoutoutArray.length; i++) {
        if (squareArray[i].data("square") == count) {
            $(squareArray[i]).addClass("highlight");
            shoutoutArray[i].show();
        } else if (squareArray[i].data("square") != count) {
            $(squareArray[i]).removeClass("highlight");
            shoutoutArray[i].hide();
        }
    }
    $('.page').text("Page Number: "+(count+1)+"/19");
}



//HIGHLIGHT TIMING
// function timingNext() {
//     count++;
//     if (count == squares) {
//       count = 0;
//     }
//     highlightSquares();
// }
//
// function timingPrev() {
//     count--;
//     if (count == squares) {
//       count = 0;
//     }
//     highlightSquares();
// }
