---
layout: coffins
title: Coffins in Context conference
description: "The Fitzwilliam Museum's Coffins in Context conference 2024"
permalink: /coffinsincontext
id: coffinsincontext
category: coffinsincontext
---
{% assign rows = site.coffinsincontext.size | divided_by: 2.0 | ceil %}
{% for i in (1..rows) %}
  {% assign offset = forloop.index0 | times: 2 %}
  <div class="row">
  {% assign sorted = site.coffinsincontext | sort:"order" %}
  {% for context in sorted limit:2 offset:offset %}
     <div class="col-md-6 mt-3">
          <div class="card h-100">
              <div class="card-body">
              <img class="align-self-center mr-3 rounded-circle float-right thumb-post" src="{{context.image}}"
                             alt="{{page.title}}'s image" height="150" width="150">
                <h5 class="card-title">{{context.title}}</h5>

                <p class="card-text">
                  {{ context.content | strip_html | truncatewords: 20}}
                </p>

                <a href="{{ context.url }}" class="btn btn-dark stretched-link">Read more </a>
              </div>
          </div>
    </div>
    {% endfor %}
  </div>
{% endfor %}
