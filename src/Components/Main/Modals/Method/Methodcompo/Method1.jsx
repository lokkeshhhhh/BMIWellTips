import React, { useEffect } from "react";

export default function Method1() {

    useEffect(() => {
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
    
        }
        
        
        )

        document.querySelector("#modal-closeBtn").addEventListener('click', () => {
            document.querySelector('#modalBmi #height').value = "";
            document.querySelector('#modalBmi #weight').value = "";
            document.querySelector('#result').innerHTML = '';
            document.querySelector('#result-advice').innerHTML = "";
        })

    }, [])
    

    return (
        <>
            <div className="modal fade" id="modalBmi">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content" id="modal-content">
                        <div className="modal-heading">
                            <h2 className="modal-title">BMI</h2>
                            <span> (Body Mass Index)</span>
                        </div>
                        <div className="modal-header">
                            <button className="btn-close bg-white" id="modal-closeBtn" data-bs-dismiss="modal" type="button"></button>
                        </div>

                        <div className="modal-body">
                            <form>
                                <div className="form-floating mb-3 mt-3 weightDiv">
                                    <input type="number" className="form-control form-control-lg" id="weight" placeholder="Enter your weight" name="weight" />
                                    <label htmlFor="weight">Enter your weight(kg)</label>
                                </div>
                                <div className="form-floating mt-3 mb-3 heightDiv">
                                    <input type="number" className="form-control form-control-lg" id="height" placeholder="Enter your height" name="height" />
                                    <label htmlFor="height" >Enter your height(cm)</label>
                                </div>
                            </form>

                            <h4 id="result"></h4>
                            <p id="result-advice"></p>
                        </div>

                        <div className="modal-footer">
                            <button className="btn" id="bmi-submit">Check BMI!</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}