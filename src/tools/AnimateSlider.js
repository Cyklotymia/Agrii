// tu pojebane
export default class AnimateSlider {
    contructor(sliderConfig) { // tez se przekazuje wiadomo co
        this.sliderConfig = sliderConfig // przypisanko
        this.section = document.querySelector(`.${sliderConfig.rootClass}`); // znów pobieram sekcje ( a robie to bo nie zawsze będę generowanie slidera chciała - pewnie nigdy więcej bo sie długo ładuje )
        this.timeForChange = this.sliderConfig.time; // pobieram se czas co ile ma się slajd zmieniać
        this.allSlides = this.section.querySelectorAll(`.${this.sliderConfig.sliders.slideClass}`);// pobieram se wszystkie slajdy - znowu
        this.indexOfVisibleSlide = 0;// jaki slajd ma być widoczny od początku
        this.touchStart=null; // zmienna z początku dotyku ( później do przesuwania slajdów na macanie )
        this.touchMove=null; // to samo co wyżej ale na ruszanie
        this.leftArrow = this.section.querySelector(`.${this.sliderConfig.arrows.leftClass}`); // przypisuje se lewą strzałkę
        this.rightArrow = this.section.querySelector(`.${this.sliderConfig.arrows.rightClass}`); // przypisuje se prawą strzałkę 
        // tera myśle ze troche przypal bo co jak wgl nie będę chciała strzalek ale już chuj
        this.dots = this.section.querySelectorAll(`.${this.sliderConfig.dots.dotClass}`); // pobiera wszystkie kropki
        this.changeLink()

        this.addListeners(); // funkcja dodająca listenery
        this.showSlide(); // dodaje active do slajda
        this.showDot(); // pokazuje kropki
        this.setIntervals(); // nadaje jebany interval
        


    }
    arrowsActive= ()=>{ // dodaje active do strzałek ( odpala się na najechanie myszką na sekcje )
        if (this.sliderConfig.arrows.addActive) { // jak flaga pozwala to dodaje active
            this.rightArrow.classList.add("active"); // dodaje
            this.leftArrow.classList.add("active"); // dodaje
        };
    };
    arrowsNotActive=()=>{ // zabiera active do strzałek ( odpala się jak masz myszkę nie na sekcji )
        if (this.sliderConfig.arrows.addActive) { // sprawdza znów czy wgl warto
            this.rightArrow.classList.remove("active"); // zabiera active
            this.leftArrow.classList.remove("active"); // zabiera active
        };
    };
    controlIndex = () => { // kontroler indexu 
        this.indexOfVisibleSlide = this.indexOfVisibleSlide > this.allSlides.length - 1 ? 0 : this.indexOfVisibleSlide; // jak jest zero i ktos chce mniej to nie może i jest na max 
        this.indexOfVisibleSlide = this.indexOfVisibleSlide < 0 ? this.allSlides.length - 1 : this.indexOfVisibleSlide;// jak jest za dużo to ustawia na 0

    };
    changeIndex = () => { // podniesienie indexu o 1
        this.indexOfVisibleSlide++;// to zmienia index auromatycznie
        this.controlIndex(); // sprawdza index

    }
    setIntervals = () => { // ustawia intervały ale jest tylko jeden i tak 
        this.intervalOfSlider = setInterval(() => { // interval
            this.changeIndex(); // zmienia index o 1 wiecej
            this.showSlide(); // ustawia slajda takiego jak index mu kaze
        }, this.timeForChange); // czas co ile ma się zmieniać
    };
    showSlide = () => { // zmienia slajda
        this.allSlides.forEach(slide => { // najpierw zabiera wszystkim slidom active
            slide.classList.remove("active"); // tutaj
        });
        this.allSlides[this.indexOfVisibleSlide].classList.add("active") // dodaje active temu któremu każe mu index
        this.showDot(); // i zmienia od razu też kropke która się świeci
        this.changeLink()
    }

    smallerIndex = () => { // zmniejsza index o 1
        this.indexOfVisibleSlide--; // zmienjszanko
        this.controlIndex(); // sprawdza index
        this.showSlide();// pokazuje slajda
    }
    stopMove = () => { // zatrzymanie jebanego intervala
        clearInterval(this.intervalOfSlider); // zatrzymanko
    }

    showDot = () => { // pokazuje kropsy
        if (!this.sliderConfig.dots.flag) { // jak wgl maja się nie generować kropsy to olej
            return;
        }
        this.dots.forEach(dot => { // ale jak mają to odbierz wszystkim kropka active
            dot.classList.remove("active"); // zabieranko
        });
        this.dots[this.indexOfVisibleSlide].classList.add("active"); // dodaj kropce active zgodnie z indexem 
    };
    controlIndexByDots = (e) => { // odczytuje dateset kliknietej kropki i odpala slajda jakiego chce
        this.indexOfVisibleSlide = e.target.dataset.number; // przypisuje po dacie index
        this.showSlide() // pokazuje slajda
    };
    handleTouchStart=(e)=>{ // to wiadomo gdzie sie zaczyna dotykanie
        this.touchStart = e.touches[0].screenX; // przypisanie gdzie się zaczyna dotykanie
        this.stopMove(); // zatrzymuje gówno
    };
    handleTouchMove=(e)=>{ // odczytuje gdzie se posunąłeś paluch
        this.touchMove = e.touches[0].screenX; // przypisanko
    };
    changeSlideByTouch=()=>{ // robi jak dotykasz zmienianie
        this.indexOfVisibleSlide=this.touchStart>this.touchMove?this.indexOfVisibleSlide+=1:this.indexOfVisibleSlide-=1; // ustala index
        this.controlIndex(); // kontrola
        this.showSlide(); // pokazuje slidera
        this.setIntervals(); // odpala znów interval bo jak zaczynasz dotykać to się wyłącza
    };
    changeLink=()=>{
        console.log(this.sliderConfig.links);
        if (!this.sliderConfig.links.flag) {
            return
        }
        const linkContener=this.section.querySelector(`.${this.sliderConfig.links.classOfLinkContainer}`)
        
        let link=this.sliderConfig.links.arrOfLinks[this.indexOfVisibleSlide]
        
        linkContener.setAttribute("href", `${link}`) 
        
       
    }
    addListeners = () => { // listenery
        this.section.addEventListener("mouseenter", () => { // jak wjezdzasz myszka na sekcje
            this.stopMove(); // wylacz syf
            this.arrowsActive(); // i wlacz strzalki
        });
        this.section.addEventListener("mouseleave", () => { // jak nie masz myszki na sekcji
            this.setIntervals() ;// ustaw interval
            this.arrowsNotActive(); // wylacz strzalki
        });
        this.leftArrow.addEventListener("click", () => { // jak klikniesz w lewa strzalke
            this.smallerIndex(); // zmien index na mniejszy
        });
        this.rightArrow.addEventListener("click", () => { // jak w prawą strzałkę
            this.changeIndex();  // zmien index na wyzej
            this.showSlide(); // pokaż slajda
        });
        this.dots.forEach(dot => { // dodaj listenera do każdej kropki
            dot.addEventListener("click", (e) => {
                this.controlIndexByDots(e); // funkcja na kropki co zmienia index i odpala inne funkcje dobra wiesz o co chodzi
            });
        });
        this.section.addEventListener("touchstart", (e) => { // pobiera dotykanie zaczęcie
            this.handleTouchStart(e); // odpala funkcje co przypisuje wartosc
        }, false);
        this.section.addEventListener("touchmove", (e) => {// to samo co wyżej ale na ruch
            this.handleTouchMove(e); // przypisanie w funkcji
        }, false);
        this.section.addEventListener("touchend", () => { // jak puscisz ruszanie palcem
            this.changeSlideByTouch(); // to zmienia se slajda na podstawie danych z wyzszych listenerow
        });

    };

};

//K O N I E C C C C C  C C C C C C