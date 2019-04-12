class Scroller {
    constructor() {
        this.selector = [...document.querySelectorAll('.effect')]
        this.selector.forEach(el => {
            this.getAttrName = el.getAttribute('data-effect')
        })
        if (this.getAttrName === 'fromBottom') {
            this.fromBottom()
        }
        if (this.getAttrName === 'fromLeft') {
            this.fromLeft()
        }
    }
    fromBottom() {
        var listItems = document.querySelectorAll('.effect')
        listItems.forEach(elm => {
            elm.classList.add(this.getAttrName)
        })
    }
    fromLeft() {
        var listItem = document.querySelectorAll('.effect')
        listItem.forEach(elm => {
            elm.classList.add(this.getAttrName)
        })
    }
}
new Scroller()