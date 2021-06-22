const hambList = {
    section: "header",
    ulClass: "hamburger__popup-list",
    popUpClass:"hamburger__popup",
    elements: [
        {
            tag: "li",
            itemClass: "hamburger__popup-element",
            makeSub: {
                flag: "true",
                class: "hamburger__popup--sub",
            },
            inside: [{
                    tag: "span",
                    class: "hamburger__popup-element-text",
                    textContent: "Produkty"
                },
                {
                    tag: "i",
                    class: "icon-icon_05",
                    flag: true

                }
            ],

        },
        {
            tag: "li",
            itemClass: "hamburger__popup-element",
            makeSub: {
                flag: "true",
                class: "hamburger__popup--sub",
            },
            inside: [{
                    tag: "span",
                    class: "hamburger__popup-element-text",
                    textContent: "Firma"
                },
                {
                    tag: "i",
                    class: "icon-icon_05",
                    flag: true

                }
            ],
        },
        {
            tag: "li",
            itemClass: "hamburger__popup-element",
            makeSub: {
                flag: "true",
                class: "hamburger__popup--sub",
            },
            inside: [{
                    tag: "span",
                    class: "hamburger__popup-element-text",
                    textContent: "Nasze marki"
                },
                {
                    tag: "i",
                    class: "icon-icon_05",
                    flag: true

                }
            ],



        }
    ],


}


export default hambList