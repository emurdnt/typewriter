const sentence = "hello there from lighthouse labs";

let time = 0;
let newLine = false;
for (const char of sentence) {
  setTimeout(() => {
    // print the char here
    process.stdout.write(char);
  }, time) 
  time += 50;

}

setTimeout(() => {
  // print the space here
  process.stdout.write("\n");
}, 1700) 

