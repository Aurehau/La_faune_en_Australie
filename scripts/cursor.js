/* var cursor = document.getElementById("cursor");
document.querySelector(".marsupiales").addEventListener("mousemove", function(e) {
  cursor.style.left = e.clientX + "px",
    cursor.style.top = e.clientY + "px";
}); */


let cursorX=0;
let cursorY=0;



function curseur(obj){
    var cursor = obj.parentElement.querySelector('.cursor');
     //console.log(obj);
    //console.log(cursor); 

    cursorX= event.clientX;
	cursorY= event.clientY;

    //cursorX= 0;
	//cursorY= 0;


	cursor.style.transform=`translate(calc(${cursorX}px - 50%), calc(${cursorY}px - 100%))`;

    //cursor.style.left = event.clientX + "px",
    //cursor.style.top = event.clientY + "px";	// obj par exemple pour "objet appelant"
}


function curseuranimal(obj){
    var cursor = obj.parentElement.querySelector('.camembert>.cursor');
/*     console.log(obj);
    console.log(cursor); */


    cursorX= event.clientX;
	cursorY= event.clientY;

    //cursorX= 0;
	//cursorY= 0;


	cursor.style.transform=`translate(calc(${cursorX}px - 50%), calc(${cursorY}px - 100%))`;

    //cursor.style.left = event.clientX + "px",
    //cursor.style.top = event.clientY + "px";	// obj par exemple pour "objet appelant"
}