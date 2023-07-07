const banner = document.querySelector("div.banner");
const image_divs = document.querySelectorAll("div.banner div.image");
const first_div = document.querySelector("#first-temp");
const last_div = document.querySelector("#last-temp");
const prev = document.querySelector("div.prev");
const next = document.querySelector("div.next");
const dots = document.querySelectorAll("div.dot");
let count = 1;
let check = true;
let clickCheck = false;
let temp;

image_divs.forEach((image_div, i) => image_div.style.backgroundImage = `url(00${i + 1}.png)`);
first_div.style.backgroundImage = `url(006.png)`;
last_div.style.backgroundImage = `url(001.png)`;

let slide = setInterval(() => autoSlide(), 2000);

changeButtonStyle();

function changeButtonStyle(){
    if(temp){
        temp.style.background = "none";
    }
    temp = dots[count - 1];
    dots[count - 1].style.background = "#313131";
}

dots.forEach((dot, i) => {
    dot.addEventListener("mouseover", () => {
        clickCheck = dot.style.background == "rgb(49, 49, 49)";
        dot.style.background = "#313131"
    });
    dot.addEventListener("mouseout", () => {
        if(clickCheck){return;}  
        dot.style.background = "none"
    });

    dot.addEventListener("click", () =>{
        clickCheck = true;
        clearInterval(slide);
        count = dot.classList[1];
        banner.style.transform = `translate(${-1500 * count}px)`;
        banner.style.transition = "transform 0.7s"
        changeButtonStyle();
        slide = setInterval(() => autoSlide(), 2000);
    });
});

prev.addEventListener("click", function(){
    if(!check) {return;}
    check = false;
    clearInterval(slide);
    banner.style.transform = `translate(${-1500 * --count}px)`;
    banner.style.transition = "transform 0.7s"

    if(count == 0) {
        setTimeout(() => {
            banner.style.transition = "transform 0s";
            banner.style.transform = `translate(-9000px)`;
        }, 700);
        count = 6;
    }
    changeButtonStyle();
    slide = setInterval(() => autoSlide(), 2000);
    setTimeout(() => {check = true}, 700);
});

next.addEventListener("click", function(){
    if(!check) {return;}
    check = false;
    clearInterval(slide);
    banner.style.transform = `translate(${-1500 * ++count}px)`;
    banner.style.transition = "transform 0.7s"

    if(count == 7) {
        setTimeout(() => {
            banner.style.transition = "transform 0s";
            banner.style.transform = `translate(-1500px)`;
        }, 700);
        count = 1;
    }
    changeButtonStyle();
    slide = setInterval(() => autoSlide(), 2000);
    setTimeout(() => {check = true}, 700);
});

function autoSlide(){
    check = false;
    banner.style.transform = `translate(${-1500 * ++count}px)`;
    banner.style.transition = "transform 0.7s"
    
    if(count == 7) {
        setTimeout(() => {
            banner.style.transition = "transform 0s";
            banner.style.transform = `translate(-1500px)`;
        }, 700);
        count = 1;
    }
    changeButtonStyle();
    setTimeout(() => {
        check = true;
    }, 700);
}