//selectors
let entry = document.querySelector(".entry");
let result = document.querySelector(".result");
let keys = document.querySelectorAll("button");

//Event Listener
keys.forEach(key => {
    key.addEventListener("click", btClicked);
    // key.addEventListener("keypress", btClicked);
});

document.addEventListener("keydown", function(event) {
    keys.forEach(key => {
        if (key === event.key) {
            btClicked(event.key);
        }
    });  
});

function btClicked(key) {
    let btText = this.innerText;
    if (btText === "AC") {
        entry.innerText = "";
        result.innerText = "0";
        return;
    }
    if (btText === "DEL") {
        if (entry.innerText.length === 1) {
            entry.innerText = "0";
            return;
        } else {
            entry.innerText = entry.innerText.slice(0,-1);
            return;
        }
    }
    if (btText === ".") {
        console.log(entry.innerText.includes("."));
        if (entry.innerText.includes(".")) {
            entry.innerText.slice(0, -1);
        } else {
            entry.innerText += btText;
            return;
        }
    }
    if (btText === "=") {
        // result.innerText = math.evaluate(entry.innerText);
        result.innerText = Function("return " + entry.innerText)();
        // the Function used above is said to be better, safer and faster than eval, and works the same.
        entry.innerText = "";
        return;
    }
    else {
        if (entry.innerText === "0") {
            if (btText === ".") {
                entry.innerText += btText;
                return;
            } else {
                entry.innerText = btText;
                return;
            }
        } else {
            entry.innerText += btText;
            return;
        }
    }
}