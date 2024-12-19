window.CustomLetWidgets = window.CustomLetWidgets || {};
window.CustomLetWidgets["visitor-counter"] = function () {
    const counter = document.createElement("div");
    counter.textContent = `Visitors: ${Math.floor(Math.random() * 1000)}`;
    counter.style.position = "fixed";
    counter.style.bottom = "10px";
    counter.style.left = "10px";
    counter.style.backgroundColor = "lightgray";
    counter.style.padding = "5px";
  
    document.body.appendChild(counter);
  };