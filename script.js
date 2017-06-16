let yellow = document.querySelector("#yellow");
let green = document.querySelector("#green");
let blue = document.querySelector("#blue");
let purple = document.querySelector("#purple");
let greentext = document.querySelector("#greentext");
let yellowtext = document.querySelector("#yellowtext");
let bluetext = document.querySelector("#bluetext");
let purpletext = document.querySelector("#purpletext");

let x = 1;

let colors = [yellow, green, blue, purple];

let aiorder = [];
let userorder = [];

let ai = false;
let user = false;

// Mobile Verif

let isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};


// Start

let start = document.querySelector("#start");
start.addEventListener("click", startfun = function() {
    start.style.display = "none";
    setTimeout(function() {
        ai = true;
    }, 500);
})

// AI Turn

setInterval(function() {

    if (ai === true) {

        ai = false;
        user = false;
        let rand = getRandomInt(0, 4);
        let color = colors[rand];
        aiorder.push(color.id);
        // console.log(aiorder);

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
                }, 350)
            }, 70 * (value + 1));
        }
    }
}, 200);

// User Turn

setInterval(function() {

    if (user === true) {
        user = false;
        rm = false;
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

function removeEvent(a, b, c, d, e) {
    yellow.removeEventListener("click", a);
    green.removeEventListener("click", b);
    blue.removeEventListener("click", c);
    purple.removeEventListener("click", d);
    document.body.removeEventListener("keypress", e);
    if (!isMobile.any()) {
        greentext.textContent = "";
        yellowtext.textContent = "";
        bluetext.textContent = "";
        purpletext.textContent = "";
    }
    cursorDefault();
}

function lost(button) {
    button.style.animationName = "miss";
    let score5th = parseInt(document.querySelector("#score5th").textContent);
    button.addEventListener("animationend", function() {
        if (x <= score5th) {
            document.querySelector("main").style.display = "none";
            document.querySelector("#level").style.animationName = "title";
            document.querySelector("#replay").style.display = "flex";
            document.querySelector("#replay").style.animationName = "display"
            document.querySelector("#replay").addEventListener("animationend", function() {
                document.querySelector("#replay").style.marginBottom = "20%";
                document.querySelector("#level").style.fontSize = "6em";
            });
        } else {
            let log = document.querySelector("#finallog");
            document.querySelector("#score").value = x;
            document.querySelector("main").style.display = "none";
            document.querySelector("#level").style.animationName = "title";
            if (x > parseInt(document.querySelector("#score1st").textContent)) {
                log.textContent = "You won the 1st place !";
            } else if (x > parseInt(document.querySelector("#score2nd").textContent)) {
                log.textContent = "You won the 2nd place !";
            } else if (x > parseInt(document.querySelector("#score3rd").textContent)) {
                log.textContent = "You won the 3rd place !";
            } else if (x > parseInt(document.querySelector("#score4th").textContent)) {
                log.textContent = "You won the 4th place !";
            } else if (x > parseInt(document.querySelector("#score5th").textContent)) {
                log.textContent = "You won the 5th place !";
            }
            document.querySelector("#subrank").style.display = "flex";
            document.querySelector("#subrank").style.animationName = "display"
            document.querySelector("#subrank").addEventListener("animationend", function() {
                document.querySelector("#subrank").style.marginBottom = "15%";
                document.querySelector("#level").style.fontSize = "6em";
            });
        }
    });
}

function addEvent() {
    // Buttons Pointer

    yellow.addEventListener("mouseover", pointer(yellow));

    green.addEventListener("mouseover", pointer(green));

    blue.addEventListener("mouseover", pointer(blue));

    purple.addEventListener("mouseover", pointer(purple));

    // Buttons Key
    if (!isMobile.any()) {
        greentext.textContent = "E";

        yellowtext.textContent = "R";

        bluetext.textContent = "D";

        purpletext.textContent = "F";
    }
    // Buttons Keypress 

    document.body.addEventListener("keypress", e = function(event) {
        if (event.key === "e") {
            removeEvent(a, b, c, d, e);
            userTurn("green", green);
        }
        if (event.key === "r") {
            removeEvent(a, b, c, d, e);
            userTurn("yellow", yellow);
        }
        if (event.key == "d") {
            removeEvent(a, b, c, d, e);
            userTurn("blue", blue);
        }
        if (event.key == "f") {
            removeEvent(a, b, c, d, e);
            userTurn("purple", purple);
        }
    });

    // Buttons Click
    let a;
    yellow.addEventListener("click", a = function() {
        removeEvent(a, b, c, d, e);
        userTurn("yellow", yellow);
    });
    let b;
    green.addEventListener("click", b = function() {
        removeEvent(a, b, c, d, e);
        userTurn("green", green);
    });
    let c;
    blue.addEventListener("click", c = function() {
        removeEvent(a, b, c, d, e);
        userTurn("blue", blue);
    });
    let d;
    purple.addEventListener("click", d = function() {
        removeEvent(a, b, c, d, e);
        userTurn("purple", purple);
    });
}
let rm = false;

function userTurn(color, button) {
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
                    }, 400)
                    setTimeout(function() {
                        ai = true;
                    }, 800)
                }
            }, 350);
        } else {
            lost(button);
        }
    }
    if (userorder.length !== aiorder.length) {
        addEvent();
    }
}