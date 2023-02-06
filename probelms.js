

// Problem 1: Let’s play a mind game
function mindGame(number) {
    if (typeof number != "number" || number <= 0) {
        return "please provide valid number"
    }
    const TotalNumber = ((number * 3 + 10) / 2 - 5);
    return TotalNumber;
}
const hello = mindGame(50);
// console.log("form last", hello);


// Problem 2: Finding even or odd

function calledEvenOdd(string) {
    if (typeof string === "number" || string <= 0) {
        return "please provide valid string";
    }

    if (string.length % 2 != 0) {
        return "this is odd number";
        // console.log("this is odd number")
    }
    else {
        // console.log("this is even number")
        return "this is even number"
    }


}
const string = "chatgpt";
const hello2 = calledEvenOdd(string);
// console.log("hello form last 222", hello2)




// Problem 3: Is Less or Greater than seven

function isLGSeven(number) {
    if (typeof number != "number" || number === 'string') {
        return "please provide number ";
    }
    console.log(number)
    if (number <= 7) {
        const isnumber = number - 7;
        return isnumber;

    }
    return number * 2;
}
// const number = 6;
const hello3 = isLGSeven(16);
console.log("hello 3", hello3);


// Problem 5: Convert your gems into diamond














