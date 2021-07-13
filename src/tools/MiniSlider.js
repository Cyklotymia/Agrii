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

// export default class MiniSlider {
//     contruktor(rootClass) {
//         this.section = document.querySelector(`.${rootClass}`)
//         this.miniSlider = this.section.querySelector(".js__miniSlider")
//         this.miniSliderElements = this.miniSlider.querySelectorAll(".js__miniSlider-element")
//         this.orderOfFirstElement = 0
//         this.itemToChange = this.miniSliderElements.length
//         this.arrowUp = this.section.querySelector(".js__miniSlider-arrowUp")
//         this.arrowDown = this.section.querySelector(".js__miniSlider-arrowDown")
//         this.isClicked = null
//         this.arr = []
//         this.listeners()
//         this.indexOfShowedPhoto = null
//         this.itemToChangeDown = null
//         this.itemToChangeUp = null
//         this.controlIndex()
//         this.lighboxItems = this.section.querySelectorAll(".js__lightbox-item")


//     }
//     listeners = () => {

//         this.section.addEventListener("click", (e) => {
//             if (e.target.closest(".js__miniSlider-arrowUp")) {
//                 this.subIndex()

//             } else if (e.target.closest(".js__miniSlider-arrowDown")) {
//                 this.addIndex()

//             }
//             // this.changeHeight(e)
//             this.logicOrder(e)
//         })

//     }
//     controlIndex = () => {
//         this.miniSliderElements.forEach((miniSliderElement, index) => {
//             if (miniSliderElement.classList.contains("active")) {
//                 this.indexOfShowedPhoto = index

//             }
//         })
//         this.indexOfShowedPhoto = this.indexOfShowedPhoto > this.miniSliderElements.length - 1 ? 0 : this.indexOfShowedPhoto
//         this.indexOfShowedPhoto = this.indexOfShowedPhoto < 0 ? this.miniSliderElements.length - 1 : this.indexOfShowedPhoto

//     }
//     subIndex = () => {
//         this.indexOfShowedPhoto -= 1
//         this.changePhoto()

//     }
//     addIndex = () => {
//         this.indexOfShowedPhoto += 1
//         this.changePhoto()

//     }
//     changePhoto = () => {
//         this.miniSliderElements.forEach(miniSliderElement => {
//             miniSliderElement.classList.remove("active")
//         })
//         this.controlIndex()
//         this.miniSliderElements[this.indexOfShowedPhoto].classList.add("active")
//         console.log(this.miniSliderElements[this.indexOfShowedPhoto]);
//         this.changeLightBoxPhoto()

//     }
//     changeLightBoxPhoto = () => {
//         this.lighboxItems.forEach(lighboxItem => {
//             lighboxItem.classList.remove("active")
//         })
//         this.lighboxItems[this.indexOfShowedPhoto].classList.add("active")
//     }
//     changeHeight = (e) => {
//         const item = this.miniSliderElements[this.indexOfShowedPhoto]
//         const style = getComputedStyle(item);
//         const itemTopmargin = style.marginTop;

//         const heightOfItem = this.miniSliderElements[this.indexOfShowedPhoto].offsetHeight + parseInt(itemTopmargin);

//         if (e.target.closest(".js__miniSlider-arrowUp")) {
//             this.miniSlider.style.transform = `translateY(${heightOfItem}px`
//         } else if (e.target.closest(".js__miniSlider-arrowDown")) {
//             this.miniSlider.style.transform = `translateY(${-heightOfItem}px`
//         }

//     }
//     logicOrder = (e) => {
//         if (!this.isClicked) {
//             this.miniSliderElements.forEach((miniSliderElement, index) => {
//                 miniSliderElement.style.order = index
//                 this.isClicked = true

//             })
//         }
//         this.miniSliderElements.forEach((miniSliderElement, index) => {
//             const order = miniSliderElement.style.order * 1
//             this.arr.push(order)

//         })




//         if (e.target.closest(".js__miniSlider-arrowUp")) {
//             this.orderOfFirstElement -= 1
//             // this.itemToChange -= 1
//             this.itemToChange = this.arr.indexOf(Math.max.apply(null, this.arr))
//             // if (this.itemToChange < 0) {
//             //     this.itemToChange = this.miniSliderElements.length - 1

//             // }
//             console.log(this.itemToChange);
//             console.log(this.arr);
//             this.changeOrder()


//         } else if (e.target.closest(".js__miniSlider-arrowDown")) {
//             this.orderOfFirstElement += 1
//             this.itemToChange = this.arr.indexOf(Math.min.apply(null, this.arr))
//             // this.itemToChange += 1

//             // if (this.itemToChange > this.miniSliderElements.length - 1) {
//             //     this.itemToChange = 0

//             // }

//             this.changeOrder()



//         }


//     }
//     changeOrder = () => {
//         this.miniSliderElements[this.itemToChange].style.order = this.orderOfFirstElement
//         // this.miniSliderElements[this.itemToChange].dataset.order = this.orderOfFirstElement  
//         this.arr = []
//     }
// }