---
layout: default
---

# Welcome to Our Workshop Website!

The design of civic tech is often confronted with impediments, barriers, and a lack of resources. These and other causes may lead to the discontinuation and even abandonment of initiatives. Since seemingly failed projects are much more difficult to publish as articles, this workshop will provide academics and practitioners with a rare opportunity to exchange experiences and insights on discontinued civic tech initiatives. The goal of the workshop is to develop a better understanding of why some civic tech initiatives fail and ask whether discontinued initiatives may still somehow contribute to social change and the growth of digital civics. A variety of sub-questions around discontinued civic tech will be addressed in the workshop, including matters of participation, citizen science, public management, power structures and biases, and communication. 

#### <strong>Read our extended abstract <u><a href="files/Preprint_Hamm_Shibuya_Pargman_etal_Failed_yet_successful.pdf">here</a></u><strong>.

<img src="assets/img/familyphoto.png" style="width:80%;margin-top:3em;display:block;margin-left:auto;margin-right:auto" alt="family photo">

<div><p style="font-size:x-large;text-align:center">Thank you for participating in our workshop!</p>
<p style="text-align:center;margin-top:-2em">More photos can be found <a href='photos'>here</a>.</p></div>
<img src="assets/img/logo_banner_combined.svg" style="width:100%" alt="top-page-image" alt="top-page-image">

## News

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>&nbsp;&nbsp; [{{ post.date | date_to_long_string }}]  
    </li>
  {% endfor %}
</ul>






