export default class RollMenu {
    contructor(rootClass, classOfElementToListen,classOfElementToCount,classOfElementToShow) {
        this.section = document.querySelector(`.${rootClass}`)
        this.elementsToListen = this.section.querySelectorAll(`.${classOfElementToListen}`)
        this.classOfElementToCount=classOfElementToCount
        this.classOfElementToShow=classOfElementToShow
        

        this.addListneres()

    }
    addListneres = () => {
        this.elementsToListen.forEach(elementToListen => {
            elementToListen.addEventListener("click", (e) => {
                this.count(e)
                this.addActive(e)
            })
        })
        window.addEventListener('resize',()=>{
            this.section.querySelectorAll(`.${this.classOfElementToShow}`).forEach(element=>{
                element.style.height=0;
                element.style.opacity=0;
            })
            this.section.querySelectorAll(".js__addActive").forEach(element=>{
                element.classList.remove("active")
            })
        })
    }


    count = (e) => {
        
        const searchInElement =e.target.closest(".js__search-in")
        const arrOfElementsToCount= searchInElement.querySelectorAll(`.${this.classOfElementToCount}`)
        
       
        let sumOfHeight=0
        arrOfElementsToCount.forEach(elementToCount=>{
            sumOfHeight+=elementToCount.offsetHeight;
            console.log(sumOfHeight);
           
        })
        this.addStyles(sumOfHeight,searchInElement,e)
    }

    addStyles=(sumOfHeight,searchInElement,e)=>{
        
       
        const itemToShow =searchInElement.querySelector(`.${this.classOfElementToShow}`)
        itemToShow.style.opacity="1"
        itemToShow.style.height=`${sumOfHeight}px`
        
        if (e.target.closest(".js__addActive").classList.contains("active")) {
            itemToShow.style.opacity="0"
        itemToShow.style.height=`0px`
        }
        
        

    }

    addActive=(e)=>{
        e.target.closest(".js__addActive").classList.toggle("active")
    }
}