const sliderVariables = {
    rootClass: "slider", // klasa sekcji w której jest slider żeby nie szukać w dokumencie
    time: 8000, // co ile ma się zmieniać slajd
    dots: { // kropki do zmieniania slajdów
        flag:true, // flaga - czy w ogóle chcesz żeby kropki się generowały
        containerClass: "slider__dots-container", // klasa kontenera do którego będą dodawane kropki
        dotClass: "slider__dot", // klasa która będzie dodawana do stworzonej kropki
    },
    arrows: { // strzalki do zmieniania slajdów
        addActive:false, // czy ma po wjechaniu myszką na sekcje dodawać do strzałek klase active
        leftClass: "js__arrow--left", // klasa lewej strzalki
        rightClass: "js__arrow--right" // klasa prawej strzalki

    },
    sliders: { // slajdery
        imgChangeInMinWidth: 770, // przy jakiej szerokości ma się zmieniać obrazek z małego na duży
        slidersImagesDesc: ["slider-desc-0.png", "slider-desc-1.jpg", "slider-desc-2.jpg", "slider-desc-3.jpg"], // tablica z obrazkami na descop
        slidersImagesMob: ["slider-desc-0.png", "slider-mob-1.jpg", "slider-mob-2.jpg", "slider-mob-3.jpg"], // tablica z obrazkami na mobile
        slideClass: "js__slide", // klasa pojedynczego slajda
        parametersOfText: { // info o tekście w sliderze

            textClass: "js__slide-text", // klasa dla contenera textu w slajdzie
            headerClass: "slide__header", //klasa nagłówka w slajdzie
            descriptionClass: "slide__text", // klasa zwykłego tekstu w slajdzie
            otherClass: "", // klasa dla jeszcze jakiegoś elementu jakby ktoś chciał
            textContent: [{ // szczegółowsze info
                    flag: true, // czy ma być wgl jakiś tekst w sliderze
                    headerTag: "h2", // tag dla headera
                    descriptionTag: "p", // tak dla tekstu "zwykłego"
                    otherTag: "", // tak dla czegoś innego jak chcemy
                    headerText: "Poznaj rolnictwo przyszłości RHIZA", // tekst co ma być w headerze
                    descriptionText: "Wyobraź sobie, że możesz podejmować najlepsze decyzje w każdej kwestii dotyczącej Twoich pól", // tekst co ma być w zwykłym tekscie
                    otherText: "" // tekst co ma być w jakimś elemencie innym
                }, 
                { // tu to samo w zależności od ilości slidów ogólnie metoda już nie wchodzi jak jest samo false, a jak jest true to sprawdza czy chcemy np dać sam header albo sam zwykły tekst i wtedy to dodaje wiec jak chcemy sam heder to trzeba dać flage true a potem wpisać konkrety w header a reszte zostawić tak jak jest
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

export default sliderVariables // export to wiadomo