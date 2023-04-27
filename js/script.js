// --- VARIABLES ---

let button;
let difficulty_sel;
let i;
let max;
let div;
let p;
let text
let rad;

// --- DIV ---



// --- CLICK ---

button = document.getElementById("play");
button.addEventListener("click", start);

// --- FUNCTIONS ---

function start() {
    difficulty_sel = document.getElementById("difficulty").value;
    if (difficulty_sel == 'easy') {
        easy();
    }
    else if (difficulty_sel == 'normal') {
        normal();
    }
    else if (difficulty_sel == 'hard') {
        hard();
    }
}

// --- Element creation ---

function add(radq, counter) {
    div = document.createElement("div");
    div.style.width = "calc(70vh / "+ radq +")";
    div.style.height = "calc(70vh / "+ radq +")";
    div.style.border = "1px solid black";
    div.style.display = "flex";
    div.style.justifyContent = "center"
    div.style.alignItems = "center"
    
    p = document.createElement("p");
    text = document.createTextNode(counter);
    p.style.display = "none";
    p.appendChild(text);
    div.appendChild(p);

    document.getElementById("grid").appendChild(div);
}

// --- Difficulties ---

function easy() {
    max = 100;
    rad = Math.sqrt(max);
    for(i = 1; i <= max; i++) {
        add(rad, i);
    }
}

function normal() {
    max = 81;
    rad = Math.sqrt(max);
    for(i = 1; i <= max; i++) {
        add(rad, i);
    }
}

function hard() {
    max = 49;
    rad = Math.sqrt(max);
    for(i = 1; i <= max; i++) {
        add(rad, i);
    }
}