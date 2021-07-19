import './sass/main.scss';
import Hamburger from './tools/Hamburger.js'
import hambList from './tools/variables'
import DynamicMenu from './tools/menuPopups.js'
import AddActive from './tools/AddActive.js'
import Lightbox from './tools/Lightbox.js'
import MiniSlider from './tools/MiniSlider'
import RollMenu from './tools/RollMenu.js'
import MiniSliderPro from './tools/MiniSliderPro'



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
    elementClass: 'lightbox__popup',
    elementLoadingClass: 'lightbox__load',
    htmlClass: 'slbActive',
    closeBtnClass: 'lightbox__button-close',
    nextBtnClass: ' icon-icon_15',
    prevBtnClass: ' icon-icon_14',
    loadingTextClass: 'lightbox__text',
    
    // customize / localize controls captions
    closeBtnCaption: 'Close',
    nextBtnCaption: '',
    prevBtnCaption: '',
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
new SimpleLightbox({elements: '.lightbox a'});
const productLabelLightbox=new Lightbox();
productLabelLightbox.contructor("productLabel","productLabel__dot")

const lightboxSlider = new MiniSlider()
lightboxSlider.contruktor("productLabel")
const asideMenu = new RollMenu()
asideMenu.contructor("goTo","goTo__header","js__countElement","goTo__element-popup")
const prodComplSlider= new MiniSliderPro("prodCompl","horizontal") // horizontal / vertical
