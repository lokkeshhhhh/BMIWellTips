const methodModals = 
    `<div class="home-modals healthcare-methods">
    <div class="modal fade" id="modalBmi">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content" id="modal-content">
                <div class="modal-heading">
                    <h2 class="modal-title">BMI</h2>
                    <span> (Body Mass Index)</span>
                </div>
                <div class="modal-header">
                    <button class="btn-close bg-white" id="modal-closeBtn" data-bs-dismiss="modal" type="button"></button>
                </div>

                <div class="modal-body">
                    <form>
                        <div class="form-floating mb-3 mt-3 weightDiv">
                            <input type="number" class="form-control form-control-lg" id="weight" placeholder="Enter your weight" name="weight">
                            <label for="weight">Enter your weight(kg)</label>
                        </div>
                        <div class="form-floating mt-3 mb-3 heightDiv">
                            <input type="number" class="form-control form-control-lg" id="height" placeholder="Enter your height" name="height">
                            <label for="height" >Enter your height(cm)</label>
                        </div>
                    </form>

                    <h4 id="result"></h4>
                    <p id="result-advice"></p>
                </div>

                <div class="modal-footer">
                    <button class="btn" id="bmi-submit">Check BMI!</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="modalBmr">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content" id="modal-content">
                <div class="modal-heading">
                    <h2 class="modal-title">BMR</h2>
                    <span> (Basal Metabolic Rate )</span>
                </div>
                <div class="modal-header">
                    <button class="btn-close bg-white bmr-dismiss" id="modal-closeBtn" data-bs-dismiss="modal" type="button"></button>
                </div>

                <div class="modal-body" >
                    <div class="accordion accordion-bmr" id="accordion">
                        <div class="card" id="forMen">
                            <div class="card-header"><a href="#men-bmr" class="btn text-white ms-1"
                                    data-bs-toggle="collapse" id="men-bmr-btn">For Men </a></div>
                            <div class="collapse" id="men-bmr" data-bs-parent="#accordion">
                                <div class="card-body">
                                    
                                        <form>
                                            <div class="form-floating mb-3 mt-3 weightDiv">
                                                <input type="number" class="form-control form-control-lg" id="weightMen" placeholder="Enter your weight" name="weight">
                                                <label for="weight">Enter your weight(kg)</label>
                                            </div>
                                            <div class="form-floating mt-3 mb-3 heightDiv">
                                                <input type="number" class="form-control form-control-lg" id="heightMen" placeholder="Enter your height" name="height">
                                                <label for="height" >Enter your height(cm)</label>
                                            </div>
                                            <div class="form-floating mt-3 mb-3 ageDiv">
                                                <input type="number" class="form-control form-control-lg" id="ageMen" placeholder="Enter your height" name="age" >
                                                <label for="age" >Enter your age(years)</label>
                                            </div>
                                            <div class="exerciseDiv form-check">
                                                <input type="radio" class="form-check-input" id="dExerciseM" name="Exercise">
                                                <label for="dExerciseM" class="form-check-lable">Exercise On Daily Basis?</label>
                                            </div>
                                            <div class="exerciseDiv form-check">
                                                <input type="radio" class="form-check-input" id="d3ExerciseM" name="Exercise">
                                                <label for="d3ExerciseM" class="form-check-lable">Exercise 3 days a week?</label>
                                            </div>
                                            <div class="exerciseDiv form-check">
                                                <input type="radio" class="form-check-input" id="NOExerciseW" name="Exercise">
                                                <label for="NOExerciseW" class="form-check-lable">No Exercise ?</label>
                                            </div>
                                        </form>
                                    
                                </div>
                            </div>
                        </div>
                
                        <div class="card" id="forWomen">
                            <div class="card-header"><a href="#women-bmr" id="women-bmr-btn" class="collapsed btn text-white"
                                    data-bs-toggle="collapse"> For  women   </a></div>
                            <div class="collapse" id="women-bmr" data-bs-parent="#accordion">
                                <div class="card-body">
                                    
                                        <form>
                                            <div class="form-floating mb-3 mt-3 weightDiv">
                                                <input type="number" class="form-control form-control-lg" id="weightWomen" placeholder="Enter your weight" name="weight" >
                                                <label for="weight">Enter your weight(kg)</label>
                                            </div>
                                            <div class="form-floating mt-3 mb-3 heightDiv">
                                                <input type="number" class="form-control form-control-lg" id="heightWomen" placeholder="Enter your height" name="height" >
                                                <label for="height" >Enter your height(cm)</label>
                                            </div>
                                            <div class="form-floating mt-3 mb-3 ageDiv">
                                                <input type="number" class="form-control form-control-lg" id="ageWomen" placeholder="Enter your height" name="age" >
                                                <label for="age" >Enter your age(years)</label>
                                            </div>
                                            <div class="exerciseDiv form-check">
                                                <input type="radio" class="form-check-input" id="dExerciseW" name="Exercise">
                                                <label for="dExerciseW" class="form-check-lable">Exercise On Daily Basis?</label>
                                            </div>
                                            <div class="exerciseDiv form-check">
                                                <input type="radio" class="form-check-input" id="d3ExerciseW" name="Exercise">
                                                <label for="d3ExerciseW" class="form-check-lable">Exercise 3 days a week?</label>
                                            </div>
                                            <div class="exerciseDiv form-check">
                                                <input type="radio" class="form-check-input" id="NOExerciseW" name="Exercise">
                                                <label for="NOExerciseW" class="form-check-lable">No Exercise?</label>
                                            </div>
                                        </form>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <h4 id="result"></h4>
                    <p id="result-advice"></p>
                </div>

                <div class="modal-footer">
                    <button class="btn" id="bmr-submit">Check BMR!</button>
                </div> 
            </div>
        </div>
    </div>

    <div class="modal fade" id="modalWhr">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content" id="modal-content">
                <div class="modal-heading">
                    <h2 class="modal-title">WHR</h2>
                    <span> (Waist Hip Rate)</span>
                </div>
                <div class="modal-header">
                    <button class="btn-close bg-white" id="modal-closeBtn" data-bs-dismiss="modal" type="button"></button>
                </div>

                <div class="modal-body">

                    <div class="accordion" id="accordion">
                        <div class="card" id="forMen">
                            <div class="card-header"><a href="#instructions" class="btn text-white ms-1 instructions"
                                    data-bs-toggle="collapse" id="instructions-btn">Instructions</a></div>
                            <div class="collapse" id="instructions" data-bs-parent="#accordion">
                                <div class="card-body">
                                    <h4>1. Measure Waist Circumference:</h4>
                                    <p>Measure the circumference of the narrowest part of the waist, usually above the belly button.</p>
                                    <hr>
                                    <h4>2. Measure Hip Circumference:</h4>
                                    <p>Measure the circumference of the hips at the widest part, typically around the buttocks.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form>
                        <div class="form-floating mb-3 mt-3 weightDiv">
                            <input type="number" class="form-control form-control-lg" id="waist" placeholder="Enter your Waist Measures" name="waist">
                            <label for="waist">Enter your Waist Measures(cm)</label>
                        </div>
                        <div class="form-floating mt-3 mb-3 heightDiv">
                            <input type="number" class="form-control form-control-lg" id="hip" placeholder="Enter your Hip Measures" name="hip">
                            <label for="hip" >Enter your Hip Measures(cm)</label>
                        </div>
                        <div class="genderDiv form-check">
                            <input type="radio" class="form-check-input" id="isMen" name="gender" value="men" checked>
                            <label for="isMen" class="form-check-lable">Men?</label>
                        </div>
                        <div class="genderDiv form-check">
                            <input type="radio" class="form-check-input" id="isWomen" name="gender" value="women">
                            <label for="isWomen" class="form-check-lable">Women?</label>
                        </div>
                    </form>

                    <h4 id="result" class="mt-3"></h4>
                    <p id="result-advice"></p>
                </div>

                <div class="modal-footer">
                    <button class="btn" id="whr-submit">Check WHR!</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="modalWhtr">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content" id="modal-content">
                <div class="modal-heading">
                    <h2 class="modal-title">WHrT</h2>
                    <span> (Waist to Height Ratio)</span>
                </div>
                <div class="modal-header">
                    <button class="btn-close bg-white" id="modal-closeBtn" data-bs-dismiss="modal" type="button"></button>
                </div>

                <div class="modal-body">

                    <div class="accordion" id="accordion">
                        <div class="card" id="forMen">
                            <div class="card-header"><a href="#instructions" class="btn text-white ms-1 instructions"
                                    data-bs-toggle="collapse" id="instructions-btn">Instructions</a></div>
                            <div class="collapse" id="instructions" data-bs-parent="#accordion">
                                <div class="card-body">
                                    <h4>1. Measure Waist Circumference:</h4>
                                    <p>Measure the circumference of the narrowest part of the waist, usually above the belly button.</p>
                                    <hr>
                                    <h4>2. Measure Height:</h4>
                                    <p>Stand against a flat surface.
                                        Remove shoes, ensure heels, back, and head against the wall.
                                        Use ruler or tape to measure height floor to top of head.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form>
                        <div class="form-floating mb-3 mt-3 weightDiv">
                            <input type="number" class="form-control form-control-lg" id="waist" placeholder="Enter your Waist Measures" name="waist">
                            <label for="waist">Enter your Waist Measures(cm)</label>
                        </div>
                        <div class="form-floating mt-3 mb-3 heightDiv">
                            <input type="number" class="form-control form-control-lg" id="height" placeholder="Enter your Height Measures" name="height">
                            <label for="height" >Enter your Height Measures(cm)</label>
                        </div>
                        <div class="genderDiv form-check">
                            <input type="radio" class="form-check-input" id="isMen" name="gender" value="men" checked>
                            <label for="isMen" class="form-check-lable">Men?</label>
                        </div>
                        <div class="genderDiv form-check">
                            <input type="radio" class="form-check-input" id="isWomen" name="gender" value="women">
                            <label for="isWomen" class="form-check-lable">Women?</label>
                        </div>
                    </form>

                    <h4 id="result" class="mt-3"></h4>
                    <p id="result-advice"></p>
                </div>

                <div class="modal-footer">
                    <button class="btn" id="whtr-submit">Check WHrT!</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="modalBvi">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content" id="modal-content">
                <div class="modal-heading">
                    <h2 class="modal-title">BVI</h2>
                    <span> (Body Volume Index)</span>
                </div>
                <div class="modal-header">
                    <button class="btn-close bg-white" id="modal-closeBtn" data-bs-dismiss="modal" type="button"></button>
                </div>

                <div class="modal-body">

                    <div class="accordion" id="accordion">
                        <div class="card" id="forMen">
                            <div class="card-header"><a href="#instructions" class="btn text-white  instructions"
                                    data-bs-toggle="collapse" id="instructions-btn">Expand for Details ▼</a></div>
                            <div class="collapse" id="instructions" data-bs-parent="#accordion">
                                <div class="card-body">
                                    <p>Understanding your body composition, including advanced metrics like BVI, often 
                                        requires physical tests such as 3D scanning that cannot be conducted online. To 
                                        ensure accurate assessments and tailored recommendations, it's advisable to consult 
                                        with medical specialists in person. Visit a healthcare facility equipped with the necessary 
                                        technology for a comprehensive evaluation of your health. Your well-being is worth the precision 
                                        and expertise that a physical examination can provide.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="modalBai">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content" id="modal-content">
                <div class="modal-heading">
                    <h2 class="modal-title">BAI</h2>
                    <span> ( Body Adiposity Index)</span>
                </div>
                <div class="modal-header">
                    <button class="btn-close bg-white" id="modal-closeBtn" data-bs-dismiss="modal" type="button"></button>
                </div>

                <div class="modal-body">

                    <div class="accordion" id="accordion">
                        <div class="card" id="forMen">
                            <div class="card-header"><a href="#instructions" class="btn text-white ms-1 instructions"
                                    data-bs-toggle="collapse" id="instructions-btn">Instructions</a></div>
                            <div class="collapse" id="instructions" data-bs-parent="#accordion">
                                <div class="card-body">
                                    <h4>1. Measure Hip Circumference:</h4>
                                    <p>Measure the circumference of the hips at the widest part, typically around the buttocks.</p>
                                    <hr>
                                    <h4>2. Measure Height:</h4>
                                    <p>Stand against a flat surface.
                                        Remove shoes, ensure heels, back, and head against the wall.
                                        Use ruler or tape to measure height floor to top of head.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form>
                        <div class="form-floating mb-3 mt-3 hipDiv">
                            <input type="number" class="form-control form-control-lg" id="hip" placeholder="Enter your Hip Measures" name="hip">
                            <label for="hip">Enter your Hip Measures(cm)</label>
                        </div>
                        <div class="form-floating mt-3 mb-3 heightDiv">
                            <input type="number" class="form-control form-control-lg" id="height" placeholder="Enter your Height Measures" name="height">
                            <label for="height" >Enter your Height Measures(cm)</label>
                        </div>
                    </form>

                    <h4 id="result" class="mt-3"></h4>
                    <p id="result-advice"></p>
                </div>

                <div class="modal-footer">
                    <button class="btn" id="bia-submit">Check BIA!</button>
                </div>
            </div>
        </div>
    </div>
</div>`;

document.getElementById("healthcare-methods-main").innerHTML = methodModals;