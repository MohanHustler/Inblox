$('.h-menu-icon').click(function () {
  $('.menu-bar-section').addClass('active');
});

$('.menu-bar-close').click(function () {
  $('.menu-bar-section').removeClass('active');
});

function hoverNavItem() {
  var navList = $('#nav-list li');

  navList.each(function (index) {
    document
      .querySelector(`.nav-item-${index}`)
      .addEventListener('mouseenter', () => {
        document.querySelector('.menu-bar-image').style.top = `${
          index * 70 + 40
        }px`;
      });
  });

  document.querySelector(`.pause_img`).addEventListener('click', () => {
    document.querySelector('.music-section-img .pause_img').style.display =
      'none';
    document.querySelector('.music-section-img .play_img').style.display =
      'block';
    document.querySelector('#my_audio').play();
  });

  document.querySelector(`.play_img`).addEventListener('click', () => {
    document.querySelector('.music-section-img .pause_img').style.display =
      'block';
    document.querySelector('.music-section-img .play_img').style.display =
      'none';
    document.querySelector('#my_audio').pause();
  });

  document.querySelector('#my_audio').addEventListener('ended', function () {
    document.querySelector('.music-section-img .play_img').style.display =
      'none';
    document.querySelector('.music-section-img .pause_img').style.display =
      'block';
  });
}

hoverNavItem();
