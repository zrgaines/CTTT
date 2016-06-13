//Document ready in 3..2...
$('document').ready(function() {

  var timePick = prompt('What would you like to set the timer to? Time starts when the first click is had.')
        $('#time').text(timePick);

  var player = 1;
  var firstclick = true;
  var arrayO = [];
  var arrayX = [];

  //setting up matrixes
  for (var i = 0; i <= 3; i++) {
    arrayO[i] = [];
    for (var j = 0; j <=3; j++) {
      arrayO[i][j] = undefined;
    }
 }
 for (var i = 0; i <= 3; i++) {
   arrayX[i] = [];
   for (var j = 0; j <=3; j++) {
     arrayX[i][j] = undefined;
    }
  }


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
      arrayPlaceO();
      checkWin();
      changePlay();
    };

    //Make X appear
    function printX() {
        curBlock.html("<div class='charX'>" + 'X' + " </div>");
        arrayPlaceX();
        checkWin();
        changePlay();
      }
    //Timer
    if (firstclick == true) {
      firstclick = false;
      var counter = timePick;
      var clock = setInterval(function() {
        counter--;
        // Display 'counter' wherever you want to display it.
        $('#time').text(counter);
        if (counter == 0) {
          alert('Oh no! The clock timed out. Try again!');
          location.reload();
          clearInterval(clock);
        }
      }, 1000);
    }

    function oWins() {
      alert('Player 2 has won! Congrats!');
      location.reload();
    }
    function xWins() {
      alert('Player 1 has won! Congrats!');
      location.reload();
    }


    //Check if someone has Won
    //X
    function checkWin() {
      if (arrayX[0][0] + arrayX[0][1] + arrayX[0][2] == 30) {
        xWins();
      }
      if (arrayX[1][0] + arrayX[1][1] + arrayX[1][2] == 30) {
        xWins();
      }
      if (arrayX[2][0] + arrayX[2][1] + arrayX[2][2] == 30) {
        xWins();
      }
      if (arrayX[0][0] + arrayX[1][0] + arrayX[2][0] == 30) {
        xWins();
      }
      if (arrayX[0][1] + arrayX[1][1] + arrayX[2][1] == 30) {
        xWins();
      }
      if (arrayX[0][2] + arrayX[1][2] + arrayX[2][2] == 30) {
        xWins();
      }
      if (arrayX[0][0] + arrayX[1][1] + arrayX[2][2] == 30) {
        xWins();
      }
      if (arrayX[2][0] + arrayX[1][1] + arrayX[0][2] == 30) {
        xWins();
      }

      //O
      if (arrayO[0][0] + arrayO[0][1] + arrayO[0][2] == 300) {
        oWins();
      }
      if (arrayO[1][0] + arrayO[1][1] + arrayO[1][2] == 300) {
        oWins();
      }
      if (arrayO[2][0] + arrayO[2][1] + arrayO[2][2] == 300) {
        oWins();
      }
      if (arrayO[0][0] + arrayO[1][0] + arrayO[2][0] == 300) {
        oWins();
      }
      if (arrayO[0][1] + arrayO[1][1] + arrayO[2][1] == 300) {
        oWins();
      }
      if (arrayO[0][2] + arrayO[1][2] + arrayO[2][2] == 300) {
        oWins();
      }
      if (arrayO[0][0] + arrayO[1][1] + arrayO[2][2] == 300) {
        oWins();
      }
      if (arrayO[2][0] + arrayO[1][1] + arrayO[0][2] == 300) {
        oWins();
      }
    }

    //Check where to place O in array
    function arrayPlaceO() {
      if (curBlock.is("#item1")) {
        arrayO[0][0] = 100;
      }
      if (curBlock.is("#item2")) {
        arrayO[0][1] = 100;
      }
      if (curBlock.is("#item3")) {
        arrayO[0][2] = 100;
      }
      if (curBlock.is("#item4")) {
        arrayO[1][0] = 100;
      }
      if (curBlock.is("#item5")) {
        arrayO[1][1] = 100;
      }
      if (curBlock.is("#item6")) {
        arrayO[1][2] = 100;
      }
      if (curBlock.is("#item7")) {
        arrayO[2][0] = 100;
      }
      if (curBlock.is("#item8")) {
        arrayO[2][1] = 100;
      }
      if (curBlock.is("#item9")) {
        arrayO[2][2] = 100;
      }
    }

    //Check where to place X in array
    function arrayPlaceX() {
      if (curBlock.is("#item1")) {
        arrayX[0][0] = 10;
      }
      if (curBlock.is("#item2")) {
        arrayX[0][1] = 10;
      }
      if (curBlock.is("#item3")) {
        arrayX[0][2] = 10;
      }
      if (curBlock.is("#item4")) {
        arrayX[1][0] = 10;
      }
      if (curBlock.is("#item5")) {
        arrayX[1][1] = 10;
      }
      if (curBlock.is("#item6")) {
        arrayX[1][2] = 10;
      }
      if (curBlock.is("#item7")) {
        arrayX[2][0] = 10;
      }
      if (curBlock.is("#item8")) {
        arrayX[2][1] = 10;
      }
      if (curBlock.is("#item9")) {
        arrayX[2][2] = 10;
      }
    }
  })
})
