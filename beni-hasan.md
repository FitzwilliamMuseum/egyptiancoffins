---
layout: coffins
title: Beni Hasan
description: "The site of Beni Hasan"
permalink: /coffins/beni-hasan
id: beni-hasan
category: beni-hasan
---
{% assign rows = site.beni-hasan.size | divided_by: 3.0 | ceil %}
{% for i in (1..rows) %}
  {% assign offset = forloop.index0 | times: 2 %}
  <div class="row">
  {% assign sorted = site.beni-hasan | sort:"order" %}
  {% for death in sorted limit:3 offset:offset %}
     <div class="col-md-4 mt-3">
          <div class="card h-100">
          <img class="card-img-top" src="{{death.image}}"
                         alt="{{page.title}}'s image">
              <div class="card-body">

                <h5 class="card-title">{{death.title}} </h5>

                <p class="card-text">{{ death.content | strip_html | truncatewords: 20}}</p>

                <a href="{{ death.url }}" class="btn btn-dark">Read more </a>
              </div>
          </div>
    </div>
    {% endfor %}
  </div>
{% endfor %}
