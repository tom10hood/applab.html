  var moviePromise = d3.json("https://ghibliapi.herokuapp.com/films");
var printTitles = function(movieData)
{
d3.select(".titles")
.append("ol")
.selectAll("li")
.data(movieData)
.enter()
.append("li")
.text(function(d) { return d.title})
.on("click", function(d) { printData(d) });
}
var printData = function(movie)
{
d3.select(".data *").remove("ol");
d3.select(".data").append("div").attr("class", "info");
d3.select(".info").append("ol").attr("class", "infoList");
d3.select(".infoList").append("li").text(movie.producer);
d3.select(".infoList").append("li").text(movie.director);    
}
moviePromise.then(
function(movieData)
{
printTitles(movieData);
console.log("movieData", movieData);
},
);
