export default class AddActiveMap{
    contructor(rootClass){
       this.section=document.querySelector(`.${rootClass}`)
       this.map=this.section.querySelector(".js__map")
       console.log(this.map);
       this.Listeners()
    }
    Listeners=()=>{
        this.map.addEventListener("click",(e)=>{
            this.showPopup(e)
        })
    }

    showPopup=(e)=>{
        
        let areaOfMap =e.target.closest(".js__mapArea");
        if (!areaOfMap) {
            return
        }
        areaOfMap.classList.forEach(classOfArea=>{
            
            let popupToShow =this.section.querySelector(`[data-map=${classOfArea}]`)
            if (popupToShow) {
                this.section.querySelectorAll(`[data-map]`).forEach(popup=>{
                    popup.classList.remove("active")
                })
                popupToShow.classList.add("active");
            }
            
        })
       
    }
}

