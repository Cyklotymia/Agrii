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
      this.section.querySelectorAll(".hamburger__popup--sub").forEach(subPop=>{
        subPop.classList.remove("active")
      })
      
      this.hamburger.classList.toggle("active")
      this.hambPopUp.classList.toggle("active")
      
    })
    document.addEventListener("click", (e) => {

      if (!e.target.closest(`.hamburger__popup`) && !e.target.closest(`.${this.hambClass}`) && !e.target.closest(`.hamburger__popup--sub`)) {
        this.section.querySelectorAll(".hamburger__popup--sub").forEach(subPop=>{
          subPop.classList.remove("active")
        })
        this.hamburger.classList.remove("active")
        this.hambPopUp.classList.remove("active")
      }
    })
    this.section.querySelectorAll(".hamburger__sub-popup-text").forEach(textBack=>{
      textBack.addEventListener("click",(e)=>{
        e.target.closest(".hamburger__popup--sub").classList.remove("active")
      })
    })


  }

}