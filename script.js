//Document ready in 3..2...
$('document').ready(function() {

  var player = 1;
  var firstclick = true;

  $('td').click(function() {

    var curBlock = $(this);

    //If block free, execute print
    if (curBlock.children().length == 0) {
      if (player === 1) {
        printX();
      }
      else { printO()}
    }

    //Change player
    function changePlay() {
      if (player === 1) {
        player = 2;
      }
      else { player = 1;}
    }

    //Make O appear
    function printO() {
      curBlock.html("<div class='charO'>" + 'O' + " </div>");
      changePlay();
    };

    //Make X appear
    function printX() {
        curBlock.html("<div class='charX'>" + 'X' + " </div>");
        changePlay();
      }
    //Timer
    if (firstclick == true) {
      firstclick = false;
      var counter = 10;
      var clock = setInterval(function() {
        counter--;
        // Display 'counter' wherever you want to display it.
        $('#time').text(counter);
        if (counter == 0) {
          clearInterval(clock);
        }
      }, 1000);
    }
    function checkWinner() {
      return;
    }
  })
})
