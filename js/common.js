console.log('[common.js] loaded!');

/* Include 파일 불러오기 */
$(function() {
  $('.header-include').load('../include/header.html');
  $('.gnb-include').load('../include/gnb.html');
});

/* 아이템 하트 클릭 이벤트 추가하기 */
const heartEvent = document.querySelectorAll('.badge-heart');

function toggleAct(heartEvent) {
  heartEvent.classList.toggle('act');
};

/* gnb 클릭 이벤트 추가하기 */
const gnbMenuList = document.querySelectorAll('.gnb-menu');

gnbMenuList.forEach(menu => { 
  menu.addEventListener("click", () => {
      // 모든 li 요소에서 on 클래스를 제거
      gnbMenuList.forEach(otherMenu => {
        otherMenu.classList.remove("active");
      });
      // 클릭된 요소에만 on 클래스 추가
      menu.classList.add("active");
  });
});