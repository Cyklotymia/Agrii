export default class GeneratePopup {
    contructor(configList) {
        this.configList = configList;
        console.log(configList);
        this.container = document.querySelector(`.${this.configList.ulClass}`)
        this.GetInfo()
    }
    createElement = (elementTag, elementClass, insideElements = null, /*insideElementsClass = null, text = null,*/ sublist = null) => {
        const parentElement = document.createElement(elementTag)
        parentElement.classList.add(elementClass)
        console.log(sublist.length)
        if (sublist.sublistKey && sublist.class && sublist.textContent) {
            parentElement.dataset.sublist = sublist.sublistKey
            this.configureSublist(sublist.sublistKey, sublist.class, sublist.textContent)
            //console.log(parentElement);
            parentElement.addEventListener("click", (e) => {
                this.showSublist(e)
            })
        }
        if (insideElements.length) {
            insideElements.forEach((insideElementConfig) => {

                let insideElement = document.createElement(insideElementConfig.tag)
                insideElement.classList.add(insideElementConfig.class)
                insideElement.textContent = insideElementConfig.textContent ?? ''
                if(insideElement.tag === 'a' &&  insideElement.href){
                    insideElement.href = insideElement.href
                }
                insideElement.textContent = insideElementConfig.textContent ?? ''

                parentElement.appendChild(insideElement)
            })

        }
        this.container.appendChild(parentElement)

    }
    GetInfo = () => {

        this.configList.elements.forEach((configElements, index) => {
            let insideElements = []
            let insideElementsClass = []
            let text = []
            let classOfSublist = null

            // configElements.inside.forEach(insideElement => {

            //     insideElements.push(insideElement.tag)

            //     insideElementsClass.push(insideElement.class)

            //     text.push(insideElement.textContent)
            

            // })
            if (configElements.makeSub) {
                // const classOfIndividualSublist=`${configElements.makeSub.class}--${text[0]}`

                classOfSublist = configElements.makeSub.class


            }
            // this.configureSublist(classOfSublist, text, index)
            this.createElement(configElements.tag, configElements.itemClass, configElements.inside, configElements.makeSub ?? null)

            // this.addListenersForElements(itemClass, index)

        });



    }
    configureSublist = ( dataKey, classOfSublist = null, text = null) => {

        if (!classOfSublist) {
            return
        }


        const sublist = document.querySelector(`[data-sublist=${dataKey}]`)
        const elementAboveList = sublist.querySelector(".js__subpopup-text")
        if( elementAboveList){
            elementAboveList.textContent = text
        }
    }


    showSublist = (e) => {
        const categoryToOpen = e.target.closest("[data-sublist]")
        if(categoryToOpen){
            let connectedElements = document.querySelectorAll(`[data-sublist=${categoryToOpen.dataset.sublist}]`)
            connectedElements.forEach(element=>{
                element.classList.add("active") // od razu mowie ze daje i tu i tu activ nie dlatego ze jestem zjebana tylko dlatego, ze przy kliku ma jeszcze li kolor zmieniac na chwile na niebieski ale jeszcze tej klasy w css nie dodalam
            })
        }
        

        

    }

}