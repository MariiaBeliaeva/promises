const printNumbersInterval = (from, to) => {
  let timer = setInterval(() => {
    console.log(from);
    if (from === to) {
      clearInterval(timer);
    }
    from++;
  }, 1000);
};

const printNumbersTimeout = (from, to) => {
  setTimeout(() => {
    console.log(from);
    if (from < to) {
      printNumbersTimeout(from + 1, to);
    }
  }, 1000);
};

console.log(printNumbersInterval(10, 17));
console.log(printNumbersTimeout(96, 100));
