
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる


  // ここから
  //ドロワーメニュー
  $(".js-drawer").click(function () {
    $(".js-drawer").toggleClass("js-drawer-open");
    $(".js-drawer-menu").toggleClass("js-drawer-menu-open");
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
    navigation: {
      nextEl: '.swiper-button-next', // 「次へ」ボタン要素のクラス
      prevEl: '.swiper-button-prev', // 「前へ」ボタン要素のクラス
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






});
