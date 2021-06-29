export default class AddActive{
    contructor(rootClass,listenClass,otherToListenArr){
        this.section=document.querySelector(`.${rootClass}`)
        this.headers=document.querySelectorAll(`.${listenClass}`)
       this.otherToListenArr=otherToListenArr
        this.otherElement=null;
        this.getElements()
        this.addListeners(this.otherElement)
    }
    addListeners=(otherElement)=>{
        this.headers.forEach(header=>{
            header.addEventListener("click",(e)=>{
                this.addActive(e);
            })
        })
        if (otherElement) {
            otherElement.addEventListener("click",(e)=>{
                this.addActive(e);
               
            })
        }
        
        
    }
    getElements=()=>{
        this.otherToListenArr.forEach(otherClass=>{
            let otherElements=this.section.querySelectorAll(`.${otherClass}`)
            otherElements.forEach(element=>{
                this.otherElement=element
                
            })
        })
    }
    addActive = (e)=>{
        e.target.closest(".js__addActive").classList.toggle("active")
    }
}