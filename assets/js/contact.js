var sent = false;
var button;
var form;

window.onload = function () {
  form = document.getElementById("my-contact-form");
  button = document.getElementById("form-button");
  button.style.background = "#36454f";
  button.style.cursor = "default";
  button.disabled = false;
  button.innerHTML = "Submit";
}

function over() {
  if (!sent) {
    var button = document.getElementById("form-button");
    button.style.background = "#212a30"
    button.style.cursor = "pointer";
  }
}

function leave() {
  if (!sent) {
    var button = document.getElementById("form-button");
    button.style.background = "#36454f"
  }
}

function ajax(event) {
  event.preventDefault();
  var nameAtt = document.getElementById("form-name").value;
  var formMsg = document.getElementById("form-message");

  if (nameAtt) {
    formMsg.innerHTML = "Error: Honeypot!";
    return;
  }
  if (document.getElementById("form-txt").value.length < 12) {
    formMsg.innerHTML = "Error: Message is too short!";
    return;
  }
  if (!document.getElementById("check1").checked) {
    formMsg.innerHTML = "Error: Consent to privacy policy!";
    return;
  }

  formMsg.innerHTML = "";

  var formData = new FormData(form);
  var xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.open("POST", form.action, true);
  xhr.setRequestHeader("Accept", "application/json");

  xhr.onload = function(e) {
    console.log(xhr);
    if (xhr.status === 200) {
      document.getElementById("form-email").value = "";
      document.getElementById("form-txt").value = "";
      form.noValidate = true;
      button.style.background = "grey";
      button.style.cursor = "not-allowed";
      button.disabled = true;
      button.innerHTML = "Sent!";
      sent = true;
    } else {
      formMsg.innerHTML = "Error: " + response.error + "!";
    }
  };
  xhr.send(formData);
}

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