export default class MiniSlider {
    contruktor(rootClass) {
        this.section = document.querySelector(`.${rootClass}`)
        this.miniSlider = this.section.querySelector(".js__miniSlider")
        this.miniSliderElements = this.miniSlider.querySelectorAll(".js__miniSlider-element")

        this.arrowUp = this.section.querySelector(".js__miniSlider-arrowUp")
        this.arrowDown = this.section.querySelector(".js__miniSlider-arrowDown")
        this.listeners()
        this.indexOfShowedPhoto = null
        this.controlIndex()
        this.lighboxItems=this.section.querySelectorAll(".js__lightbox-item")
        console.log(this.lighboxItems);
    }
    listeners = () => {

        this.section.addEventListener("click",(e)=>{
            if (e.target.closest(".js__miniSlider-arrowUp")) {
                this.subIndex()
            this.changeHeight(e)
            }else if(e.target.closest(".js__miniSlider-arrowDown")){
                this.addIndex()
                  this.changeHeight(e)
            }
        })
        
    }
    controlIndex = () => {
        this.miniSliderElements.forEach((miniSliderElement, index) => {
            if (miniSliderElement.classList.contains("active")) {
                this.indexOfShowedPhoto = index
                console.log(this.indexOfShowedPhoto);
            }
        })
        this.indexOfShowedPhoto= this.indexOfShowedPhoto >this.miniSliderElements.length-1?0:this.indexOfShowedPhoto
        this.indexOfShowedPhoto=this.indexOfShowedPhoto<0?this.miniSliderElements.length-1:this.indexOfShowedPhoto
        console.log(this.indexOfShowedPhoto);
    }
    subIndex=()=>{
        this.indexOfShowedPhoto-=1
        this.changePhoto()
        
    }
    addIndex=()=>{
        this.indexOfShowedPhoto+=1
        this.changePhoto()
        
    }
    changePhoto=()=>{
        this.miniSliderElements.forEach(miniSliderElement=>{
           miniSliderElement.classList.remove("active")
        })
        this.controlIndex()
        this.miniSliderElements[this.indexOfShowedPhoto].classList.add("active")
        console.log(this.miniSliderElements[this.indexOfShowedPhoto]);
        this.changeLightBoxPhoto()
        
    }
    changeLightBoxPhoto=()=>{
        this.lighboxItems.forEach(lighboxItem=>{
            lighboxItem.classList.remove("active")
        })
        this.lighboxItems[this.indexOfShowedPhoto].classList.add("active")
    }
    changeHeight=(e)=>{
        const item=this.miniSliderElements[this.indexOfShowedPhoto]
        const style= getComputedStyle(item);
        const itemTopmargin = style.marginTop;
        
        const heightOfItem=this.miniSliderElements[this.indexOfShowedPhoto].offsetHeight+parseInt(itemTopmargin);


        
        
        if (e.target.closest(".js__miniSlider-arrowUp")) {
           this.miniSlider.style.transform=`translateY(${heightOfItem}px` 
        }else if(e.target.closest(".js__miniSlider-arrowDown")){
            this.miniSlider.style.transform=`translateY(${-heightOfItem}px` 
        }
        
        
    }
}