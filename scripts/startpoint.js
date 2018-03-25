
'use strict';

var realBody = document.getElementById('real-body');
var pageContainer = new PageContainer(realBody);
var containerElementBuilder = new ContainerElementBuilder(pageContainer);
var welcomeElementBuilder = new WelcomeElementBuilder;
var lessonsElementBuilder = new LessonsElementBuilder;
var bigTreeElementBuilder = new BigTreeElementBuilder;
var commonElementBuilder = new CommonElementBuilder;
var contactsElementBuilder = new ContactsElementBuilder;
var imageFetcher = new ImageFetcher;
var preloader = new Preloader(realBody);

window.addEventListener("load", () => {
    preloader.load();
});