const texttext = document.getElementById("texttext");
const elements = document.querySelectorAll(".num_value");
let valuetaken = "";
elements.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.textContent == "AC") {
      valuetaken = "";
      texttext.value = valuetaken;
    } else if (element.textContent == "DEL") {
      try {
        valuetaken = valuetaken.substring(0, valuetaken.length - 1);
        texttext.value = valuetaken;
      } catch {
        texttext.value = valuetaken;
      }
    } else if (element.textContent == "=") {
      try {
        valuetaken = eval(valuetaken);
        texttext.value = valuetaken;
      } catch (error) {
        valuetaken = "INVALID";
        texttext.value = valuetaken;
      }
    } else {
      valuetaken += element.textContent;
      texttext.value = valuetaken;
    }
  });
});
