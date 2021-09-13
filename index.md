---
layout: default
style: |
  .carousel .carousel-item {
    height: 80vh;
    }

  .flex-even {
    flex: 1;
  }

  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #f5f5f5; }

  #hero-image-container {
    background-image: url(/img/wb_shutterstock_1798024564.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }

  #logos>div{display: flex; flex-flow: column nowrap; align-items: center; justify-content: center;}
  /* #logos img {width: 200px; margin: 0.5rem;} */

  #logos>div>div {margin-left: 65px; margin-right: 65px;}

  #logo-jhu {width: 90vw; max-width: 260px; height: 100px; background-image: url(/img/JHU-e-learning.svg); background-repeat: no-repeat; background-size: contain; background-position: center center;}
  #logo-wb {width: 90vw; max-width: 220px; height: 100px; background-image: url(/img/WB.svg); background-repeat: no-repeat; background-size: contain; background-position: center center;}
  #logo-unicef {width: 90vw; max-width: 160px; height: 100px; background-image: url(/img/unicef-3.svg ); background-repeat: no-repeat; background-size: contain; background-position: center center;}


  @media (min-width: 800px) {
    #logos>div {flex-flow: row nowrap}
  }
---
<div id="main" class="d-flex flex-column align-items-stretch">
  <div class="container-fluid">
    <div id="main-carousel" class="carousel slide" data-bs-ride="carousel" style="max-height: 80vh;">
      <!-- <div class="carousel-indicators">
        <button type="button" data-bs-target="#main-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      </div> -->
      <div class="carousel-inner" style="background-color: #494949;">
        <div id="hero-image-container" class="carousel-item text-center active">
          <div class="carousel-caption text-dark bg-light">
            <h2>COVID-19 Global Education Recovery Tracker </h2>
            <p><i>Monitoring the impact of the COVID-19 pandemic on response and recovery for students across the globe</i></p>
            <a class="btn btn-primary my-1 mx-1" href="/visualizations">Maps, Graphs, and Tables</a> 
            <a class="btn btn-primary my-1 mx-1" href="/methodology">Methodology</a>
          </div>
        </div>
      </div>
      <!-- <button class="carousel-control-prev" type="button" data-bs-target="#main-carousel"  data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#main-carousel"  data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button> -->
    </div>
  </div>
</div>
<div class="spacer-10"></div>
<section id="cards" class="container">
  <h2>Stories and Insights</h2>
  <div class="row">
    <!-- <div class="d-flex flex-row"> -->
    {% for post in site.posts limit:3 %}
    {% include post-card.html %}
    {% endfor %}
    <!-- </div> -->
  </div>
  <div class="w-100 d-flex justify-content-end mt-3">
  <a href="/stories">See more stories and insights</a>
  </div>
</section>
<div class="spacer-10"></div>
<section id="about" class="container">
  <div>
    <h2>About this site</h2>
    <p>The purpose of the COVID-19 Global Education Recovery Tracker is to capture ongoing information about the global status of schools, teachers and students amid the COVID-19 pandemic. This information is intended to be of use for education and public health policy stakeholders and researchers from around the world. In this second year of the pandemic, and as many countries are starting to move from emergency responses towards policies aimed for recovery, the tracker aims to support this process by focusing on data that can help build back better and more resilient education systems.</p>
    <p>This tracker is the result of a partnership between the <a href="https://equityschoolplus.jhu.edu/">Johns Hopkins University eSchool+ Initiative</a>, the <a href="https://www.worldbank.org/">World Bank</a>, and <a href="https://www.unicef.org/">UNICEF</a>.</p>
  </div>
</section>
<section id="logos">
  <div class="container-fluid">
    <div id="logo-jhu">
    </div>
    <div id="logo-wb">
    </div>
    <div id="logo-unicef">
    </div>
  </div>
</section>
