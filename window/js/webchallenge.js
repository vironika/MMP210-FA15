var myWinWidth, myWinHeight;

function setup() {

    var cnv = createCanvas(860, 3190);
    cnv.parent("windows")


    background("peru");

var colWidth = 270;
var rowHeight = 420;

    myWinWidth = 220;
    myWinHeight = 250;


 var x = 50;
 var y = 150;


for (var i = 0; i < 100; i++) {

 drawWindow(x,y);


    x += colWidth;

    if (x > width-myWinWidth)
    {
        x = 50;
         y+=rowHeight;}
}
}



function drawWindow(startX, startY){
  strokeWeight(10);

      fill('blue');
    ellipse(startX+myWinWidth/2, startY,myWinWidth, myWinWidth);

     strokeWeight(10);
  fill('blue');
    rect(startX, startY, myWinWidth, myWinHeight);

  strokeWeight(10);
        stroke('black');
    var x1, x2, y1, y2;

        x1= startX+myWinWidth/2;
        x2= startY;
        y1= startX+myWinWidth/2;
        y2= startY+myWinHeight;



    line(x1, x2, y1, y2);

      strokeWeight(10);
      stroke('black');
    var x1, x2, y1, y2;

        x1= startX;
        x2= startY+myWinHeight/2;
        y1= startX+myWinWidth;
        y2= startY+myWinHeight/2;



    line(x1, x2, y1, y2);

     strokeWeight(10);
      stroke('black');
    var x1, x2, y1, y2;

        x1= startX+myWinWidth/4;
        x2= startY-myWinHeight/4-33;
        y1= startX+myWinWidth/2;
        y2= startY;



    line(x1, x2, y1, y2);

      strokeWeight(10);
      stroke('black');
    var x1, x2, y1, y2;

        x1= startX+myWinWidth/4+myWinWidth/2;
        x2= startY-myWinHeight/4-33;
        y1= startX+myWinWidth/2;
        y2= startY;



    line(x1, x2, y1, y2);


}


