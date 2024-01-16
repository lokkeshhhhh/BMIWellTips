import React, { useEffect } from "react";
import './Contacts.css'

export default function Contacts(){

    useEffect(() => {
        document.getElementById("contacts-btn").addEventListener('click', () => {

            const elementsToLoad = document.querySelectorAll('.contacts-pg');

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
                    if (isInViewport(element) && !element.classList.contains('loaded')) {
                        element.classList.add('loaded');
                    }
                });
            }

            handleScroll();
            window.addEventListener('scroll', handleScroll);

        })

    }, [])


    const styles = {
        textDecoration: 'none',
        color: 'black'
    }

    
    return(
        <>
            <div className="tab-pane container-fluid-sm fade contacts" id="contacts">
                <div className="container-fluid-sm contacts-pg" id="contacts-pg">
                    {/* <!-- banner --> */}
                    <div className="contacts-first p-5 container-fluid-sm" ><img src="images/contacts.png" alt="Banner" width="500px" className="img-fluid" /></div>
                    <div className="contacts-second p-5 container-fluid-sm" id="contacts-second-2">
                        <h2 className="p-1 mt-5 ms-3">Connect with us  </h2>
                        <p className="p-1 ms-3">Your satisfaction is our priority, and we value your experience with us. If at any point you encounter anything unusual or have concerns, we encourage you 
                            to reach out to us immediately. Your feedback is essential in ensuring that we address any issues promptly and enhance your overall satisfaction. Our dedicated support 
                            team is readily available to assist you, and your input is invaluable in maintaining the high standards we aim to provide. Your comfort and peace of mind are important to us, 
                            so do not hesitate to contact us if you sense anything out of the ordinary. We are here to listen and address any questions or concerns you may have, reinforcing our commitment 
                            to delivering a positive and seamless experience for you.
                        </p><br />
                        <div className="container-fluid-sm" id="btn-div">
                            <button className="btn container-fluid-sm m-3" type="button"><a href="mailto:bmiwelltips@gmail.com" style={styles}> <i className="fas fa-envelope"></i> Mail Us</a></button>
                            <button className="btn container-fluid-sm m-3" type="button" id="contact-developer"><a href="https://www.linkedin.com/in/lokesh-kumawat-1b1692280/" style={styles}>Contacts Developer</a></button>
                        </div>
                    </div>
                </div>

                <div className="social-contacts container-fluid-sm">
                    <h4 className="text-center">Social Links</h4><br />
                    <div className="container-fluid-sm p-1 text-center" id="btn-div">
                        <a href="https://instagram.com/lokkeshhhhh?utm_source=qr&igshid=YzU1NGVlODEzOA==" target="_blank"><img src="images/socials/insta-b.png" alt="Instagram" width="40px" className="m-2" /></a>
                        <a href="https://twitter.com/lokkeshhhhh" target="_blank"><img src="images/socials/x-b.png" alt="Twitter" width="40px" className="m-2" /></a>
                        <a href="https://facebook.com" target="_blank"><img src="images/socials/fb-b.png" alt="Facebook" width="40px" className="m-2" /></a>
                        <a href="https://www.linkedin.com/in/lokesh-kumawat-1b1692280/" target="_blank"><img src="images/socials/link-b.png" alt="LinkedIn" width="40px" className="m-2" /></a>
                    </div>
                </div>
            </div>
        </>
    )
}