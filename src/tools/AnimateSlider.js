export default class AnimateSlider {
    contructor(sliderConfig) {
        this.sliderConfig = sliderConfig
        this.section = document.querySelector(`.${sliderConfig.rootClass}`)
        this.timeForChange = this.sliderConfig.time
        this.allSlides = this.section.querySelectorAll(`.${this.sliderConfig.sliders.slideClass}`)
        this.indexOfVisibleSlide = 0
        this.touchStart=null
        this.touchMove=null
        this.leftArrow = this.section.querySelector(`.${this.sliderConfig.arrows.leftClass}`)
        this.rightArrow = this.section.querySelector(`.${this.sliderConfig.arrows.rightClass}`)
        this.dots = this.section.querySelectorAll(`.${this.sliderConfig.dots.dotClass}`)


        this.addListeners()
        this.showSlide()
        this.showDot()
        this.setIntervals()
        


    }
    arrowsActive= ()=>{
        
        if (this.sliderConfig.arrows.addActive) {
            this.rightArrow.classList.add("active")
            this.leftArrow.classList.add("active")
        }
    }
    arrowsNotActive=()=>{
        if (this.sliderConfig.arrows.addActive) {
            this.rightArrow.classList.remove("active")
            this.leftArrow.classList.remove("active")
        }
    }
    controlIndex = () => {
        this.indexOfVisibleSlide = this.indexOfVisibleSlide > this.allSlides.length - 1 ? 0 : this.indexOfVisibleSlide
        this.indexOfVisibleSlide = this.indexOfVisibleSlide < 0 ? this.allSlides.length - 1 : this.indexOfVisibleSlide

    }
    changeIndex = () => {
        this.indexOfVisibleSlide++
        this.controlIndex()

    }
    setIntervals = () => {
        this.intervalOfSlider = setInterval(() => {
            this.changeIndex()
            this.showSlide()
        }, this.timeForChange)
    }
    showSlide = () => {
        this.allSlides.forEach(slide => {
            slide.classList.remove("active")
        })
        this.allSlides[this.indexOfVisibleSlide].classList.add("active")
        this.showDot()
    }

    smallerIndex = () => {
        this.indexOfVisibleSlide--
        this.controlIndex()
        this.showSlide()
    }
    stopMove = () => {
        clearInterval(this.intervalOfSlider)
    }

    showDot = () => {
        if (!this.sliderConfig.dots.flag) {
            return
        }
        this.dots.forEach(dot => {
            dot.classList.remove("active")
        })
        this.dots[this.indexOfVisibleSlide].classList.add("active")
    }
    controlIndexByDots = (e) => {
        this.indexOfVisibleSlide = e.target.dataset.number
        this.showSlide()
    }
    handleTouchStart=(e)=>{
        this.touchStart = e.touches[0].screenX;
        this.stopMove()
    }
    handleTouchMove=(e)=>{
        this.touchMove = e.touches[0].screenX;
    }
    changeSlideByTouch=()=>{
        this.indexOfVisibleSlide=this.touchStart>this.touchMove?this.indexOfVisibleSlide+=1:this.indexOfVisibleSlide-=1
        console.log(this.indexOfVisibleSlide);
        this.controlIndex()
        this.showSlide()
        this.setIntervals()
    }
    addListeners = () => {
        this.section.addEventListener("mouseenter", () => {
            this.stopMove()
            this.arrowsActive()
        })
        this.section.addEventListener("mouseleave", () => {
            this.setIntervals()
            this.arrowsNotActive()
        })
        this.leftArrow.addEventListener("click", () => {
            this.smallerIndex()
        })
        this.rightArrow.addEventListener("click", () => {
            this.changeIndex()
            this.showSlide()
        })
        this.dots.forEach(dot => {
            dot.addEventListener("click", (e) => {
                this.controlIndexByDots(e)
            })
        })
        this.section.addEventListener("touchstart", (e) => {
            this.handleTouchStart(e)
        }, false)
        this.section.addEventListener("touchmove", (e) => {
            this.handleTouchMove(e)
        }, false)
        this.section.addEventListener("touchend", () => {
            this.changeSlideByTouch()
        })

    }

}




// export default class GenerateSlider {
//     contructor(sliderConfig) {
//         this.sliderConfig = sliderConfig;
//         this.section = document.querySelector(`.${sliderConfig.rootClass}`)
//         this.timeForChange = this.sliderConfig.time

//         this.slide = this.section.querySelector(`.${this.sliderConfig.sliders.slideClass}`)
//         //    console.log(this.slide);
//         this.changeInTime = true

//         this.widthOfWindow = window.innerWidth;
//         this.arrOfPhotos = null
//         this.changeArrOfPhoto()
//         this.indexOfVisibleSlide = -1
//         this.changeIndex()
//         this.changePhoto()
//         this.addActive()



//         //   console.log(this.sliderConfig.sliders.slideClass);

//         this.addListeners()
//         this.startInterval()

//     }
//     reportWidth = () => {
//         this.widthOfWindow = window.innerWidth;
//         this.changeArrOfPhoto()
//         this.changePhoto()

//     }
//     changeArrOfPhoto = () => {
//         this.arrOfPhotos = this.widthOfWindow >= 770 ? this.sliderConfig.sliders.slidersImagesDesc : this.sliderConfig.sliders.slidersImagesMob

//     }
//     startInterval = () => {

//         const intervalOfSlider = setInterval(() => {
//             this.changeIndex()
//             this.changePhoto()
//             this.removeActive()
//             this.addActive()

//         }, this.timeForChange)


//     }
//     changeIndex = () => {
//         this.indexOfVisibleSlide++

//         this.controlIndex()


//     }
//     controlIndex = () => {
//         this.indexOfVisibleSlide = this.indexOfVisibleSlide > this.arrOfPhotos.length - 1 ? 0 : this.indexOfVisibleSlide
//         this.indexOfVisibleSlide = this.indexOfVisibleSlide < 0 ? this.arrOfPhotos.length - 1 : this.indexOfVisibleSlide

//     }
//     changePhoto = () => {
//         this.addActive()
//         let visibleSlidePhoto = this.arrOfPhotos[this.indexOfVisibleSlide]
//         this.slide.style.backgroundImage = `url('images/${visibleSlidePhoto}')`;

//     }

//     addActive=()=>{
//       this.slide.classList.add("active")  
//     }
//    removeActive=()=>{
//     this.slide.classList.remove("active")
//    }

//     addListeners = () => {
//         window.addEventListener('resize', this.reportWidth)

//     }
// }