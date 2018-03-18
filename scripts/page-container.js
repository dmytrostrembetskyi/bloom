"use strict";

function PageContainer(body) {
    this.body = body;
    this.carousel = null;
    this.canRefreshPage = false;
    this.main = null;
}

PageContainer.prototype.fetchImagesAndBuildPage = function () {

    function loadImage(url) {
        return new Promise((fulfill, reject) => {
            let image = new Image();
            image.src = url;
            image.onload = () => fulfill(image);
        });
    }

    Promise.all([
            loadImage(constants.url.images.sidebar),
            loadImage(constants.url.images.brownMountains),
            loadImage(constants.url.images.greenMountains),
            loadImage(constants.url.images.greenTree),
            loadImage(constants.url.images.chamomile),
        ])
        .then((images) => this.buildPage())
        .catch((event) => console.log(event));
}

PageContainer.prototype.buildPage = function () {
    var header = this.getHeader();
    var footer = this.getFooter();
    var main = this.getMain();
    var title = this.getWelcomeTitle();
    var carousel = this.getCarousel();

    main.appendChild(title);
    main.appendChild(this.carousel);

    this.body.appendChild(header);
    this.body.appendChild(main);
    this.body.appendChild(footer);

    $(main).fadeIn(constants.animationSpeed.steps.eight, () => {
        $(header).fadeIn(constants.animationSpeed.steps.five);
        $(footer).fadeIn(constants.animationSpeed.steps.five, () => {
            $(this.carousel).slick('slickPlay');
            $(title).fadeIn(constants.animationSpeed.steps.three, () => this.canRefreshPage = true);
        });

    });

}

PageContainer.prototype.getHeader = function () {
    var header = document.createElement('nav');
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

    var firstItem = this.getNavigationItemFirst();
    header.appendChild(firstItem);

    var secondItem = this.getNavigationItemSecond();
    header.appendChild(secondItem);

    var thirdItem = this.getNavigationItemThird();
    header.appendChild(thirdItem);

    header.style.display = 'none';

    return header;
}

PageContainer.prototype.getNavigationItemFirst = function () {
    var item = document.createElement('div');
    item.classList.add(
        "flex-1",
        "height-80",
        "display-flex",
        "align-items-center",
        "justify-content-flex-end",
    );

    var content = this.getNavigationItemContentFirst();
    item.appendChild(content);

    return item;
}

PageContainer.prototype.getNavigationItemContentFirst = function () {
    var content = document.createElement("span");
    content.classList.add(
        "text-align-right",
        "cursor-pointer",
        "font-family-book-antiqua",
        "color-0076a3"
    );
    content.textContent = "Заняття";

    var container = this;

    content.addEventListener("click", function (event) {
        if (container.canRefreshPage === false)
            return;
        container.canRefreshPage = false;
        container.renderLessonsPage();
    });

    return content;
}

PageContainer.prototype.getNavigationItemSecond = function () {
    var item = document.createElement('div');
    item.classList.add(
        "flex-1",
        "height-80",
        "text-align-center",
        "padding-top-015rem"
    );

    var content = this.getNavigationItemContentSecond();
    item.appendChild(content);

    return item;
}

PageContainer.prototype.getNavigationItemContentSecond = function () {
    var content = new Image();
    content.src = constants.url.images.bigTree;
    content.classList.add(
        "cursor-pointer",
        "border-radius-50",
        "height-100"
    );

    var container = this;

    content.addEventListener("click", () => {
        if (container.canRefreshPage === false)
            return;
        container.canRefreshPage = false;
        container.renderWelcomePage();
    });

    return content;
}

PageContainer.prototype.getNavigationItemThird = function () {
    var item = document.createElement('div');
    item.classList.add(
        "flex-1",
        "height-80",
        "display-flex",
        "align-items-center",
        "justify-content-flex-start",
    );

    var content = this.getNavigationItemContentThird();
    item.appendChild(content);

    return item;
}

PageContainer.prototype.getNavigationItemContentThird = function () {
    var content = document.createElement("span");
    content.classList.add(
        "cursor-pointer",
        "font-family-book-antiqua",
        "color-0076a3"
    );
    content.textContent = "Контакти";

    return content;
}

PageContainer.prototype.getFooter = function () {
    var footer = document.createElement('footer');
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

PageContainer.prototype.getMain = function () {
    var main = document.createElement("main");
    main.classList.add(
        "z-index-1",
        "height-100",
        "width-100",
        "position-relative"
    );
    main.style.display = 'none';
    this.main = main;
    return main;
}

PageContainer.prototype.getWelcomeTitle = function () {
    var title = document.createElement('div');
    title.classList.add(
        "position-absolute",
        "font-family-annabelle",
        "font-size-2rem",
        "z-index-2",
        "color-fff799",
        "top-8rem",
        "right-1rem"
    );
    title.textContent = 'Життя - це диво';
    title.style.display = 'none';

    return title;
}

PageContainer.prototype.getCarousel = function () {
    var carousel = document.createElement('section');
    this.fillCarousel(carousel);

    $(carousel).slick({
        arrows: false,
        speed: constants.animationSpeedCarouselSpeed,
        fade: true,
        cssEase: 'linear',
        autoplaySpeed: constants.animationSpeedCarouselAutoplaySpeed,
        mobileFirst: true,
        pauseOnFocus: false,
        pauseOnHover: false,
    });

    this.carousel = carousel;

    return carousel;
}

PageContainer.prototype.fillCarousel = function (carousel) {
    /* CSS classes with url to images */
    var images = [
        "background-image-caruosel-tree",
        "background-image-caruosel-chamomile"
    ];

    for (let i = 0; i < images.length; i++) {
        var image = this.getCarouselImage(images[i]);
        carousel.appendChild(image);
    }
}

PageContainer.prototype.getCarouselImage = function (imageClass) {
    var image = document.createElement('div');
    image.classList.add(
        "height-100vh",
        "background-repeat-no-repeat",
        "background-position-center",
        "background-size-cover",
        imageClass
    );

    return image;
}

PageContainer.prototype.renderWelcomePage = function () {

    $(this.main).fadeOut(constants.animationSpeed.steps.three, () => {
        if (this.carousel)
            $(this.carousel).slick('unslick');

        this.main.innerHTML = "";

        var title = this.getWelcomeTitle();
        var carousel = this.getCarousel();

        this.main.appendChild(this.carousel);
        this.main.appendChild(title);

        $(this.main).fadeIn(constants.animationSpeed.steps.five, () => {
            $(this.carousel).slick('slickPlay');
            $(title).fadeIn(constants.animationSpeed.steps.two, () => this.canRefreshPage = true);
        });
    });
}

PageContainer.prototype.renderLessonsPage = function () {
    $(this.main).fadeOut(constants.animationSpeed.steps.three, () => {
        if (this.carousel)
            $(this.carousel).slick('unslick');

        this.main.innerHTML = "";

        var background = this.getLessonsBackground();
        this.main.appendChild(background);

        var lessonsContent = this.getLessonsContent();
        background.appendChild(lessonsContent);

        $(this.main).fadeIn(constants.animationSpeed.steps.five, () => {
            $(lessonsContent).fadeIn(constants.animationSpeed.steps.two, () =>
                this.canRefreshPage = true
            );
        });
    });
}

PageContainer.prototype.getLessonsBackground = function () {
    var background = document.createElement("div");
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

PageContainer.prototype.getLessonsContent = function () {
    var lessonsContent = document.createElement('section');
    lessonsContent.style.display = 'none';

    var sidebarSpace = preloader.getSidebarPlaceholder();

    lessonsContent.appendChild(sidebarSpace);

    var titleContainer = this.getLessonsTitleContainer();

    lessonsContent.appendChild(titleContainer);

    var mainContent = this.getMainLessonsContent();

    this.fillMainLessonsContent(mainContent);

    lessonsContent.appendChild(mainContent);

    return lessonsContent;
}

PageContainer.prototype.getLessonsTitleContainer = function () {
    var container = document.createElement('div');
    container.classList.add(
        "display-flex",
        "align-items-center",
        "justify-content-center"
    );

    var title = this.getLessonsTitle();
    container.appendChild(title);

    return container;
}

PageContainer.prototype.getLessonsTitle = function () {
    var title = document.createElement('span');
    title.textContent = "Розклад занять";
    title.classList.add(
        "padding-1rem",
        "font-family-annabelle",
        "font-size-2rem",
        "color-0076a3"
    );

    return title;
}


PageContainer.prototype.getMainLessonsContent = function () {
    var content = document.createElement('section');
    content.classList.add(
        "display-flex",
        "justify-content-center",
        "align-items-center",
        "flex-wrap-wrap"
    );

    return content;
}

PageContainer.prototype.fillMainLessonsContent = function (mainContent) {
    var data = [{
            city: "Львів",
            address: "вулиця Такато, 108",
            details: "За попереднім записом"
        },
        {
            city: "Івано-Франківськ",
            address: "вулиця Такато, 108",
            details: "За попереднім записом"
        }
    ];

    for (let i = 0; i < data.length; i++) {
        var table = this.getLessonsTable();

        var header = this.getLessonsItemHeader(data[i].city);
        table.appendChild(header);

        var content = this.getLessonsItemContent();

        var address = this.getLessonsItemAddress(data[i].address);
        content.appendChild(address);

        var details = this.getLessonsItemDetails(data[i].details);
        content.appendChild(details);

        table.appendChild(content);
        mainContent.appendChild(table);
    }
}

PageContainer.prototype.getLessonsTable = function () {
    var table = document.createElement("div");
    table.classList.add(
        "width-15rem",
        "margin-1rem",
        "text-align-center",
        "font-family-book-antiqua",
        "font-size-091rem"
    );
    return table;
}

PageContainer.prototype.getLessonsItemHeader = function (city) {
    var header = document.createElement("div");
    header.classList.add(
        "border-top-right-radius-0_5rem",
        "border-top-left-radius-0_5rem",
        "padding-1rem",
        "background-color-c2d6f7"
    );
    header.textContent = city;
    return header;
}

PageContainer.prototype.getLessonsItemContent = function () {
    var content = document.createElement("div");
    content.classList.add(
        "border-bottom-left-radius-0_5rem",
        "border-bottom-right-radius-0_5rem",
        "background-color-white",
        "padding-1rem"
    );
    return content;
}

PageContainer.prototype.getLessonsItemAddress = function (address) {
    var itemAddress = document.createElement("div");
    itemAddress.textContent = address;
    return itemAddress;
}

PageContainer.prototype.getLessonsItemDetails = function (details) {
    var itemDetails = document.createElement("div");
    itemDetails.textContent = details;
    return itemDetails;
}