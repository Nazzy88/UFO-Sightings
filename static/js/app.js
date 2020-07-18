// // UFO Sightings - Javascript

// from data.js
var tableData = data;

// YOUR CODE HERE!
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement1 = d3.select("#datetime");
  var inputElement2 = d3.select("#city");
  var inputElement3 = d3.select("#state");
  var inputElement4 = d3.select("#country");
  var inputElement5 = d3.select("#shape");

  // Get the value property of the input element
  var inputValue1 = inputElement1.property("value");
  var inputValue2 = inputElement2.property("value");
  var inputValue3 = inputElement3.property("value");
  var inputValue4 = inputElement4.property("value");
  var inputValue5 = inputElement5.property("value");
  
  
  var filteredData = tableData.filter(x => x.datetime === inputValue1 
                                        || x.city === inputValue2
                                        || x.state === inputValue3
                                        || x.country === inputValue4
                                        || x.shape === inputValue5);
  console.log(filteredData);

//   var datetime = filteredData.map(x => x.datetime);

  var tbody = d3.select("tbody");
  tbody.html("");

  // append stats to the table
  filteredData.forEach((ufodata) => {
    var row = tbody.append("tr");
    Object.entries(ufodata).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });  


});
var tbody = d3.select("tbody");
tableData.forEach((ufodata) => {
    var row = tbody.append("tr");
    Object.entries(ufodata).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });