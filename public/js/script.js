/**
 * Stanislav Malik
 * 2021
 * javascript for salon-vivien.sk
 */
// hamburger icon
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => hamburger.classList.toggle("active"));

// margin top because of fixed menu
const margin = document.querySelector("#js-navbar").offsetHeight;
document.querySelector("#router-view").style.marginTop = margin + "px";

// handling modal and carousel to work ok
function handleModal(index) {
    const modal = new bootstrap.Modal(document.querySelector("#modal-"+index));
    const carousel = document.querySelector("#inner-"+index);

    modal.show();
    carousel.children[0].classList.add("active");
    document.querySelector("#modal-"+index).addEventListener('hide.bs.modal', () => {
        for (let index = 0; index < carousel.children.length; index++)
            carousel.children[index].classList.remove("active");
    });
}

// hide menu on click
const navMain = $(".navbar-collapse");
navMain.on("click", ".js-hide", null, () => {
    navMain.collapse('hide');
    $(".hamburger").removeClass("active");
});

// show/hide menu on scroll
let prevPosition = window.pageYOffset;

window.onscroll = () => {
    const currentPosition = window.pageYOffset;
    if (prevPosition >= currentPosition)
        document.getElementById("js-navbar").style.top = "0";
    else
        document.getElementById("js-navbar").style.top = "-88px";
    prevPosition = currentPosition;
}

/**
 * on scroll
 */
const scrollOffset = 0;

const listenToChange = () => {
    if (location.hash === "#home")
        scrollAnimation();
}

window.onload = listenToChange;
window.onhashchange = listenToChange;

async function scrollAnimation() {
    // wait until elements exist
    while (document.querySelectorAll(".js-scroll").length === 0)
        await new Promise(r => setTimeout(r, 500));

    const scrollElements = document.querySelectorAll(".js-scroll");

    scrollElements.forEach(elm => elm.style.opacity = '0');

    // check if element is in view
    const elementInView = (elm, scrollOffset) => {
        const elementTop = elm.getBoundingClientRect().top;
        return (elementTop <= ((window.innerHeight || document.documentElement.clientHeight) - scrollOffset));
    }
    // show element
    const displayScrollElement = elm => elm.classList.add("scrolled");
    //hide element
    const hideScrollElement = elm => elm.classList.remove("scrolled");

    // handling
    const handleScrollAnimation = () => {
        scrollElements.forEach(elm => {
            if (elementInView(elm, scrollOffset))
                displayScrollElement(elm);
            else
                hideScrollElement(elm);
        })
    };

    let throttleTimer = false;
    const throttle = (callback, time) => {
        if (throttleTimer) return;

        throttleTimer = true;

        setTimeout(() => {
            callback();
            throttleTimer = false;
        }, time);
    };

    handleScrollAnimation();

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    window.addEventListener('scroll', () => {
        if (mediaQuery && !mediaQuery.matches)
            throttle(handleScrollAnimation, 250);
    });
}