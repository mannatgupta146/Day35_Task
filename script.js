// 15. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.
let tries = 0;
let num = prompt("Enter a number");
tries++

while (Number(num) % 2 !== 0) {
  if (num === null || num.trim() === "") {
    console.error("Enter something!");
    break;
  }
  num = prompt("Enter again (need even number)");
  tries++;
}

if (Number(num)% 2 === 0) console.log("Nice! Even number entered.");
console.log(`Total tries: ${tries}`);