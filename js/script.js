$(document).ready(function() {
    $('#autoWidth,#autoWidth2,#autoWidth3,#autoWidth4,#autoWidth5,#autoWidth6,#autoWidth7,#autoWidth8').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth,#autoWidth2,#autoWidth3,#autoWidth4,#autoWidth5,#autoWidth6,#autoWidth7,#autoWidth8').removeClass('cS-hidden');
        } 
    });  
  });