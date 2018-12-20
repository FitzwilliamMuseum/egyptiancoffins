---
layout: news
permalink: signup
title: Sign up to our mailing list
---


<form action="{{site.mailchimp-list}}" method="post" class="mb-3">
  <div class="form-group">
    <label for="email">Email address</label>
    <input type="email" name="EMAIL" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
   <div class="form-group">
    <label for="FNAME">First name</label>
    <input type="FNAME" name="FNAME" class="form-control" id="FNAME"  placeholder="Enter your firstname">
  </div>
   <div class="form-group">
    <label for="LNAME">Last name</label>
    <input type="LNAME" name="LNAME" class="form-control" id="LNAME" placeholder="Enter your last name">
  </div>
  <button type="submit" class="btn btn-wine">Submit</button>
</form>