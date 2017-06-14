let yellow = document.querySelector("#yellow");
let green = document.querySelector("#green");
let blue = document.querySelector("#blue");
let purple = document.querySelector("#purple");
let buttons = document.querySelector(".buttons");

let x = 1;

let colors = [yellow, green, blue, purple];

let aiorder = [];
let userorder = [];

let ai = true;
let user = false;

// AI Turn

setInterval(function() {

    if (ai === true) {
        ai = false;
        user = false;
        console.log(ai);
        console.log(user);
        // for (let i = 1; i <= x; i++) {
        let rand = getRandomInt(0, 4);
        let color = colors[rand];
        aiorder.push(color.id);
        console.log(aiorder);
        // }

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
                    }
                }, 850)
            }, 200 * (value + 1));
        }
    }
}, 200);

// User Turn

setInterval(function() {

    if (user === true) {
        addEvent();
    }
    user = false;
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
        userTurn("yellow", yellow, a, b, c, d);
    });
    let b;
    green.addEventListener("click", b = function() {
        userTurn("green", green, a, b, c, d);
    });
    let c;
    blue.addEventListener("click", c = function() {
        userTurn("blue", blue, a, b, c, d);
    });
    let d;
    purple.addEventListener("click", d = function() {
        userTurn("purple", purple, a, b, c, d);
    });
}

function userTurn(color, button, a, b, c, d) {
    button.style.opacity = "1";
    removeEvent(a, b, c, d);
    button.addEventListener("mouseover", cursorDefault());
    setTimeout(function() {
        button.style.opacity = "0.6";
        setTimeout(function() {
            x++;
            level();
        }, 750)
        setTimeout(function() {
            ai = true;
        }, 1500)
    }, 850);
}