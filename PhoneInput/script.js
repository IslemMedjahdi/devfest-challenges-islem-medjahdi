const flagChooser = document.getElementById("flag-container");
const dropdown = document.getElementById("dropdown");
const input = document.getElementById("input");
let error = document.getElementById("error");

// states
let dropDownOpen = false;

let currentState = "algeria";

let inputState = "";

// handlers
const closeDropDown = () => {
  dropdown.style.display = "none";
};
const openDropDown = () => {
  dropdown.style.display = "flex";
};

const toggleDropDown = () => {
  if (dropDownOpen) {
    closeDropDown();
  } else {
    openDropDown();
  }
  dropDownOpen = !dropDownOpen;
};

const formatNumber = (
  phoneNumberString = inputState,
  currentStateVar = currentState
) => {
  error.innerHTML = "";

  // clean phone number
  phoneNumberString = (phoneNumberString + "")
    .replaceAll("(", "")
    .replaceAll(")", "")
    .replaceAll("+", "")
    .replaceAll("-", "")
    .replaceAll(" ", "");
  console.log(phoneNumberString);
  switch (currentStateVar) {
    case "unitedStates": {
      console.log("rani khadam");
      const cleaned = ("" + phoneNumberString).replace(/\D/g, "");
      const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
      if (match) {
        var intlCode = match[1] ? "+1 " : "";
        return [intlCode, "(", match[2], ") ", match[3], "-", match[4]].join(
          ""
        );
      }
      break;
    }
    case "germany": {
      if (
        phoneNumberString.length === 14 &&
        phoneNumberString.startsWith("49")
      ) {
        return [
          "+",
          phoneNumberString.substring(0, 2),
          " ",
          phoneNumberString.substring(2, 4),
          " ",
          phoneNumberString.substring(4),
        ].join("");
      }
      break;
    }
    case "algeria": {
      if (
        phoneNumberString.length === 12 &&
        phoneNumberString.startsWith("213")
      ) {
        return [
          "+",
          "213",
          " ",
          phoneNumberString.substring(3, 6),
          " ",
          phoneNumberString.substring(6).match(/.{1,2}/g)
            ? phoneNumberString
                .substring(6)
                .match(/.{1,2}/g)
                .join("")
            : "",
        ].join("");
      }
      break;
    }
    case "uruguay": {
      if (
        phoneNumberString.startsWith(598) &&
        phoneNumberString.length === 15
      ) {
        console.log(phoneNumberString.substring(2));
        return [
          "598",
          " ",
          phoneNumberString.substring(3).match(/.{1,3}/g)
            ? phoneNumberString
                .substring(3)
                .match(/.{1,3}/g)
                .join(" ")
            : "",
        ].join("");
      }
      break;
    }
    case "china": {
      if (phoneNumberString.length === 13 && phoneNumberString.startsWith(86)) {
        return ["+86", " ", phoneNumberString.substring(2)].join("");
      }
      break;
    }
    default:
      return phoneNumberString;
  }
  if (phoneNumberString) {
    error.innerHTML = "error";
  }
  return phoneNumberString;
};

// events
for (let i = 0; i < dropdown.children.length; i++) {
  const child = dropdown.children[i];
  child.addEventListener("click", () => {
    input.value = formatNumber(undefined, child.id);
    currentState = child.id;
    flagChooser.innerHTML = `<img src="resources/${child.id}.svg" class="flag" />`;
    closeDropDown();
  });
}

flagChooser.addEventListener("click", () => {
  toggleDropDown();
});

input.addEventListener("input", (e) => {
  inputState = e.target.value;
  input.value = formatNumber(e.target.value);
});
