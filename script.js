// set about sections display to none (reason in READme file)
document.getElementById("about").style.display = 'none';


const elementsToLoad = document.querySelectorAll('.health-quote, .health-quote-2, .bmi-btn');

// check home section's video-contents are in viewport or not
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);

    return (
        (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) ||
        (rect.top >= 0 && rect.bottom <= windowHeight)
    );
}

// handle fade effect(add loaded class on loading/scrolling)
function handleScroll() {
    elementsToLoad.forEach((element) => {
        // check isInViewport()'s return and loaded class's presence
        if (isInViewport(element) && !element.classList.contains('loaded')) {
            element.classList.add('loaded');
        }
    });
}

handleScroll();

// call the fn on scrolling
window.addEventListener('scroll', handleScroll);


// change about sections display to none again
document.getElementById("home-btn").addEventListener('click', () => {
    document.getElementById("about").style.display = 'none';
})

// change about sections display to none again
document.getElementById("contacts-btn").addEventListener('click', () => {
    document.getElementById("about").style.display = 'none';
})

// change about sections display to none again
document.getElementById("services-btn").addEventListener('click', () => {
    document.getElementById("about").style.display = 'none';
})

// change about sections display to none again
document.getElementById("blogs-btn").addEventListener('click', () => {
    document.getElementById("about").style.display = 'none';
})


// add some fade effects on about sections loading
document.getElementById("about-btn").addEventListener('click', () => {
    // make about section visible
    document.getElementById("about").style.display = '';

    const elementsToLoad = document.querySelectorAll('.card, .about-pg');

    // check about section's pages are in viewport or not
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);

        return (
            (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) ||
            (rect.top >= 0 && rect.bottom <= windowHeight)
        );
    }

    // handle fade effect(add loaded class on loading/scrolling)
    function handleScroll() {
        elementsToLoad.forEach((element) => {
            const texts = document.querySelectorAll("#second-1 ,#second-2");

            // check isInViewport()'s return and loaded class's presence
            if (isInViewport(element) && !element.classList.contains('loaded')) {
                element.classList.add('loaded');

                // text's fade
                if (elementsToLoad[0].classList.contains('loaded')) {
                    texts[0].style.opacity = 1;
                    texts[0].style.transform = "translateX(0px)";
                }

                // text's fade
                if (elementsToLoad[1].classList.contains('loaded')) {
                    texts[1].style.opacity = 1;
                    texts[1].style.transform = "translateX(0px)";
                }
            }
        });
    }

    handleScroll();

    // call the fn on scrolling
    window.addEventListener('scroll', handleScroll);

})


// redirect to home
document.getElementById("about-bmi").addEventListener('click', () => {
    document.getElementById("home-btn").click();
})

// redirect to blogs
document.getElementById("about-developer").addEventListener('click', () => {
    document.getElementById("blogs-btn").click();
})

// redirect to redirect to home
document.getElementById("f-home").addEventListener('click', () => {
    document.getElementById("home-btn").click();
})
// redirect to services
document.getElementById("f-services").addEventListener('click', () => {
    document.getElementById("services-btn").click();
})
// redirect to contacts
document.getElementById("f-contacts").addEventListener('click', () => {
    document.getElementById("contacts-btn").click();
})

// redirect to home
let linksAbout = document.querySelectorAll("#f-about");
for (let i = 0; i < linksAbout.length; i++) {
    linksAbout[i].addEventListener('click', () => {
        document.getElementById("about-btn").click();
    })
}
// redirect to blogs
let linksBlogs = document.querySelectorAll("#f-blogs");
for (let i = 0; i < linksBlogs.length; i++) {
    linksBlogs[i].addEventListener('click', () => {
        document.getElementById("blogs-btn").click();
    })
}


