let position = 0;
const slidesToShow = 1;
const slidesToScroll = 1;
let itemsLeft = 0;
let leftSlides = 0;

const wrapper = document.querySelector('.wrapper');
const sliderContainer = document.querySelector('.slider-container')
const sliderTrack = document.querySelector('.slider-track')
const sliderItems = document.querySelectorAll('.slider-item')
const sliderCount = sliderItems.length;
const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')

const itemWidth = sliderContainer.clientWidth / slidesToShow;
console.log('itemWidth',itemWidth)

const movePosition = slidesToScroll * itemWidth;
console.log('movePosition',movePosition)

sliderItems.forEach((item)=>{
    item.style.minWidth = itemWidth + 'px';
});

const setPosition = (position)=>{
    console.log(position)
    sliderTrack.style.transform = `translateX(${position}px)`
}
const checkButtons = () => {
    btnPrev.disabled = position === 0;
    if(position <= -(sliderCount - slidesToShow)* itemWidth ){
        btnNext.disabled = true;
    }else{
        btnNext.disabled = false;
    }
    // btnNext.disabled = true;
}
const setCounters = ()=>{
    const counterWrapper = document.createElement('div');
    const totalItems = document.createElement('span');
    totalItems.innerText = sliderCount.toString();
    const divider = document.createElement('span');
    divider.innerText = '/'
    leftSlides = document.createElement('span');
    leftSlides.innerHTML = '0'

    counterWrapper.appendChild(totalItems)
    counterWrapper.appendChild(divider)
    counterWrapper.appendChild(leftSlides);
    counterWrapper.classList.add('counters')
    wrapper.appendChild(counterWrapper);
}


// Event Listeners

btnNext.addEventListener('click',()=>{
    console.log('next');
    let itemCount = 0;
    // Check how many items left to scroll;
    itemsLeft = sliderCount -  (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    (itemCount++)

    // sliderTrack.style.transform = `translateX(${position}px)`
    setPosition(position);
    checkButtons()
});

btnPrev.addEventListener('click',()=>{
    console.log('prev');
    itemsLeft = Math.abs(position) / itemWidth;

    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    leftSlides.innerHTML = slidesToScroll * 2;
    // sliderTrack.style.transform = `translateX(${position}px)`
    setPosition(position);
    checkButtons()

});
checkButtons();
setCounters();
