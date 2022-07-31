console.log("Welcome to quize da couleurs!");
let win = new Audio("WON.wav");
let lose = new Audio("LOOSE.wav");
let newgame = new Audio("NEW.wav");
var generatedcolor; // to be given to one of the choices
var correct_choice;
var won;

//  function to generate the random numbers
function generateRandom(maxLimit = 100) {
    let rand = Math.random() * maxLimit;
    console.log(rand); // say 99.81321410836433

    rand = Math.floor(rand); // 99

    return rand;
}


function generatemaincolor() {


    correct_choice = generateRandom(4) + 1;
    let rval = generateRandom(256);
    let gval = generateRandom(256);
    let bval = generateRandom(256);
    generatedcolor = ' rgb(' + rval + ',' + gval + ',' + bval + ')';
    document.getElementById("value").innerText = 'The rgb value is' + generatedcolor + " corresponds to";
    // resetting the result text
    document.getElementById("result").style.fontSize = "30px";
    document.getElementById("result").style.fontWeight = "bold";
    document.getElementById("result").style.display = "flex";
    document.getElementById("result").innerText = "Choose your option!";
    document.get
    newgame.play();
    won = false;
}

function setcolorsonoptions() {
    let rval = generateRandom(256);
    let gval = generateRandom(256);
    let bval = generateRandom(256);
    document.getElementById("boxes1").style.backgroundColor = "rgb(" + rval + "," + gval + "," + bval + ")";

    rval = generateRandom(256);
    gval = generateRandom(256);
    bval = generateRandom(256);
    document.getElementById("boxes2").style.backgroundColor = "rgb(" + rval + "," + gval + "," + bval + ")";

    rval = generateRandom(256);
    gval = generateRandom(256);
    bval = generateRandom(256);
    document.getElementById("boxes3").style.backgroundColor = "rgb(" + rval + "," + gval + "," + bval + ")";

    rval = generateRandom(256);
    gval = generateRandom(256);
    bval = generateRandom(256);

    document.getElementById("boxes4").style.backgroundColor = "rgb(" + rval + "," + gval + "," + bval + ")";
    var ans = "boxes" + correct_choice;
    var setcolor = ans.toString();
    document.getElementById(setcolor).style.backgroundColor = generatedcolor;
}

function iscorrectmatch() {
    window.onclick = e => {

        // console.log(letter);
        // const ismatching= letter.toUpperCase() === e.target.innerText.toUpperCase();
        if (e.target.innerText !== "New") {
            if (correct_choice === parseInt(e.target.innerText) && won === false) {
                console.log("you won!");
                document.getElementById("result").style.fontSize = "30px";
                document.getElementById("result").style.fontWeight = "bold";
                document.getElementById("result").style.display = "flex";
                document.getElementById("result").innerText = "You Won!";
                win.play();
                won = true;
            } else {

                if (won === false) {
                    console.log("you loose");
                    console.log(correct_choice);
                    document.getElementById("result").style.fontSize = "30px";
                    document.getElementById("result").style.fontWeight = "bold";
                    document.getElementById("result").style.display = "flex";
                    document.getElementById("result").innerText = "You Loose! The correct choice is " + (correct_choice);
                    lose.play();
                    won = true;
                }
            }
        }
    }
}
