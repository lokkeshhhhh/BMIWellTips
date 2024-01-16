import React from "react";

export default function Methosinit(){
    
    return(
        <>
            <div className="methods container-fluid-sm">
                        <div className="first-row-methods container-fluid-sm">
                            <div className="method-cards container-fluid-sm card frcr-1">
                                <div className="what-method container-fluid-sm">Body Mass Index (BMI) measures weight relative to height.</div>
                                <span><button className="btn" data-bs-toggle="modal" data-bs-target="#modalBmi">Measure</button></span>
                            </div>
                            <div className="method-cards container-fluid-sm card frcr-2">
                                <div className="what-method container-fluid-sm">BMR stands for Basal Metabolic Rate. It measures resting energy expenditure.</div>
                                <span><button className="btn" data-bs-toggle="modal" data-bs-target="#modalBmr">Measure</button></span>
                            </div>
                            <div className="method-cards container-fluid-sm card frcr-3">
                                <div className="what-method container-fluid-sm">WHR stands for Waist-to-Hip Ratio. It assesses body fat distribution.</div>
                                <span><button className="btn" data-bs-toggle="modal" data-bs-target="#modalWhr">Measure</button></span>
                            </div>

                            <div className="method-cards container-fluid-sm card frcr-4">
                                <div className="what-method container-fluid-sm">WHtR stands for Waist-to-Height Ratio. It assesses central obesity and health risk.</div>
                                <span><button className="btn" data-bs-toggle="modal" data-bs-target="#modalWhtr">Measure</button></span>
                            </div>
                            <div className="method-cards container-fluid-sm card frcr-5">
                                <div className="what-method container-fluid-sm">BVI stands for Body Volume Index. It assesses body composition and shape.</div>
                                <span><button className="btn" data-bs-toggle="modal" data-bs-target="#modalBvi">Measure</button></span>
                            </div>
                            <div className="method-cards container-fluid-sm card frcr-6">
                                <div className="what-method container-fluid-sm">BAI (Body Adiposity Index), which estimates body fat percentage.</div>
                                <span><button className="btn" data-bs-toggle="modal" data-bs-target="#modalBai">Measure</button></span>
                            </div>
                        </div>
                    </div>
        </>
    )
}