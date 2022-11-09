
//////// IMAGE SLIDER /////////

const productContainers = [...document.querySelectorAll('.product-container')];   ////creating a constant for section containing productcontainer///
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];                        ///creating a constant to grab the next button///
const preBtn = [...document.querySelectorAll('.pre-btn')];                        ///creating a constant to grab the previous button///

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();           ////using getBoundingClientRect method to get size of element and its position relative to viewport///
    let containerWidth = containerDimensions.width;                   

    nxtBtn[i].addEventListener('click', () => {        /// creating click event according to the container width////
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {        ///creating click event according to container width////
        item.scrollLeft -= containerWidth;
    })
})


////// PROGRESS BAR ////////

const progressBar = document.querySelector('#progressbar');               ////////grabbing progressbar
const section = document.querySelector('section');                        ////////grabbing section

const animateProgressBar = () => {                                      ///creating a constant for the progress bar///
    let scrollDistance = -section.getBoundingClientRect().top;          
    let progressWidth = (scrollDistance / (section.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100;
    let value = Math.floor(progressWidth);
    console.log(value);
    progressBar.style.width = value + '%' ;
};
window.addEventListener("scroll", animateProgressBar);              ////creating scroll animation for progress bar////


///////FLOATING BOTTLE /////////

gsap.registerPlugin(ScrollTrigger);                                        ////////registering scrolltrigger plugin


gsap.to(".floatpic", {rotation:360, x:1250, duration: 10})                  //////grabbing item and adding properties to object
gsap.to(".floatpic", {rotation:-360, x:0, duration: 10, delay : 10 })       //////grabbing item and adding properties to object
gsap.to(".floatpic", {rotation:360, x:1250, duration: 10, delay : 20 })     //////grabbing item and adding properties to object
gsap.to(".floatpic", {rotation:-360, x:0, duration: 10, delay : 30 })       //////grabbing item and adding properties to object

//////////////////////////////////////////
/////// animating landing page //////////

gsap.from('.text', {opacity:0, duration: 2, x:-100})
gsap.from('.text2', {opacity:0, duration: 2, x:100, ease: 'Power2.easeInOut'})
gsap.from('.hero', {duration:1, x:500, opacity:0})

/////////////////////////////////////////////////////
////// animating text elements for slogans //////////

gsap.timeline({                         ///using gsap timeline to make animations////
    scrollTrigger: {                    /// giving the scrollTrigger plugins instructions///
        trigger: ".slogans",            /// grabbing slogans div class ///
        start: "center center",         /// where animation will start///
        end: "bottom top",              /// where animation will end///
        scrub: true,
        pin: true
    }

    })
.from(".slogan1", {x: innerWidth * 1})         ///// innerWidth * 1 for elements to slide in from the right ////
.from(".slogan2", {x: innerWidth * -1})        ///// innerWidth * -1 for elements to slide in from the left ////
.from(".slogan3", {x: innerWidth * 1})         ///// innerWidth * 1 for elements to slide in from the right ////
