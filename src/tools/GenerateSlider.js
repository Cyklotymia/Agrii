import AnimateSlider from './AnimateSlider' // tu pobiera inna klase z której korzysta bo rozdzieliłam na 2 klasy pierwsza to ta która generuje slider a 2ga robi mu animacje

export default class GenerateSlider {
    contructor(sliderConfig) { // pobiera sam plik na którym pracuje cała klasa
        this.sliderConfig = sliderConfig; // przypisuje do thisa zeby kazda funkcja mogla sobie z niego korzystać bez przekazywania
        this.section = document.querySelector(`.${sliderConfig.rootClass}`); // ustalam sekcje na której pracuje 
        this.allSlides = this.section.querySelectorAll(`.${this.sliderConfig.sliders.slideClass}`); // pobiera wygenerowane slidery
        this.widthOfWindow = 0; // deklaracja szerokości okna ( zeby go potem zmieniać )
        this.imgs=null; // deklaracja obrazków których będzie używać ( będą się zmieniać przy zmianie szerokości )
        this.textConteners=this.section.querySelectorAll(`.${this.sliderConfig.sliders.parametersOfText.textClass}`);//pobiera wszystkie kontenery na tekst
        this.reportWidth(); // ta funkcja odpala się teraz i na evencie 'resize' ustala jaka jest szerokość okna
        this.addListeners(); // ta funkcja dodaje listenery tam gdzie trzeba
        this.elementsInSlider(); // ta funckja ustala co chcemy generować w sliderze i przekazuje info do innej funkcji
        this.generateDots(); // funkcja generuje kropeczki
        const mainSlider= new AnimateSlider(); // tu tworze nowy obiekt na podstawie klasy która to klasa będzie animowala cały slider
        mainSlider.contructor(this.sliderConfig); // tu przekazuje sobie obiekt z info

    }
    reportWidth = () => {
        this.widthOfWindow = window.innerWidth; // usata szerokość okna i przyposuje do zmiennej
        this.choosePhotos(); // ta funkcja wybiera jakie zdjęcia będzie wyświetlał slider - duże czy małe
        this.loadPhotos(); // ta funkcja przypisuje do backgroud-image zdjęcie 
    };

    addListeners = () => {
        window.addEventListener('resize', this.reportWidth); // listener na zmiane szerokości okna 

    };
    choosePhotos = () => {
        this.imgs = this.sliderConfig.sliders.imgChangeInMinWidth<=this.widthOfWindow?this.sliderConfig.sliders.slidersImagesDesc:this.sliderConfig.sliders.slidersImagesMob // skrócony if który przypisuje do zmiennej jakie mają być zdjęcia odpalane
    };

    loadPhotos=()=>{
        this.allSlides.forEach((slide,index)=>{ // dla każdego slidera
            let photo=this.imgs[index]; // wybierz zdjęcie na podstawie tablocy zdjęc i indexu pochodzącego z iteracji tablicy zawierającej wszystkie slajdy
            slide.style.backgroundImage = `url('images/${photo}')`; // przypisanie liniowo obrazka do slajdu
        });
    };


    elementsInSlider=()=>{
        this.sliderConfig.sliders.parametersOfText.textContent.forEach((text,index)=>{ //przeliteruj tablice gdzie są zawarte informacje na podstawie których dowiesz się czy warto się męczyć i tworzyć tekst w slajderach
            if (text.flag) { // najpierw zobacz czy wgl ma być w sliderze cokolwiek
                let headerTag=text.headerTag??text.headerTag; // jak tak to pobierz tag do headera jak jest
                let descriptionTag=text.descriptionTag??text.descriptionTag; // jak tak to pobierz tag do tekstu
                let otherTag=text.otherTag??text.otherTag; // jak tak to pobierz tag do czegoś tam
                
               
               
                if (headerTag) { // jeżeli jest header tag to wtedy
                    let textItem=text.headerText??text.headerText; // przypisz do zmiennej tekst jak ma być
                    let classItem=this.sliderConfig.sliders.parametersOfText.headerClass; // przypisz klase 
                   this.createElements(headerTag, textItem,classItem,index); // stworz ten element
                }

                /// tu to samo ale z innymi elementami to już nie będę opisywać
                
                if (descriptionTag) {
                    let textItem=text.descriptionText??text.descriptionText;
                    let classItem=this.sliderConfig.sliders.parametersOfText.descriptionClass;
                   this.createElements(descriptionTag, textItem,classItem,index);
                }
                if (otherTag) {
                    let textItem=text.otherText??text.otherText;
                    let classItem=this.sliderConfig.sliders.parametersOfText.otherClass;
                   this.createElements(otherTag, textItem,classItem,index);
                };
            };
        });
    };
    createElements(tagItem,textContent,classItem,index){ // tworzy elementy na podstawie przekazanych danych
        let element=document.createElement(tagItem); // tworzy item z tagu
        element.textContent=`${textContent}`; // daje mu tekst
        element.classList.add(`${classItem}`);// daje mu klase
        this.textConteners[index].appendChild(element); // dodaje do kontenera na tekst

    };
    generateDots=()=>{ // generuje kropki
        if (!this.sliderConfig.dots.flag) { // jak flaga nie jest true to wgl nie idz dalej
            return;
        };
        const dotsContainer=this.section.querySelector(`.${this.sliderConfig.dots.containerClass}`); // pobierz se kontener na kropki
        let number=0; // zmienna dla datyset
        this.allSlides.forEach(slide=>{ // weź wszystkie slajdy i
            let dot=document.createElement("div"); // na każdy slajd zrób kropkę
            dot.classList.add(`${this.sliderConfig.dots.dotClass}`); // każdej kropce dodaj klasę dla kropki
            dot.dataset.number=number;// ustaw kropce dateset
            number++;// powiększ dateset o 1 ( zeby każda była inna i wskazywała index )
            dotsContainer.appendChild(dot); // wpierdol kropki do do kontenera
            
        });
        
    };
};
// koniec generowania






