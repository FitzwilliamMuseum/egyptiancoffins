---
layout: coffins
title: Coffins in Context - participant information
description: "Information for participants of the Fitzwilliam Museum's Coffins in Context conference 2024"
permalink: /CiCinfo
id: coffinsincontext_info
category: coffinsincontext
---
To reduce the carbon footprint of our Coffins in Conference, we are providing all the 
basic conference information on these web pages. 

**Please consider carefully before you print any of it out.**

###Conference venue(s)

The conference will start, at 8.30 on Thursday morning, with **breakfast at the Fitzwilliam Museum,**
and an opportunity to visit the Egyptian galleries.

The remainder of the conference, from 10.30 on Thursday morning, will take place at the 
**[Yusuf Hamied Centre at Christ's College, 
Cambridge](https://www.christs.cam.ac.uk/facilities/yusuf-hamied)**.

###Conference programme 

The final programme for the conference is here: 
[egyptiancoffins.org/coffinsincontext/final_programme.pdf](https://egyptiancoffins.org/coffinsincontext/final_programme.pdf)

###Abstracts

The book of abstracts is here:
[egyptiancoffins.org/coffinsincontext/final_abstracts.pdf](https://egyptiancoffins.org/coffinsincontext/final_abstracts.pdf)


###Online posters and presentations

{% assign rows = site.coffinsincontext.size | divided_by: 2.0 | ceil %}
{% for i in (1..rows) %}
  {% assign offset = forloop.index0 | times: 2 %}
  <div class="row">
  {% assign sorted = site.CiCinfo | sort:"order" %}
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
