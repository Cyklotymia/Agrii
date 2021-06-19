import photo from '../images/photo.png';
    export const addPhoto = (tag) => {
        const img = document.createElement('img');
        img.src = photo;
        document.querySelector(tag).appendChild(img)
      }
      
    export default class {
      constructor() {
        this.element = document.createElement('div');
        this.element.style.height = "100px";
        document.body.appendChild(this.element);
      }
      color = "cadetblue";
    
      addBgc(color = this.color) {
        this.element.style.backgroundColor = color;
      }
      showColor = () => {
        console.log(this.element.style.backgroundColor);
      }
    }
    