

const Content = document.getElementById('Content')
const layer1 = document.getElementById('layer1')
const layer2 = document.getElementById('layer2')
window.addEventListener('scroll', () => {
    const scrollX = window.scrollX
    console.log(scrollX)
    Content.style.transform = `translate3d(-${scrollX}px, 0, 0)`;
    layer1.style.transform = `translate3d(-${scrollX}px, 0, 0)`;
    layer2.style.transform = `translate3d(-${scrollX * 0.25}px, 0, 0)`;
})