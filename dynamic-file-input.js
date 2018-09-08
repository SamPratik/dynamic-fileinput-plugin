var el = 0;
var imgs = [];
$(document).on('change', '#imgs', function(e) {
    if (this.files.length) {
      el++;
      $("#imgtable").append('<tr class="trcl" id="tr'+(el-1)+'"><td><img class="preimgs"></td><td><button class="btn btn-danger" type="button" onclick="rmvimg('+(el-1)+')"><i class="fa fa-times"></i></button></td></tr>');
      var file = this.files[0];
      var reader = new FileReader();

      reader.onload = function(e) {
          var data = e.target.result;

          document.getElementsByClassName('preimgs')[el-1].setAttribute('src', data);
          document.getElementsByClassName('preimgs')[el-1].setAttribute('style', 'width:200px');
      };

      reader.readAsDataURL(file);
      imgs.push(file);
      console.log(imgs);
    }

});

function rmvimg(index) {
    $("#tr"+index).remove();
    imgs.splice(index, 1);
    console.log(imgs);
    var trcl = document.getElementsByClassName('trcl');
    for(el=0; el<trcl.length; el++) {
        trcl[el].setAttribute('id', 'tr'+el);
        trcl[el].setAttribute('onclick', 'rmvimg('+el+')');
    }
}
