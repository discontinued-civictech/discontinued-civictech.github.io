---
layout: default
---

# Welcome to Our Workshop Website!

The design of civic tech is often confronted with impediments, barriers, and a lack of resources. These and other causes may lead to the discontinuation and even abandonment of initiatives. Since seemingly failed projects are much more difficult to publish as articles, this workshop will provide academics and practitioners with a rare opportunity to exchange experiences and insights on discontinued civic tech initiatives. The goal of the workshop is to develop a better understanding of why some civic tech initiatives fail and ask whether discontinued initiatives may still somehow contribute to social change and the growth of digital civics. A variety of sub-questions around discontinued civic tech will be addressed in the workshop, including matters of participation, citizen science, public management, power structures and biases, and communication. 


## News

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>&nbsp;&nbsp; [{{ post.date | date_to_long_string }}]  
    </li>
  {% endfor %}
</ul>






