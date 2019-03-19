class ContainerElementBuilder {

    constructor(container) {
        this.container = container;
    }

    /*
    start public methods
    */
    getHeader() {
        const header = document.createElement('nav');
        header.classList.add(
            "width-100",
            "position-absolute",
            "top-0",
            "background-image-sidebar",
            "background-position-center-top",
            "background-repeat-no-repeat",
            "display-flex",
            "nav-responsive",
            "z-index-3"
        );

        const firstItem = this.getNavigationItemFirst();
        header.appendChild(firstItem);

        const secondItem = this.getNavigationItemSecond();
        header.appendChild(secondItem);

        const thirdItem = this.getNavigationItemThird();
        header.appendChild(thirdItem);

        header.style.display = 'none';

        return header;
    }

    getFooter() {
        const footer = document.createElement('footer');
        footer.classList.add(
            "background-color-c2d6f7",
            "width-100",
            "position-absolute",
            "bottom-0",
            "height-5vh",
            "z-index-3"
        );
        footer.style.display = 'none';

        return footer;
    }

    getMain() {
        const main = document.createElement("main");
        main.classList.add(
            "z-index-1",
            "height-100",
            "width-100",
            "position-relative");
        main.style.display = 'none';

        return main;
    }
    /*
    end public methods
    */

    /*
    start private methods
    */
    getNavigationItemFirst() {
        const item = document.createElement('div');
        item.classList.add(
            "flex-1",
            "height-80",
            "display-flex",
            "align-items-center",
            "justify-content-flex-end"
        );

        const content = this.getNavigationItemContentFirst();
        item.appendChild(content);

        return item;
    }

    getNavigationItemContentFirst() {
        const content = document.createElement("span");
        content.classList.add(
            "text-align-right",
            "cursor-pointer",
            "font-family-annabelle",
            "color-0076a3");
        content.textContent = "Заняття";

        const container = this.container;
        content.addEventListener("click", function () {
            if (container.canRefreshPage === false)
                return;
            container.canRefreshPage = false;
            container.renderLessonsPage();
        });

        return content;
    }

    getNavigationItemSecond() {
        const item = document.createElement('div');
        item.classList.add(
            "flex-1",
            "height-80",
            "text-align-center",
            "padding-top-015rem"
        );
        
        const content = this.getNavigationItemContentSecond();
        item.appendChild(content);

        return item;
    }

    getNavigationItemContentSecond() {
        const content = new Image();
        content.src = constants.url.images.bigTree;
        content.classList.add(
            "cursor-pointer",
            "border-radius-50",
            "height-100");

        const container = this.container;
        content.addEventListener("click", () => {
            if (container.canRefreshPage === false)
                return;
            container.canRefreshPage = false;
            container.renderWelcomePage();
        });

        return content;
    }

    getNavigationItemThird() {
        const item = document.createElement('div');
        item.classList.add(
            "flex-1",
            "height-80",
            "display-flex",
            "align-items-center",
            "justify-content-flex-start"
        );
        
        const content = this.getNavigationItemContentThird();
        item.appendChild(content);

        return item;
    }

    getNavigationItemContentThird() {
        const content = document.createElement("span");
        content.classList.add(
            "cursor-pointer",
            "font-family-annabelle",
            "color-0076a3");
        content.textContent = "Контакти";

        const container = this.container;
        content.addEventListener("click", () => {
            if (container.canRefreshPage === false)
                return;
            container.canRefreshPage = false;
            container.renderContactsPage();
        });

        return content;
    }
    /*
    end private methods
    */

}