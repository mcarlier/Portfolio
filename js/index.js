$(document).ready(function(){
    $("#projects-image").hide();
    $( ".projects-name" ).hover(
      function() {
        var newname = "img/" + $(this).attr('id')+".jpg";

       $("#projects-image").attr("src",newname);
       //alert( $("#projects-image").attr("src"));

      $("#projects-image").show();
    }, function() {
        $("#projects-image").hide();
    });
});
