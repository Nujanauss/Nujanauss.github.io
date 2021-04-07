---
layout: no-title-inline
permalink: /privacy/
googlewebfonts: Niramit
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
</style>

# Privacy Policy
This privacy policy describes how nujanauss.github.io (“I/me”) will collect, use and share your personal information.
This privacy policy may change from time to time. If this happens, I will revise the date at the bottom  of the policy.

#### Summary 

This is a personal website &ndash; an online CV. I collect no data from you unless you choose to provide it to me via the contact form. 

If you do provide me personal data, it will be shared with no one, and in almost all cases it will be deleted within 30 days.

<div class="protect" role="text" aria-label="My email address is my name, without capitals or spaces, then dash, then the word website. All of this at protonmail dot com.">
  <p class="inner">    
     You can contact me at any time via Email:
     <button onClick="show()" class="tooltip" domain="moc">
       <span id="tooltiptext" class="tooltiptext">Click to copy</span>
     </button> 
  </p>
</div>

#### The policy 

The General Data Protection Regulation (GDPR) is a European Union (EU) law, which protects the private information of
 EU citizens. Personal data is any identifying data, e.g. name, email, IP address etc. 

This is a personal website, so data collection is kept to a minimum. For instance, 
if you browse this website without using the contact form, I will collect no personal data from you. 
No IP address. No cookies. No analytics. 

#### Using the contact form 
If you choose to use the contact form, I will collect the personal data you choose to provide to me. 
You are not obliged to provide your email address or any other personal data to contact me.
 
Any data you do provide to me will be deleted ordinarily within 30 days automatically.
In order to respond to your comment, question or request, or for some other legal obligation, I may need to hold
 your personal data for longer than 30 days.
If this is the case, as soon as is appropriate, within reason, your data will be deleted.
 
I will use your data to the extent that it is necessary to respond to your comment, question or request. 
Otherwise, I will delete your personal data automatically within the 30 days.

I will not share, sell, trade or rent any of your personal information.

Under GDPR, you have following the right to (amongst other things):

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- know what personal data of yours I am holding,

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- change or erase any personal data you provided to me.

#### Basin

The only third-party library I use is Basin. This was to create the contact form. 
You can find Basin here: <a href="https://usebasin.com/">https://usebasin.com</a>.
Their privacy policy can be found here: <a href="https://usebasin.com/privacy">https://usebasin.com/privacy</a>.
They are committed to GDPR and good data practices.

Of particular note, Basin uses servers based in the United States of America (U.S.) and Canada. As such, by using the 
 contact form you consent to the processing and transfer of your personal data in and to the U.S. and Canada. 

If you chose to provide me an email address, via the contact form, you will be sent an email by Basin. This email
will provide a link to Basin's GDPR page, a link to change how I use your data, and a link to request I 
permanently delete your data.

<div style="text-align: right; font-style: italic;"> 
  Last updated April, 07 2021
</div>

<script>
var name = "alexplatt";
var dash = "-";
var website = "website";
var at = "@";
var domain = "protonmail";
var dot = ".";
var com = "com";
function show() {
  copyToClipboard(name+dash+website+at+domain+dot+com);
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