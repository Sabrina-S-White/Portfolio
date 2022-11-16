"use strict";

var sidebarBtn = document.getElementById('sidebarBtn');
var sidebar = document.getElementById('sidebar');
sidebarBtn.addEventListener('click', function () {
  sidebar.classList.toggle('sidebarShow');
});
var flags = document.querySelectorAll('.flag');
flags.forEach(function (flag) {
  flag.addEventListener('click', function () {
    flag.classList.toggle('flag-style-red');
  });
});