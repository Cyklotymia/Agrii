

export default class Hamburger{
  contructor(section){
    this.section= document.querySelector(`.${section}`)
    this.hamburger=this.section.querySelector(".hamburger")
    this.hambPopup=this.section.querySelector(".js__popup")
    this.addListeners()
    
    
   
  }
  addListeners(){
    this.hamburger.addEventListener("click",()=>{
      this.hamburger.classList.toggle("active")
      this.hambPopup.classList.toggle("active")
    })
  }

 
  
}


