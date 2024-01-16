import React from "react";

export default function Advice5(){
    return(
        <>
            <div className="modal fade" id="healthCM-5">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content" id="modal-content">
                            <div className="modal-heading">
                                <h3 className="modal-title px-5 pt-5">Simple Workouts for Body Fat Management</h3>
                            </div>
                            <div className="modal-header">
                                <button className="btn-close bg-white" id="modal-closeBtn" data-bs-dismiss="modal" type="button"></button>
                            </div>
                            <div className="modal-body">
                                <p>
                                    Manage body fat with straightforward aerobic exercises like walking, cycling, or dancing. These
                                    activities help burn calories and support fat loss. Incorporate full-body movements like jumping jacks
                                    or simple bodyweight exercises to elevate your heart rate. Monitor your progress and adapt your routine accordingly.
                                </p>

                                <div className="accordion" id="accordion">
                                    <div className="card">
                                        <div className="card-header"><a href="#Heart" className="btn text-white ms-1"
                                            data-bs-toggle="collapse" id="Heart-btn">Expand for more ▼</a></div>
                                        <div className="collapse" id="Heart" data-bs-parent="#accordion">
                                            <div className="card-body">
                                                <div>
                                                    <h5>1. Brisk Walking or Power Walking:</h5>
                                                    <p>
                                                        Take a brisk walk or engage in power walking around a local park or neighborhood. Focus on maintaining
                                                        a brisk pace to elevate your heart rate.
                                                    </p>

                                                    <h5>2. Jogging or Running:</h5>
                                                    <p>
                                                        Incorporate jogging or running into your outdoor routine. Start with a comfortable pace and gradually
                                                        increase intensity as your fitness improves.
                                                    </p>

                                                    <h5>3. Interval Sprinting:</h5>
                                                    <p>
                                                        Incorporate short bursts of sprinting followed by periods of walking or slow jogging. This interval
                                                        training can be done in a local park or on a trail.
                                                    </p>

                                                    <h5>4. Cycling:</h5>
                                                    <p>
                                                        Ride your bike on bike paths or scenic routes. Cycling is an excellent low-impact cardiovascular exercise
                                                        that also allows you to explore your surroundings.
                                                    </p>

                                                    <h5>5. Outdoor Bodyweight Exercises:</h5>
                                                    <p>
                                                        Perform bodyweight exercises like squats, lunges, push-ups, and burpees in a nearby park. Use benches or
                                                        elevated surfaces for modifications.
                                                    </p>

                                                    <h5>6. Hiking:</h5>
                                                    <p>
                                                        Explore hiking trails in nature reserves or parks. Hiking provides both cardiovascular benefits and an
                                                        opportunity to enjoy the outdoors.
                                                    </p>

                                                    <h5>7. Jump Rope:</h5>
                                                    <p>
                                                        Bring a jump rope to a local park and incorporate skipping into your workout. It's an effective cardiovascular
                                                        exercise that also improves coordination.
                                                    </p>

                                                    <h5>8. Stair Climbing:</h5>
                                                    <p>
                                                        Find a set of stairs, either at a park or a public space, and incorporate stair climbing into your routine.
                                                        It's an excellent way to work your lower body and boost cardiovascular fitness.
                                                    </p>

                                                    <h5>9. Nature Trail Walks:</h5>
                                                    <p>
                                                        Walk or jog along nature trails. Nature trails often offer a scenic and peaceful environment, providing a
                                                        refreshing change from traditional urban settings.
                                                    </p>

                                                    <h5>10. Play Sports:</h5>
                                                    <p>
                                                        Join a local sports group or gather friends for games like soccer, basketball, or volleyball. Playing sports
                                                        is a fun way to stay active and socialize.
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