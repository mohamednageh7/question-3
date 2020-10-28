let arr = [1, 2, 2, 3, 4, 4, 5];

let uniqe = new Set();
  arr.forEach((item) => {
    uniqe.add(item);
  });

console.log(uniqe);
