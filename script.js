const styleMap = {
  "AC": "#ef4444",
  "DE": "#6366f1",
  "=": "#facc15",
  "+": "#10b981",
  "-": "#10b981",
  "*": "#10b981",
  "/": "#10b981",
  ".": "#10b981",
};

// input buttons colors styles

let buttons = document.querySelectorAll(".buttons input");
buttons.forEach((e) => {
    const bg = styleMap[e.value]
    if(bg){
        e.style.backgroundColor = bg;
        e.style.color = "#ffffff"
    };

//   if (
//     e.value == "." ||
//     e.value == "/" ||
//     e.value == "*" ||
//     e.value == "-" ||
//     e.value == "+"
//   ) {
//     e.style.background = "#10b981";
//     e.style.color = "#ffffff";
//   }

//   if (e.value == "AC") {
//     e.style.background = "#ef4444";
//     e.style.color = "#ffffff";
//   }

//   if (e.value == "DE") {
//     e.style.background = "#6366f1";
//     e.style.color = "#ffffff";
//   }

//   if (e.value == "=") {
//     e.style.background = "#facc15";
//     e.style.color = "#ffffff";
//   }
});

// buttons click function to display numbers in display bar
let display = document.querySelector(".display input:first-child");
console.log(display.value);

buttons.forEach((e) => {
  e.addEventListener("click", (event) => {
    let value = event.target.value;

    // all clear button
    if (value == "AC") {
      display.value = "";
      return;
    }

    // single delete button
    if (value == "DE") {
      display.value = display.value.slice(0, -1);
      return;
    }


    if (value === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
      return;
    }

    // show or add value to the display bar by clicking the buttons
    display.value += value;
  });
});
