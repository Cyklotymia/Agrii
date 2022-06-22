export default class shopsSmallFarms {
    contructor(rootClass) {
        this.section = document.querySelector(`.${rootClass}`)
        this.filterCheckbox = null
        this.shouldRemove = null
        this.removeCheckedOnInputs()
        this.listeners()

    }
    listeners = () => {
        this.section.querySelector(".js-Dropdown-list").addEventListener("click", (e) => {

            this.showShops(e.target.textContent);
            this.section.querySelector(".js-Dropdown-title").textContent = e.target.textContent
            this.readFilter(e)



        })
        this.section.querySelector(".js__map").addEventListener("click", (e) => {
            this.showShops(e.target.dataset.voivodeship)
            this.section.querySelector(".js-Dropdown-title").textContent = e.target.dataset.voivodeship
            this.readFilter(e)


        })
        this.section.querySelectorAll(".js__check").forEach(input => {
            input.addEventListener("change", (e) => {
                this.shouldRemove = true
                this.readFilter(e, this.shouldRemove)



            })
        })
    }
    showShops = (dataname) => {

        this.section.querySelector(".smallFarms__shops-none").classList.remove("active")
        const allElements = this.section.querySelectorAll("[data-voivodeship]")
        allElements.forEach(element => {
            element.classList.remove("active")
        })
        if (dataname === "-wszystkie-") {
            const allElements = this.section.querySelectorAll("[data-voivodeship]")
            allElements.forEach(element => {
                element.classList.add("active")

            })
            this.section.querySelectorAll("path").forEach(path =>
                path.classList.remove("active"))
        }
        const allElementsWithThisData = this.section.querySelectorAll(`[data-voivodeship="${dataname}"]`)
        allElementsWithThisData.forEach(searchingElement => {
            searchingElement.classList.add("active")
        })
        // if (allElementsWithThisData.length === 1) {
        //     this.section.querySelector(".smallFarms__shops-none").classList.add("active")
        // }


    }

    removeCheckedOnInputs = () => {
        const inputs = this.section.querySelectorAll(".js__check")
        inputs.forEach(input => {
            input.checked = false
        })
    }
    readFilter = (e, flag = null) => {
        if (flag) {
            this.removeCheckedOnInputs()
        }

        const clickedCheckbox = e.target
        clickedCheckbox.checked = true
        this.filterCheckbox = clickedCheckbox.id

        this.filter()


    }
    filter = () => {

        if (this.filterCheckbox === "self") {
            this.showShops(this.section.querySelector(".js-Dropdown-title").textContent)
            this.section.querySelectorAll(`[data-shop="auto"]`).forEach(shop => {
                shop.classList.remove("active")

            })
        } else if (this.filterCheckbox === "auto") {
            this.showShops(this.section.querySelector(".js-Dropdown-title").textContent)
            this.section.querySelectorAll(`[data-shop="self"]`).forEach(shop => {
                shop.classList.remove("active")
            })

        } else if (this.filterCheckbox === "all") {

            this.showShops(this.section.querySelector(".js-Dropdown-title").textContent)

        } else {
            (this.section.querySelectorAll(".js__check").forEach(input => {
                if (input.checked) {
                    this.filterCheckbox = input.id

                    this.filter()
                };
            }));
        }
        // this.showShops(this.section.querySelector(".js-Dropdown-title").textContent)

        this.isEmpty()



    }

    isEmpty = () => {
        const isEmpty = this.section.querySelectorAll(".active").length === 1 ? true : false
        if (isEmpty) {
            this.section.querySelector(".smallFarms__shops-none").classList.add("active")
        }

    }
}