const footer = `
<footer class="video-background">
<!-- footer's background video -->
<video autoplay muted loop id="myVideo">
    <source src="images/footer-video.mp4" type="video/mp4">
</video>

<!-- footer's main content -->
<div class="container-fluid-sm p-1 content" id="main-footer-div">
    <div class="logo pt-5  container-fluid-sm"><img src="logo/png/png/logo-no-background.png" alt="Logo" width="200px" class="img-fluid "></div>

    <div class="container-fluid-sm p-1 mt-5 text-white all-links mb-5">
        <!-- links to navigate within the site -->
        <div class="container-fluid-sm links-div">
                <span class="ms-5 links-span">Links :</span>
                <ul class="mt-3 ms-1">
                    <li><buttons class="btn" id="f-home">Home</buttons></li>
                    <li><buttons class="btn" id="f-services">Services</buttons></li>
                    <li><buttons class="btn " id="f-contacts">Contacts</buttons></li>
                    <li><buttons class="btn " id="f-about">About us</buttons></li>
                    <li><buttons class="btn " id="f-blogs">Blogs</buttons></li>
                </ul>
        </div>

        <!-- links  -->
        <div class="container-fluid-sm company-div">
                <span class="company-span ms-5">Company :</span>
                <ul class="mt-3 ms-1">
                    <li><button class=" btn" id="f-about">About us</button></li>
                    <li><button class=" btn" id="f-blogs">About Dev</button></li>
                    <li><button class=" btn portfolio"><a href="https://github.com/lokkeshhhhh" target="_blank">Dev's Portfolio</a></button></li>
                    <li><button class=" btn" id="f-blogs">Blogs</button></li>
                </ul>
        </div>

        <!-- social links -->
        <div class="container-fluid-sm socials mt-1">
            <span class="follow-us ms-5">Follow Us On  :</span><br>
                <ul class="container-fluid-sm socials-links mt-3">
                    <li>
                        <a href="https://instagram.com/lokkeshhhhh?utm_source=qr&igshid=YzU1NGVlODEzOA==" target="_blank">
                            <img src="images/socials/insta-b.png" alt="Instagram" width="30px" class="m-2 img-fluid">
                        </a><span class="social-span">Instagram</span>
                    </li>
                    <li>
                        <a href="https://twitter.com/lokkeshhhhh" target="_blank">
                            <img src="images/socials/x-b.png" alt="Twitter" width="30px" class="m-2 img-fluid">
                        </a><span class="social-span">Twitter</span>
                    </li>
                    <li>
                        <a href="https://facebook.com" target="_blank">
                            <img src="images/socials/fb-b.png" alt="Facebook" width="30px" class="m-2 img-fluid">
                        </a><span class="social-span">Facebook</span>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/lokesh-kumawat-1b1692280/" target="_blank">
                            <img src="images/socials/link-b.png" alt="LinkedIn" width="30px" class="m-2 img-fluid">
                        </a><span class="social-span">LinkedIn</span>
                    </li>
                </ul>
        </div>
        
    </div>
    <!-- copyright and privacy policy  -->
    <div class="policies container-fluid-sm">
        <p class="text-center mt-5 text-secondary">Developer - Lokesh Kumawat</p>
        <p class="text-center mt-5 text-secondary">© 2023 - 2024 BMIWellTips. All rights reserved. <br> <a href="#" class="text-secondary">Cookies are not used.</a> <br><a href="#">Privacy and Terms</a></p>
        <p style="font-size: small;text-align: center;color: rgb(147, 65, 10);">Jai Shri Ram</p>
    </div>
    
</div>
</footer>`;


document.getElementById("Footer").innerHTML = footer;