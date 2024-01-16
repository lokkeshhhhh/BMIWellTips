import React from "react";

export default function Advice3(){
    return(
        <>
            <div className="modal fade" id="healthCM-3">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content" id="modal-content">
                            <div className="modal-heading">
                                <h3 className="modal-title px-5 pt-5">Heart-Healthy Cardiovascular Fitness</h3>
                            </div>
                            <div className="modal-header">
                                <button className="btn-close bg-white" id="modal-closeBtn" data-bs-dismiss="modal" type="button"></button>
                            </div>
                            <div className="modal-body">
                                <p>
                                    Enhance your heart health and promote balanced fat distribution by incorporating activities like jogging,
                                    swimming, or cycling into your weekly routine. Include short bursts of higher intensity, such as faster
                                    walking or brief sprints, to increase cardiovascular benefits. Strengthen your core with exercises like
                                    planks to support overall fitness.
                                </p>

                                <div className="accordion" id="accordion">
                                    <div className="card">
                                        <div className="card-header"><a href="#Heart" className="btn text-white ms-1"
                                            data-bs-toggle="collapse" id="Heart-btn">Expand for more ▼</a></div>
                                        <div className="collapse" id="Heart" data-bs-parent="#accordion">
                                            <div className="card-body">
                                                <div>
                                                    <h5>1. Aerobic Exercises:</h5>
                                                    <p>
                                                        Engage in regular aerobic exercises such as brisk walking, running, cycling, swimming, or dancing. Aim for at
                                                        least 150 minutes of moderate-intensity aerobic activity per week.
                                                    </p>

                                                    <h5>2. Interval Training:</h5>
                                                    <p>
                                                        Incorporate interval training into your routine. Alternating between short bursts of high-intensity exercise and
                                                        periods of lower intensity can improve cardiovascular fitness more efficiently.
                                                    </p>

                                                    <h5>3. Choose Activities You Enjoy:</h5>
                                                    <p>
                                                        Select activities you enjoy to make cardiovascular exercise more sustainable. Whether it's hiking, playing sports, or
                                                        group fitness classes, finding enjoyable activities can enhance motivation.
                                                    </p>

                                                    <h5>4. Gradual Progression:</h5>
                                                    <p>
                                                        Start gradually and progress steadily. If you're new to exercise or returning after a break, ease into your routine to
                                                        prevent injuries and allow your body to adapt.
                                                    </p>

                                                    <h5>5. Consistency Matters:</h5>
                                                    <p>
                                                        Consistency is key for cardiovascular fitness. Aim for regular, weekly sessions to maintain and improve heart health. Schedule
                                                        workouts as appointments to prioritize your cardiovascular health.
                                                    </p>

                                                    <h5>6. Warm-up and Cool Down:</h5>
                                                    <p>
                                                        Always include warm-up and cool-down periods in your cardiovascular workouts. This helps prepare your body for exercise and
                                                        facilitates a gradual return to your resting state, reducing the risk of injury.
                                                    </p>

                                                    <h5>7. Monitor Intensity:</h5>
                                                    <p>
                                                        Pay attention to exercise intensity. Use perceived exertion, heart rate monitors, or fitness trackers to ensure you're working at
                                                        an intensity that challenges your cardiovascular system without overexertion.
                                                    </p>

                                                    <h5>8. Incorporate Variety:</h5>
                                                    <p>
                                                        Mix up your cardiovascular activities to prevent boredom and ensure you're working different muscle groups. This can include
                                                        alternating between running and cycling or trying new fitness classes.
                                                    </p>

                                                    <h5>9. Strength Training:</h5>
                                                    <p>
                                                        Include strength training exercises in your routine. Building muscle can improve overall cardiovascular health and enhance your
                                                        ability to perform aerobic activities.
                                                    </p>

                                                    <h5>10. Set Realistic Goals:</h5>
                                                    <p>
                                                        Establish realistic and achievable goals for your cardiovascular fitness. Whether it's increasing your running distance or improving
                                                        your cycling speed, setting and achieving goals can boost motivation.
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