"use strict";

var isMenuOpen = true;

function toggleMenu() {
  let menuItems = document.querySelectorAll(".menuItemTitle");
  let aside = document.querySelector("aside");
  let sidebar = document.querySelector("div.sidebar");
  let downArrow = document.getElementById("downarrow");
  let clz = document.getElementById("close-btn");

  if (isMenuOpen) {
    menuItems.forEach(function (menuItem) {
      menuItem.style.display = "none";
    });
    sidebar.style.width = "100px";
    downArrow.style.display = "none";
    clz.style.align_self = "center";
    clz.style.margin = "19px auto 34px auto";
    aside.style.width = "100px";
    clz.innerHTML = '<span class="material-icons-sharp">menu</span>';
  } else if (!isMenuOpen) {
    menuItems.forEach(function (menuItem) {
      menuItem.style.display = "inline";
    });
    sidebar.style.width = "290px";
    downArrow.style.display = "block";
    clz.innerHTML = '<span class="material-icons-sharp">clear</span>';
    clz.style.align_self = "flex-end";
    clz.style.margin = "19px 17px 34px auto";
    aside.style.width = "290px";
  }

  isMenuOpen = !isMenuOpen;
}
