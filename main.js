class Scroller {
    constructor() {
        this.selector = [...document.querySelectorAll('.effect')]
        this.selector.forEach(el => {
            this.getAttrName = el.getAttribute('data-effect')
        })
        if (this.getAttrName === 'fromBottom') {
            this.animate(this.getAttrName)
        }
        if (this.getAttrName === 'fromLeft') {
            this.animate(this.getAttrName)
        }
    }
    animate(cls) {
        this.selector.forEach(elm => {
            elm.classList.add(this.getAttrName)
        })
    }
}
new Scroller()