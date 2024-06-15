// Take an array of numbers and return the sum.

function sumArray(arr) {
let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    console.log(sum);
}

sumArray([1, 2, 3]); 

// Take an array of numbers and return the average.

function averageArray(arr) {
let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log("Average: " + sum / arr.length);
}

averageArray([1, 2, 3]);

// take an array of strings and return the longest string

function longestString(arr) {
    let longest = "";
    for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
    longest = arr[i];
    } else if (arr[i].length === longest.length) {
    longest += ", " + arr[i];
    }else {
    continue;
    }
}
    console.log(longest);
}

longestString(["hello", "world", "this", "is", "a", "test"]);

// take an array of SVGStringList, and a number and return an array of strings that are longer than the given number 

function stringsLongerThan(arr, num) {
let longer = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > num) {
        longer.push(arr[i]);
    } else {
        console.log("No strings longer than " + num);
    }
}
        console.log(longer);
}

stringsLongerThan(["hello", "world", "this", "is", "a", "test"], 4);

let starting = 0;
function recursionNumber(n){

starting +=1

if (starting >= n){
    console.log(starting)

} else {
    console.log(starting)
    recursionNumber(n)
}
}

recursionNumber(10)


