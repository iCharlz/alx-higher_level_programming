$.get('https://fourtonfish.com/hellosalut/?lang=' + $('html').attr('lang'), function (data) {
  $('div#hello').text(data.hello);
});
