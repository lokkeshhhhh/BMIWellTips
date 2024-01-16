import React from "react";
import './Header.css'

export default function Header() {
    return (
        <>
            <div className="container-fluid " id="main-div">
                {/* <!-- navbar div --> */}
                <nav className="navbar navbar-expand-sm    container-fluid" id="main-navbar">
                    {/* <!-- logo and navbar toggler --> */}
                    <div className="container-fluid">
                        <a href="#" className="navbar-brand"><img src="logo/png/png/logo-no-background.png" alt="" className="rounded" width="130px" /></a>
                        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
                            <span className="navbar-toggler-icon  text-white bg-light rounded" id="icon"></span>
                        </button>
                    </div>

                    {/* <!-- navbar links to navigate within the page --> */}
                    <ul className="collapse navbar-collapse text-white  nav-tabs " role="tablist" id="navbar">
                        <li className="nav-item m-2"><a href="#home" className="nav-link active" data-bs-toggle="tab" id="home-btn">Home</a></li>
                        <li className="nav-item m-2"><a href="#services" className="nav-link" data-bs-toggle="tab" id="services-btn">Services</a></li>
                        <li className="nav-item m-2"><a href="#contacts" className="nav-link" data-bs-toggle="tab" id="contacts-btn">Contacts</a></li>
                        <li className="nav-item m-2"><a href="#about" className="nav-link" data-bs-toggle="tab" id="about-btn">About</a></li>
                        <li className="nav-item m-2"><a href="#blogs" className="nav-link" data-bs-toggle="tab" id="blogs-btn">Blogs</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}