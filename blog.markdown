---
title: Blog
date: 2018-10-07 16:32:00 Z
layout: default
---

{% for post in site.posts %}
## [{{ post.title }}]({{ post.url | prepend: site.baseurl }})

{{ post.date | date: "%b %-d, %Y" }}

{% endfor %}
