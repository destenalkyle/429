 // variables
  var $window = $(window), gardenCtx, gardenCanvas, $garden, garden;
 +var clientWidth = $(window).width();
 +var clientHeight = $(window).height();
  
  $(function () {
      // setup garden
 @@ -26,7 +28,11 @@ $(function () {
  });
  
  $(window).resize(function() {
 -	location.replace(location);
 +    var newWidth = $(window).width();
 +    var newHeight = $(window).height();
 +    if (newWidth != clientWidth && newHeight != clientHeight) {
 +        location.replace(location);
 +    }
  });
  
  function getHeartPoint(angle) {
