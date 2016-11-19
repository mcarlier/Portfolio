(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-85336822-1', 'auto');
ga('send', 'pageview');

$(document).ready(function(){
    $("#projects-image").hide();

    $( ".projects-title" ).hover(function() {
        var newname = "img/" + $(this).attr('id')+".jpg";

       $("#projects-image").attr("src",newname);
       //alert( $("#projects-image").attr("src"));

      $("#projects-image").show();
    }, function() {
        $("#projects-image").hide();
    });

    $("#square").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
      $(this).removeClass("rotate");
    });

    $("#square").hover(function(){
      $(this).addClass("rotate");
    },
    function(){

    }
  );

  $('.fadelink').click(function(e){
    e.preventDefault();
    var link = $(this);
    $('body').fadeOut( 400, function() {
          window.location.href = link.attr( 'href' );
        });
  });
  $('body').hide();
  $('body').fadeIn(400);

  $(window).unload( function() {
  	$(window).unbind('unload');
  });

  $(window).bind('pageshow', function(e) {
      if (e.originalEvent.persisted) {
          window.location.reload();
  			}
  });
});
