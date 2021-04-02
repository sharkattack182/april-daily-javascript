// Balanced Words
// We can assign a value to each character in a word, based on their position in the alphabet (a = 1, b = 2, ... , z = 26). A balanced word is one where the sum of values on the left-hand side of the word equals the sum of values on the right-hand side. For odd length words, the middle character (balance point) is ignored.
// Difficulty: Very Hard
// Date: April 1 2021
// Solve Time: 18 minutes

function balanced(string) {
    var l = string.length;

    if(l % 2 == 0) {
        var half = string.length / 2;
        var firstHalf = string.substring(0, half);
        var secondHalf = string.substring(half);

        var side1 = 0;
        var side2 = 0;
        
        firstHalf.split("").forEach(element => {
            var value = element.charCodeAt(0) - 96;
            side1 += value;
        });

        secondHalf.split("").forEach(element => {
            var value = element.charCodeAt(0) - 96;
            side2 += value;
        });

        if(side1 === side2) {
            console.log("true")
        } else {
            console.log("false")
        }
    } else {
        var mid = string.length / 2 + .5;
        var firstHalf = string.substring(0, mid - 1);
        var secondHalf = string.substring(mid);

        var side1 = 0;
        var side2 = 0;
        
        firstHalf.split("").forEach(element => {
            var value = element.charCodeAt(0) - 96;
            side1 += value;
        });

        secondHalf.split("").forEach(element => {
            var value = element.charCodeAt(0) - 96;
            side2 += value;
        });

        if(side1 === side2) {
            console.log("true")
        } else {
            console.log("false")
        }
    }
}

balanced("zips");
balanced("brake");