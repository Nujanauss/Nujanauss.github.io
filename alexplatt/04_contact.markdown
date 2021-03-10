---
layout: no-title-page
title: Contact
permalink: /contact/
---

<style type="text/css">
  /*--- Email ---*/
  .protect:hover p.inner span {
    display: none;
  }
  
  .protect:hover p.inner:after {
    content: "\002E" attr(domain) "\002E \006C \0069 \0061 \006D \0040 \0074 \0073 \0065 \0074";
    unicode-bidi: bidi-override; direction: rtl
  }
  
  /*--- Contact form ---*/
  
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
  
  label {
    vertical-align:middle;
  }
</style>

# Contact
<div class="protect" role="text" aria-label="My email address is my name, without capitals or spaces, then dash, then the word website. All of this at protonmail dot com.">
  <p class="inner" domain="moc">    
     Feel free to send me a message! If you would prefer, send me an email: <span class="ltrText">hover@over.me.</span>
  </p>
</div>

<form action="https://usebasin.com/f/b7e6cac71fe7" method="POST">
  <div class="form-inner">
    <input type="email" placeholder="Email" name="email">
    <textarea placeholder="Message..." rows="5" name="message"></textarea>
  </div>
  <input type="checkbox" required id="check1">
    <label for="check1">
      I understand and consent to the <a href="../resources/privacy-policy.pdf"> privacy policy</a>.
    </label>
  <br>
  <button>Submit</button>
</form>