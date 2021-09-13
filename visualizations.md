---
layout: default
title: Visualizations of the global education recovery
permalink: /visualizations/
redirect_from:
  - /maps
  - /graphs
style: |
  .card::hover {
    background-color: #00000080;
    transition: background-color 0.5s ease;
  }
---
<div class="spacer-5"></div>
<div class="container">
  <div class="row justify-content-center">
    <h1>Visualizations</h1>
    <p>Our interactive visualizations are always up-to-date with the latest information we have.</p>

    {% for viz in site.visualizations %}
    <div class="col-sm-12 col-lg-6 p-2 d-flex align-items-stretch">
      <div class="card bg-light">
        <h5 class="card-header bg-light mt-2">
          {% if viz.type == 'map' %}
          <i class="fas fa-globe-africa"></i>
          {% elsif viz.type == 'graph' %}
          <i class="fas fa-chart-bar"></i>
          {% elsif viz.type == 'table' %}
          <i class="fas fa-th-list"></i>
          {% endif %}
          {{ viz.title }}
        </h5>
        <img src="{{ viz.image }}" class="card-img-top p-2" alt="{{ viz.title }}">
        <div class="card-body">
          <p class="card-text">{{ viz.description }}</p>
          <div class="mt-auto">
            <a href="{{ viz.permalink }}" class="btn btn-primary stretched-link mt-auto">View</a>
          </div>
        </div>
      </div>  
    </div>
    {% endfor %}
  </div>
</div>