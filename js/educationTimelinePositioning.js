// all of the following arrays must be the same length or this wont work
const dotsContainer = document.querySelector(".dots")
const dots = document.querySelectorAll(".dot");
const dates = document.querySelectorAll(".date")
const infos = document.querySelectorAll(".info")
const line = document.querySelector(".line")

// position each date and info on the same position as the dots
const positionItemsOnTimeline = ()=>{
    for (let i = 0; i < dots.length; i++) {
        const dotPosition = dots[i].offsetTop + dots[0].offsetHeight/2;
        // console.log(dotPosition+"px");
        dates[i].style.top = dotPosition -10+ "px"
        infos[i].style.top = dotPosition -10+ "px"
    }
}

const resizeLineElement = ()=>{
    let height = dots[4].offsetTop - dots[0].offsetTop
    // console.log(height);
    line.style.height = `${height}px`
}

positionItemsOnTimeline()

window.addEventListener("resize",()=>{
    positionItemsOnTimeline()
    resizeLineElement()
})