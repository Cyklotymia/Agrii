export default class GeneratePopup {
    contructor(configList) {
        this.configList = configList;
        this.container = document.querySelector(`.${this.configList.ulClass}`)
       
        this.GetInfo()
    }
    createElement = (elementTag, elementClass, insideElements = null, insideElementsClass = null, text= null) => {
        const element = document.createElement(elementTag)
        element.classList.add(elementClass)
        
        if (insideElements) {
            insideElements.forEach((e, index) => {
                
                let insideElement = document.createElement(e)
                insideElement.classList.add(insideElementsClass[index])
                element.appendChild(insideElement)
                if(text[index]){
                    
                    insideElement.textContent=text[index]
                }
            })
            
        }
        this.container.appendChild(element)
        
    }
    GetInfo = () => {

        this.configList.elements.forEach((configElements) => {
            let insideElements = []
            let insideElementsClass = []
            let text=[]
            configElements.inside.forEach(insideElement => {

                insideElements.push(insideElement.tag)
               
                insideElementsClass.push(insideElement.class)
                
                text.push(insideElement.textContent)


            })
            
           
            this.createElement(configElements.tag, configElements.itemClass, insideElements, insideElementsClass,text)

        });


    }
    
}