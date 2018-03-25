'use strict';

class Preloader {
    constructor(body) {
        this.body = body;
        this.bigTree = null;
    }

    load() {
        this.preparePage();
        this.getBigTree();
    }

    preparePage() {
        document.body.classList.add("height-100");
        this.body.classList.add(
            "height-100vh",
            "position-relative",
            "min-height"
        );
        var wrapper = bigTreeElementBuilder.getLogoWrapper();
        var treeContainer = bigTreeElementBuilder.getTreeContainer();
        var placeholder = commonElementBuilder.getSidebarPlaceholder();
        wrapper.appendChild(placeholder);
        wrapper.appendChild(treeContainer);
        this.body.appendChild(wrapper);
        this.treeContainer = treeContainer;
    }

    getBigTree() {
        var image = bigTreeElementBuilder.getBigTree();
        this.bigTree = image;

        var imageUrls = [constants.url.images.bigTree];
        imageFetcher.fetch(this.show, this, imageUrls)
    }

    show() {
        this.bigTree.src = constants.url.images.bigTree;
        this.bigTree.style.display = 'none';
        this.treeContainer.appendChild(this.bigTree);
        $(this.bigTree).fadeIn(constants.animationSpeed.step, () => {

            var imageUrls = [
                constants.url.images.sidebar,
                constants.url.images.brownMountains,
                constants.url.images.greenMountains,
                constants.url.images.greenTree,
                constants.url.images.chamomile
            ];
            imageFetcher.fetch(pageContainer.buildPage, pageContainer, imageUrls);
        });
    }

};