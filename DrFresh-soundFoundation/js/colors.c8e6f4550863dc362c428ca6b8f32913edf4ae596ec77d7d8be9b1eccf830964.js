var analyseImage = function(img) {

    if (!img) {
      img = $('#logo')[0];
      console.log("found logo");
    } else {
        console.log("no logo");
      $('#logo').attr('src', $(img).attr('src'));
    }

    var canvas = $('#canvas')[0];

    var analyser = new ColorAnalyser(img, canvas);

    var bgColor = analyser.detectBackground();

    $('body').css('background-color', 'rgb(' + bgColor[0] + ', ' + bgColor[1] + ', ' + bgColor[2] + ')');

    var i;
    var palette = analyser.analyseImage(6, bgColor);
    //var palette = analyser.getThresholdedPalette(0.6, 128, bgColor, 32);

    var colors = palette[0];

    console.log("Colors:");
    console.log(palette);


    var numPixels = palette[1];

    var textColor = analyser.chooseTextColor(bgColor, colors);
    var colorString = 'rgb(' + textColor[0] + ', ' + textColor[1] + ', ' + textColor[2] + ')';

    $('a').css('color', colorString);

    // $('#sidebar').css('background-color', colorString);

    $('#colors-top').empty();
    $('#colors-bottom').empty();

    // setColor('#sidebar', );
    var r = colors[1][0][0];
    var g = colors[1][0][1];
    var b = colors[1][0][2];
    colorString = "rgb(" + Math.round(r) + "," + Math.round(g) + "," + Math.round(b) + ")";
    $('#sidebar').css('background-color', colorString);

    for (i = 0; i != colors.length; i++) {
      var r = colors[i][0][0];
      var g = colors[i][0][1];
      var b = colors[i][0][2];
      var count = colors[i][1];

      var colorString = "rgb(" + Math.round(r) + "," + Math.round(g) + "," + Math.round(b) + ")";

      var $previewTop = $('<div style="width: 16.6666%; height: 80px; background-color: black; display: inline-block;"></div>');
      $previewTop.css('background-color', colorString);
      var $previewBottom = $previewTop.clone();

      $previewTop.text(count);
      //$preview.text(count);
      $('#colors-top').append($previewBottom);
      $('#colors-bottom').append($previewTop);
    }
  };

// function setColor(elem, prop, r, g, b){

// }

  var handleNewImage = function(event) {
    event.preventDefault( );

    var supported = window.File && window.FileReader && window.FileList && window.Blob;
  
    if (!supported) {
      alert("Your browser can't do this :( Try using Safari 5.2+, Chrome, Firefox or IE 10+");
      return;
    }
  
    var dropEvent = event.originalEvent;
    var files = (dropEvent.target.files) || (dropEvent.dataTransfer.files);
    var file = files[0];

    var reader = new FileReader();
  
    reader.onload = function (readerEvent) {
      var image = new Image();
      image.onload = function (imageEvent) {
        console.log('image', image);
        analyseImage(image);
      }

      image.src = readerEvent.target.result;
    }

    reader.onerror = function (readerEvent) {
      console.log(readerEvent);
    }

    reader.readAsDataURL(file);
  };

  window.onload = function() {

    $('#dropZone').on('drop', handleNewImage);
    $('#file-chooser').bind('change', handleNewImage);

    analyseImage();
  }