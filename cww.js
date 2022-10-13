const faq = document.querySelectorAll(".que1");
// const link = document.querySelectorAll(".links");
const sideFix = document.querySelector(".side-fix");
// let searchButton = document.querySelector(".fa-search");
// let closeButton = document.querySelector(".fa-close");
// let searchBox = document.querySelector(".searchbox");


faq.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});

window.addEventListener('scroll', scrollFunction)

function scrollFunction() {
    if (window.pageYOffset  > 700) {
        if (!sideFix.classList.contains("side-fix-fadein")) {
            sideFix.classList.add("side-fix-fadein");
            sideFix.classList.remove("side-fix-fadeout");
            sideFix.style.display = "block";    
        }
        
    }
    else {
        if (sideFix.classList.contains("side-fix-fadein")) {
            sideFix.classList.remove("side-fix-fadein");
            sideFix.classList.add("side-fix-fadeout");
            setTimeout(function(){
                sideFix.style.display = "none";
            }, 250)    
        }
        
    }
}

sideFix.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})



// link.forEach((link) => {
//     link.addEventListener("click", () => {
//         link.classList.toggle("active");
//     });
// });

// searchButton.onclick = function () {
//     searchBox.classList.add("active");
//     closeButton.classList.add("active");
//     closeButton.classList.add("active");
// };

// closeButton.onclick = function () {
//     searchBox.classList.remove("active");
//     searchButton.classList.remove("active");
//     closeButton.classList.remove("active");
// }

