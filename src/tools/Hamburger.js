

export default class Hamburger{
  contructor(section){
    this.hamburger=document.querySelector(`.${section}`).querySelector(".hamburger")
    
    this.addListeners()
   
  }
  addListeners(){
    this.hamburger.addEventListener("click",()=>{
      this.hamburger.classList.toggle("active")
    })
  }

 
  
}


