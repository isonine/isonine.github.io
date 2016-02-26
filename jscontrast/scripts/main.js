
var splitCSV = function (csv){
  var partsOfStr = csv.split(',');

  return partsOfStr;
}

function testResults (form) {
    var TestVar = form.inputbox.value;
    var split = splitCSV(TestVar);

    if (colourIsLight(split[0], split[1], split[2])==true){
      alert("Black");
    }
    else if (colourIsLight(split[0], split[1], split[2])==false){
      alert("White");
    }else{
      alert("it didn't work :(");
    }

}

var colourIsLight = function (r, g, b) {
  // Counting the perceptive luminance
  // human eye favors green color...
  var a = 1 - (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  console.log(a);
  return (a < 0.5);
}
