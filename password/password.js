// Generatore di passwords

var ran = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "1",
    "2",
    "3",
    "4",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "&",
    "-",
    "+",
    ")",
    "(",
    "[",
    "]",
    "-",
    "&",
    "%",
    "$",
    "#",
    "@",
    "?",
    ")",
    "(",
    "*"
  ];
  
  function generate() {
    var num = document.getElementById("num").value;
    var temp = "";
    for (var i = 0; i < num; i++) {
      temp += ran[Math.floor(Math.random() * ran.length)];
    }
    document.getElementById("pass").value = temp;
  }
  
  function copy() {
    var cp = document.getElementById("pass");
    cp.select();
    cp.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Password Copy");
  }
  