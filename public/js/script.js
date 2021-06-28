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
    if (prevPosition > currentPosition)
        document.getElementById("js-navbar").style.top = "0";
    else
        document.getElementById("js-navbar").style.top = "-80px";
    prevPosition = currentPosition;
}