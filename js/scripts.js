
$('body').scrollspy({
    target: '#navbar-collapsible',
    offset: 52
});


$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 50
            }, 800);

          return false;
      }
    }
});

$('#email-btn').click(function() {
    alert('Oops, something bad happened. Please shoot us an email instead.')
})
