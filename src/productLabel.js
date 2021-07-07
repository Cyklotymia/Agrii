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