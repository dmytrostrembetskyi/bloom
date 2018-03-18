
'use strict';

var realBody = document.getElementById('real-body');
var pageContainer = new PageContainer(realBody);
var preloader = new Preloader(realBody);

window.addEventListener("load", () => {
    preloader.load();
});