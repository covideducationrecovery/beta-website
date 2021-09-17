---
layout: default
permalink: /stories/infographics/
title: Infographics 
---
<div class="spacer-5"></div>
<div class="container">
  <h1>Infographics</h1>
  <div class="spacer-3"></div>
  {% for post in site.posts %}
    {% if post.categories contains 'infographic' %}
      {% include post-summary.html %}    
    {% endif %}
  {% endfor %}
</div>
