const header = `
<div class="container-fluid " id="main-div">
<!-- navbar div -->
<nav class="navbar navbar-expand-sm    container-fluid" id="main-navbar">
    <!-- logo and navbar toggler -->
    <div class="container-fluid">
        <a href="#" class="navbar-brand"><img src="logo/png/png/logo-no-background.png" alt="" class="rounded" width="130px"></a>
        <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
            <span class="navbar-toggler-icon  text-white bg-light rounded" id="icon"></span>
        </button>
    </div>

    <!-- navbar links to navigate within the page -->
    <ul class="collapse navbar-collapse text-white  nav-tabs " role="tablist" id="navbar">
        <li class="nav-item m-2"><a href="#home" class="nav-link active" data-bs-toggle="tab" id="home-btn">Home</a></li>
        <li class="nav-item m-2"><a href="#services" class="nav-link" data-bs-toggle="tab" id="services-btn">Services</a></li>
        <li class="nav-item m-2"><a href="#contacts" class="nav-link" data-bs-toggle="tab" id="contacts-btn">Contacts</a></li>
        <li class="nav-item m-2"><a href="#about" class="nav-link" data-bs-toggle="tab" id="about-btn">About</a></li>
        <li class="nav-item m-2"><a href="#blogs" class="nav-link" data-bs-toggle="tab" id="blogs-btn">Blogs</a></li>
    </ul>
</nav>
</div>`;

document.getElementById("Header").innerHTML = header;