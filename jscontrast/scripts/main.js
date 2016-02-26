
var splitCSV = function (csv){
  
  var partsOfStr = csv.split(',');
  if (partsOfStr[0]>255||partsOfStr[1]>255||partsOfStr[2]>255){
    alert("Invalid input (out of range)");
    throw new Error('Invalid input (>255)');
  }
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
    htmlColor = RGB2HTML(split[0],split[1],split[2]);
    console.log(htmlColor);

}

var colourIsLight = function (r, g, b) {
  // Counting the perceptive luminance
  // human eye favors green color...
  var a = 1 - (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  console.log(a);
  return (a < 0.5);
}

function RGB2HTML(red, green, blue)
{
    var decColor =0x1000000+ blue + 0x100 * green + 0x10000 *red ;
    return '#'+decColor.toString(16).substr(1);
}
