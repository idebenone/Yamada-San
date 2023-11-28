const Content = document.getElementById("Content");
const layer1 = document.getElementById("layer1");
const layer2 = document.getElementById("layer2");
const layer3 = document.getElementById("layer3");
window.addEventListener("scroll", () => {
    const scrollX = window.scrollX;
    console.log(scrollX);
    Content.style.transform = `translate3d(-${scrollX}px, 0, 0)`;
    if (scrollX) {
        layer1.style.transform = `translateX(${scrollX / 1.05}px)`;
        layer2.style.transform = `translateX(${scrollX / 1.5}px)`;
        layer3.style.transform = `translateX(${scrollX / 1.75}px)`;
    } else if (scrollX == 0) {
        layer1.style.transform = `translateX(0px)`;
        layer2.style.transform = `translateX(0px)`;
        layer3.style.transform = `translateX(0px)`;
    }
});