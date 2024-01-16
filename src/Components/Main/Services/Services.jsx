import React from "react";
import Methosinit from "../Home/Methodsinit/Methodsinit";
import "./Services.css"

export default function Services(){
    return(
        <>
            <div className="tab-pane container fade" id="services">
                <h2 className="services-heading">Our Services</h2>
                <div className="container-fluid-sm" id="home-content-2">
                    <Methosinit />
                </div>
            </div>
        </>
    )
}