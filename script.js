let yellow = document.querySelector("#yellow");
let green = document.querySelector("#green");
let blue = document.querySelector("#blue");
let purple = document.querySelector("#purple");
let buttons = document.querySelector(".buttons");

let x = 1;

let colors = [yellow, green, blue, purple];

let aiorder = [];
let userorder = [];

let ai = false;
let user = false;

// Start

let start = document.querySelector("#start");
start.addEventListener("click", startfun = function() {
    start.style.display = "none";
    setTimeout(function() {
        ai = true;
    }, 700);
})

// AI Turn

setInterval(function() {

    if (ai === true) {

        ai = false;
        user = false;
        let rand = getRandomInt(0, 4);
        let color = colors[rand];
        aiorder.push(color.id);
        console.log(aiorder);

        for (let value in aiorder) {
            setTimeout(function() {
                if (aiorder[value] === "yellow") {
                    yellow.style.opacity = "1";
                }
                if (aiorder[value] === "blue") {
                    blue.style.opacity = "1";
                }
                if (aiorder[value] === "green") {
                    green.style.opacity = "1";
                }
                if (aiorder[value] === "purple") {
                    purple.style.opacity = "1";
                }
                console.log(aiorder[value]);
                setTimeout(function() {
                    if (aiorder[value] === "yellow") {
                        yellow.style.opacity = "0.6";
                    }
                    if (aiorder[value] === "blue") {
                        blue.style.opacity = "0.6";
                    }
                    if (aiorder[value] === "green") {
                        green.style.opacity = "0.6";
                    }
                    if (aiorder[value] === "purple") {
                        purple.style.opacity = "0.6";
                    }
                    if (Number(value) + 1 === x) {
                        user = true;
                        userorder = [];
                    }
                }, 500)
            }, 100 * (value + 1));
        }
    }
}, 200);

// User Turn

setInterval(function() {

    if (user === true) {
        user = false;
        rm = false;
        console.log(userorder);
        addEvent();
    }
}, 200);

// Functions

function level() {
    document.querySelector("#level").textContent = "Level " + x;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function cursorDefault() {
    yellow.style.cursor = "default";
    blue.style.cursor = "default";
    green.style.cursor = "default";
    purple.style.cursor = "default";
}

function pointer(button) {
    button.style.cursor = "pointer";
}

function removeEvent(a, b, c, d) {
    yellow.removeEventListener("click", a);
    green.removeEventListener("click", b);
    blue.removeEventListener("click", c);
    purple.removeEventListener("click", d);
    cursorDefault();
}

function addEvent() {
    // Buttons Pointer

    yellow.addEventListener("mouseover", pointer(yellow));

    green.addEventListener("mouseover", pointer(green));

    blue.addEventListener("mouseover", pointer(blue));

    purple.addEventListener("mouseover", pointer(purple));

    // Buttons Click
    let a;
    yellow.addEventListener("click", a = function() {
        removeEvent(a, b, c, d);
        userTurn("yellow", yellow, a, b, c, d);
    });
    let b;
    green.addEventListener("click", b = function() {
        removeEvent(a, b, c, d);
        userTurn("green", green, a, b, c, d);
    });
    let c;
    blue.addEventListener("click", c = function() {
        removeEvent(a, b, c, d);
        userTurn("blue", blue, a, b, c, d);
    });
    let d;
    purple.addEventListener("click", d = function() {
        removeEvent(a, b, c, d);
        userTurn("purple", purple, a, b, c, d);
    });
}
let rm = false;

function userTurn(color, button, a, b, c, d) {
    button.style.opacity = "1";
    userorder.push(color);
    for (let value in userorder) {
        if (userorder[value] === aiorder[value]) {
            setTimeout(function() {
                button.style.opacity = "0.6";
                if (Number(value) + 1 === aiorder.length) {
                    setTimeout(function() {
                        x++;
                        level();
                    }, 500)
                    setTimeout(function() {
                        ai = true;
                    }, 1000)
                }
            }, 500);
        } else {
            button.style.opacity = "0.6";
            alert("You missed !\nYour score:" + document.querySelector("#level").textContent);
            removeEvent(a, b, c, d);
            start.style.display = "block";
            document.querySelector("#level").textContent = "Level 1";
            aiorder = [];
        }
    }
    if (userorder.length !== aiorder.length) {
        addEvent();
    }
}