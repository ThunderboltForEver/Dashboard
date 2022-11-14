let getBarItem = document.querySelector(".bar-item");
let getSideBar = document.querySelector(".sidebar");
let getXmark = document.querySelector(".xmark");
let getPageContent = document.querySelector(".page-content");
let getLoader = document.querySelector(".loader");
let getToggle = document.querySelector(".toggle");
let i = 0,
  toggleCounter = 0;

getBarItem.onclick = () => {
  getSideBar.style = "transform: translateX(0px);width:220px";
  getSideBar.classList.add("sidebar-active");
};
getXmark.onclick = () => {
  getSideBar.style =
    "transform: translateX(-220px);width:220px;box-shadow:none;";
  if (getSideBar.classList.contains("sidebar-active")) {
    getSideBar.classList.remove("sidebar-active");
  }
};

window.addEventListener("load", () => {
  setTimeout(() => {
    getLoader.style.display = "none";
    getPageContent.style.display = "grid";
  }, 1000);
});
document.onclick = (e) => {
  if (getSideBar.classList.contains("sidebar-active")) {
    if (
      !e.target.classList.contains("bar-item") &&
      !e.target.classList.contains("sidebar") &&
      !e.target.classList.contains("brand") &&
      !e.target.classList.contains("brand-name")
    ) {
      getSideBar.style =
        "transform: translateX(-220px);width:220px;box-shadow:none;";
      getSideBar.classList.remove("sidebar-active");
    }
  }
};
window.addEventListener("scroll", () => {
  if (getSideBar.classList.contains("sidebar-active")) {
    getSideBar.style =
      "transform: translateX(-220px);width:220px;box-shadow:none;";
    getSideBar.classList.remove("sidebar-active");
  }
});
function redHeart(e) {
  let getHeart = document.querySelector(e);
  if (i === 0) {
    getHeart.classList.replace("fa-regular", "fa-solid");
    getHeart.style.color = "red";
    i++;
  } else {
    getHeart.classList.replace("fa-solid", "fa-regular");
    getHeart.style.color = "#888";
    i = 0;
  }
}
function toggle() {
  if (toggleCounter == 0) {
    getToggle.classList.add("left");
    toggleCounter++;
  } else {
    getToggle.classList.remove("left");
    toggleCounter = 0;
  }
}
