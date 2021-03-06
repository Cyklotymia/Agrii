export default class MiniSliderPro {
    constructor(rootClass, kindOfSlider) {
        this.flag = kindOfSlider
        this.section = document.querySelector(`.${rootClass}`)
        this.arrowReduce = this.section.querySelector(".js__MiniSlider-arrow-reduce")
        this.arrowIncrease = this.section.querySelector(".js__MiniSlider-arrow-increase")
        this.elementsOfSlider = this.section.querySelectorAll(".js__MiniSlider-element")
        this.sliderContainer = this.section.querySelector(".js__MiniSlider-container")

        this.listeners()


    }
    countElementOfSlider = (e) => {
        if (this.flag === "horizontal") {
            this.countWidth(e)

        } else if (this.flag === "vertical") {
            this.countHeight(e)
        }
    }
    updateElementsOfSlider = () => {
        this.elementsOfSlider = this.section.querySelectorAll(".js__MiniSlider-element")
    }
    countWidth = (e) => {
        this.updateElementsOfSlider()

        if (e.target.closest(".js__MiniSlider-arrow-reduce")) {
            const lastElement = this.elementsOfSlider[this.elementsOfSlider.length - 1]
            this.showLastElement(lastElement)
            this.animateLeft(lastElement.offsetWidth)

        } else if (e.target.closest(".js__MiniSlider-arrow-increase")) {
            const firstElement = this.elementsOfSlider[0]
            this.animateRight(firstElement.offsetWidth,firstElement)
        }
    }
    
    animateLeft = (sizeOfElement) => {
        this.sliderContainer.style.transform = `translateX(${-sizeOfElement}px)`

        setTimeout(() => {
            this.sliderContainer.style.transition = ".2s"
            this.sliderContainer.style.transform = `translateX(0px)`

        }, 100)
        this.sliderContainer.style.transition = "none"

    }
    animateRight=(sizeOfElement,firstElement)=>{
        this.sliderContainer.style.transform = `translateX(${-sizeOfElement}px)`
        this.sliderContainer.style.transition = "0.2s"
        setTimeout(() => {
            this.sliderContainer.style.transform = `translateX(0px)`

            this.showFirstElement(firstElement)
            this.sliderContainer.style.transition = "none"

        }, 100)

    }
    showLastElement = (lastElement) => {

        this.sliderContainer.prepend(lastElement)


    }
    showFirstElement = (firstElement) => {
        this.sliderContainer.appendChild(firstElement)
    }
    countHeight = (e) => {
        this.updateElementsOfSlider()
        if (e.target.closest(".js__MiniSlider-arrow-reduce")) {
            const lastElement = this.elementsOfSlider[this.elementsOfSlider.length - 1]
            this.showLastElement(lastElement)
            this.animateDown(lastElement.offsetHeight)

        } else if (e.target.closest(".js__MiniSlider-arrow-increase")) {
            const firstElement = this.elementsOfSlider[0]
            this.animateUp(firstElement.offsetHeight,firstElement)
        }
    }

    animateDown = (sizeOfElement) => {
        this.sliderContainer.style.transform = `translateY(${-sizeOfElement}px)`

        setTimeout(() => {
            this.sliderContainer.style.transition = ".2s"
            this.sliderContainer.style.transform = `translateY(0px)`

        }, 100)
        this.sliderContainer.style.transition = "none"

    }

    animateUp=(sizeOfElement,firstElement)=>{
        this.sliderContainer.style.transform = `translateY(${-sizeOfElement}px)`
        this.sliderContainer.style.transition = "0.2s"
        setTimeout(() => {
            this.sliderContainer.style.transform = `translateY(0px)`

            this.showFirstElement(firstElement)
            this.sliderContainer.style.transition = "none"

        }, 100)

    }
    listeners = () => {
        this.arrowReduce.addEventListener("click", (e) => {
            this.countElementOfSlider(e)

        })
        this.arrowIncrease.addEventListener("click", (e) => {
            this.countElementOfSlider(e)

        })
    }
}


// changeHeightUp = () => {
//     this.sliderContainer.style.transform = `translateY(${-this.heightOfItem}px)`

//     setTimeout(() => {
//         this.sliderContainer.style.transition = ".2s"
//         this.sliderContainer.style.transform = `translateY(0px)`

//     }, 100)
//     this.sliderContainer.style.transition = "none"

// }
// changeHeightDown = () => {

//     this.sliderContainer.style.transform = `translateY(${-this.heightOfItem}px)`
//     this.sliderContainer.style.transition = "0.2s"
//     setTimeout(() => {
//         this.sliderContainer.style.transform = `translateY(0px)`
//         this.sliderContainer.appendChild(this.sliderElements[0])
//         this.sliderContainer.style.transition = "none"

//     }, 100)

// }