// This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 Unported License.

window.mqb = {

  init: function() {
    /* If the bookmarklet already exists on the page, remove it */
    var bookmarklet = document.getElementById( 'sb-mediaQueryBookmarklet' );
    if ( bookmarklet ) {
      document.body.removeChild( bookmarklet );
    }

    mqb.version = '1.4.4';
    mqb.tmpl =
      "<p id=\"mqb-dimensions\"></p>" +
      "<p id=\"mqb-mousePosition\"></p>" +
      "<ol id=\"mqb-queries\"></ol>" +
      "<div id=\"mqb-linksContainer\">" +
      "  <a id=\"mqb-version\" href=\"https://github.com/sparkbox/mediaQueryBookmarklet\">version {{version}}</a>" +
      "  <button id=\"mqb-closeButton\">close</button>" +
      "  <button id=\"mqb-positionButton\"></button>" +
      "</div>";
    mqb.rulersTmpl =
      "<div id=\"mqb-horz-ruler\">" +
      "  <div id=\"mqb-mouseXPosition\">" +
      "</div>" +
      "<div id=\"mqb-vert-ruler\">" +
      "  <div id=\"mqb-mouseYPosition\">" +
      "</div>";

    mqb.rulers = document.getElementById( "sb-rulers" );
    mqb.emTest = document.createElement( "div" );
    mqb.emTest.id = "mqb-emTest";
    document.body.appendChild( mqb.emTest );

    mqb.loadCSS();
    mqb.createTemplate();

    mqb.mqList = [];

    mqb.createMQList();

    window.addEventListener('resize', function() {
      mqb.showCurrentSize();
      if ( window.matchMedia ) {
        mqb.mqChange();
      }
    }, false);
    mqb.mqChange();

    mqb.initEmSize();
  }


};

mqb.init();