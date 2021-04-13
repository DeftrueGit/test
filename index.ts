alert("begin")
let button=document.querySelector("button");
button?.addEventListener("click", onClick);
function onClick(this:HTMLElement){
	this.classList.toggle("red");
	alert("toggle")
}

