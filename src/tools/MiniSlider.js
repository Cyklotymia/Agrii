export default class MiniSlider {
    contruktor(rootClass) {
        this.section = document.querySelector(`.${rootClass}`)
        this.sliderElements = this.section.querySelectorAll(".js__miniSlider-element")
        this.sliderContainer = this.section.querySelector(".js__miniSlider")
        this.lighboxItems = this.section.querySelectorAll(".js__lightbox-item")
        this.lighbox = this.section.querySelector(".js__lightbox")
        this.heightOfItem = null

        this.setDataset()
        this.listeners()



    }
    listeners = () => {
        this.section.addEventListener("click", (e) => {
            this.readArrow(e)
            this.addActive(e)
        })
    }
    countHeight = (slideItem) => {
        const style = getComputedStyle(slideItem)
        const slideItemTopMargin = style.marginTop;
        this.heightOfItem = slideItem.offsetHeight + parseInt(slideItemTopMargin);


    }
    changeHeightUp = () => {
        this.sliderContainer.style.transform = `translateY(${-this.heightOfItem}px)`

        setTimeout(() => {
            this.sliderContainer.style.transition = ".2s"
            this.sliderContainer.style.transform = `translateY(0px)`

        }, 100)
        this.sliderContainer.style.transition = "none"

    }
    changeHeightDown = () => {

        this.sliderContainer.style.transform = `translateY(${-this.heightOfItem}px)`
        this.sliderContainer.style.transition = "0.2s"
        setTimeout(() => {
            this.sliderContainer.style.transform = `translateY(0px)`
            this.sliderContainer.appendChild(this.sliderElements[0])
            this.sliderContainer.style.transition = "none"

        }, 100)

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
        this.countHeight(this.sliderElements[this.sliderElements.length - 1])
        this.sliderContainer.prepend(this.sliderElements[this.sliderElements.length - 1])
        this.updateSliderElements()
        this.changePhoto()
        this.changeHeightUp()

    }
    changeSlideDown = () => {
        this.countHeight(this.sliderElements[0])


        //  this.sliderContainer.appendChild(this.sliderElements[0])   

        this.changeHeightDown()

        this.updateSliderElements()
        this.changePhoto()

    }
    updateSliderElements = () => {
        this.sliderElements = this.section.querySelectorAll(".js__miniSlider-element")
    }
    setDataset = () => {
        this.sliderElements.forEach((sliderElement, index) => {
            sliderElement.dataset.index = index
            this.lighboxItems[index].dataset.index = index
        })
    }
    addActive = (e) => {
        if (e.target.closest(".js__miniSlider-element")) {
            this.sliderElements.forEach(sliderElement => {
                sliderElement.classList.remove("active")
            })
            e.target.closest(".js__miniSlider-element").classList.add("active")
            this.changePhoto()
        }


    }

    changePhoto = () => {
        this.lighboxItems.forEach(lighboxItem => {
            lighboxItem.classList.remove("active")
        })
        this.sliderElements.forEach(sliderElement => {

            if (sliderElement.classList.contains("active")) {
                const activeLightboxItem = this.lighbox.querySelector(`[data-index="${sliderElement.dataset.index}"]`)
                activeLightboxItem.classList.add("active")

            }

        })
    }
}

