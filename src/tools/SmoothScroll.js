export default class SmoothScroll {
    contructor(rootClass, specialHeight = 0) {
        this.sectionOfPanel = document.querySelector(`.${rootClass}`)
        this.arrOfControlElements = this.sectionOfPanel.querySelectorAll(`.js__controlElement`)
        this.heightOfElement = null
        this.specialHeight = specialHeight

        this.listeners()
    }
    listeners = () => {
        this.arrOfControlElements.forEach(controlElement => {
            controlElement.addEventListener("click", (e) => {
                this.readHight()
                this.goIntoSection(e)
            })
        })
    }
    readHight = () => {
        const readingElement = document.querySelector(".js__readHeight")
        this.heightOfElement = readingElement.offsetHeight

    }
    goIntoSection = (e) => {

        let datasetOfClickedElement = e.target.closest("[data-scroll]").dataset.scroll
        

        const elementsWithSameData = document.querySelectorAll(`[data-scroll="${datasetOfClickedElement}"]`)


        elementsWithSameData.forEach(elementWithSameData => {

            if (elementWithSameData.classList.contains("js__goTo")) {
             
                window.scrollTo({
                    left: 0,
                    top: elementWithSameData.offsetTop - this.heightOfElement - this.specialHeight,
                    behavior: "smooth",
                })
            }
        })

    }
}