---
layout: page
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
    padding: 10px;
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
</style>


Want to get in touch? Feel free to send me a message!

<form action="https://usebasin.com/f/b7e6cac71fe7" method="POST">
  <div class="form-inner">
    <input type="text" placeholder="Name" name="name">
    <input type="email" placeholder="Email" name="email">
    <textarea placeholder="Message..." rows="5" name="message"></textarea>
    <button type="submit">Submit</button>
  </div>
</form>
