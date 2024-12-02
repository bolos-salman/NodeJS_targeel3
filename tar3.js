let arr = [1, 4, 0, 72, 0, 8, 6, 9, 0];
let count = 0;

for (let i = 0; i < arr.length; i++) {
  Number(arr[i] === 0) && count++;
}
console.log(count);
