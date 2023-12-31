document.getElementById("about").style.display = 'none';
document.getElementById("home-btn").addEventListener('click', () => {
    document.getElementById("about").style.display = 'none';
})
document.getElementById("contacts-btn").addEventListener('click', () => {
    document.getElementById("about").style.display = 'none';
})
document.getElementById("services-btn").addEventListener('click', () => {
    document.getElementById("about").style.display = 'none';
})
document.getElementById("blogs-btn").addEventListener('click', () => {
    document.getElementById("about").style.display = 'none';
})



document.getElementById("about-btn").addEventListener('click', () => {
    document.getElementById("about").style.display = '';


    const elementsToLoad = document.querySelectorAll('.card, .about-pg');


    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);


        return (
            (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) ||
            (rect.top >= 0 && rect.bottom <= windowHeight)
        );
    }


    function handleScroll() {
        elementsToLoad.forEach((element) => {
            const texts = document.querySelectorAll("#second-1 ,#second-2");

            if (isInViewport(element) && !element.classList.contains('loaded')) {
                element.classList.add('loaded');
                
                if(elementsToLoad[0].classList.contains('loaded')){
                    texts[0].style.opacity = 1;
                    texts[0].style.transform = "translateX(0px)";
                }

                if (elementsToLoad[1].classList.contains('loaded')) {
                    texts[1].style.opacity = 1;
                    texts[1].style.transform = "translateX(0px)";
                }
            }
        });
    }


    handleScroll();


    window.addEventListener('scroll', handleScroll);

})

document.getElementById("about-bmi").addEventListener('click', () => {
    document.getElementById("home-btn").click();
})

document.getElementById("about-developer").addEventListener('click', () => {
    document.getElementById("blogs-btn").click();
})


document.getElementById("f-home").addEventListener('click', () => {
    document.getElementById("home-btn").click();
})
document.getElementById("f-services").addEventListener('click', () => {
    document.getElementById("services-btn").click();
})
document.getElementById("f-contacts").addEventListener('click', () => {
    document.getElementById("contacts-btn").click();
})

let linksAbout = document.querySelectorAll("#f-about");

for (let i = 0; i < linksAbout.length; i++) {
    linksAbout[i].addEventListener('click', () => {
        document.getElementById("about-btn").click();
    })
}
let linksBlogs = document.querySelectorAll("#f-blogs");
for (let i = 0; i < linksBlogs.length; i++) {
    linksBlogs[i].addEventListener('click', () => {
        document.getElementById("blogs-btn").click();
    })
}


