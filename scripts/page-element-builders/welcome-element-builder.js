class WelcomeElementBuilder {

    /*
    start public methods
    */
    getWelcomeTitle() {
        const title = document.createElement('div');
        title.classList.add(
            "welcome-title-position",
            "font-family-annabelle",
            "font-size-2-5rem",
            "z-index-2",
            "color-fff799"
        );
        title.textContent = 'Життя - це диво';
        title.style.display = 'none';

        return title;
    }

    getCarousel() {
        const carousel = document.createElement('section');
        this.fillCarousel(carousel);

        const carouselOptions = {
            arrows: false,
            speed: constants.animationSpeedCarouselSpeed,
            fade: true,
            cssEase: 'linear',
            autoplaySpeed: constants.animationSpeedCarouselAutoplaySpeed,
            mobileFirst: true,
            pauseOnFocus: false,
            pauseOnHover: false,
        };
        $(carousel).slick(carouselOptions);

        return carousel;
    }
    /*
    end public methods
    */

    /*
    start private methods
    */
    fillCarousel(carousel) {
        /* CSS classes with url to images */
        const images = [
            "background-image-caruosel-tree",
            "background-image-caruosel-chamomile"
        ];

        images.forEach((image) => {
            const carouselImage = this.getCarouselImage(image);
            carousel.appendChild(carouselImage);
        })
    }

    getCarouselImage(imageClass) {
        const image = document.createElement('div');
        image.classList.add(
            "height-100vh",
            "background-repeat-no-repeat",
            "background-position-center",
            "background-size-cover",
            imageClass
        );

        return image;
    }
    /*
    start private methods
    */
}