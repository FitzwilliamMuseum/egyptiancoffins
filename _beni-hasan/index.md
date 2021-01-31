{% assign rows = site.benihasan.size | divided_by: 2.0 | ceil %}
{% for i in (1..rows) %}
  {% assign offset = forloop.index0 | times: 2 %}
  
  {% assign sorted = site.benihasan | sort:"order" %}
  {% for death in sorted limit:2 offset:offset %}
     
          
              
                                              alt="{{page.title}}'s image" height="150" width="150">
                
{{death.title}} 

                
{{ death.content | strip_html | truncatewords: 20}}

                Read more 
              
          
    
    {% endfor %}
  
{% endfor %}
