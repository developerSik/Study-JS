const image_divs = document.querySelectorAll("div.img");
const banner = document.querySelector("div.banner");
const firsttemp = document.querySelector("div.first_temp");
const lasttemp = document.querySelector("div.last_temp");
const prev = document.querySelector("div.prev");
const next = document.querySelector("div.next");
const text = document.querySelector("span.one");
const colors = document.querySelector("div.test");

let color = ["pink","purple", "pink", "blue","red","pink","purple"];
let count = 1;
let check = true;

changeNumber = function(count) {
    colors.style.background = color[count];
    text.innerHTML = `0${count}`;
    
};


image_divs.forEach((image_div, i) => (image_div.style.backgroundImage = `url(img${i + 1}.png)`));
firsttemp.style.backgroundImage = `url(img5.png)`;
lasttemp.style.backgroundImage = `url(img1.png)`;

let slide = setInterval(() => autoSlide(), 3000);

prev.addEventListener('click', function () {
  if (!check) {
    return;
  }
  check = false;
  clearInterval(slide);
  banner.style.transform = `translate(${-540 * --count}px)`;
  banner.style.transition = 'transform 0.3s';
  if (count == 0) {
    setTimeout(() => {
      banner.style.transition = 'transform 0s';
      banner.style.transform = 'translate(-2700px)';
    }, 300);
    count = 5;
  }
  slide = setInterval(() => autoSlide(), 3000);
  setTimeout(() => {
    check = true;
  }, 300);
  changeNumber(count);
});

next.addEventListener('click', function () {
  if (!check) {
    return;
  }
  check = false;
  clearInterval(slide);
  banner.style.transform = `translate(${-540 * ++count}px)`;
  banner.style.transition = 'transform 0.3s';
  if (count == 6) {
    setTimeout(() => {
      banner.style.transition = 'transform 0s';
      banner.style.transform = 'translate(-540px)';
    }, 300);
    count = 1;
  }
  slide = setInterval(() => autoSlide(), 3000);
  setTimeout(() => {
    check = true;
  }, 300);
  changeNumber(count);
});

function autoSlide() {
  check = false;
  banner.style.transform = `translate(${-540 * ++count}px)`;
  banner.style.transition = 'transform 0.3s';

  if (count == 6) {
    setTimeout(() => {
      banner.style.transition = 'transform 0s';
      banner.style.transform = 'translate(-540px)';
    }, 300);
    count = 1;
  }
  setTimeout(() => {
    check = true;
  }, 300);
  changeNumber(count);
}