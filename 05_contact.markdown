---
layout: contact
title: Contact
description: Here, you can find all my contact details. Preferably, I like the contact form - that's why I set it up! But feel free to send an Email instead
permalink: /contact/
---

<style type="text/css">
  /*---Tool tip ---*/  
  button.tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: #36454f;
    color: #ebebeb;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    top: 150%;
    left: 50%;
    margin-left: -60px;
  }
  
  button.tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #36454f transparent;
  }
  
  button.tooltip:hover .tooltiptext {
    visibility: visible;
  }

  /*--- Email ---*/  
  .protect p.inner .tooltip :not(span.tooltiptext) {
    text-indent: -9999px;
    line-height: 0;
  }

  button.tooltip {
    position: relative;
    background-color: transparent;
    border-left: none;
    border-right: none;
    border-top: none;
    border-bottom: 1px dotted black;
    outline:none;
    color: #36454f;
    padding: 0px 0px;
    font-family: inherit;
    font-size: 16px;
  }
  
  .protect p.inner .tooltip:after {
    cursor: pointer;
    content: "\002E" attr(domain) "\002E \006C \0069 \0061 \006D \006E \006F \0074 \006F \0072 \0070 \0040 \0065 \0074 \0069 \0073 \0062 \0065 \0077 \002D \0074 \0074 \0061 \006C \0070 \0078 \0065 \006C \0061";
    text-indent: 0;
    display: block;
    line-height: initial;
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
    padding: 10px;
    margin-bottom: 10px;
    border: none;
    border-radius: 2px;
    background: #ebebeb;
    box-sizing:border-box
  }
   
  button.form {
    width: 100%;
    padding: 10px;
    margin-top: 20px;
    border-radius: 5px;
    border: none;
    background: grey; 
    cursor: not-allowed;
    user-select: none;
    font-size: 16px;
    font-weight: 400;
    color: #ebebeb;
    outline: none;
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
  
  input[type="name"] {
    display: none;
  }
  
  label {
    vertical-align:middle;
  }
</style>

# Contact
<div class="protect" role="text" aria-label="My email address is my name, without capitals or spaces, then dash, then the word website. All of this at protonmail dot com.">
  <p class="inner">    
     Feel free to send me a message! If you would prefer, send me an email:
     <button onClick="show()" class="tooltip" domain="moc">
       <span id="tooltiptext" class="tooltiptext">Click to copy</span>
     </button> 
  </p>
</div>

<form action="https://usebasin.com/f/b7e6cac71fe7" method="POST" autocomplete="off" id="my-contact-form" onsubmit="ajax(event);">
  <div class="form-inner">
    <input type="name" name="name" autocomplete="off" id="form-name">
    <input type="email" placeholder="Email" name="email" autocomplete="off" id="form-email">
    <textarea required 
      minlength="12"
      onkeyup="this.value = this.value.replace(/[$=+*<>]/g, '')"
      oninvalid="setCustomValidity('Should not be empty. Avoid strange characters.')"
      oninput="setCustomValidity('')" 
      placeholder="Message..." 
      rows="5" 
      name="message" id="form-txt"></textarea>
  </div>
  <input type="checkbox" required id="check1">
    <label for="check1">
      I understand and consent to the <a href="../privacy/"> privacy policy</a>.
    </label>
  <br>
  <button onmouseover="over()" onmouseleave="leave()" class="form" id="form-button" disabled>Requires JavaScript</button>
  <div id="form-message"></div>
</form>