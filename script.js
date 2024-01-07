// set about sections display to none (reason in READme file)
document.getElementById("about").style.display = 'none';


const elementsToLoad = document.querySelectorAll('.health-quote, .health-quote-2, .bmi-btn,.method-cards');


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    return (
        (rect.top <= windowHeight * 18 / 20 && rect.bottom > windowHeight / 2) ||
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
            (rect.top <= windowHeight * 18 / 20 && rect.bottom > windowHeight / 2) ||
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
        const fullNumber = (weight / squareHeight) * 100;
        const getBMI = Math.floor(fullNumber) / 100;

        let result = document.querySelector('#result');
        let advice = document.querySelector('#result-advice');

        if (isNaN(getBMI)) {
            result.innerHTML = "Enter the input fields again. Be Careful this time";
        } else {
            result.innerHTML = `Your BMI is ${getBMI} KG/m<sup>2</sup>.`;
            if (getBMI >= 30) {
                advice.innerHTML = "Your weight is over the normal range even more than the overweight category. Talk to your doctor now and check out our diet plans to maintain your health."
            } else if (getBMI > 25) {
                advice.innerHTML = "Your weight is over the normal range. Start loosing weight and check out our diet plans to maintain your health."
            } else if (getBMI > 18.5) {
                advice.innerHTML = "Your Body Mass Index (BMI) is normal, falling within the normal weight range. This suggests a healthy weight for your height. Check out our diet plans to maintain your health."
            } else {
                advice.innerHTML = "Your weight is below the normal range. Start gaining weight and check out our diet plans to maintain your health."
            }
        }
    }

})

// BMR calculator

document.querySelector('#bmr-submit').addEventListener('click', function () {
    const weightMen = document.querySelector('#weightMen').value;
    const heightMen = document.querySelector('#heightMen').value;
    const ageMen = document.querySelector('#ageMen').value;

    const weightWomen = document.querySelector('#weightWomen').value;
    const heightWomen = document.querySelector('#heightWomen').value;
    const ageWomen = document.querySelector('#ageWomen').value;

    const menValues = weightMen && heightMen && ageMen;
    const womenValues = weightWomen && heightWomen && ageWomen;

    const preventMenValues = weightMen || heightMen || ageMen;
    const preventWomenValues = weightWomen || heightWomen || ageWomen;

    // For Women
    if (!preventMenValues && womenValues) {
        const formulaConstant1 = 447.593;
        const formulaConstant2 = 9.247;
        const formulaConstant3 = 3.098;
        const formulaConstant4 = 4.330;

        const getBMR = formulaConstant1 + (formulaConstant2 * weightWomen) +
            (formulaConstant3 * heightWomen) - (formulaConstant4 * ageWomen);

        const dExerciseW = document.querySelector('#dExerciseW');
        const d3ExerciseW = document.querySelector('#d3ExerciseW');

        let finalBMR = 0;
        if (d3ExerciseW.checked) {
            finalBMR = getBMR * 1.4;
        } else if (dExerciseW.checked) {
            finalBMR = getBMR * 1.7;
        } else {
            finalBMR = getBMR * 1.1;
        }

        const changeHeight = heightWomen / 100;
        const squareHeight = changeHeight * changeHeight;
        const fullNumber = (weightWomen / squareHeight) * 100;
        const getBMI = Math.floor(fullNumber) / 100;

        let advice = document.querySelector('#modalBmr #result-advice');

        if(getBMI>=30){
            advice.innerHTML = `It seems you might be consuming an excess of calories(too much). Consider moderating your 
            meals and exploring our diet and exercise plans for personalized guidance on maintaining a healthier lifestyle.`
        }else if(getBMI>25){
            advice.innerHTML = `It seems you might be consuming an excess of calories. Consider moderating your meals and 
            exploring our diet and exercise plans for personalized guidance on maintaining a healthier lifestyle.`;
        }else if(getBMI>23.5){
            advice.innerHTML = `It appears you're managing your calorie intake well. Keep it up! Explore our diet and exercise 
            plans for additional support on your journey towards a healthier lifestyle.`;
        }else if(getBMI>18.5){
            advice.innerHTML = `It appears that you are in good health. Consider gradually incorporating a balanced increase in your 
            meals. Explore our diet and exercise plans for personalized guidance on sustaining a healthy and well-rounded lifestyle.`;
        }else{
            advice.innerHTML = `It appears that your current meal intake is on the lower side. Consider gradually increasing your meals for 
            a more balanced approach to nutrition. Explore our diet and exercise plans for personalized guidance on sustaining a healthy and well-rounded lifestyle.`;9
        }

        document.querySelector('#modalBmr #result').innerHTML = `Your Basal Metabolic Rate (BMR) is approximately ${Math.floor(finalBMR * 100) / 100}
        calories per day, which represents the calories your body needs at rest to maintain basic physiological functions. `;

    }

    // For Men
    if (!preventWomenValues && menValues) {
        const formulaConstant1 = 88.362;
        const formulaConstant2 = 13.397;
        const formulaConstant3 = 4.799;
        const formulaConstant4 = 5.677;

        const dExerciseM = document.querySelector('#dExerciseM');
        const d3ExerciseM = document.querySelector('#d3ExerciseM');

        const getBMR = formulaConstant1 + (formulaConstant2 * weightMen) +
            (formulaConstant3 * heightMen) - (formulaConstant4 * ageMen);

        let finalBMR = 0;
        if (d3ExerciseM.checked) {
            finalBMR = getBMR * 1.4;
        } else if (dExerciseM.checked) {
            finalBMR = getBMR * 1.7;
        } else {
            finalBMR = getBMR * 1.1;
        }

        const changeHeight = heightMen / 100;
        const squareHeight = changeHeight * changeHeight;
        const fullNumber = (weightMen / squareHeight) * 100;
        const getBMI = Math.floor(fullNumber) / 100;
        let advice = document.querySelector('#modalBmr #result-advice');

        if(getBMI>=30){
            advice.innerHTML = `It seems you might be consuming an excess of calories(too much). Consider moderating your 
            meals and exploring our diet and exercise plans for personalized guidance on maintaining a healthier lifestyle.`
        }else if(getBMI>25){
            advice.innerHTML = `It seems you might be consuming an excess of calories. Consider moderating your meals and 
            exploring our diet and exercise plans for personalized guidance on maintaining a healthier lifestyle.`;
        }else if(getBMI>23.5){
            advice.innerHTML = `It appears you're managing your calorie intake well. Keep it up! Explore our diet and exercise 
            plans for additional support on your journey towards a healthier lifestyle.`;
        }else if(getBMI>18.5){
            advice.innerHTML = `It appears that you are in good health. Consider gradually incorporating a balanced increase in your 
            meals. Explore our diet and exercise plans for personalized guidance on sustaining a healthy and well-rounded lifestyle.`;
        }else{
            advice.innerHTML = `It appears that your current meal intake is on the lower side. Consider gradually increasing your meals for 
            a more balanced approach to nutrition. Explore our diet and exercise plans for personalized guidance on sustaining a healthy and well-rounded lifestyle.`;9
        }

        document.querySelector('#modalBmr #result').innerHTML = `Your Basal Metabolic Rate (BMR) is approximately ${Math.floor(finalBMR * 100) / 100}
        calories per day, which represents the calories your body needs at rest to maintain basic physiological functions. `;

    }
})

document.querySelector("#women-bmr-btn").addEventListener('click', () => {
    document.querySelector('#weightMen').value = '';
    document.querySelector('#heightMen').value = '';
    document.querySelector('#ageMen').value = '';
    document.querySelector('#modalBmr #result').innerHTML = ""
    document.querySelector('#modalBmr #result-advice').innerHTML = "";
})
document.querySelector("#men-bmr-btn").addEventListener('click', () => {
    document.querySelector('#weightWomen').value = '';
    document.querySelector('#heightWomen').value = '';
    document.querySelector('#ageWomen').value = '';
    document.querySelector('#modalBmr #result').innerHTML = ""
    document.querySelector('#modalBmr #result-advice').innerHTML = "";
})

// WHR calculator

document.querySelector("#whr-submit").addEventListener('click', () => {
    const waistValue = document.getElementById("waist").value;
    const hipValue = document.getElementById("hip").value;
    const isWomen = document.getElementById("isWomen");
    const isMen = document.getElementById("isMen");
    const resultAdvice = document.querySelector('#modalWhr #result-advice');

    const getWHR = (Math.round( (waistValue/hipValue)*100))/100;

    document.querySelector('#modalWhr #result').innerHTML = `Your Waist-to-Hip Ratio (WHR) currently stands at ${getWHR}.`;

    if(getWHR<=0.85  && isWomen.checked){
        resultAdvice.innerHTML = ` Your Waist-to-Hip Ratio (WHR) is normal. According to the result, 
        your body fat distribution appears to be healthy, and you might be fine. Explore our diet and exercise 
        plans for personalized guidance on achieving a healthy and sustainable lifestyle.`;
    }else if(getWHR<=0.90  && isWomen.checked){
        resultAdvice.innerHTML = `Your WHR suggests a slightly increased health risk. It's advisable to monitor 
        your lifestyle and consult with healthcare professionals for personalized advice. Explore our diet and exercise 
        plans for personalized guidance on achieving a healthy and sustainable lifestyle.`;
    }else if(getWHR>0.90  && isWomen.checked){
        resultAdvice.innerHTML = `Your WHR indicates a significantly increased health risk. It's recommended to discuss 
        this result with healthcare professionals for further evaluation and guidance. Explore our diet and exercise plans 
        for personalized guidance on achieving a healthy and sustainable lifestyle.`;
    }

    if(getWHR<=0.90  && isMen.checked){
        resultAdvice.innerHTML = `Your Waist-to-Hip Ratio (WHR) falls within the normal range. Based on this result, your body 
        fat distribution seems healthy, and you might be fine. Explore our diet and exercise plans 
        for personalized guidance on achieving a healthy and sustainable lifestyle.`;
    }else if(getWHR<=0.95  && isMen.checked){
        resultAdvice.innerHTML = `Your WHR suggests a slightly increased health risk. Consider maintaining a healthy lifestyle, and 
        consulting with healthcare professionals can provide personalized insights. Explore our diet and exercise plans 
        for personalized guidance on achieving a healthy and sustainable lifestyle.`;
    }else if(getWHR>0.95  && isMen.checked){
        resultAdvice.innerHTML = `Your WHR indicates a significantly increased health risk. It's advisable to seek guidance from healthcare 
        professionals to address potential health concerns associated with this result. Explore our diet and exercise plans 
        for personalized guidance on achieving a healthy and sustainable lifestyle.`;
    }
})

// WHtR calculator

document.querySelector("#whtr-submit").addEventListener('click', () => {
    const waistValue = document.querySelector("#modalWhtr #waist").value;
    const hipValue = document.querySelector("#modalWhtr #hip").value;
    const isWomen = document.querySelector("#modalWhtr #isWomen");
    const isMen = document.querySelector("#modalWhtr #isMen");
    const resultAdvice = document.querySelector('#modalWhtr #result-advice');

    const getWHtR = (Math.round( (waistValue/hipValue)*100))/100;

    document.querySelector('#modalWhtr #result').innerHTML = `Your Waist-to-Height Ratio (WHtR) currently stands at ${getWHtR}.`;

    if(getWHtR<=0.5  && isWomen.checked){
        resultAdvice.innerHTML = ` Your Waist-to-Height Ratio (WHtR) is within the healthy range, indicating a balanced body fat 
        distribution. This is a positive result. Explore our diet and exercise plans for personalized guidance on maintaining a healthy 
        and sustainable lifestyle.`;
    }else if(getWHtR<=0.6  && isWomen.checked){
        resultAdvice.innerHTML = `Your Waist-to-Height Ratio (WHtR) falls within the moderate-risk range. While not alarming, it's a 
        cue to focus on body fat distribution. Consider exploring our diet and exercise plans for personalized guidance on achieving a 
        healthy and sustainable lifestyle.`;
    }else if(getWHtR>0.6  && isWomen.checked){
        resultAdvice.innerHTML = `Your Waist-to-Height Ratio (WHtR) is in the high-risk range, indicating a potential concern with body 
        fat distribution. It's recommended to take steps toward a healthier lifestyle. Explore our diet and exercise plans for personalized 
        guidance on achieving a healthier balance.`;
    }

    if(getWHR<=0.90  && isMen.checked){
        resultAdvice.innerHTML = `Your Waist-to-Hip Ratio (WHR) falls within the normal range. Based on this result, your body 
        fat distribution seems healthy, and you might be fine. Explore our diet and exercise plans 
        for personalized guidance on achieving a healthy and sustainable lifestyle.`;
    }else if(getWHR<=0.95  && isMen.checked){
        resultAdvice.innerHTML = `Your WHR suggests a slightly increased health risk. Consider maintaining a healthy lifestyle, and 
        consulting with healthcare professionals can provide personalized insights. Explore our diet and exercise plans 
        for personalized guidance on achieving a healthy and sustainable lifestyle.`;
    }else if(getWHR>0.95  && isMen.checked){
        resultAdvice.innerHTML = `Your WHR indicates a significantly increased health risk. It's advisable to seek guidance from healthcare 
        professionals to address potential health concerns associated with this result. Explore our diet and exercise plans 
        for personalized guidance on achieving a healthy and sustainable lifestyle.`;
    }
})


document.querySelectorAll("#modal-closeBtn").forEach((element) => {
    element.addEventListener('click', () => {
        document.querySelector('#result-advice').innerHTML = ""
        document.querySelector('#result').innerHTML = '';
        document.querySelector('#modalBmr #result').innerHTML = ""
        document.querySelector('#modalWhr #result').innerHTML = ""
        document.querySelector('#modalBmr #result-advice').innerHTML = ""
        document.querySelector('#modalBmr #result-advice').innerHTML = "";
        document.querySelector('#modalWhr #result-advice').innerHTML = "";
    })
})