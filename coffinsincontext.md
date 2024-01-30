---
layout: coffins
title: Coffins in Context conference
description: "The Fitzwilliam Museum's Coffins in Context conference 2024"
permalink: /coffinsincontext
id: coffinsincontext
category: coffinsincontext
---
**The Fitzwilliam Museum and Christ’s College, Cambridge are pleased to announce a conference on ancient Egyptian coffins from Thursday 22 to Saturday 24 February 2024.** 

The conference venue is the **[Yusuf Hamied Centre at Christ's College, Cambridge](https://www.christs.cam.ac.uk/facilities/yusuf-hamied)**.

Our previous conference in 2016 (Ancient Egyptian Coffins: past • present • future) focussed on the development of coffins in antiquity, including technological, iconographic and text-based studies, the post-antiquity history of coffins and developments in their technical examination and analysis. Since then, studies have moved on, with numerous institutions around the world carrying out comprehensive investigations of the coffins in their collections. 

This conference represents a chance to pause and consider what we have learned and the direction of future coffin research. 
See our [call for papers](https://egyptiancoffins.org/coffinsincontext/callforpapers/) for the themes of the conference.

The options below provide further information and will be updated regularly.
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
