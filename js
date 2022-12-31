function sortNumbers(descending) {
  const input = document.getElementById("numbers");
  const numbers = input.value.split(" ").map(Number);

  const sortedNumbers = numbers.sort((a, b) => {
    if (descending) {
      return b - a;
    } else {
      return a - b;
    }
  });

  input.value = sortedNumbers.join(" ");
}
