import React from "react";
import './Main.css'
import Home from "./Home/Home";
import Methods from "./Modals/Method/Methods"
import Advices from "./Modals/Advices/Advices"
import Services from "./Services/Services";
import Contacts from "./Contacts/Contacts";
import About from "./About/About";
import Blogs from "./Blogs/Blogs";


export default function Main() {
    
    return (
        <>
            <main>
                <div className="tab-content container-fluid-lg w-100">
                    <Home />
                    <Methods />
                    <Advices />
                    <Services />
                    <Contacts />
                    <About />
                    <Blogs />
                </div>

                
                {/* <!-- thank you note --> */}
                <div className="mt-5  thankyou-note">
                    <div className="text-center mt-5 mb-5 thankyou">Thanks For Choosing Us</div>
                </div>
            </main>
        </>

    )
}