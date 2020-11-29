var map = document.getElementById("js-map");
var districts = map.querySelectorAll("[class*=js-district]");

var i = districts.length;
while (i--) {
  districts[i].addEventListener("mouseenter", function(e) {
    if (e.target.classList.contains("js-district")) {
      map.appendChild(e.target.parentNode);
    }
  });

  districts[i].onclick = function(e) {
    var svg = document.querySelector("svg");
    var svgBounding = svg.getBBox();

    var mapBounding = map.getBBox();

    var targetBounding = e.target.getBBox();

    var scale = Math.min(mapBounding.width / targetBounding.width, mapBounding.height / targetBounding.height, 7);

    var transformOriginX = targetBounding.x + targetBounding.width / 2;
    var transformOriginY = targetBounding.y + targetBounding.height / 2;

    

    // ANIMATION
    svg.style.transformOrigin = (transformOriginX) + "px " + (transformOriginY) + "px";
    svg.style.transform = "scale(" + scale + ")";
  };
}

var current = {
        x: 0,
        y: 0,
        zoom: 1
    },
    con = document.getElementById('container');

con.onclick = function(e) {
    var coef = e.shiftKey || e.ctrlKey ? 0.5 : 3,
        nz = current.zoom * coef;
    con.style.transform = 'translate(' + '-50%, ' + '-50%) ' +
        'scale(' + nz + ')';
};
