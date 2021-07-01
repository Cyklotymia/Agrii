import './sass/main.scss';
import Hamburger from './tools/Hamburger.js'
import hambList from './tools/variables'
import DynamicMenu from './tools/menuPopups.js'
import AddActive from './tools/AddActive.js'
import RollMenu from './tools/RollMenu.js'




const start = () => {


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
   
    const asideMenu = new RollMenu()
    asideMenu.contructor("asideMenu","asideMenu__element-header-container","asideMenu__popup-element","asideMenu__popup")
}

window.addEventListener('DOMContentLoaded', start)


// document.addEventListener("click",(e)=>{
//     console.log(e.target.closest(".mapSouth"));
// })