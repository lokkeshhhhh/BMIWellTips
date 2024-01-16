import React, { useEffect } from "react";

export default function Method4(){

    useEffect(() => {
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


        document.querySelector("#modalWhtr #modal-closeBtn").addEventListener('click', () => {
            document.querySelector('#modalWhtr #height').value = "";
            document.querySelector('#modalWhtr #waist').value = "";
            document.querySelector('#modalWhtr #result').innerHTML = '';
            document.querySelector('#modalWhtr #result-advice').innerHTML = "";
        })
    })

    return(
        <>
            <div className="modal fade" id="modalWhtr">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content" id="modal-content">
                            <div className="modal-heading">
                                <h2 className="modal-title">WHrT</h2>
                                <span> (Waist to Height Ratio)</span>
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
                                                    <h4>2. Measure Height:</h4>
                                                    <p>Stand against a flat surface.
                                                        Remove shoes, ensure heels, back, and head against the wall.
                                                        Use ruler or tape to measure height floor to top of head.</p>
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
                                        <input type="number" className="form-control form-control-lg" id="height" placeholder="Enter your Height Measures" name="height" />
                                            <label htmlFor="height" >Enter your Height Measures(cm)</label>
                                    </div>
                                    <div className="genderDiv form-check">
                                        <input type="radio" className="form-check-input" id="isMen" name="gender" value="men" defaultChecked  />
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
                                <button className="btn" id="whtr-submit">Check WHrT!</button>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}