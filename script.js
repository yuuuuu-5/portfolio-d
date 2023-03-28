$(function () {
  $('.menu-trigger').click(function () { //メニューボタンタップ後の処理
    $(this).toggleClass('active'); //クリックした要素に「.active」要素を付与
    $('.gnavi').css('display', 'block');//「.gnavi」要素の非表示を表示する
    if ($(this).hasClass('active')) { //もしクリックした要素に「.active」要素があれば
      $('.gnavi').addClass('active');　 //「.active」要素を付与
    } else {                            //「.active」要素が無ければ
      $('.gnavi').removeClass('active'); //「.active」要素を外す
    }
  });
});

$(function () {
  function toggleChangeBtn() {
    var slideIndex = $('.staff-box').index($('.active'));
    $('.button').show();
    if (slideIndex == 0) {
      $('.prev').hide();
    } else if (slideIndex == 3) {
      $('.next').hide();
    }
  }

  toggleChangeBtn();

  $('.next').click(function () {/*nextボタンを押したとき*/
    var $displaySlide = $('.active');/*現在表示中のスライドを取得*/
    $displaySlide.removeClass('active box-design');/*そのスライドからactiveクラスを除いて表示されないようにする。*/
    $displaySlide.next().addClass('active box-design');/*次のスライドにactiveクラスをつけ、表示させる。*/
    toggleChangeBtn();/*nextボタンを隠すか判断*/
  });
  $('.prev').click(function () {/*prevボタンを押したとき*/
    var $displaySlide = $('.active');/*現在表示中のスライドを取得*/
    $displaySlide.removeClass('active box-design');/*そのスライドからactiveクラスを除いて表示されないようにする。*/
    $displaySlide.prev().addClass('active box-design');/*前のスライドにactiveクラスをつけ、表示させる。*/
    toggleChangeBtn();/*prevボタンを隠すか判断*/
  });
});

// ③モーダル部分

$(function () {
  $('.modalopen').each(function () {
    $(this).on('click', function () {
      var target = $(this).data('target');
      var modal = document.getElementById(target);
      console.log(modal);
      $(modal).fadeIn();
      return false;
    });
  });
  $('.modalClose,.modal-main,.modal-bg').on('click', function () {
    $('.js-modal').fadeOut();
    return false;
  });
});

$(function () {
  var $filters = $('.filter [data-filter]'),
    $boxes = $('.product-wrapper [data-category]');

  $filters.on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    $filters.removeClass('active');
    $this.addClass('active');

    var $filterTime = $this.attr('data-filter');

    if ($filterTime == 'all') {
      $boxes.removeClass('is-animated')
        .fadeOut().promise().done(function () {
          $boxes.addClass('is-animated').fadeIn();
        });
    } else {
      $boxes.removeClass('is-animated')
        .fadeOut().promise().done(function () {
          $boxes.filter('[data-category = "' + $filterTime + '"]')
            .addClass('is-animated').fadeIn();
        });
    }
  });
});

