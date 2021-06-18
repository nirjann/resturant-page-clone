import "../style/menu.scss";
const menuJson = require("../static/json/menu-items");
const menuObj = menuJson["menu"];

function makeMenuSkeleton() {
  const menu = document.getElementById("tabbed-menu");
  const menuWrapper = document.createElement("div");
  menuWrapper.classList.add("container");
  menuWrapper.classList.add("menu-container");
  menuWrapper.id = "Menu";
  menuWrapper.innerHTML = `
        <h2 class = 'menu-heading'> Delicious Dishes </h2>

    `;
  menu.appendChild(menuWrapper);
}

function renderTabMenu(jsonFile) {
  let menuWraper = document.querySelector(".menu-container");
  const menuGenreDiv = document.createElement("div");
  const menuGenreItems = document.createElement("ul");
  menuGenreItems.classList.add("menu-genre-items");
  for (let genre in jsonFile) {
    let li = document.createElement("li");
    li.classList.add("tab-btn");
    li.classList.add("btn-secondary");
    li.innerText = genre;
    li.id = `id-${genre}`;
    li.setAttribute("genre", `${genre}`);
    menuGenreItems.appendChild(li);
  }
  menuGenreDiv.appendChild(menuGenreItems);
  menuWraper.appendChild(menuGenreDiv);
  const menuCardContainer = document.createElement("div");
  menuCardContainer.classList.add("menu-card-container");
  menuGenreDiv.appendChild(menuCardContainer);
}

function renderMenu(jsonFile, genre) {
  console.log(genre);
  const menuGenreDiv = document.querySelector(".menu-container");
  const menuCardContainer = document.querySelector(".menu-card-container");
  for (let menuItem in jsonFile[genre]) {
    let div = document.createElement("div");
    div.classList.add("menu-card");
    div.innerHTML = `
            <img src = ${jsonFile[genre][menuItem]["img-link"]} class = 'card-img'>
            <h2 class = 'card-title'> ${menuItem}</h2>
            <p class = 'card-desc'> ${jsonFile[genre][menuItem]["desc"]} </p>
            <a class = 'btn-primary btn-black card-btn'> Order </a>
        `;
    menuCardContainer.appendChild(div);
  }
}

function clearMenu() {
  const menuCardContainer = document.querySelector(".menu-card-container");
  menuCardContainer.innerHTML = "";
}
// rendering statics
makeMenuSkeleton();
renderTabMenu(menuObj);

// adding events
const menuGenreItems = document.querySelectorAll(".tab-btn");
menuGenreItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("tab btn clicked");
    menuGenreItems.forEach((item) => {
      if(item.classList.contains('tab-active')){
        item.classList.remove('tab-active');
      };
    });
    item.classList.add('tab-active');
    let itemAttr = item.getAttribute("genre");
    clearMenu();
    renderMenu(menuObj, itemAttr);
  });
});
