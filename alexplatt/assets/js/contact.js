 function ajax() {
   var xhttp = new XMLHttpRequest();
   xhttp.responseType = "json";
   xhttp.open("POST", "https://usebasin.com/f/b7e6cac71fe7.json", true);
   xhttp.setRequestHeader("Accept", "application/json");
   xhttp.send();
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