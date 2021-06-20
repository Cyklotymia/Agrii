export default class Hamburger {
  contructor(section, elementsArr, elementClass, iconClass) {
    this.section = document.querySelector(`.${section}`);
    this.hamburger = this.section.querySelector(".hamburger");
    this.hambPopup = this.section.querySelector(".js__popup");
    this.hambList = this.hambPopup.querySelector(".js__popup-list");

    this.elementsArr = elementsArr;

    this.generatePopup(elementClass, iconClass);
    this.addListeners();





  }
  addListeners() {
    this.hamburger.addEventListener("click", () => {
      this.hamburger.classList.toggle("active");
      this.hambPopup.classList.toggle("active");
    })

  }
  generateElement(element) {
    return document.createElement(element)
  }
  generatePopup(elementClass, iconClass) {
    this.elementsArr.forEach(element => {
      const li = this.generateElement("li");
      const span = this.generateElement("span")
      const div = this.generateElement("div");
      const icon = this.generateElement("i");
      li.classList.add(elementClass);
      span.classList.add(`${elementClass}-text`);
      span.textContent = element
      div.classList.add(`${elementClass}-icon`);
      icon.classList.add(iconClass);
      div.appendChild(icon);
      li.appendChild(span);
      li.appendChild(div);
      this.hambList.appendChild(li);


    })

  }



}