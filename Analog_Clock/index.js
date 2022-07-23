hours = document.querySelector("#hours");
minutes = document.querySelector("#minutes");
seconds = document.querySelector("#seconds");

setInterval(() => {
  date = new Date();
  htime = date.getHours();
  mtime = date.getMinutes();
  stime = date.getSeconds();
  hrotation = htime * 30 + mtime / 2 + stime / 120;
  mrotation = 6 * mtime + stime / 10;
  srotation = 6 * stime;

  hours.style.transform = `rotate(${hrotation}deg)`;
  minutes.style.transform = `rotate(${mrotation}deg)`;
  seconds.style.transform = `rotate(${srotation}deg)`;
}, 1000);
