let myleads = [];
let oldleads = [];
const input_ell = document.getElementById("input-el");
const input_btn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const delete_btn = document.getElementById("delete_btn");
const tab_btn = document.getElementById("tab_btn");

let render = (leads) => {
  let listitems = "";
  for (let i = 0; i < leads.length; i++) {
    listitems += `
        <li>
            <a href='${leads[i]}' target='_blank'>
                ${leads[i]}
            </a>
        </li>
    `;
    // OR the below 3 syntaxes
    // const li = document.createElement("li");
    // li.textContent = myleads[i];
    // ulEl.append(li);
    // listitems += `<li><a href="www.${myleads[i]}.com" target="_blank">${myleads[i]}</a></li>`;
  }
  ulEl.innerHTML = listitems;
};

let leadsfromlocalstorage = JSON.parse(localStorage.getItem("myleads"));
if (leadsfromlocalstorage) {
  myleads = leadsfromlocalstorage;
  render(myleads);
}

input_btn.addEventListener("click", () => {
  myleads.push(input_ell.value);
  input_ell.value = "";
  localStorage.setItem("myleads", JSON.stringify(myleads));
  render(myleads);
});

delete_btn.addEventListener("dblclick", () => {
  localStorage.clear();
  myleads = [];
  render(myleads);
});

let repeat = false;
tab_btn.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (!repeat) {
      myleads.push(tabs[0].url);
      localStorage.setItem("myleads", JSON.stringify(myleads));
      render(myleads);
      repeat = !repeat;
    }
  });
});
