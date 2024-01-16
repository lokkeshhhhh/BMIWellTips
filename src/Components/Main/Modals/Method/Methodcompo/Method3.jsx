import React, { useEffect } from "react";

export default function Method3() {

    useEffect(() => {
        document.querySelector("#whr-submit").addEventListener('click', () => {
            const waistValue = Number(document.getElementById("waist").value);
            const hipValue = Number(document.getElementById("hip").value);
            const isWomen = document.getElementById("isWomen");
            const isMen = document.getElementById("isMen");
            const resultAdvice = document.querySelector('#modalWhr #result-advice');

            const getWHR = (Math.round((waistValue / hipValue) * 100)) / 100;

            if (!isNaN(getWHR)) {
                document.querySelector('#modalWhr #result').innerHTML = `Your Waist-to-Hip Ratio (WHR) currently stands at ${getWHR}`;
            }

            if (getWHR <= 0.85 && isWomen.checked) {
                resultAdvice.innerHTML = ` Your Waist-to-Hip Ratio (WHR) is normal. According to the result, 
                your body fat distribution appears to be healthy, and you might be fine. Explore our diet and exercise 
                plans for personalized guidance on achieving a healthy and sustainable lifestyle.`;
            } else if (getWHR <= 0.90 && isWomen.checked) {
                resultAdvice.innerHTML = `Your WHR suggests a slightly increased health risk. It's advisable to monitor 
                your lifestyle and consult with healthcare professionals for personalized advice. Explore our diet and exercise 
                plans for personalized guidance on achieving a healthy and sustainable lifestyle.`;
            } else if (getWHR > 0.90 && isWomen.checked) {
                resultAdvice.innerHTML = `Your WHR indicates a significantly increased health risk. It's recommended to discuss 
                this result with healthcare professionals for further evaluation and guidance. Explore our diet and exercise plans 
                for personalized guidance on achieving a healthy and sustainable lifestyle.`;
            } else if (getWHR < 0.35 && isWomen.checked) {
                resultAdvice.innerHTML = `Your WHR indicates a significantly increased health risk. It's recommended to discuss 
                this result with healthcare professionals for further evaluation and guidance. Explore our diet and exercise plans 
                for personalized guidance on achieving a healthy and sustainable lifestyle.`;
            }

            if (getWHR <= 0.90 && isMen.checked) {
                resultAdvice.innerHTML = `Your Waist-to-Hip Ratio (WHR) falls within the normal range. Based on this result, your body 
                fat distribution seems healthy, and you might be fine. Explore our diet and exercise plans 
                for personalized guidance on achieving a healthy and sustainable lifestyle.`;
            } else if (getWHR <= 0.95 && isMen.checked) {
                resultAdvice.innerHTML = `Your WHR suggests a slightly increased health risk. Consider maintaining a healthy lifestyle, and 
                consulting with healthcare professionals can provide personalized insights. Explore our diet and exercise plans 
                for personalized guidance on achieving a healthy and sustainable lifestyle.`;
            } else if (getWHR > 0.95 && isMen.checked) {
                resultAdvice.innerHTML = `Your WHR indicates a significantly increased health risk. It's advisable to seek guidance from healthcare 
                professionals to address potential health concerns associated with this result. Explore our diet and exercise plans 
                for personalized guidance on achieving a healthy and sustainable lifestyle.`;
            } else if (getWHR < 0.4 && isMen.checked) {
                resultAdvice.innerHTML = `Your WHR indicates a significantly increased health risk. It's advisable to seek guidance from healthcare 
                professionals to address potential health concerns associated with this result. Explore our diet and exercise plans 
                for personalized guidance on achieving a healthy and sustainable lifestyle.`;
            }
        })


        document.querySelector("#modalWhr #modal-closeBtn").addEventListener('click', () => {
            document.querySelector('#modalWhr #hip').value = "";
            document.querySelector('#modalWhr #waist').value = "";
            document.querySelector('#modalWhr #result').innerHTML = '';
            document.querySelector('#modalWhr #result-advice').innerHTML = "";
        })
    }, [])

    return (
        <>
            <div className="modal fade" id="modalWhr">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content" id="modal-content">
                        <div className="modal-heading">
                            <h2 className="modal-title">WHR</h2>
                            <span> (Waist Hip Rate)</span>
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
                                            <h4>1. Measure Waist Circumference:</h4>
                                            <p>Measure the circumference of the narrowest part of the waist, usually above the belly button.</p>
                                            <hr />
                                            <h4>2. Measure Hip Circumference:</h4>
                                            <p>Measure the circumference of the hips at the widest part, typically around the buttocks.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <form>
                                <div className="form-floating mb-3 mt-3 weightDiv">
                                    <input type="number" className="form-control form-control-lg" id="waist" placeholder="Enter your Waist Measures" name="waist" />
                                    <label htmlFor="waist">Enter your Waist Measures(cm)</label>
                                </div>
                                <div className="form-floating mt-3 mb-3 heightDiv">
                                    <input type="number" className="form-control form-control-lg" id="hip" placeholder="Enter your Hip Measures" name="hip" />
                                    <label htmlFor="hip" >Enter your Hip Measures(cm)</label>
                                </div>
                                <div className="genderDiv form-check">
                                    <input type="radio" className="form-check-input" id="isMen" name="gender" value="men" defaultChecked />
                                    <label htmlFor="isMen" className="form-check-lable">Men?</label>
                                </div>
                                <div className="genderDiv form-check">
                                    <input type="radio" className="form-check-input" id="isWomen" name="gender" value="women" />
                                    <label htmlFor="isWomen" className="form-check-lable">Women?</label>
                                </div>
                            </form>

                            <h4 id="result" className="mt-3"></h4>
                            <p id="result-advice"></p>
                        </div>

                        <div className="modal-footer">
                            <button className="btn" id="whr-submit">Check WHR!</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}