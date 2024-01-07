document.querySelector('#submit').addEventListener('click', function () {
    const weight = document.querySelector('#weight').value;
    const height = document.querySelector('#height').value;


    if (weight > 0 && height > 0) {
        const changeHeight = height / 100;
        const squareHeight = changeHeight * changeHeight;

        const getBMI = weight / squareHeight;

        if (isNaN(getBMI)) {
            document.querySelector('#ans').innerHTML = "Enter the input fields again. Be Careful this time";

        } else {
            document.querySelector('#ans').innerHTML = `Your BMI is ${getBMI} KG/m<sup>2</sup>.`;
            
            if (getBMI >= 30) {
                document.querySelector('#advice').innerHTML = "Your weight is over the normal range even more than the overweight category. Start loosing weight or you will fall ill and take some advices from your trusted doctors."
            } else if (getBMI > 25) {
                document.querySelector('#advice').innerHTML = "Your weight is over the normal range. Start loosing weight or you will fall ill."
            } else if (getBMI > 18.5) {
                document.querySelector('#advice').innerHTML = "Your weight is normal. Maintain your diet to maintain your weight. "
            } else {
                document.querySelector('#advice').innerHTML = "Your weight is below the normal range. Start gaining weight or you will fall ill."
            }
        }
    }


    document.querySelector('#weight').value = "";
    document.querySelector('#height').value = "";
})




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
        calories per day.`;

        document.querySelector('#weightWomen').value = '';
        document.querySelector('#heightWomen').value = '';
        document.querySelector('#ageWomen').value = '';
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
        calories per day.`;

        document.querySelector('#weightMen').value = '';
        document.querySelector('#heightMen').value = '';
        document.querySelector('#ageMen').value = '';
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
    document.querySelector('#modalBmr #result-advice') = "";
})


// WHR calculator

document.querySelector("#whr-submit").addEventListener('click', () => {
    const waistValue = document.getElementById("waist").value;
    const hipValue = document.getElementById("hip").value;
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


document.querySelector("#whtr-submit").addEventListener('click', () => {
    const waistValue = document.querySelector("#modalWhtr #waist").value;
    const hipValue = document.querySelector("#modalWhtr #height").value;
    const isWomen = document.querySelector("#modalWhtr #isWomen");
    const isMen = document.querySelector("#modalWhtr #isMen");
    const resultAdvice = document.querySelector('#modalWhtr #result-advice');
console.log("lokesh");
    const getWHtR = (Math.round( (waistValue/hipValue)*100))/100;

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



document.querySelectorAll("#modal-closeBtn").forEach((element) => {
    element.addEventListener('click', () => {
        document.querySelector('#result-advice').innerHTML = ""
        document.querySelector('#result').innerHTML = '';
        document.querySelector('#modalBmr #result').innerHTML = ""
        document.querySelector('#modalWhr #result').innerHTML = ""
        document.querySelector('#modalWhtr #result').innerHTML = ""
        document.querySelector('#modalBmr #result-advice').innerHTML = ""
        document.querySelector('#modalBmr #result-advice').innerHTML = "";
        document.querySelector('#modalWhr #result-advice').innerHTML = "";
        document.querySelector('#modalWhtr #result-advice').innerHTML = "";
    })
})