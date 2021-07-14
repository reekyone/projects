var x = 1;

function invertColor() {
    if (x == 1) {
        document.getElementById("page").style.backgroundColor="black";
        document.getElementById("page").style.color="white";
        document.getElementById("astext").style.color="white";
        x = 0;
    }   else {
        document.getElementById("page").style.backgroundColor="gray";
        document.getElementById("page").style.color="black";
        document.getElementById("astext").style.color="black";
        x = 1;
    }
}