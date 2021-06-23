export default class GeneratePopup {
    contructor(configList) {
        this.configList = configList;
        
        this.container = document.querySelector(`.${this.configList.ulClass}`)
        this.GetInfo()
    }
    createElement = (elementTag, elementClass, insideElements = null,sublist = null) => {
        const parentElement = document.createElement(elementTag)
        parentElement.classList.add(elementClass)
        
        if (sublist.sublistKey && sublist.class && sublist.textContent) {
            parentElement.dataset.sublist = sublist.sublistKey
            this.configureSublist(sublist.sublistKey, sublist.class, sublist.textContent)
            
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

        this.configList.elements.forEach((configElements) => {
            this.createElement(configElements.tag, configElements.itemClass, configElements.inside, configElements.makeSub ?? null)
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
                element.classList.add("active") 
            })
        }
        

        

    }

}