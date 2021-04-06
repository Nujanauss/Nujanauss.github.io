---
layout: no-title-page
title: Contact
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
    content: "\002E" attr(domain) "\002E \006C \0069 \0061 \006D \0040 \0074 \0073 \0065 \0074";
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
    background: #36454f; 
    font-size: 16px;
    font-weight: 400;
    color: #ebebeb;
  }
  
  button.form:hover {
    background: #212a30;
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
  <p class="inner">    
     Feel free to send me a message! If you would prefer, send me an email:
     <button onClick="show()" class="tooltip" domain="moc">
       <span id="tooltiptext" class="tooltiptext">Click to copy</span>
     </button> 
  </p>
</div>

<form action="https://usebasin.com/f/b7e6cac71fe7" method="POST" autocomplete="off">
  <div class="form-inner">
    <input type="hidden" placeholder="Name" name="name" autocomplete="off">
    <input type="email" placeholder="Email" name="email" autocomplete="off">
    <input type="hidden" placeholder="Subject" name="subject" autocomplete="off">
    <textarea placeholder="Message..." rows="5" name="message"></textarea>
  </div>
  <input type="checkbox" required id="check1">
    <label for="check1">
      I understand and consent to the <a href="../privacy/"> privacy policy</a>.
    </label>
  <br>
  <button class="form">Submit</button>
</form>

<script>
function show() {
  copyToClipboard("Email");
  document.getElementById("tooltiptext").innerHTML="Copied!";
  setTimeout(() => {  
    document.getElementById("tooltiptext").innerHTML="Click to copy"; 
    }, 750);
}

function copyToClipboard(text) {
  if (!navigator.clipboard) {
    fallback(text);
    return;
  }
  navigator.clipboard.writeText(text);
}

function fallback(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  
  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Fallback: Copying text command was ' + msg);
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}
</script>