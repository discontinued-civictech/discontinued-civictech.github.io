---
layout: default
---

# News

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>&nbsp;&nbsp; [{{ post.date | date_to_long_string }}]  
    </li>
  {% endfor %}
</ul>

<a href = "./" class="btn-to-top">Back to Top Page</a>






