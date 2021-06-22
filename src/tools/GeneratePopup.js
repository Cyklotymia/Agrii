export default class GeneratePopup {
    contructor(configList) {
        this.configList = configList;
        console.log(configList);
        this.container = document.querySelector(`.${this.configList.ulClass}`)
        this.GetInfo()
    }
    createElement = (elementTag, elementClass, insideElements = null, insideElementsClass = null, text = null, classOfSublist = null) => {
        const element = document.createElement(elementTag)
        element.classList.add(elementClass)
        if (classOfSublist) {
            element.addEventListener("click", (e) => {
                this.showSublist(e)
            })
        }
        if (insideElements) {
            insideElements.forEach((e, index) => {

                let insideElement = document.createElement(e)
                insideElement.classList.add(insideElementsClass[index])
                element.appendChild(insideElement)
                if (text[index]) {

                    insideElement.textContent = text[index]
                    if (text[index].includes(" ")) {
                        let repairString = text[index].replace(" ", "_")
                        element.dataset.sublist = repairString
                    } else {
                        element.dataset.sublist = text[index]
                    }

                }
            })

        }
        this.container.appendChild(element)

    }
    GetInfo = () => {

        this.configList.elements.forEach((configElements, index) => {
            let insideElements = []
            let insideElementsClass = []
            let text = []
            let classOfSublist = null

            configElements.inside.forEach(insideElement => {

                insideElements.push(insideElement.tag)

                insideElementsClass.push(insideElement.class)

                text.push(insideElement.textContent)


            })
            if (configElements.makeSub) {
                // const classOfIndividualSublist=`${configElements.makeSub.class}--${text[0]}`

                classOfSublist = configElements.makeSub.class


            }
            this.configureSublist(classOfSublist, text, index)
            this.createElement(configElements.tag, configElements.itemClass, insideElements, insideElementsClass, text, classOfSublist)

            // this.addListenersForElements(itemClass, index)

        });



    }
    configureSublist = (classOfSublist = null, textArr = null, index) => {

        if (!classOfSublist) {
            return
        }


        const sublistArr = document.querySelectorAll(`.${classOfSublist}`)
        const elementAboveList = document.querySelectorAll(".js__subpopup-text")
        textArr.forEach(text => {
            if (text) {
                if (text.includes(" ")) {
                    
                    let repairString = text.replace(" ", "_")
                    
                    sublistArr[index].dataset.sublist = repairString
                   
                } else {
                    sublistArr[index].dataset.sublist = text
                }
                
                if (elementAboveList.length) {
                    elementAboveList[index].textContent = text
                   
                }
            }
        })



    }


    showSublist = (e) => {
        const categoryToOpen = e.target.closest("[data-sublist]")

        let connectedElements = document.querySelectorAll(`[data-sublist=${categoryToOpen.dataset.sublist}]`)
        connectedElements.forEach(element=>{
            element.classList.add("active") // od razu mowie ze daje i tu i tu activ nie dlatego ze jestem zjebana tylko dlatego, ze przy kliku ma jeszcze li kolor zmieniac na chwile na niebieski ale jeszcze tej klasy w css nie dodalam
        })

        

    }

}