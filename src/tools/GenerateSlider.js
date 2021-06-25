

export default class GenerateSlider {
    contructor(sliderConfig) {
       this.sliderConfig=sliderConfig;
       this.section=document.querySelector(`.${sliderConfig.rootClass}`)
       this.slide=this.section.querySelector(`.${this.sliderConfig.sliders.slideClass}`)
    //    console.log(this.slide);
       this.widthOfWindow=window.innerWidth;
       this.arrOfPhotos=null
       this.changeArrOfPhoto()
    
    //   console.log(this.sliderConfig.sliders.slideClass);

       this.addListeners()
       this.indexOfVisibleSlide=0
       this.startInterval()
       
    }
    reportWidth=()=>{
        this.widthOfWindow=window.innerWidth;
        this.changeArrOfPhoto()

    }
    changeArrOfPhoto =()=>{
       this.arrOfPhotos=this.widthOfWindow>=770?this.sliderConfig.sliders.slidersImagesDesc:this.sliderConfig.sliders.slidersImagesMob
        // console.log(this.arrOfPhotos);
    }
    startInterval=()=>{
        const intervalOfSlider= setInterval(this.changeIndex,3000)
        
    }
    changeIndex=()=>{
        this.indexOfVisibleSlide++
        this.controlIndex()
        
       
    }
    controlIndex=()=>{
        this.indexOfVisibleSlide=this.indexOfVisibleSlide>this.arrOfPhotos.length-1?0:this.indexOfVisibleSlide
        this.indexOfVisibleSlide=this.indexOfVisibleSlide<0?this.arrOfPhotos.length-1:this.indexOfVisibleSlide
this.changeSlide()
    }
    changeSlide=()=>{
        let visibleSlidePhoto=this.arrOfPhotos[this.indexOfVisibleSlide]
       this.slide.style.backgroundImage = `url('images/${visibleSlidePhoto}')`; 
    
    }


    addListeners=()=>{
        window.addEventListener('resize', this.reportWidth)

    }
}