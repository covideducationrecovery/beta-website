---
layout: default
title: News
permalink: /news/
---
<div class="spacer-5"></div>
<div class="container">
  <h2 class="text-center">In the news</h2>
  <div class="spacer-3"></div>
  {% for post in site.news %}
  <br>

    <div class="row g-0 bg-light position-relative rounded">
      <div class="col-md-4 mb-md-0 p-md-4">
        <img src="{% if post.thumbnail %}{{ post.thumbnail }}{% else %}{{ site.image }}{% endif %}" class="w-100 rounded" alt="{% if post.image-alt-text %}{{ post.image-alt-text }}{% else %}{{ post.title }}{% endif %}">
      </div>
      <div class="col-md-8 p-4 ps-md-0">
        <h5 class="mt-0">{{ post.title }}</h5>
        <p>{% if post.description %}{{ post.description }}{% else %}{{ post.excerpt }}{% endif %}</p>
        <a href="{{ post.link }}" class="btn btn-primary stretched-link">Read Article</a>
        
      </div>
    </div>
    
  {% endfor %}
</div>