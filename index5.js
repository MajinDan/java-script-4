//global vs local scope in functions
let outerWear = "T-shirt";

function myOutfit() {
let outerWear = "sweater";

    return outerWear;
}
console.log(myOutfit());
console.log(outerWear);