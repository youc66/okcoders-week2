var message = " bottles of beer on the wall. "
var message1 = " bottles of beer... "
var message2 = " Take one down, pass it around. "
var final = " bottle of beer on the wall "
var final1 = " bottle of beer... "
var final2 = " No bottles of beer on the wall.  Go home, you're drunk."
var message4 = ""
/*console.log(message + " " + 1);
console.log(message + " " + 2);
console.log(message + " " + 3);
console.log(message + " " + 4);
console.log(message + " " + 5);
console.log(message + " " + 6);
console.log(message + " " + 7);
console.log(message + " " + 8);*/

// var i = 99
// while (i>1) {
    
//     message4 = (i + " " + message + " " + i + message1 + message2);
//     i--;
//     if (i !== 1){
//         console.log(message4 + i + " " + message);}
//     else {
//         console.log(message4 + i + " " + final);}
// }
// if (i=1){
//     var message4 = (i + " " + final + " " + i + final1 + message2);
//     i--;
//     console.log(message4 + " No bottles of beer on the wall.  Go home, you're drunk.")
// }

for(var num=99; num>0; num--){
    message4 = (num + " " + message + " " + num + message1 + message2);
   if (num > 2){
        console.log(message4 + " " + (num-1) + " " + message);}
    else {
        console.log(num + " " + final + " " + num + final1 + message2 + final2);}
}


