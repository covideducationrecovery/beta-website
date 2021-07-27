---
layout: default
permalink: /stories/infographics/
title: Infographics 
---
<div class="spacer-5"></div>
<div class="container">
  <h2 class="text-center">Infographics</h2>
  <div class="spacer-3"></div>
  {% for post in site.posts %}
    {% if post.categories contains 'infographic' %}
      {% include post-summary.html %}    
    {% endif %}
  {% endfor %}
</div>
