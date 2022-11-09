let getBarItem = document.querySelector(".bar-item");
let getSideBar = document.querySelector(".sidebar");
let getXmark = document.querySelector(".xmark");
let getLoader = document.querySelector(".loader");
let getPageContent = document.querySelector(".page-content");

getBarItem.onclick = () => {
  getSideBar.style = "transform: translateX(0px);width:220px";
};
getXmark.onclick = () => {
  getSideBar.style =
    "transform: translateX(-220px);width:220px;box-shadow:none;";
};

window.addEventListener("load", () => {
  setTimeout(() => {
    getLoader.style.display = "none";
    getPageContent.style.display = "grid";
  }, 1000);
});
