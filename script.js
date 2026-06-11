const screen = document.getElementById("screen");
const historyList = document.getElementById("historyList");
const toggleBtn = document.getElementById("themeToggle");

function append(value) {
    screen.value += value;
}

function clearScreen() {
    screen.value = "";
}

function deleteLast() {
    screen.value = screen.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = screen.value;
        let result = eval(expression);

        let li = document.createElement("li");
        li.textContent = `${expression} = ${result}`;

        historyList.prepend(li);

        screen.value = result;
    } catch {
        screen.value = "Error";
    }
}

toggleBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        toggleBtn.textContent = "☀️";
    } else {
        toggleBtn.textContent = "🌙";
    }

});

document.addEventListener("keydown", (e) => {

    const allowed = "0123456789+-*/.";

    if (allowed.includes(e.key)) {
        append(e.key);
    }

    if (e.key === "Enter") {
        e.preventDefault();
        calculate();
    }

    if (e.key === "Backspace") {
        e.preventDefault();
        deleteLast();
    }

    if (e.key === "Escape") {
        clearScreen();
    }

});
document.getElementById("clearHistory")
.addEventListener("click", () => {
    historyList.innerHTML = "";
});
