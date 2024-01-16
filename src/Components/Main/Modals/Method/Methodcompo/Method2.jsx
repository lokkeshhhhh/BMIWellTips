import React, { useEffect } from "react";

export default function Method2() {
    useEffect(() => {

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

                if (getBMI >= 30) {
                    advice.innerHTML = `It seems you might be consuming an excess of calories(too much). Consider moderating your 
                    meals and exploring our diet and exercise plans for personalized guidance on maintaining a healthier lifestyle.`
                } else if (getBMI > 25) {
                    advice.innerHTML = `It seems you might be consuming an excess of calories. Consider moderating your meals and 
                    exploring our diet and exercise plans for personalized guidance on maintaining a healthier lifestyle.`;
                } else if (getBMI > 23.5) {
                    advice.innerHTML = `It appears you're managing your calorie intake well. Keep it up! Explore our diet and exercise 
                    plans for additional support on your journey towards a healthier lifestyle.`;
                } else if (getBMI > 18.5) {
                    advice.innerHTML = `It appears that you are in good health. Consider gradually incorporating a balanced increase in your 
                    meals. Explore our diet and exercise plans for personalized guidance on sustaining a healthy and well-rounded lifestyle.`;
                } else {
                    advice.innerHTML = `It appears that your current meal intake is on the lower side. Consider gradually increasing your meals for 
                    a more balanced approach to nutrition. Explore our diet and exercise plans for personalized guidance on sustaining a healthy and well-rounded lifestyle.`; 9
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

                if (getBMI >= 30) {
                    advice.innerHTML = `It seems you might be consuming an excess of calories(too much). Consider moderating your 
                    meals and exploring our diet and exercise plans for personalized guidance on maintaining a healthier lifestyle.`
                } else if (getBMI > 25) {
                    advice.innerHTML = `It seems you might be consuming an excess of calories. Consider moderating your meals and 
                    exploring our diet and exercise plans for personalized guidance on maintaining a healthier lifestyle.`;
                } else if (getBMI > 23.5) {
                    advice.innerHTML = `It appears you're managing your calorie intake well. Keep it up! Explore our diet and exercise 
                    plans for additional support on your journey towards a healthier lifestyle.`;
                } else if (getBMI > 18.5) {
                    advice.innerHTML = `It appears that you are in good health. Consider gradually incorporating a balanced increase in your 
                    meals. Explore our diet and exercise plans for personalized guidance on sustaining a healthy and well-rounded lifestyle.`;
                } else {
                    advice.innerHTML = `It appears that your current meal intake is on the lower side. Consider gradually increasing your meals for 
                    a more balanced approach to nutrition. Explore our diet and exercise plans for personalized guidance on sustaining a healthy and well-rounded lifestyle.`; 9
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

        document.querySelector("#modalBmr #modal-closeBtn").addEventListener('click', () => {
            document.querySelector('#weightMen').value = '';
            document.querySelector('#heightMen').value = '';
            document.querySelector('#ageMen').value = '';
            document.querySelector('#weightWomen').value = '';
            document.querySelector('#heightWomen').value = '';
            document.querySelector('#ageWomen').value = '';
            document.querySelector('#modalBmr #result').innerHTML = '';
            document.querySelector('#modalBmr #result-advice').innerHTML = "";
        })

    }, [])

    return (
        <>
            <div className="modal fade" id="modalBmr">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content" id="modal-content">
                        <div className="modal-heading">
                            <h2 className="modal-title">BMR</h2>
                            <span> (Basal Metabolic Rate )</span>
                        </div>
                        <div className="modal-header">
                            <button className="btn-close bg-white bmr-dismiss" id="modal-closeBtn" data-bs-dismiss="modal" type="button"></button>
                        </div>

                        <div className="modal-body" >
                            <div className="accordion accordion-bmr" id="accordion">
                                <div className="card" id="forMen">
                                    <div className="card-header"><a href="#men-bmr" className="btn text-white ms-1"
                                        data-bs-toggle="collapse" id="men-bmr-btn">For Men </a></div>
                                    <div className="collapse" id="men-bmr" data-bs-parent="#accordion">
                                        <div className="card-body">

                                            <form>
                                                <div className="form-floating mb-3 mt-3 weightDiv">
                                                    <input type="number" className="form-control form-control-lg" id="weightMen" placeholder="Enter your weight" name="weight" />
                                                    <label htmlFor="weight">Enter your weight(kg)</label>
                                                </div>
                                                <div className="form-floating mt-3 mb-3 heightDiv">
                                                    <input type="number" className="form-control form-control-lg" id="heightMen" placeholder="Enter your height" name="height" />
                                                    <label htmlFor="height" >Enter your height(cm)</label>
                                                </div>
                                                <div className="form-floating mt-3 mb-3 ageDiv">
                                                    <input type="number" className="form-control form-control-lg" id="ageMen" placeholder="Enter your height" name="age" />
                                                    <label htmlFor="age" >Enter your age(years)</label>
                                                </div>
                                                <div className="exerciseDiv form-check">
                                                    <input type="radio" className="form-check-input" id="dExerciseM" name="Exercise" />
                                                    <label htmlFor="dExerciseM" className="form-check-lable">Exercise On Daily Basis?</label>
                                                </div>
                                                <div className="exerciseDiv form-check">
                                                    <input type="radio" className="form-check-input" id="d3ExerciseM" name="Exercise" />
                                                    <label htmlFor="d3ExerciseM" className="form-check-lable">Exercise 3 days a week?</label>
                                                </div>
                                                <div className="exerciseDiv form-check">
                                                    <input type="radio" className="form-check-input" id="NOExerciseW" name="Exercise" />
                                                    <label htmlFor="NOExerciseW" className="form-check-lable">No Exercise ?</label>
                                                </div>
                                            </form>

                                        </div>
                                    </div>
                                </div>

                                <div className="card" id="forWomen">
                                    <div className="card-header"><a href="#women-bmr" id="women-bmr-btn" className="collapsed btn text-white"
                                        data-bs-toggle="collapse"> For  women   </a></div>
                                    <div className="collapse" id="women-bmr" data-bs-parent="#accordion">
                                        <div className="card-body">

                                            <form>
                                                <div className="form-floating mb-3 mt-3 weightDiv">
                                                    <input type="number" className="form-control form-control-lg" id="weightWomen" placeholder="Enter your weight" name="weight" />
                                                    <label htmlFor="weight">Enter your weight(kg)</label>
                                                </div>
                                                <div className="form-floating mt-3 mb-3 heightDiv">
                                                    <input type="number" className="form-control form-control-lg" id="heightWomen" placeholder="Enter your height" name="height" />
                                                    <label htmlFor="height" >Enter your height(cm)</label>
                                                </div>
                                                <div className="form-floating mt-3 mb-3 ageDiv">
                                                    <input type="number" className="form-control form-control-lg" id="ageWomen" placeholder="Enter your height" name="age" />
                                                    <label htmlFor="age" >Enter your age(years)</label>
                                                </div>
                                                <div className="exerciseDiv form-check">
                                                    <input type="radio" className="form-check-input" id="dExerciseW" name="Exercise" />
                                                    <label htmlFor="dExerciseW" className="form-check-lable">Exercise On Daily Basis?</label>
                                                </div>
                                                <div className="exerciseDiv form-check">
                                                    <input type="radio" className="form-check-input" id="d3ExerciseW" name="Exercise" />
                                                    <label htmlFor="d3ExerciseW" className="form-check-lable">Exercise 3 days a week?</label>
                                                </div>
                                                <div className="exerciseDiv form-check">
                                                    <input type="radio" className="form-check-input" id="NOExerciseW" name="Exercise" />
                                                    <label htmlFor="NOExerciseW" className="form-check-lable">No Exercise?</label>
                                                </div>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h4 id="result"></h4>
                            <p id="result-advice"></p>
                        </div>

                        <div className="modal-footer">
                            <button className="btn" id="bmr-submit">Check BMR!</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}