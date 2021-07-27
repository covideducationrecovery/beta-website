---
layout: default
title: FAQ
permalink: /faq/
---
<div class="spacer-5"></div>
<div class="container">
  <h2 class="text-center">Frequently Asked Questions</h2>
  <div class="spacer-3"></div>
  {% for element in site.faqs %}
  <br>

    <div class="row g-0 bg-light position-relative rounded">
      <div class="col-md-8 p-4 ps-md-4">
        <h5 class="mt-0">{{ element.question }}</h5>
        {{ element.answer | markdownify }}
      </div>
    </div>
    {% else %}
    the collection is empty
  {% endfor %}
</div>
