---
layout: coffins
title: Roman Period Mummy Portraits
description: "Roman Period Mummy Portraits"
permalink: /mummy-portraits/
id: mummy-portraits
category: mummy-portraits
---
{% assign rows = site.portraits.size | divided_by: 2.0 | ceil %}
{% for i in (1..rows) %}
  {% assign offset = forloop.index0 | times: 2 %}
  <div class="row">
  {% assign sorted = site.portraits | sort:"order" %}
  {% for death in sorted limit:2 offset:offset %}
     <div class="col-md-6 mt-3">
          <div class="card h-100">
              <div class="card-body">
              <img class="align-self-center mr-3 rounded-circle float-right thumb-post" src="{{death.image}}"
                             alt="{{page.title}}'s image" height="150" width="150">
                <h5 class="card-title">{{death.title}} </h5>

                <p class="card-text">{{ death.content | strip_html | truncatewords: 20}}</p>

                <a href="{{ death.url }}" class="btn btn-dark">Read more </a>
              </div>
          </div>
    </div>
    {% endfor %}
  </div>
{% endfor %}