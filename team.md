---
layout: coffins
permalink: /team/
title: Meet the coffins project team
id: root
---

## The team

{% assign rows = site.team.size | divided_by: 2.0 | ceil %}
{% for i in (1..rows) %}
  {% assign offset = forloop.index0 | times: 2 %}
  <div class="row">
    {% for author in site.team limit:2 offset:offset %}
     <div class="col-md-6 mt-3">
          <div class="card h-100">
              <div class="card-body">
              <img class="align-self-center mr-3 rounded-circle float-right thumb-post" src="{{site.baseurl}}{{author.image}}"
                             alt="{{page.title}}'s profile image" height="150" width="150">
                <h5 class="card-title">{{author.title}} </h5>
                                    {% if author.job-title %}
                                    <h6 class="text-muted">{{ author.job-title}} </h6>
                                    {% endif %}

                <p class="card-text">{{ author.content | strip_html | truncatewords: 20}}</p>

                <p><span class="chip"><i class="chip-icon"><i class="fas fa-sitemap"></i></i>{{ author.institution}}</span></p>

                <a href="{{ author.url }}" class="btn btn-dark">Read full bio</a>
              </div>
          </div>
    </div>
    {% endfor %}
  </div>
{% endfor %}


