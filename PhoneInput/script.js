const flagChooser = document.getElementById("flag-container");
const dropdown = document.getElementById("dropdown");
const input = document.getElementById("input");
let error = document.getElementById("error");

const masks = {
  algeria: "+213 ___ __ __ __",
  unitedStates: "+1 (___) ___-____",
};

// states
let dropDownOpen = false;

let currentState = "algeria";

let inputState = "";

const setInputState = (inputStateP) => {
  input.setAttribute("value", inputState);
  inputState = inputStateP;
};

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

const allowInput = (inputId) => {
  console.log(inputId);
  document.querySelectorAll(".input").forEach((item) => {
    if (item.id !== inputId) item.style.display = "none";
  });
  document.getElementById(inputId).style.display = "block";
};

// events
for (let i = 0; i < dropdown.children.length; i++) {
  const child = dropdown.children[i];
  child.addEventListener("click", () => {
    currentState = child.id;
    flagChooser.innerHTML = `<img src="resources/${child.id}.svg" class="flag" />`;
    allowInput(child.id + "-input");
    closeDropDown();
  });
}

flagChooser.addEventListener("click", () => {
  toggleDropDown();
});

// This code empowers all input tags having a placeholder and data-slots attribute
document.addEventListener("DOMContentLoaded", () => {
  for (const el of document.querySelectorAll("[placeholder][data-slots]")) {
    const pattern = el.getAttribute("placeholder"),
      slots = new Set(el.dataset.slots || "_"),
      prev = ((j) =>
        Array.from(pattern, (c, i) => (slots.has(c) ? (j = i + 1) : j)))(0),
      first = [...pattern].findIndex((c) => slots.has(c)),
      accept = new RegExp(el.dataset.accept || "\\d", "g"),
      clean = (input) => {
        input = input.match(accept) || [];
        return Array.from(pattern, (c) =>
          input[0] === c || slots.has(c) ? input.shift() || c : c
        );
      },
      format = () => {
        const [i, j] = [el.selectionStart, el.selectionEnd].map((i) => {
          i = clean(el.value.slice(0, i)).findIndex((c) => slots.has(c));
          return i < 0
            ? prev[prev.length - 1]
            : back
            ? prev[i - 1] || first
            : i;
        });
        el.value = clean(el.value).join``;
        el.setSelectionRange(i, j);
        back = false;
      };
    let back = false;
    el.addEventListener("keydown", (e) => (back = e.key === "Backspace"));
    el.addEventListener("input", format);
    el.addEventListener("focus", format);
    el.addEventListener("blur", () => el.value === pattern && (el.value = ""));
  }
});
