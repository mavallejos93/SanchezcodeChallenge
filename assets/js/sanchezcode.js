//variables
let letras = document.getElementById("letras");
let numeros = document.getElementById("numeros");

let btnA1 = document.getElementById("btnA1");
let btnB2 = document.getElementById("btnB2");
let btnC3 = document.getElementById("btnC3");
let btnD4 = document.getElementById("btnD4");
let btnE5 = document.getElementById("btnE5");
let btnF6 = document.getElementById("btnF6");
let btnG7 = document.getElementById("btnG7");
let btnH8 = document.getElementById("btnH8");
let btnI9 = document.getElementById("btnI9");
let btnJ0 = document.getElementById("btnJ0");

let letrasTemp = "";
let numerosTemp = "";

//Logica
const logicaA1 = () => {
  if (
    letrasTemp === "A" ||
    letrasTemp === "AB" ||
    letrasTemp === "ABC" ||
    letrasTemp === "ABCD" ||
    letrasTemp === "ABCDE" ||
    letrasTemp === "ABCDEF" ||
    letrasTemp === "ABCDEFG" ||
    letrasTemp === "ABCDEFGH" ||
    (letrasTemp === "ABCDEFGHI" && numerosTemp === "")
  ) {
    alert("Ya esta esta letra");
  } else {
    if (
      numerosTemp === "1" ||
      numerosTemp === "12" ||
      numerosTemp === "123" ||
      numerosTemp === "1234" ||
      numerosTemp === "12345" ||
      numerosTemp === "123456" ||
      numerosTemp === "1234567" ||
      numerosTemp === "12345678" ||
      numerosTemp === "123456789" ||
      (numerosTemp === "1234567890" && letrasTemp === "ABCDEFGHIJ")
    ) {
      alert("Ya esta este numero");
    } else {
      if (letrasTemp === "" && numerosTemp === "") {
        letras.innerHTML = letrasTemp + "A";
        letrasTemp = letrasTemp + "A";
      } else {
        if (letrasTemp === "ABCDEFGHIJ" && numerosTemp === "") {
          numeros.innerHTML = numerosTemp + "1";
          numerosTemp = numerosTemp + "1";
        } else {
          alert("Faltan letras");
        }
      }
    }
  }
};

const logicaB2 = () => {
  if (
    letrasTemp === "AB" ||
    letrasTemp === "ABC" ||
    letrasTemp === "ABCD" ||
    letrasTemp === "ABCDE" ||
    letrasTemp === "ABCDEF" ||
    letrasTemp === "ABCDEFG" ||
    letrasTemp === "ABCDEFGH" ||
    letrasTemp === "ABCDEFGHI" ||
    (letrasTemp === "ABCDEFGHIJ" && numerosTemp === "")
  ) {
    alert("Ya esta esta letra");
  } else {
    if (
      numerosTemp === "12" ||
      numerosTemp === "123" ||
      numerosTemp === "1234" ||
      numerosTemp === "12345" ||
      numerosTemp === "123456" ||
      numerosTemp === "1234567" ||
      numerosTemp === "12345678" ||
      numerosTemp === "123456789" ||
      (numerosTemp === "1234567890" && letrasTemp === "ABCDEFGHIJ")
    ) {
      alert("Ya esta este numero");
    } else {
      if (letrasTemp === "A" && numerosTemp === "") {
        letras.innerHTML = letrasTemp + "B";
        letrasTemp = letrasTemp + "B";
      } else {
        if (letrasTemp === "ABCDEFGHIJ" && numerosTemp === "1") {
          numeros.innerHTML = numerosTemp + "2";
          numerosTemp = numerosTemp + "2";
        } else {
          alert("Faltan letras");
        }
      }
    }
  }
};

const logicaC3 = () => {
  if (
    letrasTemp === "ABC" ||
    letrasTemp === "ABCD" ||
    letrasTemp === "ABCDE" ||
    letrasTemp === "ABCDEF" ||
    letrasTemp === "ABCDEFG" ||
    letrasTemp === "ABCDEFGH" ||
    letrasTemp === "ABCDEFGHI" ||
    (letrasTemp === "ABCDEFGHIJ" && numerosTemp === "")
  ) {
    alert("Ya esta esta letra");
  } else {
    if (
      numerosTemp === "123" ||
      numerosTemp === "1234" ||
      numerosTemp === "12345" ||
      numerosTemp === "123456" ||
      numerosTemp === "1234567" ||
      numerosTemp === "12345678" ||
      numerosTemp === "123456789" ||
      (numerosTemp === "1234567890" && letrasTemp === "ABCDEFGHIJ")
    ) {
      alert("Ya esta este numero");
    } else {
      if (letrasTemp === "AB" && numerosTemp === "") {
        letras.innerHTML = letrasTemp + "C";
        letrasTemp = letrasTemp + "C";
      } else {
        if (letrasTemp === "ABCDEFGHIJ" && numerosTemp === "12") {
          numeros.innerHTML = numerosTemp + "3";
          numerosTemp = numerosTemp + "3";
        } else {
          if (letrasTemp === "ABCDEFGHIJ" && numerosTemp === "1") {
            alert("Faltan numeros");
          } else {
            alert("Faltan letras");
          }
        }
      }
    }
  }
};

const logicaD4 = () => {
  if (
    letrasTemp === "ABCD" ||
    letrasTemp === "ABCDE" ||
    letrasTemp === "ABCDEF" ||
    letrasTemp === "ABCDEFG" ||
    letrasTemp === "ABCDEFGH" ||
    letrasTemp === "ABCDEFGHI" ||
    (letrasTemp === "ABCDEFGHIJ" && numerosTemp === "")
  ) {
    alert("Ya esta esta letra");
  } else {
    if (
      numerosTemp === "1234" ||
      numerosTemp === "12345" ||
      numerosTemp === "123456" ||
      numerosTemp === "1234567" ||
      numerosTemp === "12345678" ||
      numerosTemp === "123456789" ||
      (numerosTemp === "1234567890" && letrasTemp === "ABCDEFGHIJ")
    ) {
      alert("Ya esta este numero");
    } else {
      if (letrasTemp === "ABC" && numerosTemp === "") {
        letras.innerHTML = letrasTemp + "D";
        letrasTemp = letrasTemp + "D";
      } else {
        if (letrasTemp === "ABCDEFGHIJ" && numerosTemp === "123") {
          numeros.innerHTML = numerosTemp + "4";
          numerosTemp = numerosTemp + "4";
        } else {
          if (
            (letrasTemp === "ABCDEFGHIJ" && numerosTemp === "1") ||
            numerosTemp === "12"
          ) {
            alert("Faltan numeros");
          } else {
            alert("Faltan letras");
          }
        }
      }
    }
  }
};

const logicaE5 = () => {
  if (
    letrasTemp === "ABCDE" ||
    letrasTemp === "ABCDEF" ||
    letrasTemp === "ABCDEFG" ||
    letrasTemp === "ABCDEFGH" ||
    letrasTemp === "ABCDEFGHI" ||
    (letrasTemp === "ABCDEFGHIJ" && numerosTemp === "")
  ) {
    alert("Ya esta esta letra");
  } else {
    if (
      numerosTemp === "12345" ||
      numerosTemp === "123456" ||
      numerosTemp === "1234567" ||
      numerosTemp === "12345678" ||
      numerosTemp === "123456789" ||
      (numerosTemp === "1234567890" && letrasTemp === "ABCDEFGHIJ")
    ) {
      alert("Ya esta este numero");
    } else {
      if (letrasTemp === "ABCD" && numerosTemp === "") {
        letras.innerHTML = letrasTemp + "E";
        letrasTemp = letrasTemp + "E";
      } else {
        if (letrasTemp === "ABCDEFGHIJ" && numerosTemp === "1234") {
          numeros.innerHTML = numerosTemp + "5";
          numerosTemp = numerosTemp + "5";
        } else {
          if (
            (letrasTemp === "ABCDEFGHIJ" && numerosTemp === "1") ||
            numerosTemp === "12" ||
            numerosTemp === "123"
          ) {
            alert("Faltan numeros");
          } else {
            alert("Faltan letras");
          }
        }
      }
    }
  }
};
const logicaF6 = () => {
  if (
    letrasTemp === "ABCDEF" ||
    letrasTemp === "ABCDEFG" ||
    letrasTemp === "ABCDEFGH" ||
    letrasTemp === "ABCDEFGHI" ||
    (letrasTemp === "ABCDEFGHIJ" && numerosTemp === "")
  ) {
    alert("Ya esta esta letra");
  } else {
    if (
      numerosTemp === "123456" ||
      numerosTemp === "1234567" ||
      numerosTemp === "12345678" ||
      numerosTemp === "123456789" ||
      (numerosTemp === "1234567890" && letrasTemp === "ABCDEFGHIJ")
    ) {
      alert("Ya esta este numero");
    } else {
      if (letrasTemp === "ABCDE" && numerosTemp === "") {
        letras.innerHTML = letrasTemp + "F";
        letrasTemp = letrasTemp + "F";
      } else {
        if (letrasTemp === "ABCDEFGHIJ" && numerosTemp === "12345") {
          numeros.innerHTML = numerosTemp + "6";
          numerosTemp = numerosTemp + "6";
        } else {
          if (
            (letrasTemp === "ABCDEFGHIJ" && numerosTemp === "1") ||
            numerosTemp === "12" ||
            numerosTemp === "123" ||
            numerosTemp === "1234"
          ) {
            alert("Faltan numeros");
          } else {
            alert("Faltan letras");
          }
        }
      }
    }
  }
};

const logicaG7 = () => {
  if (
    letrasTemp === "ABCDEFG" ||
    letrasTemp === "ABCDEFGH" ||
    letrasTemp === "ABCDEFGHI" ||
    (letrasTemp === "ABCDEFGHIJ" && numerosTemp === "")
  ) {
    alert("Ya esta esta letra");
  } else {
    if (
      numerosTemp === "1234567" ||
      numerosTemp === "12345678" ||
      numerosTemp === "123456789" ||
      (numerosTemp === "1234567890" && letrasTemp === "ABCDEFGHIJ")
    ) {
      alert("Ya esta este numero");
    } else {
      if (letrasTemp === "ABCDEF" && numerosTemp === "") {
        letras.innerHTML = letrasTemp + "G";
        letrasTemp = letrasTemp + "G";
      } else {
        if (letrasTemp === "ABCDEFGHIJ" && numerosTemp === "123456") {
          numeros.innerHTML = numerosTemp + "7";
          numerosTemp = numerosTemp + "7";
        } else {
          if (
            (letrasTemp === "ABCDEFGHIJ" && numerosTemp === "1") ||
            numerosTemp === "12" ||
            numerosTemp === "123" ||
            numerosTemp === "1234" ||
            numerosTemp === "12345"
          ) {
            alert("Faltan numeros");
          } else {
            alert("Faltan letras");
          }
        }
      }
    }
  }
};

const logicaH8 = () => {
  if (
    letrasTemp === "ABCDEFGH" ||
    letrasTemp === "ABCDEFGHI" ||
    (letrasTemp === "ABCDEFGHIJ" && numerosTemp === "")
  ) {
    alert("Ya esta esta letra");
  } else {
    if (
      numerosTemp === "12345678" ||
      numerosTemp === "123456789" ||
      (numerosTemp === "1234567890" && letrasTemp === "ABCDEFGHIJ")
    ) {
      alert("Ya esta este numero");
    } else {
      if (letrasTemp === "ABCDEFG" && numerosTemp === "") {
        letras.innerHTML = letrasTemp + "H";
        letrasTemp = letrasTemp + "H";
      } else {
        if (letrasTemp === "ABCDEFGHIJ" && numerosTemp === "1234567") {
          numeros.innerHTML = numerosTemp + "8";
          numerosTemp = numerosTemp + "8";
        } else {
          if (
            (letrasTemp === "ABCDEFGHIJ" && numerosTemp === "1") ||
            numerosTemp === "12" ||
            numerosTemp === "123" ||
            numerosTemp === "1234" ||
            numerosTemp === "12345" ||
            numerosTemp === "123456"
          ) {
            alert("Faltan numeros");
          } else {
            alert("Faltan letras");
          }
        }
      }
    }
  }
};

const logicaI9 = () => {
  if (
    letrasTemp === "ABCDEFGHI" ||
    (letrasTemp === "ABCDEFGHIJ" && numerosTemp === "")
  ) {
    alert("Ya esta esta letra");
  } else {
    if (
      numerosTemp === "123456789" ||
      (numerosTemp === "1234567890" && letrasTemp === "ABCDEFGHIJ")
    ) {
      alert("Ya esta este numero");
    } else {
      if (letrasTemp === "ABCDEFGH" && numerosTemp === "") {
        letras.innerHTML = letrasTemp + "I";
        letrasTemp = letrasTemp + "I";
      } else {
        if (letrasTemp === "ABCDEFGHIJ" && numerosTemp === "12345678") {
          numeros.innerHTML = numerosTemp + "9";
          numerosTemp = numerosTemp + "9";
        } else {
          if (
            (letrasTemp === "ABCDEFGHIJ" && numerosTemp === "1") ||
            numerosTemp === "12" ||
            numerosTemp === "123" ||
            numerosTemp === "1234" ||
            numerosTemp === "12345" ||
            numerosTemp === "123456" ||
            numerosTemp === "1234567"
          ) {
            alert("Faltan numeros");
          } else {
            alert("Faltan letras");
          }
        }
      }
    }
  }
};

const logicaJ0 = () => {
  if (letrasTemp === "ABCDEFGHIJ" && numerosTemp === "") {
    alert("Ya esta esta letra");
  } else {
    if (numerosTemp === "1234567890" && letrasTemp === "ABCDEFGHIJ") {
      alert("Ya esta este numero");
    } else {
      if (letrasTemp === "ABCDEFGHI" && numerosTemp === "") {
        letras.innerHTML = letrasTemp + "J";
        letrasTemp = letrasTemp + "J";
      } else {
        if (letrasTemp === "ABCDEFGHIJ" && numerosTemp === "123456789") {
          numeros.innerHTML = numerosTemp + "0";
          numerosTemp = numerosTemp + "0";
        } else {
          if (
            (letrasTemp === "ABCDEFGHIJ" && numerosTemp === "1") ||
            numerosTemp === "12" ||
            numerosTemp === "123" ||
            numerosTemp === "1234" ||
            numerosTemp === "12345" ||
            numerosTemp === "123456" ||
            numerosTemp === "1234567" ||
            numerosTemp === "12345678"
          ) {
            alert("Faltan numeros");
          } else {
            alert("Faltan letras");
          }
        }
      }
    }
  }
};

// Onclick

btnA1.onclick = function () {
  logicaA1();
};

btnB2.onclick = function () {
  logicaB2();
};

btnC3.onclick = function () {
  logicaC3();
};

btnD4.onclick = function () {
  logicaD4();
};

btnE5.onclick = function () {
  logicaE5();
};

btnF6.onclick = function () {
  logicaF6();
};

btnG7.onclick = function () {
  logicaG7();
};

btnH8.onclick = function () {
  logicaH8();
};
btnI9.onclick = function () {
  logicaI9();
};

btnJ0.onclick = function () {
  logicaJ0();
};
