// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
var divs_shown = false;
function toggleAllDebugDivs() {
  var divs = Element.getElementsBySelector($('result'), 'div[class="debug"]');
  var text = $('showdebug').firstChild
  if(divs_shown) {
    Element.replace(text, "Show debugging info");
    divs_shown = false;
  } else {
    Element.replace(text, "Hide debugging info");
    divs_shown = true;
  }

  divs.each(Element.toggle);
}

function toggleLongDesc(id) {
  Element.toggle("description-txt-short-"+id);
  Element.toggle("description-txt-long-"+id);
}
