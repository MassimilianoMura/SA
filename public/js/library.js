
$(document).ready(function () {
    $(".canvas-bg-preview").click(function () {
      var img = $(this).attr('src');
      $('#container').css("background-image", "url(" + img + ")");
      $('#container').css("background-size", "cover");
    });
});


$('button').on('click', function(){
  $('.text-here').html($('.story-input').val());
});
