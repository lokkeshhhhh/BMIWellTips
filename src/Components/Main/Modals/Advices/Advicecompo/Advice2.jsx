import React from "react";

export default function Advice2(){
    return(
        <>
            <div className="modal fade" id="healthCM-2">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content" id="modal-content">
                            <div className="modal-heading">
                                <h3 className="modal-title px-5 pt-5">Boosting Metabolism Naturally</h3>
                            </div>
                            <div className="modal-header">
                                <button className="btn-close bg-white bmr-dismiss" id="modal-closeBtn" data-bs-dismiss="modal" type="button"></button>
                            </div>
                            <div className="modal-body" >
                                <p>
                                    Support your body's natural calorie-burning process by engaging in activities like walking, swimming, or dancing regularly.
                                    Add simple strength training exercises like squats and lunges to your routine to build muscle and boost metabolism. Aim for
                                    30 minutes of moderate-intensity exercise most days of the week.
                                </p>

                                <div className="accordion" id="accordion">
                                    <div className="card">
                                        <div className="card-header"><a href="#Metabolism" className="btn text-white ms-1"
                                            data-bs-toggle="collapse" id="Metabolism-btn">Expand for more ▼</a></div>
                                        <div className="collapse" id="Metabolism" data-bs-parent="#accordion">
                                            <div className="card-body">
                                                <div>
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