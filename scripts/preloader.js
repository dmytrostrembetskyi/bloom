'use strict';

function Preloader() {
    var realBody = document.getElementById('real-body');
    this.body = realBody;
};

Preloader.prototype.load = function () {
    this.preparePage();
    this.fetchImage();
};

Preloader.prototype.preparePage = function () {
    document.body.classList.add("height-100");
    this.body.classList.add(
        "height-100vh",
        "position-relative"
    );

    var treeContainer = this.getTreeContainer();
    var placeholder = this.getSidebarPlaceholder();
    this.body.appendChild(placeholder);
    this.body.appendChild(treeContainer);
    this.treeContainer = treeContainer;
};

Preloader.prototype.getSidebarPlaceholder = function () {
    var placeholder = document.createElement('div');
    placeholder.classList.add(
        "height-navlike-responsive"
    );

    return placeholder;
}

Preloader.prototype.getTreeContainer = function () {
    var treeContainer = document.createElement('div');
    treeContainer.classList.add(
        "z-index-1",
        "display-flex",
        "align-items-center",
        "justify-content-center",
        "position-absolute",
        "width-100",
        "big-tree-container"
    );
    return treeContainer;
}

Preloader.prototype.fetchImage = function () {
    var preloader = this;
    var image = new Image();
    image.classList.add(
        "width-8rem"
    );
    image.addEventListener("load", function (event) {
        preloader.show(image);
    });
    image.src = constants.bigTreeUrl;
};

Preloader.prototype.show = function (image) {
    $(image).hide();
    this.treeContainer.appendChild(image);
    $(image).fadeIn(constants.animationSpeed);
};