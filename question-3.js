let arr = [1, 2, 2, 3, 4, 4, 5];

let count = arr.length - 1;
let uniqe = new Set();
while (count >= 0) {
  arr.forEach((item) => {
    uniqe.add(item);
  });
  count--;
}
console.log(uniqe);
