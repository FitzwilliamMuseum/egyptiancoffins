---
title: Beni Hasan
permalink: /coffins/beni-hasan
layout: coffins
category: beni-hasan
---

Add text here

{% assign rows = site.beni-hasan.size | divided_by: 2.0 | ceil %}
{% for i in (1..rows) %}
  {% assign offset = forloop.index0 | times: 2 %}
  
  {% assign sorted = site.beni-hasan | sort:"order" %}
  {% for death in sorted limit:2 offset:offset %}
     
          
              
                                              alt="{{page.title}}'s image" height="150" width="150">
                
{{beni-hasan.title}} 

                
{{ beni-hasan.content | strip_html | truncatewords: 20}}

                Read more 
              
          
    
    {% endfor %}
  
{% endfor %}
