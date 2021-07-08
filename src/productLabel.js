import './sass/main.scss';
import Hamburger from './tools/Hamburger.js'
import hambList from './tools/variables'
import DynamicMenu from './tools/menuPopups.js'
import AddActive from './tools/AddActive.js'



const hamburger = new Hamburger();
let hambClass = "hamburger"
hamburger.contructor(hambList, hambClass);
const nav = new DynamicMenu()
let containerClassforDynamicMenu = "menu"
let buttonsClassForDynamicMenu = "js__dynamicMenu"
let nameOfDataForDynamicMenu = "data-menu"
nav.contructor(containerClassforDynamicMenu, buttonsClassForDynamicMenu, nameOfDataForDynamicMenu)
const footerAddClass = new AddActive()
footerAddClass.contructor("footer", "footer__header-container", ["footer__newsletter-agree-input"])
var SimpleLightbox = require('simple-lightbox');
SimpleLightbox.defaults = {
    
    // add custom classes to lightbox elements
    elementClass: '',
    elementLoadingClass: 'slbLoading',
    htmlClass: 'slbActive',
    closeBtnClass: '',
    nextBtnClass: '',
    prevBtnClass: '',
    loadingTextClass: '',
    
    // customize / localize controls captions
    closeBtnCaption: 'Close',
    nextBtnCaption: 'Next',
    prevBtnCaption: 'Previous',
    loadingCaption: 'Loading...',
    
    bindToItems: true, // set click event handler to trigger lightbox on provided $items
    closeOnOverlayClick: true,
    closeOnEscapeKey: true,
    nextOnImageClick: true,
    showCaptions: true,
    
    captionAttribute: 'title', // choose data source for library to glean image caption from
    urlAttribute: 'href', // where to expect large image
    
    startAt: 0, // start gallery at custom index
    loadingTimeout: 100, // time after loading element will appear
    
    appendTarget: 'body', // append elsewhere if needed
    
    beforeSetContent: null, // convenient hooks for extending library behavoiur
    beforeClose: null,
    beforeDestroy: null,
    
    videoRegex: new RegExp(/youtube.com|vimeo.com/) // regex which tests load url for iframe content
    
};
new SimpleLightbox({elements: '.imageGallery1 a'});
