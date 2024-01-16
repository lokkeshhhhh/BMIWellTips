import React, { useEffect } from "react";

export default function Method6() {

    useEffect(() => {

        document.querySelector("#bia-submit").addEventListener('click', () => {
            const hipValue = Number(document.querySelector("#modalBai #hip").value);
            const heightValue = Number(document.querySelector("#modalBai #height").value) / 100;
            const resultAdvice = document.querySelector('#modalBai #result-advice');

            const getBAI = (hipValue / Math.pow(heightValue, 1.5)) - 18;

            if (!isNaN(getBAI) && getBAI != Infinity) {
                document.querySelector('#modalBai #result').innerHTML = `Your Body Adiposity Index (BAI) currently stands at ${(Math.round(getBAI * 100)) / 100} `;

                if (getBAI < 8) {
                    resultAdvice.innerHTML = `Ensure you are meeting your nutritional needs and consult with a healthcare professional or a nutritionist. Being 
            underweight can also pose health risks, so it's important to address this with guidance from a medical professional.`;
                } else if (getBAI < 21) {
                    resultAdvice.innerHTML = ` Maintain a balanced diet, engage in regular physical activity, and focus on overall well-being. While you are 
            within a healthy range, always stay vigilant about your lifestyle choices to avoid potential health issues.`;
                } else if (getBAI <= 25) {
                    resultAdvice.innerHTML = `Recognize the potential health risks associated with excess body weight, such as cardiovascular issues and metabolic 
            conditions. Consider making lifestyle changes like incorporating regular exercise, adjusting your diet, and seeking guidance from healthcare professionals.`;
                } else if (getBAI > 25) {
                    resultAdvice.innerHTML = `Acknowledge the increased health risks associated with obesity, including a higher likelihood of cardiovascular diseases, diabetes, 
            and other conditions. Urgently consult with healthcare professionals to develop a comprehensive plan for weight management, which may include dietary changes, 
            increased physical activity, and potential medical interventions.`;
                }
            } else {
                document.querySelector('#modalBai #result').innerHTML = `Something definitely went wrong!`;
            }

        })


        document.querySelector("#modalBai #modal-closeBtn").addEventListener('click', () => {
            document.querySelector('#modalBai #hip').value = "";
            document.querySelector('#modalBai #height').value = "";
            document.querySelector('#modalBai #result').innerHTML = '';
            document.querySelector('#modalBai #result-advice').innerHTML = "";
        })
    }, [])

    return (
        <>
            <div className="modal fade" id="modalBai">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content" id="modal-content">
                        <div className="modal-heading">
                            <h2 className="modal-title">BAI</h2>
                            <span> ( Body Adiposity Index)</span>
                        </div>
                        <div className="modal-header">
                            <button className="btn-close bg-white" id="modal-closeBtn" data-bs-dismiss="modal" type="button"></button>
                        </div>

                        <div className="modal-body">

                            <div className="accordion" id="accordion">
                                <div className="card" id="forMen">
                                    <div className="card-header"><a href="#instructions" className="btn text-white ms-1 instructions"
                                        data-bs-toggle="collapse" id="instructions-btn">Instructions</a></div>
                                    <div className="collapse" id="instructions" data-bs-parent="#accordion">
                                        <div className="card-body">
                                            <h4>1. Measure Hip Circumference:</h4>
                                            <p>Measure the circumference of the hips at the widest part, typically around the buttocks.</p>
                                            <hr />
                                            <h4>2. Measure Height:</h4>
                                            <p>Stand against a flat surface.
                                                Remove shoes, ensure heels, back, and head against the wall.
                                                Use ruler or tape to measure height floor to top of head.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <form>
                                <div className="form-floating mb-3 mt-3 hipDiv">
                                    <input type="number" className="form-control form-control-lg" id="hip" placeholder="Enter your Hip Measures" name="hip" />
                                    <label htmlFor="hip">Enter your Hip Measures(cm)</label>
                                </div>
                                <div className="form-floating mt-3 mb-3 heightDiv">
                                    <input type="number" className="form-control form-control-lg" id="height" placeholder="Enter your Height Measures" name="height" />
                                    <label htmlFor="height" >Enter your Height Measures(cm)</label>
                                </div>
                            </form>

                            <h4 id="result" className="mt-3"></h4>
                            <p id="result-advice"></p>
                        </div>

                        <div className="modal-footer">
                            <button className="btn" id="bia-submit">Check BIA!</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}