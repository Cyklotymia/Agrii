export default class LightBox{
    contructor(root,classForDot){
        this.section=document.querySelector(`.${root}`)
        this.contenerForDots=this.section.querySelector(".js__dotsContainer")
        this.lightBoxItems=this.section.querySelectorAll(".js__lightbox-item")
        this.classForDot=classForDot
        this.createDots()
    }
    createDots=()=>{
        this.lightBoxItems.forEach((lightBoxItem,index)=>{
            const dot =document.createElement("a")
            dot.classList.add(`${this.classForDot}`)
            this.contenerForDots.appendChild(dot)
            dot.dataset.photoNumber=index
            dot.addEventListener("click",(e)=>{
                this.changeDot(e)
            })
            
        })
    }
    changeDot=(e)=>{
        const dots=this.section.querySelectorAll(`.${this.classForDot}`)
        dots.forEach(dot=>{
            dot.classList.remove("active")
        })
        e.target.classList.add("active")
       
        this.lightBoxItems.forEach((lightBoxItem,index)=>{
           
            if (index == e.target.dataset.photoNumber) {
                this.lightBoxItems.forEach(lightBoxItem=>{
                    lightBoxItem.classList.remove("active")
                })
               lightBoxItem.classList.add("active")
            }
            
        })
    }
}