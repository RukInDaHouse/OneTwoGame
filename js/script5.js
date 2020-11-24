console.clear();

var root  = document.documentElement;
var body  = document.body;
var animblocks = document.querySelectorAll(".animblock");
var tiles = document.querySelectorAll(".tile");

for (var i = 0; i < tiles.length; i++) {  
  addListeners(tiles[i], animblocks[i]);
}

function addListeners(tile, animblock) {
  
  tile.addEventListener("click", function() {
    animateHero(tile, animblock);
  });
  
  animblock.addEventListener("click", function() {
    animateHero(animblock, tile);
  });  
}

function animateHero(fromHero, toHero) {
    
  var clone = fromHero.cloneNode(true);
      
  var from = calculatePosition(fromHero);
  var to = calculatePosition(toHero);
  
  TweenLite.set([fromHero, toHero], { visibility: "visible", });
  TweenLite.set(clone, { position: "absolute", margin: 0 });
  
  body.appendChild(clone);  
      
  var style = {
    x: to.left - from.left,
    y: to.top - from.top,
    width: to.width,
    height: to.height,
    autoRound: false,
    ease: Power1.easeOut,
    onComplete: onComplete
  };
   
  TweenLite.set(clone, from);  
  TweenLite.to(clone, 3, style)
    
  function onComplete() {
    
    TweenLite.set(toHero, { visibility: "visible", });
    body.removeChild(clone);
  }
}

function calculatePosition(element) {
    
  var rect = element.getBoundingClientRect();
  
  var scrollTop  = window.animblockYOffset || root.scrollTop  || body.scrollTop  || 0;
  var scrollLeft = window.animblockXOffset || root.scrollLeft || body.scrollLeft || 0;
  
  var clientTop  = root.clientTop  || body.clientTop  || 0;
  var clientLeft = root.clientLeft || body.clientLeft || 0;
    
  return {
    top: Math.round(rect.top + scrollTop - clientTop),
    left: Math.round(rect.left + scrollLeft - clientLeft),
    height: rect.height,
    width: rect.width,
  };
}