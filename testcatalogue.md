---
layout: coffins
title: TEST Catalogue of coffins
description: "A catalogue of Egyptian coffins in the Fitzwilliam Museum"
permalink: /test_coffin-catalogue
id: testcatalogue
category: catalogue
---
{% assign rows = site.testcatalogue.size | divided_by: 2.0 | ceil %}
{% for i in (1..rows) %}
  {% assign offset = forloop.index0 | times: 2 %}
  <div class="row">
  {% assign sorted = site.testcatalogue | sort:"order" %}
  {% for testcatalogue in sorted limit:2 offset:offset %}
     <div class="col-md-6 mt-3">
          <div class="card h-100">
              <div class="card-body">
              <img class="align-self-center mr-3 rounded-circle float-right thumb-post" src="{{testcatalogue.image}}"
                             alt="{{page.title}}'s image" height="150" width="150">
                <h5 class="card-title">{{testcatalogue.title}}</h5>

                <p class="card-text">
                  {{ testcatalogue.content | strip_html | truncatewords: 20}}
                </p>

                <a href="{{ testcatalogue.url }}" class="btn btn-dark stretched-link">Read more </a>
              </div>
          </div>
    </div>
    {% endfor %}
  </div>
{% endfor %}
