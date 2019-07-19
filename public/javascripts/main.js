$(function(){
  var template = $('#search-results').html()
  console.log(template)
  Mustache.parse(template);
  $('#search').on('keyup', function(e){
    if(e.keyCode === 13) {
      var parameters = { search: $(this).val() };
      $.get( '/search',parameters, function(data) {
        console.dir(data)
        var rendered = Mustache.render(template, data)
        $('#results').html(rendered);
      });
     };
  });
 });