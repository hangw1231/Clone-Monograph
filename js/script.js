(function () {
    const menuBtn = document.querySelector('.menu');
    const nav = document.getElementById('site_nav');

    function openNav() {
      // hidden 해제 후 다음 프레임에 클래스 추가(전환 정상 동작)
      nav.hidden = false;
      requestAnimationFrame(() => nav.classList.add('is-open'));
      menuBtn.setAttribute('aria-expanded', 'true');
    }

    function closeNav() {
      nav.classList.remove('is-open');
      // 전환이 끝나면 hidden 처리
      nav.addEventListener('transitionend', () => {
        nav.hidden = true;
      }, { once: true });
      menuBtn.setAttribute('aria-expanded', 'false');
    }

    function toggleNav() {
      const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';
      isOpen ? closeNav() : openNav();
    }

    // 버튼 클릭
    menuBtn.addEventListener('click', toggleNav);

    // 링크 클릭 시 닫기
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', closeNav);
    });

    // ESC로 닫기
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menuBtn.getAttribute('aria-expanded') === 'true') {
        closeNav();
      }
    });
  })();

document.getElementById("submitBtn").addEventListener("click", function (e) {
  e.preventDefault();

  const inputs = document.querySelectorAll(".input-wrap input");
  const tooltips = document.querySelectorAll(".tooltip");

  inputs.forEach((input, idx) => {
    if (input.value.trim() === "") {
      tooltips[idx].style.display = "block";
    } else {
      tooltips[idx].style.display = "none";
    }
  });
});