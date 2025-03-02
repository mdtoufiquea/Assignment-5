
let number = 0;
document.getElementById("img-btn").addEventListener("click", function () {
    const colors = ["red", "green", "orange", "Gray ", "pink", "Sky Blue", "yellow", "black"];
    document.body.style.backgroundColor = colors[number];
    number = (number + 1) % colors.length;
})