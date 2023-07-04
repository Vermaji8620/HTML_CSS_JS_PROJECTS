let title_text = document.getElementById("title_text");
let desc_text = document.getElementById("desc_text");
let btn_start = document.getElementById("btn_start");
let all_notes_taker = document.getElementById("all_notes_taker");

window.addEventListener("load", () => {
  let notescontainer = document.createElement("div");
  notescontainer.id = "notescontainer";
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    let all_notes_take = document.createElement("div");
    all_notes_take.id = "all_notes_take";
    all_notes_take.innerHTML = `
        <div class='note'>
          <div class="note_title">${key}</div>
          <div class="note_desc">${value}</div>
        </div>`;
    notescontainer.appendChild(all_notes_take);
  }
  all_notes_taker.appendChild(notescontainer);
});

btn_start.addEventListener("click", () => {
  let titletextvalue = title_text.value;
  let desctextvalue = desc_text.value;
  if ((titletextvalue && desctextvalue) != "") {
    localStorage.setItem(titletextvalue, desctextvalue);

    all_notes_taker.innerHTML += `
                <div class='note'>
                    <div class="note_title">${titletextvalue}</div>
                    <div class="note_desc">${desctextvalue}</div>
                </div>`;
  }
  title_text.value = "";
  desc_text.value = "";
});
