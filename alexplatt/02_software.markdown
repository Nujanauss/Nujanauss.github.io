---
layout: no-title-inline
title: Software
permalink: /software/
---
<style>
img:not(.accurate) { 
  width: 50px;
  height: 50px;
  transition: transform .2s;
}

.column {
  float: left;
  width: 33.33%;
}

.column h1 {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

@media screen and (max-width: 600px) {
  .logos {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
  }
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

.container {
  display: flex;
  height: auto;
  width: auto;
  align-items: center;
  justify-content: centre;
}

.item {
  order: 0;
}

.wrapper-container {
  display: flex;
  flex-direction: column;
  align-items:center;
  gap: 100px;
}

.zoom:hover {
  transform: scale(1.1);
}
</style>

# Commercial software

I worked for a number of years as a front and backend developer at 
[accu:rate](https://www.accu-rate.de/en/)
 who design crowd simulation software in Java.

Primarily, I focussed on a multinational research project which combined 
[crowd simulation software](https://www.accu-rate.de/en/software-crowd-it-en/) in Java and
[Bayesian Optimization](https://arxiv.org/abs/1807.02811) in Python to 
predict changes in crowd densities in real time.

Communication between components utilised [Google Protobuf](https://developers.google.com/protocol-buffers) 
and [ZeroMQ](https://zeromq.org/).

<br>

# Scientific software

Throughout my academic career, I have analysed mathematical models in 
[MATLAB](https://www.mathworks.com/products/matlab.html), carried out data analysis with 
[MySQL](https://www.mysql.com/) and 
[R](https://www.r-project.org/), and run many regression analyses with
[SPSS](https://www.ibm.com/products/spss-statistics).  

<br>

# Web development

I claim no great skill in web development, but I have enjoyed building this website!
It is hosted on
[GitHub](https://github.com/) and is a heavily customised version of 
[Jekyll](https://jekyllrb.com/)'s 
[minima theme](https://github.com/jekyll/minima). 

<br>

 <div class="row">
 
  <div class="column">
    <div class="container">
      <div align="center;" class="logos">
        <h1>Commercial</h1>
        <a href="https://www.java.com/"><img class="zoom" src="..//assets/logos/java.svg" alt="java" style="margin:10px;"></a>
        <a href="https://www.python.org/"><img class="zoom" src="..//assets/logos/python.svg" alt="python" style="margin:10px;"></a>
        <a href="https://developers.google.com/protocol-buffers"><img class="zoom" src="..//assets/logos/protobuf.png" alt="protobuf" style="margin:10px;"></a>
      </div>
    </div>    
  </div>
  
  <div class="column">
    <div class="container">
      <div align="center;" class="logos">
        <h1>Web Dev</h1>
        <a href="https://www.javascript.com/"><img class="zoom" src="..//assets/logos/javascript.svg" alt="javascript" style="margin:10px;"></a>
        <a href="https://www.w3.org/TR/CSS/"><img class="zoom" src="..//assets/logos/css.svg" alt="css" style="margin:10px;"></a>
        <a href="https://html.spec.whatwg.org/"><img class="zoom" src="..//assets/logos/html.svg" alt="html" style="margin:10px;"></a>
      </div>
    </div>    
  </div>
  
  <div class="column">
    <div class="container">
      <div align="center;" class="logos">
        <h1>Scientific</h1>
        <a href="https://www.r-project.org/"><img class="zoom" src="..//assets/logos/r.svg" alt="r" style="margin:10px;"></a>
        <a href="https://www.mathworks.com/products/matlab.html"><img class="zoom" src="..//assets/logos/matlab.png" alt="matlab" style="margin:10px;"></a>
        <a href="https://www.ibm.com/products/spss-statistics"><img class="zoom" src="..//assets/logos/spss.png" alt="spss" style="margin:10px;"></a>
      </div>
    </div>    
  </div>
  
</div>