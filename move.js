let outer = document.querySelector('.outer')
let item = document.querySelector('.item')
let diffX = 0, diffY = 0, moving = false
item.addEventListener('mousedown', function (e) {
    item.style.cursor = 'move'
    moving = true
    diffX = e.offsetX
    diffY = e.offsetY
})

window.addEventListener('mouseup', function (e) {
    item.style.cursor = 'default'
    moving = false
})

outer.addEventListener('mousemove', function (e) {
    if (!moving) return
    // item.style.cursor = 'move'
    let l = e.x - outer.offsetLeft - diffX
    let t = e.y - outer.offsetTop - diffY

    item.style.left = l < 0 ? 0 : l + 'px'
    item.style.top = t < 0 ? 0 : t + 'px'

    let DX = outer.clientWidth - item.clientWidth
    if (DX < l) {
        item.style.left = DX + 'px'
    }
    let DY = outer.clientHeight - item.clientHeight
    if (DY < t) {
        item.style.top = DY + 'px'
    }
})

