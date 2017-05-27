$( document ).ready(function(){
	$('ul.tabs').tabs();
})

$(".show-more a").on("click", function() {
  var $this = $(this);
  var $content = $this.parent().prev("div.content");
  var linkText = $this.text().toUpperCase();

  if (linkText === "VER MÁS...") {
    linkText = "Ver menos...";
    $content.removeClass("hideContent");
    $content.addClass("showContent");
  } else {
    linkText = "Ver más...";
    $content.removeClass("showContent");
    $content.addClass("hideContent");
  };

  $this.text(linkText);
});