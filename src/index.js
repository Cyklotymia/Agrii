
import './sass/main.scss';
import Hamburger from './tools/Hamburger.js'

const hamburger = new Hamburger();
let section="header";
let elementsArr=["Produkty", "Firma", "Nasze marki"];
let elementClass="hamburger__popup-element";
let iconClass="icon-icon_05";
hamburger.contructor(section,elementsArr,elementClass,iconClass);
