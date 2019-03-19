class LessonsElementBuilder {

    /*
    start public methods
    */
    getBackground() {
        const background = document.createElement("div");
        background.classList.add(
            "background-image-green-mountains",
            "background-repeat-no-repeat",
            "background-size-cover",
            "background-position-center",
            "width-100",
            "height-100"
        );

        return background;
    }

    getContent() {
        const container = this.getContentContainer();
        const sidebarSpace = commonElementBuilder.getSidebarPlaceholder();
        container.appendChild(sidebarSpace);

        const title = this.getContainerTitle();
        container.appendChild(title);

        const content = this.getActualContentContainer();
        this.fillActualContent(content);
        container.appendChild(content);

        return container;
    }
    /*
    end public methods
    */

    /*
    start private methods
    */
    getContentContainer() {
        var container = document.createElement('section');
        container.style.display = 'none';

        return container;
    }

    getContainerTitle() {
        const container = document.createElement('div');
        container.classList.add(
            "display-flex",
            "align-items-center",
            "justify-content-center"
        );

        const title = this.getTitle();
        container.appendChild(title);

        return container;
    }

    getTitle() {
        const title = document.createElement('span');
        title.textContent = "Розклад занять";
        title.classList.add(
            "padding-1rem",
            "font-family-annabelle",
            "font-size-2-5rem",
            "color-0076a3"
        );

        return title;
    }

    getActualContentContainer() {
        const content = document.createElement('section');
        content.classList.add(
            "display-flex",
            "justify-content-center",
            "align-items-center",
            "flex-wrap-wrap"
        );

        return content;
    }

    fillActualContent(mainContent) {
        const data = [{
                city: "Львів",
                address: "вулиця Кокорудза, 9",
                details: "*за попереднім записом"
            },
            {
                city: "Івано-Франківськ",
                address: "вулиця Михайла Грушевського, 16",
                details: "*за попереднім записом"
            }
        ];

        data.forEach(function (item) {
            const table = this.getLessonsTable();

            const header = this.getLessonsItemHeader(item.city);
            table.appendChild(header);

            var content = this.getLessonsItemContent();

            var address = this.getLessonsItemAddress(item.address);
            content.appendChild(address);

            var details = this.getLessonsItemDetails(item.details);
            content.appendChild(details);

            table.appendChild(content);
            mainContent.appendChild(table);
        }, this);
    }

    getLessonsTable() {
        const table = document.createElement("div");
        table.classList.add(
            "width-15rem",
            "margin-1rem",
            "text-align-center",
            "font-family-annabelle",
            "font-size-091rem"
        );

        return table;
    }

    getLessonsItemHeader(city) {
        const header = document.createElement("div");
        header.classList.add(
            "border-top-right-radius-0_5rem",
            "border-top-left-radius-0_5rem",
            "padding-1rem",
            "background-color-c2d6f7"
        );
        header.textContent = city;

        return header;
    }

    getLessonsItemContent() {
        const content = document.createElement("div");
        content.classList.add(
            "border-bottom-left-radius-0_5rem",
            "border-bottom-right-radius-0_5rem",
            "background-color-white",
            "padding-1rem"
        );

        return content;
    }

    getLessonsItemAddress(address) {
        const itemAddress = document.createElement("div");
        itemAddress.textContent = address;

        return itemAddress;
    }

    getLessonsItemDetails(details) {
        const itemDetails = document.createElement("i");
        itemDetails.classList.add('font-size-085rem');
        itemDetails.textContent = details;

        return itemDetails;
    }
    /*
    end private methods
    */

}