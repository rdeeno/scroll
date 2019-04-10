class Scroller {
    constructor() {
        this.list = document.querySelector('.myList')
        this.getAttrName = this.list.getAttribute('data-effect')
        // console.log(this.getAttrName);
        // window.addEventListener("scroll", dealWithScrolling, false);
        if (this.getAttrName == 'moveLeft') {
            this.left()
        }
    }


    left() {
        console.log('work');
        var listItem = document.querySelectorAll('li')
        listItem.forEach(elm => {
            setTimeout(() => {
                elm.classList.add('active')
            }, 3000);
        })


    }


}
new Scroller()