

              jQuery(function ($) {
                  //ANA SAYFA DEVAMINI OKU
                  $('.devamyazi').on('click', function () {

                      if ($(this).hasClass('aktif')) {
                          $('.fullscreen-topnav .text-item p').css({ 'height': '100px' });
                          $(this).removeClass('aktif');
                      } else {
                          $('.fullscreen-topnav .text-item p').css({ 'height': 'auto' });
                          $(this).addClass('aktif');
                      }

                  });
                  //ANA SAYFA DEVAMINI OKU
              });



jQuery(function ($) {
    //ANA SAYFA DEVAMINI OKU
    $('.devamyazi2').on('click', function () {

        if ($(this).hasClass('aktif')) {
            $('.item-about .content').css({ 'height': '100px' });
            $(this).removeClass('aktif');
        } else {
            $('.item-about .content').css({ 'height': 'auto' });
            $(this).addClass('aktif');
        }

    });
    //ANA SAYFA DEVAMINI OKU
});
