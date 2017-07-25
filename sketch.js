var numberOfColors = 360;
var colors = [];

var click;
var cSize = 400;
var lineLength = 175;

function preload() {
  click = loadSound('sounds/click.mp3')
}

function setup() {
  createCanvas(cSize, cSize);
  background(0);
  angleMode(DEGREES);
  colorMode(HSB);
  noLoop();
}

function draw() {
  colors = [];
  for (var i = 0; i < numberOfColors; i++) {
    colors.push(i);
  }
  console.log(colors);
  myShuffle(colors);
  console.log(colors);
  push;
  translate(width / 2, height / 2);
  noStroke();
  for (var i = 0; i < colors.length; i++) {
    hu = colors[i];
    x = lineLength * cos(i);
    y = lineLength * sin(i);
    stroke(colors[i],255,255);
    line(0, 0, x, y);
    // console.log(colors[i],x, y);
  }
  pop;
}

function myShuffle(arr) {
  for (var n = 0; n < arr.length; n++) {
    i = floor(random(arr.length));
    j = floor(random(arr.length));
    swap(arr, i, j);
    // push;
    // translate(0, 0);
    // translate(width / 2, height / 2);
    // rotate(90);
    // for (var i = 0; i < colors.length; i++) {
    //   hu = colors[i];
    //   x = lineLength * cos(i);
    //   y = lineLength * sin(i);
    //   stroke(colors[i],255,255);
    //   // line(0, 0, x, y);
    //   // console.log(colors[i], x, y);
    // }
    // pop;
    // delay(10);
  }
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function ShellSort(array, sortByColumn) {
  var j;
  var p;
  var gap;
  var tmp;
  var i;
  var sArray = [];
  var toSwap;
  var swapped;
  var sortedLength;

  var a = -1;
  for (var i = 0; i < headings.length; i++) {
    if (sortByColumn == headings[i]) {
      a = i;
      break;
    }
  }
  if (a == -1) {
    return null;
  }

  sArray = array.slice();
  sArrayLength = sArray.length;

  gap = floor(sArrayLength / 2);
  while (gap > 0) {
    swapped = true;
    while (swapped == true) {
      swapped = false;
      for (var i = 0; i < (sArrayLength - gap); i++) {
        toSwap = false;
        if ((a > 1) && (sArray[i][a] = sArray[i + gap][a]) &&
          (sArray[i][1] > sArray[i + gap][1])) {
          toSwap = true;
        } else if ((sArray[i][a] > sArray[i + gap][a])) {
          toSwap = true;
        }
        if (toSwap == true) {
          temp = sArray[i];
          sArray[i] = sArray[i + gap];
          sArray[i + gap] = temp;
          swapped = true;
        }
      }
    }
    gap = floor(gap / 2);
  }
  return sArray;
}

function padStr(s, pad, len, left) {
  p = "";
  for (var i = 0; i < len; i++) {
    p += pad;
  }
  if (left === true) {
    p += s;
    s = p.substring(p.length - len);
  } else {
    s += p;
    s = s.substring(0, len)
  };
  return s;
}

function delay(ms) {
  var cur_d = new Date();
  var cur_ticks = cur_d.getTime();
  var ms_passed = 0;
  while (ms_passed < ms) {
    // console.log('IN DELAY...');
    var d = new Date(); // Possible memory leak?
    var ticks = d.getTime();
    ms_passed = ticks - cur_ticks;
    // d = null; // Prevent memory leak?
  }
}
