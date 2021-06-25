
import './sass/main.scss';
import Hamburger from './tools/Hamburger.js'
import hambList from './tools/variables'
import DynamicMenu from './tools/menuPopups.js'
import sliderVariables from './tools/variablesSlider.js'
import GenerateSlider from './tools/GenerateSlider.js'

const start=()=>{
  

const hamburger = new Hamburger();
let hambClass="hamburger"
hamburger.contructor(hambList,hambClass); 
const nav = new DynamicMenu()
let containerClassforDynamicMenu="menu"
let buttonsClassForDynamicMenu= "js__dynamicMenu"
let nameOfDataForDynamicMenu="data-menu"
nav.contructor(containerClassforDynamicMenu, buttonsClassForDynamicMenu,nameOfDataForDynamicMenu)  
const mainSlider= new GenerateSlider()
mainSlider.contructor(sliderVariables)

}


// "products","company","our_brands"


window.addEventListener('DOMContentLoaded',start)