(function($) {

var allInputs = $('input,select');
//"input[name='params[sessionKey]']"

allInputs.change(function(event) {
  
  console.log(event);
  //console.log('element', $( this ));
  console.log('name=' + $(this).attr('name'));
  var origin = $(this);
  var originName = origin.attr('name');
  if ( originName != null && 
       originName.length > 0 ) {
    var similar = $("input[name='" + originName + "']");
    similar.each(function() {
      if ( $(this) != origin ) {
        $(this).val(origin.val());
      }
    });
  }
});

})(jQuery);
