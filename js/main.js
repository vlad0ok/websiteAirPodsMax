const chooseColor = document.querySelectorAll('.choose__color-btn')
const contentItem = document.querySelectorAll('.content-item')


chooseColor.forEach(function (element) {
    element.addEventListener('click', open)
})

function open(evt) {
    const target = evt.currentTarget;
    const button = target.dataset.button;
    const contentActive = document.querySelectorAll(`.${button}`)

    chooseColor.forEach(function (item) {
        item.classList.remove('choose__color-btn--active')
    })

    target.classList.add('choose__color-btn--active')

    contentItem.forEach(function (item) {
       item.classList.remove('content-item__active') 
    });

    contentActive.forEach(function (item) {
        item.classList.add('content-item__active')
    })

}