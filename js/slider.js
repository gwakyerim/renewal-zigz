console.log('[slider.js] loaded!');

/* 첫 구매 특가 Swiper Slider */
const mainCategory = new Swiper('.main-category-wrap.swiper', {
  slidesPerView: 5, /* 보여지는 슬라이드 갯수 */
  spaceBetween : 16, /* 아이템 사이 간격*/
  slidesOffsetBefore: 16,  /* 전체적인 슬라이드의 왼쪽에 공백을 준다. */
  slidesOffsetAfter: 16, /* 전체적인 슬라이드의 오른쪽에 공백을 준다. */
  spaceBetween : 4,  /* swiper-slide에 각각 margin-right를 줌 */
  autoplay: false,
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    clickable: true,
  },
  a11y: { /* 웹접근성 */
  enabled: true,
  prevSlideMessage: '이전 슬라이드',
  nextSlideMessage: '다음 슬라이드',   
  slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.',
  },
  breakpoints: {
    // 1280px 보다 클 경우
    480: {
      slidesPerView: 7, /* 보여지는 슬라이드 갯수 */
    }
  }
});

/* 첫 구매 특가 Swiper Slider */
const mainFirstBuy = new Swiper('.main-first-buy-wrap.swiper', {
    slidesPerView: 2.2, /* 보여지는 슬라이드 갯수 */
    slidesPerGroup: 2, /* 한번에 슬라이딩 될 개수 */
	  slidesOffsetBefore: 16,  /* 전체적인 슬라이드의 왼쪽에 공백을 준다. */
    slidesOffsetAfter: 16, /* 전체적인 슬라이드의 오른쪽에 공백을 준다. */
    spaceBetween : 4,  /* swiper-slide에 각각 margin-right를 줌 */
    autoplay: false,
    loop: false,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      clickable: true,
    },
    a11y: { /* 웹접근성 */
		enabled: true,
		prevSlideMessage: '이전 슬라이드',
		nextSlideMessage: '다음 슬라이드',   
		slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.',
	},
  breakpoints: {
    // 1280px 보다 클 경우
    480: {
      slidesPerView: 3.2, /* 보여지는 슬라이드 갯수 */
      slidesPerGroup: 3, /* 한번에 슬라이딩 될 개수 */
    }
  }
});

/* 메인 이벤트 Swiper Slider */
const mainEventSlider = new Swiper('.main-event-slider.swiper', {
    slidesPerView: 1, /* 보여지는 슬라이드 갯수 */
    spaceBetween : 16,  /* swiper-slide에 각각 margin-right를 줌 */
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      clickable: true,
    },
    a11y: { /* 웹접근성 */
		enabled: true,
		prevSlideMessage: '이전 슬라이드',
		nextSlideMessage: '다음 슬라이드',   
		slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.',
	},
});
