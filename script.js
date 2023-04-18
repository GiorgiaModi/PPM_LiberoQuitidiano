//per la navbar che rimane sticky quando si scrolla ma viene modificata


function navbar_reduce () {
    var fcontainer1 = document.getElementById("search-bar");
    var fcontainer2 = document.getElementById("header");
    var reducedLogo = document.getElementById("logo-libero");
    var noLink1 = document.getElementById("link1");
    var noLink2 = document.getElementById("link2");
    var noLink3 = document.getElementById("link3");
    var menu = document.getElementById("hamburgerMenu");
    var searchIcon = document.getElementById("search-icon");


    if (this.scrollY > 110) {
        fcontainer1.classList.add("fc1");
        fcontainer2.classList.add("fc2");
        reducedLogo.classList.add("reduced-logo");
        noLink1.classList.add("no-links");
        noLink2.classList.add("no-links");
        noLink3.classList.add("no-links");
        menu.classList.add("hamburger-menu");
        searchIcon.classList.add("search");
    }
    else {
        fcontainer1.classList.remove("fc1");
        fcontainer2.classList.remove("fc2");
        reducedLogo.classList.remove("reduced-logo");
        noLink1.classList.remove("no-links");
        noLink2.classList.remove("no-links");
        noLink3.classList.remove("no-links");
        menu.classList.remove("hamburger-menu");
        searchIcon.classList.remove("search");
    }



}

window.addEventListener("scroll", navbar_reduce, false)



// drobdown on click
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


//icona search, se cliccata si apre un'altra finestra
const searchButton = document.getElementById("search-button");
const searchOverlay = document.getElementById("search-overlay");
const searchClose = document.getElementById("search-close");

searchButton.addEventListener("click", function() {
    searchOverlay.style.display = "block";
});

searchClose.addEventListener("click", function() {
    searchOverlay.style.display = "none";
});

searchOverlay.addEventListener("click", function(event) {
    if (event.target === searchOverlay) {
        searchOverlay.style.display = "none";
    }
});


const searchButton1 = document.getElementById("search-button1");
const searchOverlay1 = document.getElementById("search-overlay1");
const searchClose1 = document.getElementById("search-close1");

searchButton1.addEventListener("click", function() {
    searchOverlay1.style.display = "block";
});

searchClose1.addEventListener("click", function() {
    searchOverlay1.style.display = "none";
});

searchOverlay1.addEventListener("click", function(event) {
    if (event.target === searchOverlay1) {
        searchOverlay1.style.display = "none";
    }
});


function initSwiper() {
    var swiper2 = new Swiper("#mySwiper2", {

        slidesPerView: 1,
        spaceBetween: 10,

        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            900: {
                slidesPerView: 4,
                spaceBetween: 20,
            },

            1024: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
        },
        navigation: {
            nextEl: '.swiper-btn-next',
            prevEl: '.swiper-btn-prev',
        },
    });
}

window.addEventListener('load', initSwiper);




var swiper = new Swiper("#mySwiper1", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        465: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    },
});


const myCarousel = document.getElementById('carouselSlidesOnly')
const title1 = document.getElementById("art_title1")
const title2 = document.getElementById("art_title2")
const title3 = document.getElementById("art_title3")
const title4 = document.getElementById("art_title4")
const title5 = document.getElementById("art_title5")

myCarousel.addEventListener('slide.bs.carousel', event => {

    var id = event.relatedTarget.id;
    switch (id) {
        case "1":
            title1.classList.add("art-title-orange");
            title5.classList.remove("art-title-orange");
            break;
        case "2":
            title2.classList.add("art-title-orange");
            title1.classList.remove("first-title-orange");
            title1.classList.remove("art-title-orange");
            break;
        case "3":
            title3.classList.add("art-title-orange");
            title2.classList.remove("art-title-orange");
            break;
        case "4":
            title4.classList.add("art-title-orange");
            title3.classList.remove("art-title-orange");
            break;
        case "5":
            title5.classList.add("art-title-orange");
            title4.classList.remove("art-title-orange");
            break;
        default:
        //the id is none of the above
    }

})

/*
var title1Carousel = document.getElementById("title1")

if ($('carouselSlidesOnly').carousel(1).hasClass('active')) {
    title1Carousel.classList.add("colonna-titolo-arancione");
}



var colonna = document.getElementById("colonna")

const items = document.querySelectorAll("#carouselSlidesOnly.carousel-item")

for (const index in items){
    const element = items [index];
    if (element.classList.contains('active')){
        colonna.classList.add('colonna-arancione');
        console.log(index);
    }
}

 */