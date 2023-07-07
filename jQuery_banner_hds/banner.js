// const banner = document.querySelector("div.banner");
// const image_divs = document.querySelectorAll("div.banner div.image");
// const first_div = document.querySelector("#first-temp");
// const last_div = document.querySelector("#last-temp");
// const prev = document.querySelector("div.prev");
// const next = document.querySelector("div.next");
// const dots = document.querySelectorAll("div.dot");
const $banner = $("div.banner");
const $image_divs = $("div.banner div.image");
const $first_div = $("#first-temp");
const $last_div = $("#last-temp");
const $prev = $("div.prev");
const $next = $("div.next");
const $dots = $("div.dot");
let count = 1;
let check = true;
let clickCheck = false;

// image_divs.forEach((image_div, i) => image_div.style.backgroundImage = `url(00${i + 1}.png)`);
// first_div.style.backgroundImage = `url(006.png)`;
// last_div.style.backgroundImage = `url(001.png)`;

$image_divs.each((i, image_div) => {$(image_div).css("background-image", `url(00${i + 1}.png)`)});
$first_div.css("background-image", `url(00${$image_divs.length}.png)`);
$last_div.css("background-image", `url(001.png)`);

let slide = setInterval(() => {++count, changeBanner(0)}, 2000);

changeButtonStyle();

// function changeButtonStyle(){
//     if(temp){
//         temp.style.background = "none";
//     }
//     temp = dots[count - 1];
//     dots[count - 1].style.background = "#313131";
//     clickCheck = true; //선택 버튼이 변경되는 순간 mouseout 이벤트 막기
// }

function changeButtonStyle(){
    $dots.css("background", "none");
    $dots.eq(count - 1).css("background-color", "#313131");
    clickCheck = true; //선택 버튼이 변경되는 순간 mouseout 이벤트 막기
}

// dots.forEach((dot, i) => {
//     dot.addEventListener("mouseover", () => {
//         clickCheck = dot.style.background == "rgb(49, 49, 49)";
//         dot.style.background = "#313131"
//     });
//     dot.addEventListener("mouseout", () => {
//         if(clickCheck){return;} 
//         dot.style.background = "none"
//     });

//     dot.addEventListener("click", () =>{
//         clickCheck = true;
//         clearInterval(slide);
//         count = dot.classList[1];
//         banner.style.transform = `translate(${-1500 * count}px)`;
//         banner.style.transition = "transform 0.7s"
//         changeButtonStyle();
//         slide = setInterval(() => autoSlide(), 2000);
//     });
// });

// $dots.each((i, dot) => {
//     let $dot = $(dot);

//     $dot.on("mouseover", () => {
//         clickCheck = $dot.css("background-color") == "rgb(49, 49, 49)";
//         $dot.css("background", "#313131");
//     });

//     $dot.on("mouseout", () => {
//         if(clickCheck){return;} 
//         $dot.css("background", "none");
//     });

//     $dot.on("click", () =>{
//         clickCheck = true;
//         clearInterval(slide);
//         count = $dot.prop("classList")[1];
//         $banner.css("transform", `translate(${-1500 * count}px)`);
//         $banner.css("transition", "transform 0.7s");
//         changeButtonStyle();
//         slide = setInterval(() => autoSlide(), 2000);
//     });
// });

$dots.hover(function(){
    clickCheck = $(this).css("background-color") == "rgb(49, 49, 49)";
    $(this).css("background", "#313131");
}, function(){
    if(clickCheck){return;} 
    $(this).css("background", "none");
});

// $dots.on("click", function(){
//     clickCheck = true;
//     clearInterval(slide);
//     count = $(this).prop("classList")[1];
//     console.log(count);
//     $banner.css("transform", `translate(${-1500 * count}px)`);
//     $banner.css("transition", "transform 0.7s");
//     changeButtonStyle();
//     slide = setInterval(() => {++count, changeBanner(0)}, 2000);
// });

$dots.on("click", function(){
    clickCheck = true;
    clearInterval(slide);
    count = parseInt($(this).prop("classList")[1]);
    changeBanner(0);
    slide = setInterval(() => {++count, changeBanner(0)}, 2000);
});

// $prev.on("click", function(){
//     if(!check) {return;}
//     check = false;
//     clearInterval(slide);
//     $banner.css("transform", `translate(${-1500 * --count}px)`);
//     $banner.css("transition", "transform 0.7s");

//     if(count == 0) {
//         setTimeout(() => {
//             $banner.css("transition", "transform 0s");
//             $banner.css("transform", `translate(-9000px)`);
//         }, 700);
//         count = 6;
//     }
//     changeButtonStyle();
//     slide = setInterval(() => autoSlide(), 2000);
//     setTimeout(() => {check = true}, 700);
// });

// $next.on("click", function(){
//     if(!check) {return;}
//     check = false;
//     clearInterval(slide);
//     $banner.css("transform", `translate(${-1500 * ++count}px)`);
//     $banner.css("transition", "transform 0.7s");

//     if(count == 7) {
//         setTimeout(() => {
//             $banner.css("transition", "transform 0s");
//             $banner.css("transform", `translate(-1500px)`);
//         }, 700);
//         count = 1;
//     }
//     changeButtonStyle();
//     slide = setInterval(() => autoSlide(), 2000);
//     setTimeout(() => {check = true}, 700);
// });

// function autoSlide(){
//     check = false;
//     $banner.css("transform", `translate(${-1500 * ++count}px)`);
//     $banner.css("transition", "transform 0.7s");
    
//     if(count == 7) {
//         setTimeout(() => {
//             $banner.css("transition", "transform 0s");
//             $banner.css("transform", `translate(-1500px)`);
//         }, 700);
//         count = 1;
//     }
//     changeButtonStyle();
//     setTimeout(() => {
//         check = true;
//     }, 700);
// }

$(".arrow").on("click", function(){
    if(!check) {return;}
    check = false;
    const arrow = {next: 0, prev: 1};
    let direction = arrow[$(this).prop("classList")[1]];
    clearInterval(slide);
    count += direction ? -1 : 1;
    changeBanner(direction);
    slide = setInterval(() => {++count, changeBanner(0)}, 2000);
});

// 정방향: 0, 역방향: 1
function changeBanner(direction){
    check = false;
    const array = [[7, -1500, 1], [0, -1500 * $image_divs.length, $image_divs.length]];
    $banner.css("transform", `translate(${-1500 * count}px)`);
    $banner.css("transition", "transform 0.7s");
    
    if(count == array[direction][0]) {
        setTimeout(() => {
            $banner.css("transform", `translate(${array[direction][1]}px)`);
            $banner.css("transition", "transform 0s");
        }, 700);
        count = array[direction][2];
    }
    changeButtonStyle();
    setTimeout(() => {
        check = true;
    }, 700);
}