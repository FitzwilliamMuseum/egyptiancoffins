---
layout: coffins
permalink: /catalogue/
title: Catalogue of coffins
id: catalogue
---

{% assign rows = site.catalogue.size | divided_by: 2.0 | ceil %}
{% for i in (1..rows) %}
  {% assign offset = forloop.index0 | times: 2 %}
  <div class="row">
  {% assign sorted = site.catalogue | sort:"order" %}
  {% for coffin in sorted limit:2 offset:offset %}
     <div class="col-md-6 mt-3">
          <div class="card h-100">
              <div class="card-body">
              <img class="align-self-center mr-3 rounded-circle float-right thumb-post" src="{{coffin.image}}"
                             alt="{{page.title}}'s image" height="150" width="150">
                <h5 class="card-title">{{coffin.title}} </h5>
                                    {% if coffin.coffin-type %}
                                    <h6 class="text-muted">{{ coffin.coffin-type }} </h6>
                                    {% endif %}
                <p class="card-text">{{ coffin.content | strip_html | truncatewords: 20}}</p>

                <a href="{{ coffin.url }}" class="btn btn-dark">Read more details</a>
              </div>
          </div>
    </div>
    {% endfor %}
  </div>
{% endfor %}
