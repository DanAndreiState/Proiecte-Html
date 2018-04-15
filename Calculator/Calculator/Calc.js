
var rezultatOp = 0.0;
var operatieAnterioara = "0";

function clickText(btnValue) {
    //  variabile locale
	"use strict";
    var displayVal = document.getElementById("displayLabel").innerHTML;
    
    //functionalitate
    if (displayVal === "0") {
        document.getElementById("displayLabel").innerHTML = "";
    }
	document.getElementById("displayLabel").innerHTML += btnValue;
}

function clickPctOrSign(btnValue) {
    //variabile locale
	"use strict";
    var displayValue = document.getElementById("displayLabel").innerHTML, displayVal2 = document.getElementById("displayWhenFct").innerHTML, buffVal = "";
    
    //functionalitate
    if (btnValue === ".") {
        if (displayValue.indexOf(".") === -1) {
            document.getElementById("displayLabel").innerHTML += btnValue;
        }
	} else if (btnValue === "+/-") {
        if ((displayValue === "0") && (displayVal2 !== "")) {
            if (displayVal2.indexOf("-") === -1) {
                document.getElementById("displayWhenFct").innerHTML = buffVal.concat("-", displayVal2);
            } else {
                document.getElementById("displayWhenFct").innerHTML = displayVal2.replace("-", buffVal);
            }
        } else if (displayValue !== "0") {
            if (displayValue.indexOf("-") === -1) {
                document.getElementById("displayLabel").innerHTML = buffVal.concat("-", displayValue);
            } else {
                document.getElementById("displayLabel").innerHTML = displayValue.replace("-", buffVal);
            }
        }
    }
}

// de facut urmatoarele: sa nu imi apara pe o linie mai mult de 25 caractere (nu se afiseaza ok)

function operatie(Op) {
	"use strict";
    var displayValue = Math.fround(parseFloat(document.getElementById("displayLabel").innerHTML)), displayVal2 = Math.fround(parseFloat(document.getElementById("displayWhenFct").innerHTML));

    switch (operatieAnterioara) {
			
	case "+":
		rezultatOp = displayValue + displayVal2;
        break;
        
	case "-":
		rezultatOp = displayVal2 - displayValue;
		break;

	case "x":
		rezultatOp = displayVal2 * displayValue;
		break;
        
	case ":":
		if (displayValue !== 0.0) {
			rezultatOp = displayVal2 / displayValue;
		} else {
			alert("Atentie! Divizorul nu trebuie sa fie 0!!!!");
		}
		break;
		
	case "=":
		if (displayValue === 0.0) {
			rezultatOp = displayVal2;
		} else {
			rezultatOp = displayValue;
		}
		break;

	default:
		if (displayValue === 0.0) {
			rezultatOp = displayVal2;
		}
		else {
			rezultatOp = displayValue;
		}
		document.getElementById("displayWhenFct").innerHTML = rezultatOp.toString();
		break;
	}
	
    if (Op !== "=") {
        document.getElementById("displayWhenFct").innerHTML = rezultatOp.toString() + Op;
	} else if (Op === "=") {
        document.getElementById("displayWhenFct").innerHTML = rezultatOp.toString();
	}
    operatieAnterioara = Op;
    document.getElementById("displayLabel").innerHTML = "0";
}

function operatie1Element(Op) {
	"use strict";
	var displayValue = Math.fround(parseFloat(document.getElementById("displayLabel").innerHTML)), displayVal2 = Math.fround(parseFloat(document.getElementById("displayWhenFct").innerHTML));
    
    switch (Op) {
       
	case "x^3":
		if (displayValue !== 0.0) {
			rezultatOp = Math.pow(displayValue, 3);
        } else if ((displayValue === 0.0) && (displayVal2 !== 0.0)) {
			rezultatOp = Math.pow(displayVal2, 3);
		}
		break;
        
    case "rad":
	    if (displayValue !== 0.0) {
			rezultatOp = Math.sqrt(displayValue);
		} else if ((displayValue === 0.0) && (displayVal2 !== 0.0)) {
			rezultatOp = Math.sqrt(displayVal2);
		}
		break;
           
	case "x^2":
		if (displayValue !== 0.0) {
			rezultatOp = Math.pow(displayValue, 2);
		} else if ((displayValue === 0.0) && (displayVal2 !== 0.0)) {
			rezultatOp = Math.pow(displayVal2, 2);
		}
		break;
			
    case "1/x":
		if (displayValue !== 0.0) {
			rezultatOp = 1 / displayValue;
		} else if ((displayValue === 0.0) && (displayVal2 !== 0.0)) {
			rezultatOp = 1 / displayVal2;
		} else if ((displayValue === 0.0) && (displayVal2 === 0.0)) {
			alert("Atentie! Divizorul nu trebuie sa fie 0!!!!");
		}
		break;
            
	case "del":
		rezultatOp = Math.fround(displayValue.toString().substring(0, displayValue.toString().length - 1));
		break;
              
    default:
		rezultatOp = displayValue;
		break;
	}
	
    if ((Op === "c") || (Op === "ce")) {
		document.getElementById("displayLabel").innerHTML = "0";
		document.getElementById("displayWhenFct").innerHTML = "";
	} else {
		if (Op === "del") {
			document.getElementById("displayLabel").innerHTML = rezultatOp.toString();
		} else {
			document.getElementById("displayWhenFct").innerHTML = rezultatOp.toString();
			document.getElementById("displayLabel").innerHTML = "0";
		}
	}
}

//pt a putea tasta si de la tastatura cifrele si pctul sau oricare din operatiile standard
document.onkeydown = function (evt) {
	"use strict";
    evt = evt || window.event;
    if ((evt.keyCode === 48) || (evt.keyCode === 96)) {
        clickText("0");
    } else if ((evt.keyCode === 49) || (evt.keyCode === 97)) {
        clickText("1");
    } else if ((evt.keyCode === 50) || (evt.keyCode === 98)) {
        clickText("2");
    } else if ((evt.keyCode === 51) || (evt.keyCode === 99)) {
        clickText("3");
    } else if ((evt.keyCode === 52) || (evt.keyCode === 100)) {
        clickText("4");
    } else if ((evt.keyCode === 53) || (evt.keyCode === 101)) {
        clickText("5");
    } else if ((evt.keyCode === 54) || (evt.keyCode === 102)) {
        clickText("6");
    } else if ((evt.keyCode === 55) || (evt.keyCode === 103)) {
        clickText("7");
    } else if ((evt.keyCode === 56) || (evt.keyCode === 104)) {
        clickText("8");
    } else if ((evt.keyCode === 57) || (evt.keyCode === 105)) {
        clickText("9");
    } else if (evt.keyCode === 190) {
        clickPctOrSign('.');
    } else if (evt.keyCode === 107){
		operatie("+");
	} else if (evt.keyCode === 109) {
		operatie("-");
	} else if (evt.keyCode === 106) {
		operatie("x");
	} else if (evt.keyCode === 111) {
		operatie(":");
	} else if (evt.keyCode === 13) {
		operatie("=");
	} else if (evt.keyCode === 8) {
		operatie1Element("del");
	}
};