let bringit = () => {
  let total_char = document.getElementById("total-char").value;
  let findrandom = "";
  for (let i = 0; i < total_char; i++) {
    if (document.getElementById("upper-case").checked) {
      findrandom += String.fromCharCode(Math.random() * (90 - 65 + 1) + 65);
    }
    if (document.getElementById("lower-case").checked) {
      findrandom += String.fromCharCode(Math.random() * (122 - 97 + 1) + 97);
    }
    if (document.getElementById("numbers").checked) {
      findrandom += String.fromCharCode(Math.random() * (57 - 48 + 1) + 48);
    }
    if (document.getElementById("symbols").checked) {
      findrandom += String.fromCharCode(Math.random() * (47 - 33 + 1) + 33);
    }
  }
  document.querySelector("#pass-box").textContent = findrandom.substring(
    0,
    total_char
  );
};
