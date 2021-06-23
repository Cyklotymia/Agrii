
import './sass/main.scss';
import Hamburger from './tools/Hamburger.js'
import hambList from './tools/variables'
import DynamicMenu from './tools/menuPopups.js'

const hamburger = new Hamburger();
let hambClass="hamburger"
hamburger.contructor(hambList,hambClass); 
const nav = new DynamicMenu()

nav.contructor("menu")