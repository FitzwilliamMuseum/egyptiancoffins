---
layout: coffins
title: Reuse, appropriation and ownership
description: "A research project about reuse of material culture in ancient Egypt"
permalink: /reuse-project
id: reuse-project
category: reuse-project
---
{% assign rows = site.reuse.size | divided_by: 2.0 | ceil %}
{% for i in (1..rows) %}
  {% assign offset = forloop.index0 | times: 2 %}
  <div class="row">
  {% assign sorted = site.reuse | sort:"order" %}
  {% for reuse in sorted limit:2 offset:offset %}
     <div class="col-md-6 mt-3">
          <div class="card h-100">
              <div class="card-body">
              <img class="align-self-center mr-3 rounded-circle float-right thumb-post" src="{{reuse.image}}"
                             alt="{{page.title}}'s image" height="150" width="150">
                <h5 class="card-title">{{reuse.title}}</h5>

                <p class="card-text">
                  {{ reuse.content | strip_html | truncatewords: 20}}
                </p>

                <a href="{{ reuse.url }}" class="btn btn-dark stretched-link">Read more </a>
              </div>
          </div>
    </div>
    {% endfor %}
  </div>
{% endfor %}
