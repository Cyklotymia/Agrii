const sliderVariables = {
    rootClass: "slider",
    time: 8000,
    dots: {
        flag:true,
        containerClass: "slider__dots-container",
        dotClass: "slider__dot",
        dotClassJS: "js__slider-dot"
    },
    arrows: {
        addActive:false,
        leftClass: "js__arrow--left",
        rightClass: "js__arrow--right"

    },
    sliders: {
        imgChangeInMinWidth: 770,
        slidersImagesDesc: ["slider-desc-0.png", "slider-desc-1.jpg", "slider-desc-2.jpg", "slider-desc-3.jpg"],
        slidersImagesMob: ["slider-desc-0.png", "slider-mob-1.jpg", "slider-mob-2.jpg", "slider-mob-3.jpg"],
        slideClass: "js__slide",
        parametersOfText: {

            textClass: "js__slide-text",
            headerClass: "slide__header",
            descriptionClass: "slide__text",
            otherClass: "",
            textContent: [{
                    flag: true,
                    headerTag: "h2",
                    descriptionTag: "p",
                    otherTag: "",
                    headerText: "Poznaj rolnictwo przyszłości RHIZA",
                    descriptionText: "Wyobraź sobie, że możesz podejmować najlepsze decyzje w każdej kwestii dotyczącej Twoich pól",
                    otherText: ""
                },
                {
                    flag: false,
                    headerTag: "",
                    descriptionTag: "",
                    otherTag: "",
                    headerText: "",
                    descriptionText: "",
                    otherText: ""
                },
                {
                    flag: false,
                    headerTag: "",
                    descriptionTag: "",
                    otherTag: "",
                    headerText: "",
                    descriptionText: "",
                    otherText: ""
                },
                {
                    flag: false,
                    headerTag: "",
                    descriptionTag: "",
                    otherTag: "",
                    headerText: "",
                    descriptionText: "",
                    otherText: ""
                },

            ],


        },


    }


}

export default sliderVariables