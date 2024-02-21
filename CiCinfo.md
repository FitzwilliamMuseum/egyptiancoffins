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

### Conference venue(s)

The conference will start, at 8.30 on Thursday morning, with **breakfast at the Fitzwilliam Museum,**
and an opportunity to visit the Egyptian galleries. Entrance to the museum is via the Courtyard Entrance.

The remainder of the conference, from 10.30 on Thursday morning, will take place at the 
**[Yusuf Hamied Centre at Christ's College, 
Cambridge](https://www.christs.cam.ac.uk/facilities/yusuf-hamied)**.

Volunteers will be on hand to assist with navigating between The Fitzwilliam and Christ's, and a map showing the route is also available 
[here](/assets/pdfs/Fitz-Christs_map.pdf).

Christ's College has a long association with Egyptology and there is now a 
dedicated [Christ's Egyptology website](https://egyptology.christs.cam.ac.uk/).

### Getting to the venues

The Fitzwilliam Museum is located in Trumpington Street, Cambridge. The postcode is **CB2 1RB**.

Christ's College is located in St Andrew's Street, Cambridge. The post code is **CB2 3BU**. The route from the Main Gate to the Yusuf Hamied Centre is
shown [on this map](/assets/pdfs/Christ's_map.pdf).

For those coming from the Travelodge near Cambridge Railway Station, the following maps are also available:

* [Travelodge to Fitzwilliam Museum](/assets/pdfs/Travelodge-Fitzwilliam_map.pdf)
* [Travelodge to Christ's College](/assets/pdfs/Travelodge-Christ's_map.pdf)

### Conference programme 

The final programme for the conference is here: 
[egyptiancoffins.org/CiCinfo/Final_programme.pdf](/CiCinfo/Final_programme.pdf)

### Abstracts

The book of abstracts is here:
[egyptiancoffins.org/CiCinfo/Final_abstracts.pdf](/CiCinfo/Final_abstracts.pdf)

### Restaurants, cafes and things to do

A helpful list of things to do in Cambridge is provided here:

* [List](/assets/pdfs/Food_Attractions_Final.pdf)
* Maps of these locations: [mobile phone format](/images/coffinsincontext/MapFood_Laptop.png) [laptop format](assets/pdfs/MapFood_Laptop.pdf)
[A4 printable](/assets/pdfs/MapFood_Print_A4.pdf)

### Online posters and presentations

Information about online posters and links to recordings of presentations are provided here.

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
