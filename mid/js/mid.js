//descriptive comment:
//
//my patern has couple colorsets, you can change them by clicking the mouse


var colWidth = 180;
var rowHeight = 180;

var frColor;
var frStroke;
var bColor;

var colorSets;
var currentColor = 0;

var x = 0;
var y = 0;




function setup() {

    createCanvas(windowWidth, windowHeight)


    background("green");



    frColor = color('orange');
    frStroke = color('darkorange');

    for (var i = 0; i < 1000; i++) {

        drawFruit(x, y, frColor, frStroke);
        drawDiamonds(x, y);



        x += colWidth;

        if (x > width) {
            x = 0;
            y += rowHeight;
        }
    }
}


function mousePressed() {

    colorSets = [


        {
            frC: color(184, 224, 65),
            lC: color(145, 194, 0),
            bC: color(117, 48, 148)
        },

        {
            frC: color(225, 0, 147),
            lC: color(156, 0, 143),
            bC: color(225, 224, 111)
        },
        {
            frC: color(255, 123, 148),
            lC: color(230, 49, 53),
            bC: color(26, 55, 161)
        },

        {
            frC: color('red'),
            lC: color('darkred'),
            bC: color(233, 233, 0)
        }
        ,
        {
            frC: color('violet'),
            lC: color('purple'),
            bC: color(150, 255, 224)
        }

        ]



    currentColor = floor(random(colorSets.length));

    console.log(currentColor)



    x = 0;
    y = 0;



    frColor = colorSets[currentColor].frC;
    frStroke = colorSets[currentColor].lC;
    bColor = colorSets[currentColor].bC;
    background(bColor);
    for (var i = 0; i < 1000; i++) {


        drawFruit(x, y, frColor, frStroke);
        drawDiamonds(x, y);



        x += colWidth;

        if (x > width) {
            x = 0;
            y += rowHeight;
        }
    }
}




function drawFruit(startX, startY, iColor, iStroke) {




    console.log(startX + "-" + startY + "-" + iColor + "-" + iStroke);

    strokeWeight(10);
    fill(iColor);
    stroke(iStroke);




    ellipse(startX + rowHeight / 2, startY + colWidth / 2, rowHeight / 2, colWidth / 2)




    strokeWeight(4);
    stroke(iStroke);
    var x1, x2, y1, y2;

    x1 = startX + colWidth / 3;
    y1 = startY;
    x2 = startX;
    y2 = startY + rowHeight / 2;


    line(x1, y1, x2, y2)


    x1 = startX + colWidth / 3;
    y1 = startY + rowHeight;
    x2 = startX;
    y2 = startY + rowHeight / 2;



    line(x1, y1, x2, y2)



    x1 = startX + colWidth / 2 + colWidth / 6;
    y1 = startY;
    x2 = startX + colWidth;
    y2 = startY + rowHeight / 2;

    line(x1, y1, x2, y2)


    x1 = startX + colWidth / 2 + colWidth / 6;
    y1 = startY + rowHeight;
    x2 = startX + colWidth;
    y2 = startY + rowHeight / 2;

    line(x1, y1, x2, y2)






    strokeWeight(10);

    x1 = startX + colWidth / 2 - 25;
    y1 = startY + colWidth / 3;
    x2 = startX + colWidth / 2 + 25;
    y2 = startY + rowHeight / 2 + colWidth / 6;

    line(x1, y1, x2, y2)

    x1 = startX + colWidth / 2 + 25;
    y1 = startY + colWidth / 3;
    x2 = startX + colWidth / 2 - 25;
    y2 = startY + rowHeight / 2 + colWidth / 6;
    line(x1, y1, x2, y2)


    x1 = startX + colWidth / 4;
    y1 = startY + rowHeight / 2;
    x2 = startX + colWidth / 2 + colWidth / 4;
    y2 = startY + rowHeight / 2;

    line(x1, y1, x2, y2)

}

function drawDiamonds(startX, startY) {


    strokeWeight(4);
    stroke('black');
    var x1, x2, y1, y2;

    x1 = startX + colWidth / 2;
    y1 = startY;
    x2 = startX;
    y2 = startY + rowHeight / 2;

    line(x1, y1, x2, y2)


    x1 = startX + colWidth / 2;
    y1 = startY;
    x2 = startX + rowHeight;
    y2 = startY + rowHeight / 2;


    line(x1, y1, x2, y2)

    x1 = startX + colWidth / 2;
    y1 = startY + rowHeight;
    x2 = startX;
    y2 = startY + rowHeight / 2;

    line(x1, y1, x2, y2)


    x1 = startX + colWidth / 2;
    y1 = startY + rowHeight;
    x2 = startX + rowHeight;
    y2 = startY + rowHeight / 2;

    line(x1, y1, x2, y2)

    x1 = startX + colWidth / 6;
    y1 = startY;
    x2 = startX;
    y2 = startY + colWidth / 6;

    line(x1, y1, x2, y2)

    x1 = startX + colWidth / 6;
    y1 = startY + rowHeight;
    x2 = startX;
    y2 = startY + rowHeight / 2 + colWidth / 3;

    line(x1, y1, x2, y2)


    x1 = startX + colWidth / 2 + colWidth / 3;
    y1 = startY;
    x2 = startX + rowHeight;
    y2 = startY + colWidth / 6;



    line(x1, y1, x2, y2)

    x1 = startX + colWidth / 2 + colWidth / 3;
    y1 = startY + rowHeight;
    x2 = startX + colWidth;
    y2 = startY + rowHeight / 2 + colWidth / 3;



    line(x1, y1, x2, y2)




}
