//using code example from p5 site
// using lessons from kadenze for color, lines, strokes, etc. 

var table;
var val;

function preload() {

  table = loadTable("significant_month-2.csv", "csv", "header");
  console.log('loaded table');
}

function setup() {

  println(table.getRowCount() + " total rows in table");
  println(table.getColumnCount() + " total columns in table");
  
  createCanvas(1024, 768);
  background ('#f4f142');
  var row = table.getRowCount();
  val = width / row; //this determines the width of the chart bars 

  println(table.getColumn("mag"));

  for (var i = 0; i < row; i++) {
    println(table.getString(i, 4));
    var magN = table.getString(i, 4); //mag

    fill(0);
    rect(i * val + 15, 90, 20, magN * 50);

    println(table.getString(i, 13)); //location 
    var loc = table.getString(i, 13);
    textSize(8);
    // textFont();
    //stroke(1);
    fill(0);
    text(loc, i * val + 15, 15, 35, 90);

    //var mag = data.getString(i, 0);

  }


}

function draw() {

}