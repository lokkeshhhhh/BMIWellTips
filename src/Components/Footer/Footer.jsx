import React, { useEffect } from "react";
import './Footer.css'

export default function Footer() {

    useEffect(() => {
        document.getElementById("f-home").addEventListener('click', () => {
            document.getElementById("home-btn").click();
        })
        
        document.getElementById("f-services").addEventListener('click', () => {
            document.getElementById("services-btn").click();
        })

        document.getElementById("f-contacts").addEventListener('click', () => {
            document.getElementById("contacts-btn").click();
        })

        const linksBlogs = document.querySelectorAll("#f-blogs");
        linksBlogs.forEach(link => {
            link.addEventListener('click', () => {
                document.getElementById("blogs-btn").click();
            });
        });

        const linksAbout = document.querySelectorAll("#f-about");
        linksAbout.forEach(link => {
            link.addEventListener('click', () => {
                document.getElementById("about-btn").click();
            });
        });
        
    }, []);



    return (
        <>

            <footer className="video-background">
                {/* <!-- footer's background video --> */}
                <video autoPlay muted loop id="myVideo">
                    <source src="images/footer-video.mp4" type="video/mp4" />
                </video>

                {/* <!-- footer's main content --> */}
                <div className="container-fluid-sm p-1 content" id="main-footer-div">
                    <div className="logo pt-5  container-fluid-sm"><img src="logo/png/png/logo-no-background.png" alt="Logo" width="200px" className="img-fluid " /></div>

                    <div className="container-fluid-sm p-1 mt-5 text-white all-links mb-5">
                        {/* <!-- links to navigate within the site --> */}
                        <div className="container-fluid-sm links-div">
                            <span className="ms-5 links-span">Links :</span>
                            <ul className="mt-3 ms-1">
                                <li><button className="btn" id="f-home">Home</button></li>
                                <li><button className="btn" id="f-services">Services</button></li>
                                <li><button className="btn " id="f-contacts">Contacts</button></li>
                                <li><button className="btn " id="f-about">About us</button></li>
                                <li><button className="btn " id="f-blogs">Blogs</button></li>
                            </ul>
                        </div>

                        {/* <!-- links  --> */}
                        <div className="container-fluid-sm company-div">
                            <span className="company-span ms-5">Company :</span>
                            <ul className="mt-3 ms-1">
                                <li><button className=" btn" id="f-about">About us</button></li>
                                <li><button className=" btn" id="f-blogs">About Dev</button></li>
                                <li><button className=" btn portfolio"><a href="https://github.com/lokkeshhhhh" target="_blank">Dev's Portfolio</a></button></li>
                                <li><button className=" btn" id="f-blogs">Blogs</button></li>
                            </ul>
                        </div>

                        {/* <!-- social links --> */}
                        <div className="container-fluid-sm socials mt-1">
                            <span className="follow-us ms-5">Follow Us On  :</span><br />
                            <ul className="container-fluid-sm socials-links mt-3">
                                <li>
                                    <a href="https://instagram.com/lokkeshhhhh?utm_source=qr&igshid=YzU1NGVlODEzOA==" target="_blank">
                                        <img src="images/socials/insta-b.png" alt="Instagram" width="30px" className="m-2 img-fluid" />
                                        <span className="social-span">Instagram</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/lokkeshhhhh" target="_blank">
                                        <img src="images/socials/x-b.png" alt="Twitter" width="30px" className="m-2 img-fluid" />
                                        <span className="social-span">Twitter</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://facebook.com" target="_blank">
                                        <img src="images/socials/fb-b.png" alt="Facebook" width="30px" className="m-2 img-fluid" />
                                        <span className="social-span">Facebook</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/lokesh-kumawat-1b1692280/" target="_blank">
                                        <img src="images/socials/link-b.png" alt="LinkedIn" width="30px" className="m-2 img-fluid" />
                                        <span className="social-span">LinkedIn</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                    {/* <!-- copyright and privacy policy  --> */}
                    <div className="policies container-fluid-sm">
                        <p className="text-center mt-5 text-secondary">Developer - Lokesh Kumawat</p>
                        <p className="text-center mt-5 text-secondary">© 2023 - 2024 BMIWellTips. All rights reserved. <br /><a href="#">Privacy and Terms</a></p>
                    </div>

                </div>
            </footer>
        </>
    )
}