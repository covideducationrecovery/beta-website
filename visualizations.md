---
layout: default
title: Insights and Visualizations
permalink: /visualizations/
redirect_from:
  - /maps
  - /graphs
---
<div class="spacer-5"></div>
<div class="container">
  <div class="row">
    <h2>Visualizations</h2>
    <p>Our interactive visualizations are always up-to-date with the latest information we have.</p>

    {% for viz in site.visualizations %}

    <div class="col-sm-6">
      <a class="list-group-item list-group-item-action" href="{{ viz.permalink }}">
        <div class="d-flex flex-column">
          <h2>{{ viz.title }}</h2>
          <span class="badge badge-primary">{{ viz.type }}</span>
          <span>{{ viz.description }}</span>
        </div>
      </a>
    </div>

    {% endfor %}
  </div>
</div>