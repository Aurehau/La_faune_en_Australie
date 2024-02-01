/* var cursor = document.getElementById("cursor");
document.querySelector(".marsupiales").addEventListener("mousemove", function(e) {
  cursor.style.left = e.clientX + "px",
    cursor.style.top = e.clientY + "px";
}); */



function chat(obj){
    console.log(obj);	// obj par exemple pour "objet appelant"
}


function curseur(obj){
    var cursor = obj.parentElement.querySelector('.cursor');
/*     console.log(obj);
    console.log(cursor); */
    cursor.style.left = event.clientX + "px",
    cursor.style.top = event.clientY + "px";	// obj par exemple pour "objet appelant"
}


function curseuranimal(obj){
    var cursor = obj.parentElement.querySelector('.camembert>.cursor');
/*     console.log(obj);
    console.log(cursor); */
    cursor.style.left = event.clientX + "px",
    cursor.style.top = event.clientY + "px";	// obj par exemple pour "objet appelant"
}