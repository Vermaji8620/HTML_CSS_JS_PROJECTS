// document.getElementById('count-el').innerText= 5;

let count = 0;
let clicked_btninc = () => {
  document.getElementById("count-el").innerText = ++count;
};

let clicked_btndec = () => {
  count > 0
    ? (document.getElementById("count-el").innerText = --count)
    : alert("cant dec");
};

let save = () => {
  localStorage.setItem("count", count); 
};

let reset=()=>{
    count = 0; 
    document.getElementById('count-el').innerText= count ; 
}