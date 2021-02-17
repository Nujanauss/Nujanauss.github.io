data = [
  {label:"Java", value:10},
  {label:"Python", value:6},
  {label:"WebDev", value:7},
  {label:"MATLAB", value:8},
  {label:"SQL", value:3},
  {label:"Protobuf", value:5},
  {label:"ØMQ", value:5}
];

var axisMargin = 100,
    margin = 100,
    valueMargin = 4,
    width = parseInt(d3.select('body').style('width'), 10),
    height = parseInt(d3.select('body').style('height'), 10),
    barHeight = 30,
    barPadding = 5,
    data, bar, svg, scale, xAxis, labelWidth = 0;

max = d3.max(data, function(d) { return d.value; });

svg = d3.select('body')
         .append("svg")
         .attr("width", width)
         .attr("height", height);

bar = svg.selectAll("g")
         .data(data)
         .enter()
         .append("g");

bar.attr("class", "bar")
         .attr("cx",0)
         .attr("transform", function(d, i) {
             return "translate(" + margin + "," + (i * (barHeight + barPadding) + barPadding) + ")";
         });

scale = d3.scaleLinear()
        .domain([0, max])
        .range([0, width - margin*2 - labelWidth]);

bar.append("rect")
  .attr("transform", "translate(" + labelWidth + ", 0)")
  .attr("height", barHeight)
  .attr("width", 0)
  .transition()
  .duration(1500)
  .attr("width", function(d) {
    return scale(d.value);
   });

bar.append("text")
       .attr("class", "label")
       .attr("y", barHeight / 2)
       .attr("dx", -valueMargin + labelWidth) //margin right
       .attr("dy", ".35em") //vertical align middle
       .attr("text-anchor", "start")
       .text(function(d){
           return (d.label)
       })
       .attr("x", "10px")
       .transition()
       .duration(7000)
       .attr("opacity", function(d) {
         return scale(d.value)
       });

svg.insert("g",":first-child")
  .attr("class", "axisHorizontal")
  .attr("transform", "translate(" + (margin + labelWidth) + "," + (height - axisMargin - margin)+")");