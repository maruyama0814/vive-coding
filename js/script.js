document.addEventListener('DOMContentLoaded', function() {
    // --- Hamburger Menu ---
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.global-nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            nav.classList.toggle('open');
        });

        // メニュー内のリンクをクリックしたらメニューを閉じる
        nav.addEventListener('click', (event) => {
            if (event.target.tagName === 'A') {
                hamburger.classList.remove('open');
                nav.classList.remove('open');
            }
        });
    }

    // --- Smooth Scroll ---
    const navLinks = document.querySelectorAll('.global-nav a, .logo');
    const header = document.querySelector('header'); // ヘッダー要素を取得

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // デフォルトのリンク挙動をキャンセル

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // ヘッダーの高さを動的に取得
                const headerHeight = header.offsetHeight;
                // スクロール位置を計算 (ヘッダーの高さを考慮)
                const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth' // スムーズスクロール
                });
            }
        });
    });


    // --- FAQ Accordion ---
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.closest('.faq-item');
            item.classList.toggle('open');
        });
    });
});
