'use strict';

function Preloader(body) {
    this.body = body;
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

    var wrapper = this.getLogoWrapper();
    var treeContainer = this.getTreeContainer();
    var placeholder = this.getSidebarPlaceholder();

    wrapper.appendChild(placeholder);
    wrapper.appendChild(treeContainer);

    this.body.appendChild(wrapper);
    this.treeContainer = treeContainer;
};

Preloader.prototype.getLogoWrapper = function () {
    var wrapper = document.createElement('div');
    wrapper.classList.add(
        "position-absolute",
        "height-100",
        "width-100"
    );

    return wrapper;
}

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
    var image = this.getBigTree();
    image.src = constants.url.images.bigTree;
};

Preloader.prototype.getBigTree = function () {
    var image = new Image();
    image.classList.add(
        "width-8rem"
    );

    var preloader = this;
    image.addEventListener("load", function (event) {
        preloader.show(image);
    });

    return image;
};


Preloader.prototype.show = function (image) {
    image.style.display = 'none';
    this.treeContainer.appendChild(image);

    $(image).fadeIn(constants.animationSpeed.step, () => {
        pageContainer.fetchImagesAndBuildPage();
    });
};