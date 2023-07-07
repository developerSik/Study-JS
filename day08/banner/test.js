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
let $temp;

$image_divs.each((i, image_div) => {
    $(image_div).css("background-image", "url(00" + (i+1) +".png)");
});
$first_div.css("background-image", "url(006.png)");
$last_div.css("background-image", "url(001.png)");

let slide = setInterval(() => autoSlide(), 2000);

changeButtonStyle();

function changeButtonStyle(){
    // if($temp){
    //     $temp.css('background-color', 'transparent');
    // }
    // $temp = $dots.eq((count -1));
    // $dots.eq((count -1)).css('background-color', '#313131');

    // dots.forEach(dot => dot.style.background = "none");
    
    $dots.each((i, dot) => $(dot).css('background-color','transparent'));
    $dots.eq((count -1)).css('background-color', '#313131');
    clickCheck = true; //선택 버튼이 변경되는 순간 mouseout 이벤트 막기

}


$dots.each((i, dot) => {
   $(dot).on('mouseenter', function(){
    if($(dot).css("background-color") == "rgb(49, 49, 49)"){
        clickCheck = true;
    }
    else{
        clickCheck = false;
    }
    $(dot).css('background-color', '#313131');})

   $(dot).on('mouseleave', function(){
    if(clickCheck){return;}
    $(dot).css('background-color', 'transparent');})

   $(dot).on('click', function(){
       clickCheck = true;
       clearInterval(slide);
       count = i;
       $banner.css('transform' , 'translate(' + (-1500 * ++count) + 'px)');
       $banner.css('transition' , 'transform 0.7s');
       changeButtonStyle();
       slide = setInterval(() => autoSlide(), 2000);
   });
});

$prev.on("click" ,function(){
    if(!check){return;}
    check = false;
    clearInterval(slide);
    $banner.css('transform' , 'translate(' + (-1500 * --count) + 'px)');
    $banner.css('transition' , 'transform 0.7s');

    if(count == 0){
        setTimeout(() => {
            $banner.css('transition', 'transform 0s');
            $banner.css('transform', 'translate(-9000px)');
        }, 700);
        count = 6;
        
    }
    changeButtonStyle();
    slide = setInterval(() => autoSlide(), 2000);
    setTimeout(() => {check = true}, 700);
});

$next.on("click" ,function(){
    if(!check){return;}
    check = false;
    clearInterval(slide);
    $banner.css('transform' , 'translate(' + (-1500 * ++count) + 'px)');
    $banner.css('transition' , 'transform 0.7s');
    
    if(count == 7){
        setTimeout(() => {
            $banner.css('transition', 'transform 0s');
            $banner.css('transform', 'translate(-1500px)');
            slide = setInterval(() => autoSlide(), 2000);
        }, 700);
        count = 1;
        
    }
    changeButtonStyle();
    slide = setInterval(() => autoSlide(), 2000);
    setTimeout(() => {check = true}, 700);
});


function autoSlide(){
    check = false;
    $banner.css('transform' , 'translate(' + (-1500 * ++count) + 'px)');
    $banner.css('transition' , 'transform 0.7s');

    if(count == 7) {
        setTimeout(() => {
            $banner.css('transition', 'transform 0s');
            $banner.css('transform', 'translate(-1500px)');
        }, 700);
        count = 1;
    }
    changeButtonStyle();
    setTimeout(() => {
        check = true;
    }, 700);
};