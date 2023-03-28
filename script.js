$(function () {
  $('.menu-trigger').click(function () {
    $(this).toggleClass('active');
    $('.gnavi').css('display', 'block');
    if ($(this).hasClass('active')) {
      $('.gnavi').addClass('active');
    } else {
      $('.gnavi').removeClass('active');
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

  $('.next').click(function () {
    var $displaySlide = $('.active');
    $displaySlide.removeClass('active box-design');
    $displaySlide.next().addClass('active box-design');
    toggleChangeBtn();
  });
  $('.prev').click(function () {
    var $displaySlide = $('.active');
    $displaySlide.removeClass('active box-design');
    $displaySlide.prev().addClass('active box-design');
    toggleChangeBtn();
  });
});



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
