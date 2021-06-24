export default class DynamicMenu {
    contructor(rootClass, buttonsClass, dataName) {
        this.container = document.querySelector(`.${rootClass}`)
        this.buttonsClass = buttonsClass
        this.buttons = this.container.querySelectorAll(`.${this.buttonsClass}`)
        this.dataName = dataName
        this.arrOfAllElementsWithThisData = this.container.querySelectorAll(`[${dataName}]`)

        this.addListeners()
    }
    addListeners = () => {
        document.addEventListener("click", (e) => {
            if (!e.target.closest(`[${this.dataName}]`)) {
                this.RemoveActive()
            }
        })

        this.buttons.forEach(button => {

            button.addEventListener("click", (e) => {
                const nameOfDataset = e.target.closest(`[${this.dataName}]`).getAttribute(`${this.dataName}`);
                const allElementsWithSameDatasetName = this.container.querySelectorAll(`[${this.dataName}=${nameOfDataset}]`)

                
                if (e.target.closest(`.${this.buttonsClass}`).classList.contains(`active`)) {
                    this.RemoveActive()
                }else{
                    this.RemoveActive()
                   allElementsWithSameDatasetName.forEach(elementWithSameDatasetName => {
                    elementWithSameDatasetName.classList.add("active")

                }) 
                }
               


            })
        })
    }
    RemoveActive = () => {
        this.arrOfAllElementsWithThisData.forEach(elementWithSameData => {
            elementWithSameData.classList.remove("active")
        })
    }

}