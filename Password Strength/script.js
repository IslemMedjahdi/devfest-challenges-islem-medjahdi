const inputSelector = document.getElementById("input");
const resultSelector = document.getElementById("result");

const ALPHABET_NUMBER = 26;
const ATTEMPS_PER_SECOND = 2000000000;

const updateValue = () => {};
inputSelector.addEventListener("input", (e) => {
  const value = e.target.value;
  if (value.length > 0) {
    let strength = "";
    const valueLength = value.length;
    const combinations = Math.pow(ALPHABET_NUMBER, valueLength);
    const time = combinations / ATTEMPS_PER_SECOND;
    if (time < 1.814e6) {
      strength = "weak";
    } else if (time <= 1.262e10) {
      strength = "medium";
    } else {
      strength = "hard";
    }
    resultSelector.innerText = `Your password is ${strength}`;
  } else {
    resultSelector.innerText = ``;
  }
});
