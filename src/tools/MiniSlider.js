export default class MiniSlider {
    contruktor(rootClass) {
        this.section = document.querySelector(`.${rootClass}`)
        this.miniSlider = this.section.querySelector(".js__miniSlider")
        this.miniSliderElements = this.miniSlider.querySelectorAll(".js__miniSlider-element")
        this.orderOfFirstElement = 0
        this.itemToChange = this.miniSliderElements.length
        this.arrowUp = this.section.querySelector(".js__miniSlider-arrowUp")
        this.arrowDown = this.section.querySelector(".js__miniSlider-arrowDown")
        this.isClicked = null
        this.arr = []
        this.listeners()
        this.indexOfShowedPhoto = null
        this.itemToChangeDown = null
        this.itemToChangeUp = null
        this.controlIndex()
        this.lighboxItems = this.section.querySelectorAll(".js__lightbox-item")


    }
    listeners = () => {

        this.section.addEventListener("click", (e) => {
            if (e.target.closest(".js__miniSlider-arrowUp")) {
                this.subIndex()

            } else if (e.target.closest(".js__miniSlider-arrowDown")) {
                this.addIndex()

            }
            // this.changeHeight(e)
            this.logicOrder(e)
        })

    }
    controlIndex = () => {
        this.miniSliderElements.forEach((miniSliderElement, index) => {
            if (miniSliderElement.classList.contains("active")) {
                this.indexOfShowedPhoto = index

            }
        })
        this.indexOfShowedPhoto = this.indexOfShowedPhoto > this.miniSliderElements.length - 1 ? 0 : this.indexOfShowedPhoto
        this.indexOfShowedPhoto = this.indexOfShowedPhoto < 0 ? this.miniSliderElements.length - 1 : this.indexOfShowedPhoto

    }
    subIndex = () => {
        this.indexOfShowedPhoto -= 1
        this.changePhoto()

    }
    addIndex = () => {
        this.indexOfShowedPhoto += 1
        this.changePhoto()

    }
    changePhoto = () => {
        this.miniSliderElements.forEach(miniSliderElement => {
            miniSliderElement.classList.remove("active")
        })
        this.controlIndex()
        this.miniSliderElements[this.indexOfShowedPhoto].classList.add("active")
        console.log(this.miniSliderElements[this.indexOfShowedPhoto]);
        this.changeLightBoxPhoto()

    }
    changeLightBoxPhoto = () => {
        this.lighboxItems.forEach(lighboxItem => {
            lighboxItem.classList.remove("active")
        })
        this.lighboxItems[this.indexOfShowedPhoto].classList.add("active")
    }
    changeHeight = (e) => {
        const item = this.miniSliderElements[this.indexOfShowedPhoto]
        const style = getComputedStyle(item);
        const itemTopmargin = style.marginTop;

        const heightOfItem = this.miniSliderElements[this.indexOfShowedPhoto].offsetHeight + parseInt(itemTopmargin);

        if (e.target.closest(".js__miniSlider-arrowUp")) {
            this.miniSlider.style.transform = `translateY(${heightOfItem}px`
        } else if (e.target.closest(".js__miniSlider-arrowDown")) {
            this.miniSlider.style.transform = `translateY(${-heightOfItem}px`
        }

    }
    logicOrder = (e) => {
        if (!this.isClicked) {
            this.miniSliderElements.forEach((miniSliderElement, index) => {
                miniSliderElement.style.order = index
                this.isClicked = true

            })
        }
        this.miniSliderElements.forEach((miniSliderElement, index) => {
            const order = miniSliderElement.style.order * 1
            this.arr.push(order)

        })




        if (e.target.closest(".js__miniSlider-arrowUp")) {
            this.orderOfFirstElement -= 1
            // this.itemToChange -= 1
            this.itemToChange = this.arr.indexOf(Math.max.apply(null, this.arr))
            // if (this.itemToChange < 0) {
            //     this.itemToChange = this.miniSliderElements.length - 1

            // }
            console.log(this.itemToChange);
            console.log(this.arr);
            this.changeOrder()


        } else if (e.target.closest(".js__miniSlider-arrowDown")) {
            this.orderOfFirstElement += 1
            this.itemToChange = this.arr.indexOf(Math.min.apply(null, this.arr))
            // this.itemToChange += 1

            // if (this.itemToChange > this.miniSliderElements.length - 1) {
            //     this.itemToChange = 0

            // }

            this.changeOrder()



        }


    }
    changeOrder = () => {
        this.miniSliderElements[this.itemToChange].style.order = this.orderOfFirstElement
        // this.miniSliderElements[this.itemToChange].dataset.order = this.orderOfFirstElement  
        this.arr = []
    }
}