const time = document.getElementById("time");
const date = document.getElementById("day");
const navbar = document.querySelector(".nav-menu");
const img = document.getElementById('slackProfilePicture');

document.addEventListener("DOMContentLoaded", () => {
  function updateTimeAndDay() {
    const now = new Date();
    const utcTime = now.toUTCString().split(" ")[4];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDay = days[now.getUTCDay()];

    time.innerText = utcTime;
    date.innerText = currentDay;
  }

  updateTimeAndDay();
  setInterval(updateTimeAndDay, 60000);
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    navbar.classList.add("navbar-scroll");
  } else {
    navbar.classList.remove("navbar-scroll");
  }
});

window.addEventListener('load', function() {
    const naturalWidth = img.naturalWidth;
    const naturalHeight = img.naturalHeight;
    console.log(`Natural Width: ${naturalWidth}, Natural Height: ${naturalHeight}`);
});
