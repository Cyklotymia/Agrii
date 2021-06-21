import GeneratePopup from './GeneratePopup.js'

export default class Hamburger {
  contructor(hambList, hambClass) {

    this.hambList = hambList;
    this.section = document.querySelector(`.${hambList.section}`)
    this.hambClass = hambClass;
    this.hamburger = this.section.querySelector(`.${this.hambClass}`)
    this.hambPopUp = this.section.querySelector(`.${this.hambList.popUpClass}`)

    this.addListeners()
    const generateHambPopup = new GeneratePopup()
    generateHambPopup.contructor(this.hambList)
  }


  addListeners() {
    this.hamburger.addEventListener("click", () => {
      this.hamburger.classList.toggle("active")
      this.hambPopUp.classList.toggle("active")
    })
    document.addEventListener("click", (e) => {

      if (!e.target.closest(`.hamburger__popup`) && !e.target.closest(`.${this.hambClass}`)) {
        this.hamburger.classList.remove("active")
        this.hambPopUp.classList.remove("active")
      }
    })


  }

}