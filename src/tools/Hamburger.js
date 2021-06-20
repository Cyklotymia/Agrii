


export default class Hamburger{
  contructor(section, elementsArr,elementClass,iconClass){
    this.section= document.querySelector(`.${section}`);
    this.hamburger=this.section.querySelector(".hamburger");
    this.hambPopup=this.section.querySelector(".js__popup");
    this.hambList=this.hambPopup.querySelector(".js__popup-list");
   
    this.elementsArr=elementsArr;
    
    this.generatePopup(elementClass,iconClass)
    this.addListeners()
    
    
    
    
   
  }
  addListeners(){
    this.hamburger.addEventListener("click",()=>{
      this.hamburger.classList.toggle("active")
      this.hambPopup.classList.toggle("active")
    })
    
  }
generatePopup(elementClass,iconClass){
     this.elementsArr.forEach(element=>{
       const li = document.createElement("li")
       li.classList.add(elementClass)
       const span = document.createElement("span")
       span.classList.add(`${elementClass}-text`)
      //  span.textContent=`${this.elementsArr[index]}`
       span.textContent=element
       
       const div = document.createElement("div")
       div.classList.add(`${elementClass}-icon`)
       const icon= document.createElement("i")
       icon.classList.add(iconClass)
       div.appendChild(icon);
       
       li.appendChild(span)
       li.appendChild(div)
       this.hambList.appendChild(li)
        
      
     })
     
    }
 
  
}


