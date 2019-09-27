const windowEl = window

const bDrop = document.getElementById('bDrop')

let cursorX = 0
let cursorY = 0

let mouseIsOnHold = false
let willMove = false

window.onload = function () {
    setInterval(function () {
        willMove = true
    }, 100)
}


const getMousePosition = (e) => {
    cursorX = e.touches[0].clientX     // Get the horizontal coordinate
    cursorY = e.touches[0].clientY     // Get the vertical coordinate

    bDrop.style.left = (cursorX - 25) + 'px'
    bDrop.style.top = (cursorY - 25) + 'px'

    console.log("X coords: " + cursorX + ", Y coords: " + cursorY)
}

window.addEventListener('touchstart', function (e) {
    mouseIsOnHold = true

    bDrop.classList.add("fullBDrop")

    getMousePosition(e)
})

window.addEventListener('touchmove', function (e) {

    if (willMove) {
        mouseIsOnHold && getMousePosition(e)
        willMove = false
    }
})

window.addEventListener('touchend', function () {
    mouseIsOnHold = false

    bDrop.style.left = (cursorX - 5) + 'px'
    bDrop.style.top = (cursorY - 5) + 'px'

    bDrop.classList.remove("fullBDrop")
})

/*
---------------------------
|  desktop  ||   mobile   |
---------------------------
| mousedown || touchstart |
| mousemove ||  touchmove |
|  mouseup  ||  touchend  |
---------------------------
*/