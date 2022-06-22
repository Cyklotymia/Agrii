export default class ShowInput {
    contruktor(rootClass){
        this.section=document.querySelector(`.${rootClass}`)
        
        this.listeners()
        // console.log(document.querySelector(".js-Dropdown-title").textContent);
    }
    listeners=()=>{
        this.section.querySelector(".js-Dropdown-list").addEventListener("click",(e)=>{this.showAnotherInput(e)})
    }
    showAnotherInput=(e)=>{
        this.section.querySelectorAll(".js__showSelector").forEach(input=>{
            input.classList.remove("active")
        })
        let nameOfInputToShow=e.target.textContent
        console.log(nameOfInputToShow);
        if (nameOfInputToShow==="małopolskie" || nameOfInputToShow==="wielkopolskie" ) {
            this.section.querySelector(`[data-disc=${nameOfInputToShow}]`).classList.add("active")
            
            
        }
    }
}