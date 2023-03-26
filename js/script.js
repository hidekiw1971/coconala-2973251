
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる


  // ここから
  //ドロワーメニュー
  $(".js-drawer").click(function () {
    $(".js-drawer").toggleClass("js-drawer-open");
    $(".js-drawer-menu").toggleClass("js-drawer-menu-open");
    $("body").toggleClass("active");
  });

  // 里親募集
  const mySwiper = new Swiper('.mySwiper-satoOya', {
    slidesPerView: 1.2, // コンテナ内に表示させるスライド数（CSSでサイズ指定する場合は 'auto'）
    spaceBetween: 10, // スライド間の余白（px）
    centeredSlides: true, // アクティブなスライドを中央に配置する

    loop: true,  // 無限ループさせる
    loopAdditionalSlides: 5, // 無限ループさせる場合に複製するスライド数

    speed: 8000, // スライドアニメーションのスピード（ミリ秒）

    autoplay: { // 自動再生させる
      delay: 0, // 次のスライドに切り替わるまでの時間（ミリ秒）
      disableOnInteraction: false, // ユーザーが操作しても自動再生を止めない
      waitForTransition: false, // アニメーションの間も自動再生を止めない（最初のスライドの表示時間を揃えたいときに）
    },

    grabCursor: true, // PCでマウスカーソルを「掴む」マークにする
    watchSlidesProgress: true, // スライドの進行状況を監視する


    breakpoints: { // ブレークポイント
      600: { // 画面幅600px以上で適用
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },

    on: { // イベントを登録する
      slideChange: (swiper) => {
        console.log('Slide index changed to: ' + (swiper.realIndex + 1));
      },
    },
  });

  // お知らせ
  const mySwiperOshirase = new Swiper('.mySwiper-oshirase', {
    slidesPerView: 1.2, // コンテナ内に表示させるスライド数（CSSでサイズ指定する場合は 'auto'）
    spaceBetween: 10, // スライド間の余白（px）
    centeredSlides: true, // アクティブなスライドを中央に配置する

    loop: true,  // 無限ループさせる
    loopAdditionalSlides: 5, // 無限ループさせる場合に複製するスライド数
    grabCursor: true, // PCでマウスカーソルを「掴む」マークにする
    watchSlidesProgress: true, // スライドの進行状況を監視する

    breakpoints: { // ブレークポイント
      600: { // 画面幅600px以上で適用
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
    on: { // イベントを登録する
      slideChange: (swiper) => {
        console.log('Slide index changed to: ' + (swiper.realIndex + 1));
      },
    },

  });

  // アコーディオン
  $('.nekonote-q').click(function () {
    $(this).siblings('.nekonote-a').stop().slideToggle();
    $('.nekonote-q').not($(this)).siblings('.nekonote-a').slideUp();
    $(this).toggleClass('active');
    $('.nekonote-q').not($(this)).removeClass('active');
  });


  // 
  // ここまで





  var topBtn = $('.pagetop');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  //ドロワーメニュー
  $("#MenuButton").click(function () {
    // $(".l-drawer-menu").toggleClass("is-show");
    // $(".p-drawer-menu").toggleClass("is-show");
    $(".js-drawer-open").toggleClass("open");
    $(".drawer-menu").toggleClass("open");
    $("html").toggleClass("is-fixed");

  });



  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });

});
