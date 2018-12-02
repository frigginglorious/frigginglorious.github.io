document.querySelector('input[type="file"]').onchange = function(e) {
    var reader = new FileReader();
  
    reader.onload = function(e) {
      var dv = new jDataView(this.result);
  
      // "TAG" starts at byte -128 from EOF.
      // See http://en.wikipedia.org/wiki/ID3
      if (dv.getString(3, dv.byteLength - 128) == 'TAG') {
        var title = dv.getString(30, dv.tell());
        var artist = dv.getString(30, dv.tell());
        var album = dv.getString(30, dv.tell());
        var year = dv.getString(4, dv.tell());
      } else {
        // no ID3v1 data found.
      }
    };
  
    reader.readAsArrayBuffer(this.files[0]);
  };