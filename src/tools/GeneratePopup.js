export default class GeneratePopup {
    contructor(hambList) {
        this.hambList = hambList;
        this.container = document.querySelector(`.${this.hambList.ulClass}`)
       
        this.GetInfo()
    }
    createElement = (elementTag, elementClass, insideElements = null, insideElementsClass = null, text= null) => {
        let element = document.createElement(elementTag)
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
        this.GenerateList()
    }
    GetInfo = () => {

        this.hambList.elements.forEach((e, index) => {
            let insideElements = []
            let insideElementsClass = []
            let text=[]
            e.inside.forEach(insideElement => {

                insideElements.push(insideElement.tag)
                // console.log(insideElements);
                insideElementsClass.push(insideElement.class)
                // console.log(insideElement.textContent);
                text.push(insideElement.textContent)


            })
            // console.log(insideElements, insideElementsClass);
            console.log(text);
            this.createElement(e.tag, e.itemClass, insideElements, insideElementsClass,text)

        });


    }
    // GenerateList = () => {
    //     // console.log('object');
    // }

}