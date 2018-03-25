"use strict";

class PageContainer {

    constructor(body) {
        this.body = body;
        this.carousel = null;
        this.canRefreshPage = false;
        this.main = null;
    }

    buildPage() {
        var header = containerElementBuilder.getHeader();
        var footer = containerElementBuilder.getFooter();
        var main = containerElementBuilder.getMain();
        this.main = main;
        var title = welcomeElementBuilder.getWelcomeTitle();
        var carousel = welcomeElementBuilder.getCarousel();
        this.carousel = carousel;
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

    renderWelcomePage() {
        $(this.main).fadeOut(constants.animationSpeed.steps.two, () => {
            $(this.carousel).slick('unslick');

            this.main.innerHTML = "";

            const title = welcomeElementBuilder.getWelcomeTitle();
            const carousel = welcomeElementBuilder.getCarousel();
            this.carousel = carousel;
            this.main.appendChild(this.carousel);
            this.main.appendChild(title);
            $(this.main).fadeIn(constants.animationSpeed.steps.two, () => {
                $(this.carousel).slick('slickPlay');
                this.show(title);
            });
        });
    }

    renderLessonsPage() {
        $(this.main).fadeOut(constants.animationSpeed.steps.two, () => {
            $(this.carousel).slick('unslick');

            this.main.innerHTML = "";
            var background = lessonsElementBuilder.getBackground();
            this.main.appendChild(background);
            var lessonsContent = lessonsElementBuilder.getContent();
            background.appendChild(lessonsContent);

            $(this.main).fadeIn(constants.animationSpeed.steps.two, () =>
                this.show(lessonsContent)
            );
        });
    }

    renderContactsPage() {
        $(this.main).fadeOut(constants.animationSpeed.steps.two, () => {
            $(this.carousel).slick('unslick');
            this.main.innerHTML = "";

            var background = contactsElementBuilder.getBackground();
            this.main.appendChild(background);
            var content = contactsElementBuilder.getContent();
            background.appendChild(content);

            $(this.main).fadeIn(constants.animationSpeed.steps.two, () =>
                this.show(content)
            );
        });
    }

    show(lastElementInAnimationChain) {
        $(lastElementInAnimationChain)
            .fadeIn(constants.animationSpeed.steps.two, () =>
                this.canRefreshPage = true
            )
    }
}