// set about sections display to none (reason in READme file)
document.getElementById("about").style.display = 'none';


const elementsToLoad = document.querySelectorAll('.health-quote, .health-quote-2, .bmi-btn,.method-cards, .healthcare-advice-cards');


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
    const weight = Number(document.querySelector('#weight').value);
    const height = Number(document.querySelector('#height').value);

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
    const weightMen = Number(document.querySelector('#weightMen').value);
    const heightMen = Number(document.querySelector('#heightMen').value);
    const ageMen = Number(document.querySelector('#ageMen').value);

    const weightWomen = Number(document.querySelector('#weightWomen').value);
    const heightWomen = Number(document.querySelector('#heightWomen').value);
    const ageWomen = Number(document.querySelector('#ageWomen').value);

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
    const waistValue = Number(document.getElementById("waist").value);
    const hipValue = Number(document.getElementById("hip").value);
    const isWomen = document.getElementById("isWomen");
    const isMen = document.getElementById("isMen");
    const resultAdvice = document.querySelector('#modalWhr #result-advice');

    const getWHR = (Math.round( (waistValue/hipValue)*100))/100;

    if(!isNaN(getWHR)){
        document.querySelector('#modalWhr #result').innerHTML = `Your Waist-to-Hip Ratio (WHR) currently stands at ${getWHR}`;
    }

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
    }else if(getWHR<0.35  && isWomen.checked){
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
    }else if(getWHR<0.4  && isMen.checked){
        resultAdvice.innerHTML = `Your WHR indicates a significantly increased health risk. It's advisable to seek guidance from healthcare 
        professionals to address potential health concerns associated with this result. Explore our diet and exercise plans 
        for personalized guidance on achieving a healthy and sustainable lifestyle.`;
    }
})

// WHtR calculator

document.querySelector("#whtr-submit").addEventListener('click', () => {
    const waistValue = Number(document.querySelector("#modalWhtr #waist").value);
    const heightValue = Number(document.querySelector("#modalWhtr #height").value);
    const isWomen = document.querySelector("#modalWhtr #isWomen");
    const isMen = document.querySelector("#modalWhtr #isMen");
    const resultAdvice = document.querySelector('#modalWhtr #result-advice');

    const getWHtR = (Math.round( (waistValue/heightValue)*100))/100;

    if(!isNaN(getWHtR)){
        document.querySelector('#modalWhtr #result').innerHTML = `Your Waist-to-Height Ratio (WHtR) currently stands at ${getWHtR}`;
    }

    if(getWHtR<=0.45  && isWomen.checked){
        resultAdvice.innerHTML = ` Your Waist-to-Height Ratio (WHtR) is within the healthy range, indicating a balanced body fat 
        distribution. This is a positive result. Explore our diet and exercise plans for personalized guidance on maintaining a healthy 
        and sustainable lifestyle.`;
    }else if(getWHtR<=0.55  && isWomen.checked){
        resultAdvice.innerHTML = `Your Waist-to-Height Ratio (WHtR) falls within the moderate-risk range. While not alarming, it's a 
        cue to focus on body fat distribution. Consider exploring our diet and exercise plans for personalized guidance on achieving a 
        healthy and sustainable lifestyle.`;
    }else if(getWHtR>0.55  && isWomen.checked){
        resultAdvice.innerHTML = `Your Waist-to-Height Ratio (WHtR) is in the high-risk range, indicating a potential concern with body 
        fat distribution. It's recommended to take steps toward a healthier lifestyle. Explore our diet and exercise plans for personalized 
        guidance on achieving a healthier balance.`;
    }else if(getWHtR<0.2  && isWomen.checked){
        resultAdvice.innerHTML = `Your Waist-to-Height Ratio (WHtR) is in the high-risk range, indicating a potential concern with body 
        fat distribution. It's recommended to take steps toward a healthier lifestyle. Explore our diet and exercise plans for personalized 
        guidance on achieving a healthier balance.`;
    }

    if(getWHtR<0.3  && isMen.checked){
        resultAdvice.innerHTML = `Your Waist-to-Height Ratio (WHtR) is in the high-risk range, suggesting a potential concern with body fat 
        distribution. It's advisable to take steps toward a healthier lifestyle. Explore our diet and exercise plans for personalized guidance 
        on achieving a healthier balance.`;
    }else if(getWHtR<=0.5  && isMen.checked){
        resultAdvice.innerHTML = `Your Waist-to-Height Ratio (WHtR) is within the healthy range, indicating a balanced body fat distribution. 
        You may be on a good track. Explore our diet and exercise plans for personalized guidance on maintaining a healthy lifestyle.`;
    }else if(getWHtR<=0.6  && isMen.checked){
        resultAdvice.innerHTML = `Your Waist-to-Height Ratio (WHtR) falls within the moderate-risk range. While not alarming, it's a signal to 
        pay attention to your body fat distribution. Consider exploring our diet and exercise plans for personalized guidance on achieving a 
        healthy and sustainable lifestyle.`;
    }else if(getWHtR>0.6  && isMen.checked){
        resultAdvice.innerHTML = `Your Waist-to-Height Ratio (WHtR) is in the high-risk range, suggesting a potential concern with body fat 
        distribution. It's advisable to take steps toward a healthier lifestyle. Explore our diet and exercise plans for personalized guidance 
        on achieving a healthier balance.`;
    }
})


// BAi calculator


document.querySelector("#bia-submit").addEventListener('click', () => {
    const hipValue = Number(document.querySelector("#modalBai #hip").value);
    const heightValue = Number(document.querySelector("#modalBai #height").value)/100;
    const resultAdvice = document.querySelector('#modalBai #result-advice');

    const getBAI = (hipValue / Math.pow(heightValue, 1.5)) - 18;

    if(!isNaN(getBAI) && getBAI!= Infinity){
        document.querySelector('#modalBai #result').innerHTML = `Your Body Adiposity Index (BAI) currently stands at ${(Math.round( getBAI*100))/100} `;

        if(getBAI<8){
            resultAdvice.innerHTML = `Ensure you are meeting your nutritional needs and consult with a healthcare professional or a nutritionist. Being 
            underweight can also pose health risks, so it's important to address this with guidance from a medical professional.`;
        }else if(getBAI<21){
            resultAdvice.innerHTML = ` Maintain a balanced diet, engage in regular physical activity, and focus on overall well-being. While you are 
            within a healthy range, always stay vigilant about your lifestyle choices to avoid potential health issues.`;
        }else if(getBAI<=25){
            resultAdvice.innerHTML = `Recognize the potential health risks associated with excess body weight, such as cardiovascular issues and metabolic 
            conditions. Consider making lifestyle changes like incorporating regular exercise, adjusting your diet, and seeking guidance from healthcare professionals.`;
        }else if(getBAI>25){
            resultAdvice.innerHTML = `Acknowledge the increased health risks associated with obesity, including a higher likelihood of cardiovascular diseases, diabetes, 
            and other conditions. Urgently consult with healthcare professionals to develop a comprehensive plan for weight management, which may include dietary changes, 
            increased physical activity, and potential medical interventions.`;
        }
    }else{
        document.querySelector('#modalBai #result').innerHTML = `Something definitely went wrong!`;
    }

})


document.querySelectorAll("#modal-closeBtn").forEach((element) => {
    element.addEventListener('click', () => {
        document.querySelector('#modalBmi #height').value = "";
        document.querySelector('#modalBmi #weight').value = "";
        
        document.querySelector('#modalBmr #weightMen').value = '';
        document.querySelector('#modalBmr #heightMen').value = '';
        document.querySelector('#modalBmr #ageMen').value = '';
        document.querySelector('#modalBmr #weightWomen').value = '';
        document.querySelector('#modalBmr #heightWomen').value = '';
        document.querySelector('#modalBmr #ageWomen').value = '';
        document.querySelector('#modalBai #hip').value = '';
        document.querySelector('#modalBai #height').value = '';

        document.querySelector("#modalBmr #d3ExerciseM").checked = false;
        document.querySelector("#modalBmr #dExerciseM").checked = false;
        document.querySelector("#modalBmr #d3ExerciseW").checked = false;
        document.querySelector("#modalBmr #dExerciseW").checked = false;
        document.querySelector("#modalBmr #NOExerciseW").checked = false;

        document.getElementById("waist").value = "";
        document.getElementById("hip").value = "";

        document.querySelector("#modalWhtr #waist").value = "";
        document.querySelector("#modalWhtr #height").value = "";
        
        document.querySelector('#result').innerHTML = '';
        document.querySelector('#modalBmr #result').innerHTML = ""
        document.querySelector('#modalWhr #result').innerHTML = ""
        document.querySelector('#modalWhtr #result').innerHTML = ""
        document.querySelector('#modalBai #result').innerHTML = ""

        document.querySelector('#result-advice').innerHTML = ""
        document.querySelector('#modalBmr #result-advice').innerHTML = ""
        document.querySelector('#modalBmr #result-advice').innerHTML = "";
        document.querySelector('#modalWhr #result-advice').innerHTML = "";
        document.querySelector('#modalWhtr #result-advice').innerHTML = "";
        document.querySelector('#modalBai #result-advice').innerHTML = "";
    })
})




// Advices...........



const advicesModals = 
    `<div class="home-modals healthcare-ad">
<div class="modal fade" id="healthCM-1">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" id="modal-content">
            <div class="modal-heading">
                <h3 class="modal-title px-5 pt-5">Maintaining a Healthy Weight</h3>
                
            </div>
            <div class="modal-header">
                <button class="btn-close bg-white" id="modal-closeBtn" data-bs-dismiss="modal" type="button"></button>
            </div>
            <div class="modal-body text-white">
                <p>
                    Strive for a healthy weight by combining a balanced diet with regular exercise. Incorporate activities 
                like brisk walking or cycling into your routine, aiming for at least 150 minutes per week. Additionally, 
                include strength training exercises, such as bodyweight exercises or resistance training, at least two 
                days a week to build muscle and support weight management.
                </p>

                <div class="accordion" id="accordion">
                    <div class="card">
                        <div class="card-header"><a href="#weight-gain" class="btn text-white ms-1"
                                data-bs-toggle="collapse" id="weight-gain-btn">Weight Gain ▼</a></div>
                        <div class="collapse" id="weight-gain" data-bs-parent="#accordion">
                            <div class="card-body">
                                <p>
                                    <h5>1. Nutrient-Dense Foods</h5>
                                    <p>
                                        Choose nutrient-dense, calorie-rich foods such as nuts, seeds, avocados, 
                                        and whole-grain products to ensure you're getting essential vitamins and minerals along with calories.
                                    </p>
                                    
                                    <h5>2. Frequent, Balanced Meals</h5>
                                    <p>
                                        Opt for frequent, balanced meals and snacks throughout the day to provide a steady influx of calories and 
                                        nutrients. Aim for three main meals and two to three snacks.
                                    </p>
                                    
                                    <h5>3. Protein-Rich Choices:</h5>
                                    <p>
                                        Prioritize protein-rich foods like lean meats, poultry, fish, eggs, dairy, legumes, and tofu to support 
                                        muscle development and overall weight gain.
                                    </p>

                                    <h5>4. Healthy Fats:</h5>
                                    <p>
                                        Include healthy fats from sources like olive oil, coconut oil, and fatty fish to boost calorie intake. These fats 
                                        also contribute to overall health and well-being.
                                    </p>

                                    <h5>5. Strength Training:</h5>
                                    <p>
                                        Incorporate a well-structured strength training program to build muscle mass. Consult with a fitness professional 
                                        or a dietitian to create a tailored exercise plan.
                                    </p>

                                    <h5>6. Calorie-Dense Snacks:</h5>
                                    <p>
                                        Choose calorie-dense snacks like trail mix, dried fruits, and nut butter to add extra calories without increasing 
                                        the volume of food consumed.
                                    </p>

                                    <h5>7. Proper Hydration:</h5>
                                    <p>
                                        Stay well-hydrated, but avoid consuming large amounts of water before meals, as this may reduce your appetite. 
                                        Opt for beverages with calories, such as smoothies or shakes, to increase overall intake.
                                    </p>

                                    <h5>8. Meal Timing:</h5>
                                    <p>
                                        Pay attention to meal timing. Consume a balanced meal or snack within 30 minutes to an hour after physical 
                                        activity to support muscle recovery and growth.
                                    </p>

                                    <h5>9. Whole Milk and Dairy:</h5>
                                    <p>
                                        Choose whole milk and full-fat dairy products to increase calorie and nutrient intake. These options provide 
                                        additional healthy fats and protein.
                                    </p>

                                    <h5>10. Gradual Increases:</h5>
                                    <p>
                                        Gradually increase portion sizes rather than trying to consume larger amounts of food at once. This can 
                                        help avoid discomfort and improve digestion.
                                    </p>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header"><a href="#weight-loss" class="btn text-white  ms-1"
                                data-bs-toggle="collapse" id="weight-loss-btn">Weight Loss ▼</a></div>
                        <div class="collapse" id="weight-loss" data-bs-parent="#accordion">
                            <div class="card-body">
                                <p>
                                    <h5>1. Balanced Caloric Deficit:</h5>
                                    <p>
                                        Create a balanced caloric deficit by consuming fewer calories than your body expends. Aim for a gradual 
                                        weight loss of 1-2 pounds per week for sustainable results.
                                    </p>
                                    
                                    <h5>2. Nutrient-Rich Foods:</h5>
                                    <p>
                                        Focus on nutrient-dense foods such as fruits, vegetables, lean proteins, whole grains, and healthy fats 
                                        to ensure you're getting essential nutrients during the weight loss process.
                                    </p>
                                    
                                    <h5>3. Portion Control:</h5>
                                    <p>
                                        Practice portion control by using smaller plates and being mindful of serving sizes. Pay attention to hunger and 
                                        fullness cues to avoid overeating.
                                    </p>

                                    <h5>4. Hydration:</h5>
                                    <p>
                                        Stay adequately hydrated by drinking water throughout the day. Sometimes, thirst can be mistaken for hunger. Avoid 
                                        sugary beverages and prioritize water intake.
                                    </p>

                                    <h5>5. Regular Physical Activity:</h5>
                                    <p>
                                        Incorporate regular physical activity into your routine. A combination of cardiovascular exercises and strength training 
                                        can support weight loss and improve overall fitness.
                                    </p>

                                    <h5>6. Mindful Eating:</h5>
                                    <p>
                                        Practice mindful eating by savoring each bite, eating without distractions, and recognizing satiety cues. This can help 
                                        prevent overeating and promote a healthier relationship with food.
                                    </p>

                                    <h5>7. Consult with a Dietitian:</h5>
                                    <p>
                                        Seek guidance from a registered dietitian or nutritionist to create a personalized meal plan. They can help you develop 
                                        a balanced and sustainable approach to weight loss based on your individual needs.
                                    </p>

                                    <h5>8. Meal Planning:</h5>
                                    <p>
                                        Plan and prepare meals in advance to avoid impulsive food choices. Having nutritious meals readily available can make it 
                                        easier to stick to a healthy eating plan.
                                    </p>

                                    <h5>9. Limit Processed Foods:</h5>
                                    <p>
                                        Reduce the intake of processed and high-calorie foods. Opt for whole, minimally processed foods that provide essential 
                                        nutrients without excess added sugars and unhealthy fats.
                                    </p>

                                    <h5>10. Sleep Quality:</h5>
                                    <p>
                                        Prioritize quality sleep. Lack of sleep can impact hormones related to hunger and satiety, potentially leading to overeating. 
                                        Aim for 7-9 hours of sleep per night.
                                    </p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="healthCM-2">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" id="modal-content">
            <div class="modal-heading">
                <h3 class="modal-title px-5 pt-5">Boosting Metabolism Naturally</h3>
            </div>
            <div class="modal-header">
                <button class="btn-close bg-white bmr-dismiss" id="modal-closeBtn" data-bs-dismiss="modal" type="button"></button>
            </div>
            <div class="modal-body" >
                <p>
                    Support your body's natural calorie-burning process by engaging in activities like walking, swimming, or dancing regularly. 
                Add simple strength training exercises like squats and lunges to your routine to build muscle and boost metabolism. Aim for 
                30 minutes of moderate-intensity exercise most days of the week.
                </p>

                <div class="accordion" id="accordion">
                    <div class="card">
                        <div class="card-header"><a href="#Metabolism" class="btn text-white ms-1"
                                data-bs-toggle="collapse" id="Metabolism-btn">Expand for more ▼</a></div>
                        <div class="collapse" id="Metabolism" data-bs-parent="#accordion">
                            <div class="card-body">
                                <p>
                                    <h5>1. Prioritize High-Intensity Interval Training (HIIT):</h5>
                                    <p>
                                        Include high-intensity interval training in your workouts. HIIT can boost metabolism and calorie burn both 
                                        during and after exercise, known as the afterburn effect or excess post-exercise oxygen consumption (EPOC).
                                    </p>
                                    
                                    <h5>2. Stay Hydrated:</h5>
                                    <p>
                                        Drinking an adequate amount of water is essential for a well-functioning metabolism. Even mild dehydration can 
                                        negatively impact metabolism, so ensure you stay hydrated throughout the day.
                                    </p>
                                    
                                    <h5>3. Eat Protein-Rich Foods:</h5>
                                    <p>
                                        Include lean protein sources in your meals, such as chicken, fish, beans, and tofu. Protein requires more energy 
                                        to digest compared to fats and carbohydrates, contributing to a higher metabolic rate.
                                    </p>

                                    <h5>4. Engage in Regular Strength Training:</h5>
                                    <p>
                                        Incorporate strength training exercises into your fitness routine. Building muscle mass increases resting metabolic 
                                        rate, as muscle tissue burns more calories at rest than fat tissue.
                                    </p>

                                    <h5>5. Get Enough Sleep:</h5>
                                    <p>
                                        Prioritize quality sleep. Lack of sleep can disrupt metabolic hormones and lead to weight gain. Aim for 7-9 hours of 
                                        sleep per night to support overall health and a healthy metabolism.
                                    </p>

                                    <h5>6. Eat Small, Frequent Meals:</h5>
                                    <p>
                                        Consuming smaller, balanced meals more frequently throughout the day can help keep your metabolism active. This approach 
                                        prevents large spikes and drops in blood sugar levels.
                                    </p>

                                    <h5>7. Include Spicy Foods:</h5>
                                    <p>
                                        Incorporate spicy foods like chili peppers into your meals. The compound capsaicin found in peppers may temporarily increase 
                                        metabolism and promote calorie burning.
                                    </p>

                                    <h5>8. Consume Green Tea:</h5>
                                    <p>
                                        Green tea contains antioxidants and catechins that may contribute to a modest increase in metabolism. Drinking a cup of green 
                                        tea regularly can offer health benefits and support metabolism.
                                    </p>

                                    <h5>9. Stand and Move More:</h5>
                                    <p>
                                        Avoid prolonged periods of sitting. Stand up, stretch, and move around regularly. Even small bouts of activity throughout the 
                                        day can contribute to an increased metabolism.
                                    </p>

                                    <h5>10. Eat Foods Rich in Iron:</h5>
                                    <p>
                                        Iron is essential for carrying oxygen to cells, including those involved in metabolism. Include iron-rich foods like lean meats, 
                                        spinach, and legumes in your diet.
                                    </p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="healthCM-3">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" id="modal-content">
            <div class="modal-heading">
                <h3 class="modal-title px-5 pt-5">Heart-Healthy Cardiovascular Fitness</h3>
            </div>
            <div class="modal-header">
                <button class="btn-close bg-white" id="modal-closeBtn" data-bs-dismiss="modal" type="button"></button>
            </div>
            <div class="modal-body">
                <p>
                    Enhance your heart health and promote balanced fat distribution by incorporating activities like jogging, 
                swimming, or cycling into your weekly routine. Include short bursts of higher intensity, such as faster 
                walking or brief sprints, to increase cardiovascular benefits. Strengthen your core with exercises like 
                planks to support overall fitness.
                </p>

                <div class="accordion" id="accordion">
                    <div class="card">
                        <div class="card-header"><a href="#Heart" class="btn text-white ms-1"
                                data-bs-toggle="collapse" id="Heart-btn">Expand for more ▼</a></div>
                        <div class="collapse" id="Heart" data-bs-parent="#accordion">
                            <div class="card-body">
                                <p>
                                    <h5>1. Aerobic Exercises:</h5>
                                    <p>
                                        Engage in regular aerobic exercises such as brisk walking, running, cycling, swimming, or dancing. Aim for at 
                                        least 150 minutes of moderate-intensity aerobic activity per week.
                                    </p>
                                    
                                    <h5>2. Interval Training:</h5>
                                    <p>
                                        Incorporate interval training into your routine. Alternating between short bursts of high-intensity exercise and 
                                        periods of lower intensity can improve cardiovascular fitness more efficiently.
                                    </p>
                                    
                                    <h5>3. Choose Activities You Enjoy:</h5>
                                    <p>
                                        Select activities you enjoy to make cardiovascular exercise more sustainable. Whether it's hiking, playing sports, or 
                                        group fitness classes, finding enjoyable activities can enhance motivation.
                                    </p>

                                    <h5>4. Gradual Progression:</h5>
                                    <p>
                                        Start gradually and progress steadily. If you're new to exercise or returning after a break, ease into your routine to 
                                        prevent injuries and allow your body to adapt.
                                    </p>

                                    <h5>5. Consistency Matters:</h5>
                                    <p>
                                        Consistency is key for cardiovascular fitness. Aim for regular, weekly sessions to maintain and improve heart health. Schedule 
                                        workouts as appointments to prioritize your cardiovascular health.
                                    </p>

                                    <h5>6. Warm-up and Cool Down:</h5>
                                    <p>
                                        Always include warm-up and cool-down periods in your cardiovascular workouts. This helps prepare your body for exercise and 
                                        facilitates a gradual return to your resting state, reducing the risk of injury.
                                    </p>

                                    <h5>7. Monitor Intensity:</h5>
                                    <p>
                                        Pay attention to exercise intensity. Use perceived exertion, heart rate monitors, or fitness trackers to ensure you're working at 
                                        an intensity that challenges your cardiovascular system without overexertion.
                                    </p>

                                    <h5>8. Incorporate Variety:</h5>
                                    <p>
                                        Mix up your cardiovascular activities to prevent boredom and ensure you're working different muscle groups. This can include 
                                        alternating between running and cycling or trying new fitness classes.
                                    </p>

                                    <h5>9. Strength Training:</h5>
                                    <p>
                                        Include strength training exercises in your routine. Building muscle can improve overall cardiovascular health and enhance your 
                                        ability to perform aerobic activities.
                                    </p>

                                    <h5>10. Set Realistic Goals:</h5>
                                    <p>
                                        Establish realistic and achievable goals for your cardiovascular fitness. Whether it's increasing your running distance or improving 
                                        your cycling speed, setting and achieving goals can boost motivation.
                                    </p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="healthCM-4">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" id="modal-content">
            <div class="modal-heading">
                <h3 class="modal-title px-5 pt-5">Balanced Fitness for Overall Health</h3>
            </div>
            <div class="modal-header">
                <button class="btn-close bg-white" id="modal-closeBtn" data-bs-dismiss="modal" type="button"></button>
            </div>
            <div class="modal-body">
                <p>
                    Achieve a well-rounded fitness routine by combining resistance training with activities like brisk 
                    walking or cycling. Include exercises like push-ups and squats to work different muscle groups. Regularly 
                    assess and adjust your fitness plan to ensure a balanced approach to body composition and overall health.
                </p>

                <div class="accordion" id="accordion">
                    <div class="card">
                        <div class="card-header"><a href="#Heart" class="btn text-white ms-1"
                                data-bs-toggle="collapse" id="Heart-btn">Expand for more ▼</a></div>
                        <div class="collapse" id="Heart" data-bs-parent="#accordion">
                            <div class="card-body">
                                <p>
                                    <h5>1. Cardiovascular Workouts:</h5>
                                    <p>
                                        Use gym equipment like treadmills, elliptical machines, or stationary bikes for effective cardiovascular exercise. Aim for 
                                        at least 150 minutes of moderate-intensity cardio per week.
                                    </p>

                                    <h5>2. Weighted Resistance Machines:</h5>
                                    <p>
                                        Include weighted resistance machines for specific muscle targeting. Adjust the machines to your fitness level and focus on 
                                        controlled movements.
                                    </p>

                                    <h5>3. Functional Training:</h5>
                                    <p>
                                        Integrate functional training exercises that mimic real-life movements. Cable machines, stability balls, and resistance bands 
                                        are useful tools for functional workouts.
                                    </p>

                                    <h5>4. Flexibility and Mobility Training:</h5>
                                    <p>
                                        Dedicate time to flexibility and mobility exercises. Stretching and using foam rollers can improve range of motion and prevent injuries.
                                    </p>

                                    <h5>5. Client Assessment and Goal Setting:</h5>
                                    <p>
                                        Begin with a comprehensive client assessment to understand individual fitness levels, medical history, and specific goals. 
                                        Establish clear, measurable objectives to guide the training program.
                                    </p>
                                    
                                    <h5>6. Periodized Training Programs:</h5>
                                    <p>
                                        Develop periodized training programs that strategically manipulate variables such as volume, intensity, and frequency over 
                                        designated training cycles. This structured approach optimizes adaptation and minimizes the risk of plateaus.
                                    </p>
                                    
                                    <h5>7. Functional Movement Screening:</h5>
                                    <p>
                                        Conduct functional movement screening to assess movement patterns and identify any biomechanical imbalances or limitations. 
                                        This informs the development of corrective exercises to enhance overall functional fitness.
                                    </p>

                                    <h5>8. Individualized Exercise Prescription:</h5>
                                    <p>
                                        Prescribe exercises tailored to individual needs and goals. Consider factors like muscle imbalances, flexibility, and joint mobility, 
                                        ensuring a well-rounded and targeted training approach.
                                    </p>

                                    <h5>9. Form and Technique Emphasis:</h5>
                                    <p>
                                        Prioritize form and technique in every exercise. Coach clients through proper execution, addressing any compensatory patterns. 
                                        This meticulous approach enhances safety and efficacy.
                                    </p>

                                    <h5>10. Strength and Conditioning Integration:</h5>
                                    <p>
                                        Integrate both strength training and conditioning elements into workouts for a balanced approach. This synergy promotes not only 
                                        muscle development but also cardiovascular health and overall fitness.
                                    </p>

                                    <h5>11. Progressive Overload Strategy:</h5>
                                    <p>
                                        Apply progressive overload systematically to stimulate continual adaptation. Regularly reassess and adjust training variables 
                                        to ensure clients are consistently challenged within their capabilities.
                                    </p>

                                    <h5>12. Dynamic Warm-up Protocols:</h5>
                                    <p>
                                        Implement dynamic warm-up protocols tailored to the day's workout. This primes the body for exercise, increases blood flow, and 
                                        reduces the risk of injury.
                                    </p>

                                    <h5>13. Variety and Periodic Program Modification:</h5>
                                    <p>
                                        Introduce exercise variety to prevent monotony and engage different muscle groups. Periodically modify programs to maintain client 
                                        interest and continually stimulate physiological adaptations.
                                    </p>

                                    <h5>14. Rest and Recovery Recommendations:</h5>
                                    <p>
                                        Offer guidance on rest and recovery strategies, emphasizing the significance of adequate sleep, proper nutrition, and techniques such 
                                        as foam rolling or stretching to enhance recovery between sessions.
                                    </p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="healthCM-5">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" id="modal-content">
            <div class="modal-heading">
                <h3 class="modal-title px-5 pt-5">Simple Workouts for Body Fat Management</h3>
            </div>
            <div class="modal-header">
                <button class="btn-close bg-white" id="modal-closeBtn" data-bs-dismiss="modal" type="button"></button>
            </div>
            <div class="modal-body">
                <p>
                    Manage body fat with straightforward aerobic exercises like walking, cycling, or dancing. These 
                    activities help burn calories and support fat loss. Incorporate full-body movements like jumping jacks 
                    or simple bodyweight exercises to elevate your heart rate. Monitor your progress and adapt your routine accordingly.
                </p>

                <div class="accordion" id="accordion">
                    <div class="card">
                        <div class="card-header"><a href="#Heart" class="btn text-white ms-1"
                                data-bs-toggle="collapse" id="Heart-btn">Expand for more ▼</a></div>
                        <div class="collapse" id="Heart" data-bs-parent="#accordion">
                            <div class="card-body">
                                <p>
                                    <h5>1. Brisk Walking or Power Walking:</h5>
                                    <p>
                                        Take a brisk walk or engage in power walking around a local park or neighborhood. Focus on maintaining 
                                        a brisk pace to elevate your heart rate.
                                    </p>
                                    
                                    <h5>2. Jogging or Running:</h5>
                                    <p>
                                        Incorporate jogging or running into your outdoor routine. Start with a comfortable pace and gradually 
                                        increase intensity as your fitness improves.
                                    </p>
                                    
                                    <h5>3. Interval Sprinting:</h5>
                                    <p>
                                        Incorporate short bursts of sprinting followed by periods of walking or slow jogging. This interval 
                                        training can be done in a local park or on a trail.
                                    </p>

                                    <h5>4. Cycling:</h5>
                                    <p>
                                        Ride your bike on bike paths or scenic routes. Cycling is an excellent low-impact cardiovascular exercise 
                                        that also allows you to explore your surroundings.
                                    </p>

                                    <h5>5. Outdoor Bodyweight Exercises:</h5>
                                    <p>
                                        Perform bodyweight exercises like squats, lunges, push-ups, and burpees in a nearby park. Use benches or 
                                        elevated surfaces for modifications.
                                    </p>

                                    <h5>6. Hiking:</h5>
                                    <p>
                                        Explore hiking trails in nature reserves or parks. Hiking provides both cardiovascular benefits and an 
                                        opportunity to enjoy the outdoors.
                                    </p>

                                    <h5>7. Jump Rope:</h5>
                                    <p>
                                        Bring a jump rope to a local park and incorporate skipping into your workout. It's an effective cardiovascular 
                                        exercise that also improves coordination.
                                    </p>

                                    <h5>8. Stair Climbing:</h5>
                                    <p>
                                        Find a set of stairs, either at a park or a public space, and incorporate stair climbing into your routine. 
                                        It's an excellent way to work your lower body and boost cardiovascular fitness.
                                    </p>

                                    <h5>9. Nature Trail Walks:</h5>
                                    <p>
                                        Walk or jog along nature trails. Nature trails often offer a scenic and peaceful environment, providing a 
                                        refreshing change from traditional urban settings.
                                    </p>

                                    <h5>10. Play Sports:</h5>
                                    <p>
                                        Join a local sports group or gather friends for games like soccer, basketball, or volleyball. Playing sports 
                                        is a fun way to stay active and socialize.
                                    </p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="healthCM-6">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" id="modal-content">
            <div class="modal-heading">
                <h3 class="modal-title px-5 pt-5">Healthy Diet & Nutrition Focus</h3>
            </div>
            <div class="modal-header">
                <button class="btn-close bg-white" id="modal-closeBtn" data-bs-dismiss="modal" type="button"></button>
            </div>
            <div class="modal-body">
                <p>
                    Pair your exercise routine with a focus on nutrition. Plan high-intensity workouts around protein-rich 
                    meals for muscle support. Match low-intensity activities with balanced meals for sustained energy. Tailor 
                    your exercise and nutrition choices to support your overall well-being.
                </p>

                <div class="accordion" id="accordion">
                    <div class="card">
                        <div class="card-header"><a href="#diet" class="btn text-white ms-1"
                                data-bs-toggle="collapse" id="diet-btn">Expand for more ▼</a></div>
                        <div class="collapse" id="diet" data-bs-parent="#accordion">
                            <div class="card-body">
                                <p>
                                    <h5>1. Balanced Macro nutrients:</h5>
                                    <p>
                                        Consume a balanced mix of macro nutrients, including carbohydrates, protein, and healthy fats. 
                                        Each plays a crucial role in supporting energy levels, muscle function, and overall health.
                                    </p>
                                    
                                    <h5>2. Whole Foods Emphasis:</h5>
                                    <p>
                                        Prioritize whole, minimally processed foods. These include fruits, vegetables, lean proteins, 
                                        whole grains, and healthy fats. Whole foods provide essential nutrients and are generally lower 
                                        in added sugars and unhealthy additives.
                                    </p>
                                    
                                    <h5>3. Adequate Protein Intake:</h5>
                                    <p>
                                        Ensure an adequate intake of protein to support muscle repair and growth. Include sources like lean 
                                        meats, poultry, fish, eggs, dairy, legumes, and plant-based protein options.
                                    </p>

                                    <h5>4. Hydration is Key:</h5>
                                    <p>
                                        Stay well-hydrated by drinking water throughout the day. Proper hydration is essential for digestion, 
                                        nutrient absorption, and overall bodily functions. Adjust your water intake based on activity level and climate.
                                    </p>

                                    <h5>5. Complex Carbohydrates:</h5>
                                    <p>
                                        Opt for complex carbohydrates such as whole grains, quinoa, sweet potatoes, and legumes. These provide sustained 
                                        energy and are rich in fiber, promoting digestive health.
                                    </p>

                                    <h5>6. Healthy Fats:</h5>
                                    <p>
                                        Include sources of healthy fats in your diet, such as avocados, nuts, seeds, olive oil, and fatty fish. Healthy 
                                        fats support nutrient absorption and contribute to overall well-being.
                                    </p>

                                    <h5>7. Portion Control:</h5>
                                    <p>
                                        Practice portion control to avoid overeating. Be mindful of serving sizes, and pay attention to hunger and fullness 
                                        cues to maintain a healthy balance.
                                    </p>

                                    <h5>8. Pre- and Post-Workout Nutrition:</h5>
                                    <p>
                                        FFuel your body with a combination of carbohydrates and protein before and after workouts. This supports energy levels, 
                                        enhances performance, and aids in muscle recovery.
                                    </p>

                                    <h5>9. Limit Added Sugars and Processed Foods:</h5>
                                    <p>
                                        Reduce the intake of added sugars and highly processed foods. These can contribute to energy crashes and negatively impact 
                                        overall health. Check food labels for hidden sugars and additives.
                                    </p>

                                    <h5>10. Variety is Key:</h5>
                                    <p>
                                        Include a variety of foods in your diet to ensure you receive a broad spectrum of nutrients. Different foods offer unique 
                                        vitamins, minerals, and antioxidants that contribute to overall health.
                                    </p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="healthCM-7">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" id="modal-content">
            <div class="modal-heading">
                <h3 class="modal-title px-5 pt-5">Regular Check-ups for Health Maintenance</h3>
            </div>
            <div class="modal-header">
                <button class="btn-close bg-white" id="modal-closeBtn" data-bs-dismiss="modal" type="button"></button>
            </div>
            <div class="modal-body">
                <p>
                    Prioritize your health by scheduling routine check-ups to monitor vital indicators. Align your exercise 
                    routine with health goals; for instance, if cholesterol is a concern, include activities like brisk walking. 
                    Collaborate with healthcare professionals to integrate preventive measures into your fitness plan.
                </p>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="healthCM-8">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" id="modal-content">
            <div class="modal-heading">
                <h3 class="modal-title px-5 pt-5">Strategic Emphasis on Sleep for Enhanced Health</h3>
            </div>
            <div class="modal-header">
                <button class="btn-close bg-white" id="modal-closeBtn" data-bs-dismiss="modal" type="button"></button>
            </div>
            <div class="modal-body">
                <p>
                    Emphasize the importance of quality sleep for overall health. Aim for 7-9 hours of uninterrupted sleep 
                    each night. Establish a consistent sleep schedule, create a calming bedtime routine, and ensure your sleep 
                    environment is comfortable and conducive to rest.
                </p>

                <div class="accordion" id="accordion">
                    <div class="card">
                        <div class="card-header"><a href="#sleep" class="btn text-white ms-1"
                                data-bs-toggle="collapse" id="sleep-btn">Expand for more ▼</a></div>
                        <div class="collapse" id="sleep" data-bs-parent="#accordion">
                            <div class="card-body">
                                <p>
                                    <h5> 1. Consistent Sleep Schedule:</h5>
                                    <p>Go to bed and wake up at the same time every day, even on weekends. Consistency reinforces your 
                                        body's natural sleep-wake cycle.
                                    </p>

                                    <h5>2. Create a Relaxing Bedtime Routine:</h5>
                                    <p>Establish a calming pre-sleep routine to signal to your body that it's time to wind down. This 
                                        might include activities like reading, gentle stretching, or practicing relaxation techniques.
                                    </p>

                                    <h5>3. Optimize Your Sleep Environment:</h5>
                                    <p>Make your bedroom conducive to sleep. Keep the room cool, dark, and quiet. Invest in a comfortable 
                                        mattress and pillows for optimal support.
                                    </p>

                                    <h5>4. Limit Exposure to Screens Before Bed:</h5>
                                    <p>Reduce exposure to electronic devices at least an hour before bedtime. The blue light emitted from 
                                        screens can interfere with the production of the sleep hormone melatonin.
                                    </p>

                                    <h5>5. Mind Your Diet:</h5>
                                    <p>Be mindful of your food and drink intake, especially in the evening. Avoid large meals, caffeine, 
                                        and nicotine close to bedtime, as they can disrupt sleep.
                                    </p>

                                    <h5>6. Regular Physical Activity:</h5>
                                    <p>Engage in regular physical activity, but try to complete vigorous exercise at least a few hours before 
                                        bedtime. Regular exercise promotes better sleep, but timing is important.
                                    </p>

                                    <h5>7. Limit Naps, If Needed:</h5>
                                    <p>
                                        If you need to nap, keep it short (20-30 minutes) and earlier in the day. Long or late-afternoon naps 
                                        can interfere with nighttime sleep.
                                    </p>

                                    <h5>8. Manage Stress:</h5>
                                    <p>Practice stress-reducing techniques such as deep breathing, meditation, or progressive muscle 
                                        relaxation to help manage stress and calm your mind before bedtime.
                                    </p>

                                    <h5>9 .Evaluate Your Mattress and Pillows:</h5>
                                    <p>Ensure your mattress and pillows are comfortable and provide adequate support. An uncomfortable sleep 
                                        environment can contribute to restless nights.
                                    </p>

                                    <h5>10. Mind Your Lighting:</h5>
                                    <p>Exposure to natural light during the day and minimizing artificial light at night helps regulate your 
                                        body's internal clock. Spend time outdoors during daylight hours.
                                    </p>

                                    <h5>11. Avoid Clock Watching:</h5>
                                    <p>Turn your clock away from view if you find yourself checking the time frequently. This can contribute 
                                        to anxiety about not getting enough sleep.
                                    </p>

                                    <h5>12. Limit Liquid Intake Before Bed:</h5>
                                    <p>Minimize the consumption of liquids close to bedtime to reduce the likelihood of waking up for bathroom 
                                        trips during the night.
                                    </p>

                                    <h5>13. Consult with a Sleep Specialist:</h5>
                                    <p>
                                        If you consistently struggle with sleep despite trying these tips, consider consulting with a sleep 
                                        specialist. They can help identify any underlying sleep disorders or issues.
                                    </p>

                                    <h5>14. Be Patient and Persistent:</h5>
                                    <p>
                                        Changes in sleep habits may take time to show results. Be patient and persistent in implementing healthy 
                                        sleep practices.
                                    </p>

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="healthCM-9">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" id="modal-content">
            <div class="modal-heading">
                <h3 class="modal-title px-5 pt-5">Yoga for Mind-Body Balance</h3>
            </div>
            <div class="modal-header">
                <button class="btn-close bg-white" id="modal-closeBtn" data-bs-dismiss="modal" type="button"></button>
            </div>
            <div class="modal-body">
                <p>
                    Integrate yoga into your routine for mind-body harmony. Choose beginner-friendly yoga poses and sequences 
                    to enhance flexibility, strength, and relaxation. Practice mindfulness through deep breathing and meditation 
                    during your yoga sessions for added mental wellness benefits.
                </p>

                <div class="accordion" id="accordion">
                    <div class="card">
                        <div class="card-header"><a href="#yoga" class="btn text-white ms-1"
                                data-bs-toggle="collapse" id="yoga-btn">Expand for more ▼</a></div>
                        <div class="collapse" id="yoga" data-bs-parent="#accordion">
                            <div class="card-body">
                                <p>
                                    <h5 style="color: rgb(113, 113, 249);">Yoga Tips:</h5>
                                    <p>1. <strong>Mindful Breathing:</strong> Focus on mindful breathing throughout your practice. Coordinating breath with 
                                        movement enhances relaxation and concentration.</p>
                                    <p>2. <strong>Start with Warm-Ups:</strong> Begin your yoga session with gentle warm-up exercises to prepare your body 
                                        for more challenging poses.</p>
                                    <p>3. <strong>Listen to Your Body:</strong> Pay attention to your body's signals. Avoid pushing yourself into discomfort, 
                                        and modify poses as needed to suit your individual flexibility and strength.</p>
                                    <p>4. <strong>Consistent Practice:</strong> Establish a consistent yoga practice. Regular sessions, even if short, can 
                                        yield more benefits than infrequent, longer practices.</p>
                                    <p>5. <strong>Stay Hydrated:</strong> Drink water before and after your yoga session to stay hydrated. Hydration 
                                        supports overall well-being.</p>
                                    <p>6. <strong>Invest in a Quality Mat:</strong> Use a comfortable and non-slip yoga mat to ensure stability and 
                                        support during your practice.</p>
                                    <p>7. <strong>Variety in Asanas:</strong> Include a variety of yoga asanas in your routine to target different muscle 
                                        groups and enhance overall flexibility.</p>
                                    <p>8. <strong>Relaxation at the End:</strong> Dedicate time to relaxation at the end of your practice. Corpse pose (Shavasana) 
                                        is a common choice for final relaxation.</p>

                                    <h5 style="color: rgb(113, 113, 249);">Yoga Asanas:</h5>
                                    <p>1. <strong>Mountain Pose (Tadasana):</strong> Improves posture and balance.</p>
                                    <p>2. <strong>Downward-Facing Dog (Adho Mukha Svanasana):</strong> Stretches the entire body and strengthens the arms and legs.</p>
                                    <p>3. <strong>Warrior I (Virabhadrasana I):</strong> Strengthens the legs, opens the hips, and builds focus.</p>
                                    <p>4. <strong>Warrior II (Virabhadrasana II):</strong> Enhances stamina, stretches the chest, and strengthens the legs.</p>
                                    <p>5. <strong>Tree Pose (Vrikshasana):</strong> Improves balance, focus, and strengthens the legs.</p>
                                    <p>6. <strong>Cobra Pose (Bhujangasana):</strong> Opens the chest, strengthens the spine, and improves posture.</p>
                                    <p>7. <strong>Child’s Pose (Balasana):</strong> A resting pose that stretches the back and promotes relaxation.</p>
                                    <p>8. <strong>Bridge Pose (Setu Bandhasana):</strong> Strengthens the core, glutes, and legs while opening the chest.</p>
                                    <p>9. <strong>Seated Forward Bend (Paschimottanasana):</strong> Stretches the spine, hamstrings, and shoulders.</p>
                                    <p>10. <strong>Cat-Cow Pose (Marjaryasana-Bitilasana):</strong> Enhances spinal flexibility and coordination.</p>
                                    <p>11. <strong>Fish Pose (Matsyasana):</strong> Opens the chest, throat, and stretches the abdomen.</p>
                                    <p>12. <strong>Pigeon Pose (Eka Pada Rajakapotasana):</strong> Stretches the hips and thighs, promoting flexibility.</p>
                                    <p>13. <strong>Twisting Pose (Ardha Matsyendrasana):</strong> Improves spinal flexibility and aids digestion.</p>
                                    <p>14. <strong>Garland Pose (Malasana):</strong> Strengthens the lower back, ankles, and opens the hips.</p>
                                    <p>Remember to consult with a yoga instructor if you're new to yoga or have specific health concerns. They can provide guidance on 
                                        proper technique and help you tailor your practice to your individual needs.</p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="healthCM-10">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" id="modal-content">
            <div class="modal-heading">
                <h3 class="modal-title px-5 pt-5">Finding Inner Calm: Using Meditation to Ease Stress</h3>
            </div>
            <div class="modal-header">
                <button class="btn-close bg-white" id="modal-closeBtn" data-bs-dismiss="modal" type="button"></button>
            </div>
            <div class="modal-body">
                <p>
                    Incorporate regular meditation sessions to alleviate stress and promote mental clarity. Start with 
                    short sessions, focusing on breath awareness or guided meditations. Gradually increase the duration 
                    as you become more comfortable. Consistent meditation can enhance emotional well-being and reduce stress levels.
                </p>

                <div class="accordion" id="accordion">
                    <div class="card">
                        <div class="card-header"><a href="#meditation" class="btn text-white ms-1"
                                data-bs-toggle="collapse" id="meditation-btn">Expand for more ▼</a></div>
                        <div class="collapse" id="meditation" data-bs-parent="#accordion">
                            <div class="card-body">
                                <p>
                                    <h5 style="color: rgb(113, 113, 249);">Meditation Tips:</h5>
                                    <p>1. <strong>Find a Quiet Space:</strong> Choose a quiet and comfortable space where you won't 
                                        be easily disturbed. This helps create a conducive environment for meditation.
                                    </p>
                                    <p>2. <strong>Comfortable Posture:</strong> Sit or lie down in a comfortable position. Use cushions 
                                        or props if needed to support your posture. The goal is to be at ease and relaxed.
                                    </p>
                                    <p>3. <strong>Set a Time Limit:</strong> Start with a realistic time frame for your meditation 
                                        session. It could be as short as 5 minutes initially and gradually extend as you become more comfortable with the practice.
                                    </p>
                                    <p>4. <strong>Focus on Breath:</strong> Pay attention to your breath. Focus on the sensation of 
                                        inhaling and exhaling. This helps anchor your attention to the present moment.
                                    </p>
                                    <p>5. <strong>Mindful Awareness:</strong> Practice mindful awareness by observing your thoughts 
                                        without judgment. Allow thoughts to come and go, returning your focus to the breath when distractions arise.
                                    </p>
                                    <p>6. <strong>Guided Meditations:</strong> Use guided meditations, especially if you're new to 
                                        meditation. There are plenty of resources, including apps and online platforms, offering guided sessions led by experienced meditation instructors.
                                    </p>
                                    <p>7. <strong>Body Scan Meditation:</strong> Incorporate body scan meditation, where you systematically 
                                        focus on each part of your body, releasing tension and promoting relaxation.
                                    </p>
                                    <p>8. <strong>Consistent Practice:</strong> Establish a consistent meditation practice. Regularity 
                                        is more important than duration. Even short, daily sessions can yield significant benefits over time.
                                    </p>
                                    <p>9. <strong>Be Patient with Yourself:</strong> Understand that meditation is a skill that develops 
                                        with practice. Be patient with yourself, and avoid self-judgment if your mind wanders.
                                    </p>
                                    <p>10. <strong>Use Props:</strong> Consider using props such as meditation cushions or a comfortable 
                                        chair to support your posture. This can help ease physical discomfort during longer meditation sessions.
                                    </p>
                                    <p>11. <strong>Mindful Walking:</strong> Explore mindfulness through walking meditation. Focus on 
                                        each step, the sensation of movement, and the connection with the ground.
                                    </p>
                                    <p>12. <strong>Gratitude Meditation:</strong> Practice gratitude meditation by reflecting on things 
                                        you're thankful for. This positive focus can enhance your overall well-being.
                                    </p>
                                    <p>13. <strong>Create a Meditation Ritual:</strong> Establish a ritual around your meditation practice. 
                                        Whether it's lighting a candle, using aromatherapy, or playing soft music, creating a ritual signals the beginning and end of your session.
                                    </p>
                                    <p>14. <strong>Start with Short Sessions:</strong> If you're new to meditation, start with shorter 
                                        sessions and gradually increase the duration as you build comfort and confidence.
                                    </p>
                                    <p>15. <strong>Mindfulness Apps:</strong> Explore mindfulness apps that offer various meditation 
                                        exercises. These apps often provide guided sessions, timers, and progress tracking.
                                    </p>

                                    <p>Remember that meditation is a personal journey, and there's no one-size-fits-all approach. 
                                        Experiment with different techniques and find what resonates best with you. Consistency and an open-minded approach contribute to the effectiveness of your meditation practice.
                                    </p>

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="healthCM-11">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" id="modal-content">
            <div class="modal-heading">
                <h3 class="modal-title px-5 pt-5">Socializing for Mental Health</h3>
            </div>
            <div class="modal-header">
                <button class="btn-close bg-white" id="modal-closeBtn" data-bs-dismiss="modal" type="button"></button>
            </div>
            <div class="modal-body">
                <p>
                    Recognize the importance of social connections for mental health. Schedule regular social activities, 
                    whether it's spending time with friends, joining clubs, or engaging in community events. Positive social 
                    interactions contribute to emotional well-being and provide valuable support systems.
                </p>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="healthCM-12">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" id="modal-content">
            <div class="modal-heading">
                <h3 class="modal-title px-5 pt-5">Nurturing Spirituality: Finding Peace Through Devotion</h3>
            </div>
            <div class="modal-header">
                <button class="btn-close bg-white" id="modal-closeBtn" data-bs-dismiss="modal" type="button"></button>
            </div>
            <div class="modal-body">
                <p>
                    Devotion refers to a profound sense of commitment and reverence towards a spiritual practice, often 
                    involving a connection with a higher power or deity. In the context of seeking inner peace, devotion 
                    becomes a personal journey of connecting with one's spiritual beliefs, fostering a deep sense of tranquility 
                    and harmony. Engaging in devotional practices, such as prayer, meditation, or rituals, allows individuals to 
                    center their thoughts and emotions on a higher purpose, providing solace and a profound sense of peace within.
                </p>
            </div>
        </div>
    </div>
</div>
    </div>`;

    document.getElementById("healthcare-advice-main").innerHTML = advicesModals;