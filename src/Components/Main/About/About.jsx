import React, { useEffect } from "react";
import './About.css'


export default function About() {

    const style = {
        display: 'flex',
        justifyContent: 'center'
    }

    useEffect(() => {
        document.getElementById("about-btn").addEventListener('click', () => {

            const elementsToLoad = document.querySelectorAll('.about-pg');

            function isInViewport(element) {
                const rect = element.getBoundingClientRect();
                const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
                return (
                    (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) ||
                    (rect.top >= 0 && rect.bottom <= windowHeight)
                );
            }


            function handleScroll() {
                elementsToLoad.forEach((element) => {
                    const texts = document.querySelectorAll("#second-1 ,#second-2");

                    if (isInViewport(element) && !element.classList.contains('loaded')) {
                        element.classList.add('loaded');
                        // text's fade
                        if (elementsToLoad[0].classList.contains('loaded')) {
                            texts[0].style.opacity = 1;
                            texts[0].style.transform = "translateX(0px)";
                        }
                        if (elementsToLoad[1].classList.contains('loaded')) {
                            texts[1].style.opacity = 1;
                            texts[1].style.transform = "translateX(0px)";
                        }
                    }
                });
            }

            handleScroll();
            window.addEventListener('scroll', handleScroll);

        })

    }, [])

    return (
        <>
            <div className="tab-pane container-fluid-sm  fade" id="about">
                {/* <!-- page 1 --> */}
                <div className="container-fluid-sm about-pg card-fist" id="about-pg1">
                    {/* <!-- banner and links --> */}
                    <div className="first p-5 container-fluid-sm">
                        <div className="first-child container-fluid-sm p-2">
                            <img src="images/Online Doctor Consultation Instagram Post (1).png" className="img-fluid" alt="logo" width="250px" /><br /><br />
                            <h2 className="text-center">BMIWellTips</h2>
                            <p className="text-center">HealthCare Adviser</p>
                            <div className="container-fluid-sm" id="btn-div">
                                <button className="btn container-fluid-sm" type="button" id="about-bmi">Measure Your Health!</button>
                            </div>
                            <p className="text-center mt-3">Follow Us On :</p>
                            <div className="container-fluid-sm p-1" id="btn-div">
                                <a href="https://instagram.com/lokkeshhhhh?utm_source=qr&igshid=YzU1NGVlODEzOA==" target="_blank"><img src="images/socials/insta-b.png" alt="Instagram" width="40px" className="m-2" /></a>
                                <a href="https://twitter.com/lokkeshhhhh" target="_blank"><img src="images/socials/x-b.png" alt="Twitter" width="40px" className="m-2" /></a>
                                <a href="https://facebook.com" target="_blank"><img src="images/socials/fb-b.png" alt="Facebook" width="40px" className="m-2" /></a>
                                <a href="https://www.linkedin.com/in/lokesh-kumawat-1b1692280/" target="_blank"><img src="images/socials/link-b.png" alt="LinkedIn" width="40px" className="m-2" /></a>
                            </div>
                        </div>

                    </div>

                    <div className="second p-5 container-fluid-sm" id="second-1">
                        <h1 className="p-1 mt-5 ms-3">About Us </h1>
                        <p className="p-1 ms-3">"Welcome to BMIWellTips, where personalized health advice meets precision.
                            Utilizing our accurate BMI, BMR, WHR, etc. calculators, we offer tailored recommendations for your unique
                            well-being. Beyond generic advice,we focus on nutrition, exercise, and overall health, ensuring
                            a customized approach. Empower yourself with insights aligned to your body's needs. <br />Join us
                            on a journey towards optimal health, where precision matters."</p><br />
                        <div className="container-fluid-sm" id="btn-div">
                            <button className="btn container-fluid-sm m-3" type="button"><a href="mailto:bmiwelltips@gmail.com"> <i className="fas fa-envelope"></i> Mail Us</a></button>
                            <button className="btn container-fluid-sm m-3 " type="button" id="about-developer">About Developer</button>
                        </div>

                    </div>
                </div>
                <hr /><span style={style}><span className=" middle-logo">BMIWellTips</span></span>

                {/* <!-- page 2 --> */}
                <div className="container-fluid-sm about-pg card-fist" id="about-pg2">
                    <div className="second p-5 container-fluid-sm" id="second-2">
                        <h3 className="p-1 mt-5 ms-3">How We Deliver Results  </h3>
                        <p className="p-1 ms-3">"We may not have doctors in our office, but we're dedicated to giving you
                            the best healthcare advice. We carefully study Body Mass Index (BMI), Basal Metabolic Rate(BMR), Waist Hip Rate(WHR), Waist to Height Ratio(WHtR), Body Adiposity Index(BAI) to provide personalized
                            tips for your well-being. Our team stays updated on the latest health info to ensure our advice
                            is reliable. Even without traditional medical staff, we're committed to your health, empowering you with
                            knowledge for smart lifestyle choices. Your well-being is our top priority, and we're proud to offer researched
                            and personalized results to help you lead a healthier, happier life."
                        </p><br />
                        <div className="container-fluid-sm" id="btn-div">
                            <button className="btn container-fluid-sm m-3" type="button"><a href="mailto:bmiwelltips@gmail.com"> <i className="fas fa-envelope"></i> Mail Us</a></button>
                            <button className="btn container-fluid-sm m-3" type="button" id="about-developer">About Developer</button>
                        </div>
                    </div>
                    {/* <!-- banner --> */}
                    <div className="first p-5 container-fluid-sm" ><img src="images/banner2.png" alt="Banner" className="img-fluid" /></div>
                </div>
            </div>
        </>
    )
}