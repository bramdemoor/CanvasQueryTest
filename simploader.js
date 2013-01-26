/* usage: 

var image = new Image;

simploader(image); // also accept array of images

image.src = "something.png";

simploader(function() {

  // some action on image ready

});

*/

simploader = (function() {

  var count = 0;
  var index = 0;
  var callbacks = [];

  var simploader = function() {
      if(arguments[0] instanceof Array) {
        for(var i = 0; i < arguments[0].length; i++) {
          add(arguments[0][i]);
        }
      } else if(arguments[0] instanceof Image) {
        add(arguments[0]);
      } else {
        callbacks.push(arguments[0]);
      }
    }

  function add(image) {
    
    count++;
    image.onload = function() {
      count--;

      if(!count) {
        for(var i = 0; i < callbacks.length; i++) {
          callbacks[i]();          
        }
        callbacks = [];
      }
    }
  }


  return simploader;

})();