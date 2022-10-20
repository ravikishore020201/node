function first() {
    console.log("first");
    setTimeout(function () { second() }, 5000);
    third()
}
function second() {
    console.log("second");
}
function third() {
    console.log("third");
}
first();