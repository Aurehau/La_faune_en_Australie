var cursor = document.getElementById("cursor");
document.querySelector(".marsupiales").addEventListener("mousemove", function(e) {
  cursor.style.left = e.clientX + "px",
    cursor.style.top = e.clientY + "px";
});