---
layout: no-title-page
title: Contact
permalink: /contact/
---

<style>
  input, textarea { 
    outline: none;
  }
 
  form {
    position: relative;
    width: 80%;
  }
 
  .form-inner {
    box-sizing: border-box;
  }

  .form-inner input,
  .form-inner textarea {
    width: 100%;
    padding: 15px;
    margin-bottom: 10px;
    border: none;
    border-radius: 2px;
    background: #ebebeb;
    box-sizing:border-box
  }
 
  button {
    width: 100%;
    padding: 10px;
    margin-top: 20px;
    border-radius: 5px;
    border: none;
    background: #36454f; 
    font-size: 16px;
    font-weight: 400;
    color: #ebebeb;
  }
  
  button:hover {
    background: #1d262b;
    cursor: pointer;
  } 
  
  @media (min-width: 600px) {
     form {
       width: 60%;
     }
  }
  
  input[type="checkbox"] {
    display:inline-block;
    vertical-align:middle;
  }
</style>

# Contact

Feel free to send me a message!

<form id="invisible-recaptcha-form" action="https://usebasin.com/f/b7e6cac71fe7" method="POST">
  <div class="form-inner">
    <input type="email" placeholder="Email" name="email">
    <textarea placeholder="Message..." rows="5" name="message"></textarea>
  </div>
  <input type="checkbox" required id="check1">
  <label for="check1">
      I understand and consent to my data being processed by <a href="https://usebasin.com">Basin</a>, whose 
      privacy policy can be found <a href="https://usebasin.com/privacy"> here</a>.
      Any data I provide will be deleted after 14 days.
      </label>
      <br>
      <br>
      <div class="g-recaptcha" data-sitekey="6Lew3SMUAAAAAJ82QoS7gqOTkRI_dhYrFy1f7Sqy"></div>
      <button>Submit</button>
</form>
