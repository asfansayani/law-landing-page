$(document).ready(function () {
    // Store a reference to the "info-sec" element
    var optimizeSec = $(".optimize-sec");
  
    // Add a scroll event listener
    $(document).scroll(function () {
      var documentTop = $(document).scrollTop();
      var infoSecTop = optimizeSec.offset().top;
      var range = $(".rangebefore")
      var range2 = $(".rangeafter")
      var rangebefore2 = $(".rangebefore2")
      var rangeafter2 = $(".rangeafter2")
  
      if (documentTop > infoSecTop) {
        range.css('animation-name', 'example')
        range2.css('animation-name', 'example1')
        rangebefore2.css('animation-name', 'example3')
        rangeafter2.css('animation-name', 'example4')
      } else {
        range.css('')
        range2.css('')
      }
    });
  
  });