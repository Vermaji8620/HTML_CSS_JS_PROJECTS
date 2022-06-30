console.log("fdhfdiuf");

//initialise the variables
let songindex = 0;
let audioelement = new Audio("./songs/1.mp3");
let masterplay = document.getElementById("masterplay");
let gif = document.getElementById("gif");
let myprogressbar = document.getElementById("myprogressbar");
let songitem = document.getElementsByClassName("songitem");

let songs = [
  {
    songname: "1st song name",
    filepath: "songs/1.mp3",
    coverpath: "./covers/1.jpg",
  },
  {
    songname: "2st song name",
    filepath: "songs/2.mp3",
    coverpath: "./covers/2.jpg",
  },
  {
    songname: "3st song name",
    filepath: "songs/3.mp3",
    coverpath: "./covers/3.jpg",
  },
  {
    songname: "4st song name",
    filepath: "songs/4.mp3",
    coverpath: "./covers/4.jpg",
  },
  {
    songname: "5st song name",
    filepath: "songs/5.mp3",
    coverpath: "./covers/5.jpg",
  },
  {
    songname: "6st song name",
    filepath: "songs/6.mp3",
    coverpath: "./covers/6.jpg",
  },
  {
    songname: "7st song name",
    filepath: "songs/7.mp3",
    coverpath: "./covers/7.jpg",
  },
  {
    songname: "8st song name",
    filepath: "songs/8.mp3",
    coverpath: "./covers/8.jpg",
  },
  {
    songname: "9st song name",
    filepath: "songs/9.mp3",
    coverpath: "./covers/9.jpg",
  },
];
// audioelement.play()

//handle play/pause click
masterplay.addEventListener("click", () => {
  if (audioelement.paused || audioelement.currentTime <= 0) {
    audioelement.play();
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioelement.pause();
    masterplay.classList.add("fa-play-circle");
    masterplay.classList.remove("fa-pause-circle");
    gif.style.opacity = 0;
  }
});

//listen to events
audioelement.addEventListener("timeupdate", () => {
  myprogressbar.value =
    (audioelement.currentTime / audioelement.duration) * 100;
});

myprogressbar.addEventListener("change", () => {
  audioelement.currentTime =
    (myprogressbar.value * audioelement.duration) / 100;
});

Array.from(songitem).forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverpath;
  element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
});

const makeallplays = () => {
  Array.from(document.getElementsByClassName("songitemplay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songitemplay")).forEach(
  (element, i) => {
    element.addEventListener("click", (e) => {
      makeallplays();
      songindex = e.target.id;
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioelement.src = `songs/${songindex}.mp3`;
      audioelement.currentTime = 0;
      audioelement.play();
      masterplay.classList.add("fa-play-circle");
      masterplay.classList.remove("fa-pause-circle");
      document.getElementsByClassName("songinfo")[0].innerText =
        songs[i].songname;
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songindex >= 8) {
    songindex = 0;
  } else {
    songindex = songindex + 1;
  }
  audioelement.src = `songs/${songindex + 1}.mp3`;
  audioelement.currentTime = 0;
  audioelement.play();
  masterplay.classList.add("fa-play-circle");
  masterplay.classList.remove("fa-pause-circle");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songindex <= 0) {
    songindex = 8;
  } else {
    songindex = songindex - 1;
  }
  audioelement.src = `songs/${songindex - 1}.mp3`;
  audioelement.currentTime = 0;
  audioelement.play();
  masterplay.classList.add("fa-play-circle");
  masterplay.classList.remove("fa-pause-circle");
});
