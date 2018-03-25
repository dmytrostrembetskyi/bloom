class BigTreeElementBuilder {

    /*
    start public methods
    */
    getLogoWrapper() {
        var wrapper = document.createElement('div');
        wrapper.classList.add(
            "position-absolute",
            "height-100",
            "width-100"
        );

        return wrapper;
    }

    getTreeContainer() {
        var treeContainer = document.createElement('div');
        treeContainer.classList.add(
            "z-index-1",
            "display-flex",
            "align-items-center",
            "justify-content-center",
            "position-absolute",
            "width-100",
            "big-tree-container");

        return treeContainer;
    }

    getBigTree() {
        var image = new Image();
        image.classList.add("width-8rem");

        return image;
    }
    /*
    end public methods
    */

}