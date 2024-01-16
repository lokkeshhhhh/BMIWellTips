import React from "react";

export default function Advice6(){
    return(
        <>
            <div className="modal fade" id="healthCM-6">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content" id="modal-content">
                            <div className="modal-heading">
                                <h3 className="modal-title px-5 pt-5">Healthy Diet & Nutrition Focus</h3>
                            </div>
                            <div className="modal-header">
                                <button className="btn-close bg-white" id="modal-closeBtn" data-bs-dismiss="modal" type="button"></button>
                            </div>
                            <div className="modal-body">
                                <p>
                                    Pair your exercise routine with a focus on nutrition. Plan high-intensity workouts around protein-rich
                                    meals for muscle support. Match low-intensity activities with balanced meals for sustained energy. Tailor
                                    your exercise and nutrition choices to support your overall well-being.
                                </p>

                                <div className="accordion" id="accordion">
                                    <div className="card">
                                        <div className="card-header"><a href="#diet" className="btn text-white ms-1"
                                            data-bs-toggle="collapse" id="diet-btn">Expand for more ▼</a></div>
                                        <div className="collapse" id="diet" data-bs-parent="#accordion">
                                            <div className="card-body">
                                                <div>
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
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}