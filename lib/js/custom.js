$(document).ready(function(){
  console.log('DOM ready...');

  var items = $('.item');

  $('#Free').on('click', function(){
    items.removeClass('selected');
    $('.item1').toggleClass('selected');
  });

  $('#Pro').on('click', function(){
    items.removeClass('selected');
    $('.item2').toggleClass('selected');
  });

  $('#Ent').on('click', function(){
    items.removeClass('selected');
    $('.item3').toggleClass('selected');
  });

});
