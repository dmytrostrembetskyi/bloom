class LessonsElementBuilder {

    /*
    start public methods
    */
    getLessonsBackground() {
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

    getLessonsContent() {
        const lessonsContent = document.createElement('section');
        lessonsContent.style.display = 'none';

        const sidebarSpace = commonElementBuilder.getSidebarPlaceholder();

        lessonsContent.appendChild(sidebarSpace);

        const titleContainer = this.getLessonsTitleContainer();

        lessonsContent.appendChild(titleContainer);

        var mainContent = this.getMainLessonsContent();

        this.fillMainLessonsContent(mainContent);

        lessonsContent.appendChild(mainContent);

        return lessonsContent;
    }
    /*
    end public methods
    */

    /*
    start private methods
    */
    getLessonsTitleContainer() {
        const container = document.createElement('div');
        container.classList.add(
            "display-flex",
            "align-items-center",
            "justify-content-center"
        );

        const title = this.getLessonsTitle();
        container.appendChild(title);

        return container;
    }

    getMainLessonsContent() {
        const content = document.createElement('section');
        content.classList.add(
            "display-flex",
            "justify-content-center",
            "align-items-center",
            "flex-wrap-wrap"
        );

        return content;
    }

    fillMainLessonsContent(mainContent) {
        const data = [{
                city: "Львів",
                address: "вулиця Такато, 108",
                details: "*за попереднім записом"
            },
            {
                city: "Івано-Франківськ",
                address: "вулиця Михайла Грушевського 16",
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

    getLessonsTitle() {
        const title = document.createElement('span');
        title.textContent = "Розклад занять";
        title.classList.add(
            "padding-1rem",
            "font-family-annabelle",
            "font-size-2rem",
            "color-0076a3"
        );

        return title;
    }

    getLessonsTable() {
        const table = document.createElement("div");
        table.classList.add(
            "width-15rem",
            "margin-1rem",
            "text-align-center",
            "font-family-book-antiqua",
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