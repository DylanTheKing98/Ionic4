function search() {



  var saySearch = 'https://apitest.sayellow.com/@2?ajax=1&q=' + $('#srcBar').val() + '&c=&l=';

  $.getJSON(saySearch).done(function (data) {
    // console.log(data)
    var a = data.c
    var info = data.n
    //console.log(info)

    $('#srcResults').html('')

    $.each(a, function (index, value) {
      // console.log(a[index])
      // console.log(info[index])
      if (index > 4) { return false }

      $('#srcResults').append('<ion-card"><ion-card-header><ion-card-subtitle id= "' + value + '></ion-card-subtitle><ion-card-title id="src1"></ion-card-title></ion-card-header><ion-card-content "  onclick="catagories(' + value + ')">' + info[index] + '</ion-card-content></ion-card>')
    })



  }).fail(function () {
    alert("Ajax call has failed.")

  })
}

function catagories(pRef) {
  //console.log(pRef)

  var saCat = 'https://test.sayellow.com/@2?SearchCategoryCode=' + pRef + '&SearchLocationID=10'

  location.href = saCat



}


