//stand in line

function nextInLine(arr,item){
    arr.push(item); 
    return item;
}

let testArr = [1,2,3,4,5]

console.log("Before: " + JSON.stringify(testArr));