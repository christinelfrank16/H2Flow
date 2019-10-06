var gallonsUsed = 0; //fill in from blob hopefully
var timeElapsed = 0; //fill in from blob hopefully
var cost = 0; //calculate and fill in

var gallons = d3.select('body')
                .append('div')
                .text(gallonsUsed)
                .attr("class", "number")
                .attr("class", "stats")
                .attr("class", "center")
                .append('p')
                .text("gallons used")
var time = d3.select('body')
                .append('div')
                .text(timeElapsed)
                .attr("class", "number")
                .attr("class", "stats")
                .attr("class", "center")
                .append('p')
                .text("seconds elapsed")
var money = d3.select('body')
                .append('div')
                .text(timeElapsed)
                .attr("class", "number")
                .attr("class", "stats")
                .attr("class", "center")
                .append('p')
                .text("seconds elapsed")


// // bar graph
// const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
//
// const w = 500;
// const h = 100;
//
// const svg = d3.select("body")
//           .append("svg")
//           .attr("width", w)
//           .attr("height", h);
//
// svg.selectAll("rect")
//   .data(dataset)
//   .enter()
//   .append('rect')
//   .attr("x", (d, i) => i * 30)
//   .attr("y", (d, i) => d * 3)
//   .attr("width", 25)
//   .attr("height", 100)
//   .attr("fill", "navy")
//   .attr("class", "bar");
// svg.selectAll("text")
//   .data(dataset)
//   .enter()
//   .append("text")
//   .text((d) => d)
//   .attr("x", (d, i) => i * 30)
//   .attr("y", (d, i) => h - (3 * d) - 3);

// line graph
var margin = {top: 50, right: 50, bottom: 50, left: 50}
, width = window.innerWidth - margin.left - margin.right // Use the window's width
, height = window.innerHeight - margin.top - margin.bottom; // Use the window's height

var n = 21; //number of datapoints

var xScale = d3.scaleLinear()
.domain([0, n-1]) // input
.range([0, width]); // output

var yScale = d3.scaleLinear()
.domain([0, 1]) // input
.range([height, 0]); // output

// line generator
var line = d3.line()
.x(function(d, i) { return xScale(i); }) // set the x values for the line generator
.y(function(d) { return yScale(d.y); }) // set the y values for the line generator
//.curve(d3.curveMonotoneX) // apply smoothing to the line

//generate random dataset
dataset2 = d3.range(n).map(function(d) { return {"y": d3.randomUniform(1)() } });

var div = d3.select("body").append("div")
          .attr("class", "tooltip")
          .style("opacity", 0);

const svg2 = d3.select("body")
          .append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
svg2.append('g')
  .attr("class", "x axis")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(xScale));
svg2.append('g')
  .attr("class", "y axis")
  .call(d3.axisLeft(yScale));
svg2.append('path')
  .datum(dataset2)
  .attr("class", "line")
  .attr("d", line);
svg2.selectAll(".dot")
  .data(dataset2)
  .enter().append("circle") // Uses the enter().append() method
    .attr("class", "dot") // Assign a class for styling
    .attr("cx", function(d, i) { return xScale(i) })
    .attr("cy", function(d) { return yScale(d.y) })
    .attr("r", 5)
    .on("mouseover", function(d) {
        div.transition()
            .duration(200)
            .style("opacity", .9);
        div.html(n + "," + dataset2["y"])	/// figure out how to insert content here
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY - 28) + "px");
        })
    .on("mouseout", function(d) {
        div.transition()
            .duration(500)
            .style("opacity", 0);
    });
// graph title
svg2.append("text")
  .attr("x", (width / 2))
  .attr("y", 0 - (margin.top / 2))
  .attr("text-anchor", "middle")
  .style("font-size", "20px")
  .style("text-decoration", "underline")
  .style("font-family", "Work Sans")
  .text("Water Usage");
//axis labels
svg2.append("text")
  .attr("x", (width / 2) )
  .attr("y",  height + margin.top)
  .attr("text-anchor", "middle")
  .style("font-size", "14px")
  .style("font-family", "Work Sans")
  .text("Date")
svg2.append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", 0 - margin.left)
  .attr("x",0 - (height / 2))
  .attr("dy", "1em")
  .style("text-anchor", "middle")
  .style("font-size", "14px")
  .style("font-family", "Work Sans")
  .text("Value");
