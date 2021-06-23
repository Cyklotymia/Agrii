export default class DynamicMenu {
    contructor(rootClass) {
        this.container = document.querySelector(`.${rootClass}`)
        console.log(this.container);
    }
}