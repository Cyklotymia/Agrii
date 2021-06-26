import AnimateSlider from './AnimateSlider'

export default class GenerateSlider {
    contructor(sliderConfig) {
        this.sliderConfig = sliderConfig;
        this.section = document.querySelector(`.${sliderConfig.rootClass}`)
        this.allSlides = this.section.querySelectorAll(`.${this.sliderConfig.sliders.slideClass}`)
        this.widthOfWindow = 0
        this.imgs=null
        this.textConteners=this.section.querySelectorAll(`.${this.sliderConfig.sliders.parametersOfText.textClass}`)
        this.reportWidth()
        this.addListeners()
        this.elementsInSlider()
        this.generateDots()
        const mainSlider= new AnimateSlider()
        mainSlider.contructor(this.sliderConfig)

    }
    reportWidth = () => {
        this.widthOfWindow = window.innerWidth;
        this.choosePhotos()
        this.loadPhotos()
    }

    addListeners = () => {
        window.addEventListener('resize', this.reportWidth)

    }
    choosePhotos = () => {
        this.imgs = this.sliderConfig.sliders.imgChangeInMinWidth<=this.widthOfWindow?this.sliderConfig.sliders.slidersImagesDesc:this.sliderConfig.sliders.slidersImagesMob
        // console.log(this.imgs);

    }

    loadPhotos=()=>{
        this.allSlides.forEach((slide,index)=>{
            let photo=this.imgs[index]
            slide.style.backgroundImage = `url('images/${photo}')`;
        })
    }


    elementsInSlider=()=>{
        this.sliderConfig.sliders.parametersOfText.textContent.forEach((text,index)=>{
            if (text.flag) {
                let headerTag=text.headerTag??text.headerTag
                let descriptionTag=text.descriptionTag??text.descriptionTag
                let otherTag=text.otherTag??text.otherTag
                
               
               
                if (headerTag) {
                    let textItem=text.headerText??text.headerText;
                    let classItem=this.sliderConfig.sliders.parametersOfText.headerClass
                   this.createElements(headerTag, textItem,classItem,index) 
                }
                
                if (descriptionTag) {
                    let textItem=text.descriptionText??text.descriptionText;
                    let classItem=this.sliderConfig.sliders.parametersOfText.descriptionClass
                   this.createElements(descriptionTag, textItem,classItem,index) 
                }
                if (otherTag) {
                    let textItem=text.otherText??text.otherText;
                    let classItem=this.sliderConfig.sliders.parametersOfText.otherClass
                   this.createElements(otherTag, textItem,classItem,index) 
                }  
            }
        })
    }
    createElements(tagItem,textContent,classItem,index){
        let element=document.createElement(tagItem)
        element.textContent=`${textContent}`
        element.classList.add(`${classItem}`)
        this.textConteners[index].appendChild(element)
        
       
    }
    generateDots=()=>{
        const dotsContainer=this.section.querySelector(`.${this.sliderConfig.dots.containerClass}`)
        this.allSlides.forEach(slide=>{
            let dot=document.createElement("div")
            dot.classList.add(`${this.sliderConfig.dots.dotClass}`)
            dotsContainer.appendChild(dot)
            
        })
        
    }
}






