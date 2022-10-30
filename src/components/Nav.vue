<template lang="html">
    <div class="nav">
        <nav class="nav-distributed">

            <!-- <div class="nav-right">

                <a href="#"><font-awesome-icon icon="fa-brands fa-facebook" /></a>
                <a href="#"><font-awesome-icon icon="fa-brands fa-twitter" /></a>
                <a href="#"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
                <a href="#"><font-awesome-icon icon="fa-brands fa-pinterest" /></a>

            </div> -->

            <div class="nav-left">

                <p class="nav-links">

                    <img src="../assets/icon/kpbatinocbad.jpg" class="nav-logo" >

                    <a class="link-1" href="#">Home</a>

                    <a href="#">{{ $t("nav.galery-nav") }}</a>

                    <a href="#">About</a>

                    <a href="#">Faq</a>

                    <a href="#">Contact</a>
                </p>

            </div>

        </nav>
    </div>
</template>

<style>

.nav-distributed {
  background-color: #292c2f;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  font: normal 16px sans-serif;
  padding: 20px 90px;
  position: relative;
}

.nav-distributed .nav-left p {
  color: #8f9296;
  font-size: 14px;
  margin: 0;
}
.nav-distributed .nav-logo {
    height: 75px;
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
}

.nav-links a {
    display: inline-block;
    position: relative;
}
.nav-links a:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 5.2px;
    left: 0;
    background-color: #fff;
    text-shadow: 2px 2px #fff;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
}
.nav-links a:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
}
/* Nav links */

.nav-distributed p.nav-links {
  font-size: 17px;
  color: #ffffff;
  margin: 0 0 10px 60%;
  padding: 0;
  transition: ease .25s;
  display: flex;
  height: 70%;
  justify-content: space-evenly;
}

.nav-distributed p.nav-links a {
  display: inline-block;
  line-height: 1.8;
  text-decoration: none;
  color: inherit;
  transition: ease .25s;
}

.nav-distributed .nav-links a:before {
  font-size: 20px;
  left: 0;
  color: #fff;
  padding-right: 5px;
}

.nav-distributed .nav-links .link-1:before {
  content: none;
}

.nav-distributed .nav-right {
  float: right;
  margin-top: 6px;
  max-width: 180px;
}

.nav-distributed .nav-right a {
  display: inline-block;
  width: 35px;
  height: 35px;
  background-color: #33383b;
  border-radius: 2px;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  line-height: 35px;
  margin-left: 3px;
  transition:all .25s;
}

.nav-distributed .nav-right a:hover{transform:scale(1.1); -webkit-transform:scale(1.1);}


/* Media Queries */

@media (max-width: 600px) {
  .nav-distributed .nav-left, .nav-distributed .nav-right {
    text-align: center;
  }
  .nav-distributed .nav-right {
    float: none;
    margin: 0 auto 20px;
  }
  .nav-distributed .nav-left p.nav-links {
    line-height: 1.8;
  }
}
</style>