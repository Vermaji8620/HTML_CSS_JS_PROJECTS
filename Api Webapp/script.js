const API_KEY = "fd73b74c6aea4ca39deac50f80cb2ffa";

const url = "https://newsapi.org/v2/top-headlines?country=us&category=";

window.addEventListener("load", () => fetchnews("business"));

async function fetchnews(query) {
  const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
  const data = await res.json();
  console.log(data);
  bindData(data.articles);
}

function bindData(articles) {
  const cardscontainer = document.getElementById("cards-container");
  const newscardtemplate = document.getElementById("template-news-card");

  cardscontainer.innerHTML = "";

  articles.forEach((article) => {
    if (!article.urlToImage) {
      return;
    }
    const cardclone = newscardtemplate.content.cloneNode(true);
    filldataincard(cardclone, article);
    cardscontainer.appendChild(cardclone);
  });
}

const filldataincard = (cardclone, article) => {
  const newsimg = cardclone.querySelector("#news-img");
  const newstitle = cardclone.querySelector("#news-title");
  const newssource = cardclone.querySelector("#news-source");
  const newsdesc = cardclone.querySelector("#news-desc");
  newsimg.src = article.urlToImage;
  newstitle.innerHTML = article.title;
  newsdesc.innerHTML = article.description;
  const date = new Date(article.publishedAt).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta",
  });
  newssource.innerHTML = `${article.source.name}.${date}`;
  cardclone.firstElementChild.addEventListener("click", () => {
    window.open(article.url, (target = "_blank"));
  });
};

let currentselectednav = null;
function onNavItemClick(id) {
  fetchnews(id);
  const navitem = document.getElementById(id);
  currentselectednav?.classList.remove("active");
  currentselectednav = navitem;
  currentselectednav.classList.add("active");
}

const searchbutton = document.getElementById("search-button");
const searchtext = document.getElementById("search-text");

searchbutton.addEventListener("click", () => {
  const query = searchtext.value;
  if (!query) return;
  fetchnews(query);
  currentselectednav?.classList.remove("active");
  currentselectednav = null;
});
