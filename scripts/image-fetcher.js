class ImageFetcher {

    fetch(callback, context, imageUrls) {
        var promiseList = this.loadImages(imageUrls);

        Promise
            .all(promiseList)
            .then(images => callback.call(context))
            .catch(event => console.error(event));
    }

    loadImages(imageUrls) {
        var promiseList = [];

        imageUrls.forEach(url =>
            promiseList.push(this.loadImage(url)), this);

        return promiseList;
    }

    loadImage(url) {
        var promise = new Promise((fulfill, reject) => {
            let image = new Image;
            image.addEventListener("load", () => fulfill(image));
            image.src = url;
        });

        return promise;
    }

}