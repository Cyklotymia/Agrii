export default class MiniSlider {
    contruktor(rootClass) {
        this.section = document.querySelector(`.${rootClass}`)
        this.sliderElements = this.section.querySelectorAll(".js__miniSlider-element")
        this.sliderContainer = this.section.querySelector(".js__miniSlider")
        this.lighboxItems = this.section.querySelectorAll(".js__lightbox-item")
        this.lighbox=this.section.querySelector(".js__lightbox")

        this.setDataset()
        this.listeners()


    }
    listeners = () => {
        this.section.addEventListener("click", (e) => {
            this.readArrow(e)
            this.addActive(e)
        })
    }
    readArrow = (e) => {

        if (e.target.closest(".js__miniSlider-arrowUp")) {
            console.log("up");
            this.changeSlideUp()
        } else if (e.target.closest(".js__miniSlider-arrowDown")) {
            console.log("down");
            this.changeSlideDown()
        } else {
            return
        }
    }
    changeSlideUp = () => {
        this.sliderContainer.prepend(this.sliderElements[this.sliderElements.length - 1])

        this.updateSliderElements()
        this.changePhoto()

    }
    changeSlideDown = () => {
        this.sliderContainer.appendChild(this.sliderElements[0])
        this.updateSliderElements()
        this.changePhoto()

    }
    updateSliderElements = () => {
        this.sliderElements = this.section.querySelectorAll(".js__miniSlider-element")
    }
    setDataset = () => {
        this.sliderElements.forEach((sliderElement, index) => {
            sliderElement.dataset.index=index
            this.lighboxItems[index].dataset.index=index
        })
    }
    addActive=(e)=>{
        if ( e.target.closest(".js__miniSlider-element")) {
            this.sliderElements.forEach(sliderElement=>{
                sliderElement.classList.remove("active")
            })
             e.target.closest(".js__miniSlider-element").classList.add("active")
             this.changePhoto()
        }

       
    }

    changePhoto = () => {
        this.lighboxItems.forEach(lighboxItem=>{
            lighboxItem.classList.remove("active")
        })
        this.sliderElements.forEach(sliderElement=>{
            
            if (sliderElement.classList.contains("active")) {
               const activeLightboxItem= this.lighbox.querySelector(`[data-index="${sliderElement.dataset.index}"]`)
                activeLightboxItem.classList.add("active")
                
            }
            
        })
    }
}