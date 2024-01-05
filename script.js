// set about sections display to none (reason in READme file)
document.getElementById("about").style.display = 'none';


const elementsToLoad = document.querySelectorAll('.health-quote, .health-quote-2, .bmi-btn,.method-cards');


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    return (
        (rect.top <= windowHeight*18 / 20 && rect.bottom > windowHeight / 2) ||
        (rect.top >= 0 && rect.bottom <= windowHeight)
    );
}

function handleScroll() {
    elementsToLoad.forEach((element) => {
        if (isInViewport(element) && !element.classList.contains('loaded')) {
            element.classList.add('loaded');
        }
    });
}

handleScroll();
window.addEventListener('scroll', handleScroll);


// change about sections display to none again
document.getElementById("home-btn").addEventListener('click', () => {
    document.getElementById("about").style.display = 'none';
})

document.getElementById("contacts-btn").addEventListener('click', () => {
    document.getElementById("about").style.display = 'none';
})

document.getElementById("services-btn").addEventListener('click', () => {
    document.getElementById("about").style.display = 'none';

    const elementsToLoad = document.querySelectorAll('.sr-cards');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        return (
            (rect.top <= windowHeight*18 / 20 && rect.bottom > windowHeight / 2) ||
            (rect.top >= 0 && rect.bottom <= windowHeight)
        );
    }

    function handleScroll() {
        elementsToLoad.forEach((element) => {
            if (isInViewport(element) && !element.classList.contains('loaded')) {
                element.classList.add('loaded');
            }
        });
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll);

})

// change about sections display to none again
document.getElementById("blogs-btn").addEventListener('click', () => {
    document.getElementById("about").style.display = 'none';
})


// add some fade effects on about sections loading
document.getElementById("about-btn").addEventListener('click', () => {
    document.getElementById("about").style.display = '';

    const elementsToLoad = document.querySelectorAll('.about-pg');

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
                // text's fade
                if (elementsToLoad[0].classList.contains('loaded')) {
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


// redirect to home
document.getElementById("about-bmi").addEventListener('click', () => {
    document.getElementById("home-btn").click();
})

document.getElementById("f-home").addEventListener('click', () => {
    document.getElementById("home-btn").click();
})

let linksAbout = document.querySelectorAll("#f-about");
for (let i = 0; i < linksAbout.length; i++) {
    linksAbout[i].addEventListener('click', () => {
        document.getElementById("about-btn").click();
    })
}


// redirect to blogs
const aboutDev = document.querySelectorAll("#about-developer");
for (let i = 0; i < aboutDev.length; i++) {
    aboutDev[i].addEventListener('click', () => {
        document.getElementById("blogs-btn").click();
    })
}

let linksBlogs = document.querySelectorAll("#f-blogs");
for (let i = 0; i < linksBlogs.length; i++) {
    linksBlogs[i].addEventListener('click', () => {
        document.getElementById("blogs-btn").click();
    })
}



// redirect to services
document.getElementById("f-services").addEventListener('click', () => {
    document.getElementById("services-btn").click();
})


// redirect to contacts
document.getElementById("f-contacts").addEventListener('click', () => {
    document.getElementById("contacts-btn").click();
})




// BMI Calculator

document.querySelector('#bmi-submit').addEventListener('click', function () {
    const weight = document.querySelector('#weight').value;
    const height = document.querySelector('#height').value;

    if (weight > 0 && height > 0) {
        const changeHeight = height / 100;
        const squareHeight = changeHeight * changeHeight;
        const fullNumber = (weight / squareHeight)*100;
        const getBMI  = Math.floor(fullNumber)/100;
        if (isNaN(getBMI)) {
            document.querySelector('#result').innerHTML = "Enter the input fields again. Be Careful this time";
        } else {
            document.querySelector('#result').innerHTML = `Your BMI is ${getBMI} KG/m<sup>2</sup>.`;

            if (getBMI >= 30) {
                document.querySelector('#result-advice').innerHTML = "Your weight is over the normal range even more than the overweight category. Talk to your doctor now and check out our diet plans to maintain your health."
            } else if (getBMI > 25) {
                document.querySelector('#result-advice').innerHTML = "Your weight is over the normal range. Start loosing weight and check out our diet plans to maintain your health."
            } else if (getBMI > 18.5) {
                document.querySelector('#result-advice').innerHTML = "Your weight is normal. Check out our diet plans to maintain your health."
            } else {
                document.querySelector('#result-advice').innerHTML = "Your weight is below the normal range. Start gaining weight and check out our diet plans to maintain your health."
            }
        }
    }

    document.querySelector('#weight').value = "";
    document.querySelector('#height').value = "";
})

// BMR calculator

document.querySelector('#bmr-submit').addEventListener('click', function () {

})

document.getElementById("modal-closeBtn").addEventListener('click', () => {
    document.querySelector('#result-advice').innerHTML = ""
    document.querySelector('#result').innerHTML = '';
})