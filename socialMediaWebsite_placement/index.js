// SIDEBAR
const menuitems = document.querySelectorAll(".menu-item");
// MESSAGES
const messagenotification = document.querySelector("#messages-notification");
const messages = document.querySelector(".messages");
const message = document.querySelectorAll(".messages");
const messagesearch = document.querySelector("#`message-search`");


//  **********  SIDEBAR ************
// remove active class from all the menu items
const changeactiveitem = () => {
  menuitems.forEach((item) => {
    item.classList.remove("active");
  });
};

menuitems.forEach((item) => {
  item.addEventListener("click", () => { 
    changeactiveitem();
    item.classList.add("active");
    if (item.id != "notifications") {
      document.querySelector(".notifications-popup").style.display = "none";
    } else {
      document.querySelector(".notifications-popup").style.display = "block";
      document.querySelector(
        "#notifications .notification-count"
      ).style.display = "none";
    }
  });
});

// ***********  MESSAGES******************
messagenotification.addEventListener("click", () => {
  messages.style.boxshadow = "0 0 1rem var(--color-primary)";
  messagenotification.querySelector(".notification-count").style.display =
    "none";
  setTimeout(() => {
    messages.style.boxshadow = "none";
  }, 5000);
});
