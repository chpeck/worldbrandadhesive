function imageError(source){
  source.src = '/images/missing.jpg';
  return true;
}

$(function() {
  $('.slide').show();
  $('.slides').slides({
    preload: true,
    play: 5000,
    pause: 2500,
    hoverPause: true
  });

  $('a').on('click', function() {
    _gaq.push(['_trackEvent', 'Links', 'Click', $(this).attr('href')]);

  });

  $('#categories a').click(function(e) {
    e.preventDefault();
    $('#categories li.active').removeClass('active');
    $(this).closest('li').addClass('active');
    $.get($(this).attr('href'), function(data) {
      $('#products').html(data);
    });
  });
});
