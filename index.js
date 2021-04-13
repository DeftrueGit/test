"use strict";
alert("begin");
let button = document.querySelector("button");
button === null || button === void 0 ? void 0 : button.addEventListener("click", onClick);
function onClick() {
    this.classList.toggle("red");
    alert("toggle");
}
