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




document.querySelectorAll("#modal-closeBtn").forEach((element) => {
    element.addEventListener('click', () => {
        document.querySelector('#result-advice').innerHTML = ""
        document.querySelector('#result').innerHTML = '';
        document.querySelector('#modalBmr #result').innerHTML = ""
        document.querySelector('#modalBmr #result-advice').innerHTML = ""
        document.querySelector('#modalBmr #result-advice') = "";
    })
})