import React from "react";

export default function Method5(){
    return(
        <>
            <div className="modal fade" id="modalBvi">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content" id="modal-content">
                            <div className="modal-heading">
                                <h2 className="modal-title">BVI</h2>
                                <span> (Body Volume Index)</span>
                            </div>
                            <div className="modal-header">
                                <button className="btn-close bg-white" id="modal-closeBtn" data-bs-dismiss="modal" type="button"></button>
                            </div>

                            <div className="modal-body">

                                <div className="accordion" id="accordion">
                                    <div className="card" id="forMen">
                                        <div className="card-header"><a href="#instructions" className="btn text-white  instructions"
                                            data-bs-toggle="collapse" id="instructions-btn">Expand for Details ▼</a></div>
                                        <div className="collapse" id="instructions" data-bs-parent="#accordion">
                                            <div className="card-body">
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
        </>
    )
}