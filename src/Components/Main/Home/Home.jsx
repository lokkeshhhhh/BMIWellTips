import React, { useEffect } from "react";
import './Home.css'
import Methosinit from "./Methodsinit/Methodsinit";
import Advicesinit from "./Advicesinit/Advicesinit";

export default function Home() {
    useEffect(() => {
        const elementsToLoad = document.querySelectorAll('.health-quote, .health-quote-2, .bmi-btn,.method-cards, .healthcare-advice-cards');

        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
            return (
                (rect.top <= windowHeight * 18 / 20 && rect.bottom > windowHeight / 2) ||
                (rect.top >= 0 && rect.bottom <= windowHeight)
            );
        }

        function handleScroll() {
            elementsToLoad.forEach((element) => {
                if (isInViewport(element) && !element.classList.contains('loaded')) {
                    element.classList.add('loaded');
                }
            });
        }

        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); 

    return (
        <>
            <div className="tab-pane active" id="home">
                {/* <!-- video background --> */}
                <div className="video-background">
                    <video autoPlay muted loop id="myVideo">
                        <source src="images/homev.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* <!-- content over video --> */}
                    <div className="content">
                        <div className="health-quote"><h1 className="text-center">"Wellness Within You"</h1></div>
                        <div className="bmi-btn"><a href="#home-content-2" ><button className="btn" id="home-bmi-btn">Measure Your Health</button></a></div>
                        <div className="health-quote-2"><p>Prioritizing optimal health indices is vital for well-being, reducing
                            the risk of chronic conditions. Aim for values within recommended ranges for each index to comprehensively
                            support your overall health and vitality, fostering a foundation for a thriving future.</p>
                        </div>
                    </div>

                </div>

                {/* <!-- other content (home content-2)--> */}
                <div className="container-fluid-sm" id="home-content-2">
                    {/* <!-- methods like BMI,BMR etc. --> */}
                    <Methosinit />

                    <hr className="m-5" /><h2 className="healthcare-advices-hd">Healthcare Advices</h2>
                    {/* <!-- healthcare advices --> */}
                    <Advicesinit />
                </div>
            </div>
        </>
    );
}
